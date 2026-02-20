#!/usr/bin/env node
/**
 * Post-build pre-rendering script.
 * Serves the dist/ folder, uses Puppeteer to render each route,
 * and writes the fully-rendered HTML back to disk so Google sees real content.
 *
 * Usage: node scripts/prerender.mjs
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteerCore from "puppeteer-core";
import puppeteerFull from "puppeteer";
import chromium from "@sparticuz/chromium";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 9222;
const CONCURRENCY = 3;
const RENDER_WAIT_MS = 2500;

// Import the route list
const { prerenderRoutes } = await import("../prerender-routes.mjs");

console.log(`\n🔍 Pre-rendering ${prerenderRoutes.length} routes...\n`);

// --- 0. Back up the original SPA shell ---
const spaShellPath = join(DIST, "index.html");
const spaShell = readFileSync(spaShellPath, "utf-8");
const SPA_SHELL_BACKUP = join(DIST, "_spa-shell.html");
writeFileSync(SPA_SHELL_BACKUP, spaShell, "utf-8");

// --- 1. Serve dist/ on a local HTTP server ---
const server = createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  let filePath = join(DIST, urlPath);

  // Check if the path has a file extension (static asset)
  const hasExtension = /\.\w+$/.test(urlPath);

  if (!hasExtension) {
    // SPA route — always serve the ORIGINAL SPA shell so React Router handles it
    filePath = SPA_SHELL_BACKUP;
  } else if (!existsSync(filePath)) {
    filePath = SPA_SHELL_BACKUP;
  }

  try {
    const content = readFileSync(filePath);
    const ext = filePath.split(".").pop();
    const types = {
      html: "text/html",
      js: "application/javascript",
      css: "text/css",
      json: "application/json",
      png: "image/png",
      jpg: "image/jpeg",
      svg: "image/svg+xml",
      woff2: "font/woff2",
      woff: "font/woff",
    };
    res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`  Server running on http://localhost:${PORT}`);

// --- 2. Launch Puppeteer ---
// Use @sparticuz/chromium on CI (Netlify), regular puppeteer locally
const isCI = process.env.CI || process.env.NETLIFY;
let browser;
if (isCI) {
  browser = await puppeteerCore.launch({
    args: [...chromium.args, "--disable-dev-shm-usage"],
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
} else {
  browser = await puppeteerFull.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
  });
}

let completed = 0;
let failed = 0;

async function renderRoute(route) {
  const page = await browser.newPage();
  try {
    // Block external resources that slow rendering (analytics, fonts, etc.)
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const url = req.url();
      if (
        url.includes("calendly.com") ||
        url.includes("typekit.net") ||
        url.includes("google-analytics") ||
        url.includes("googletagmanager") ||
        url.includes("gptengineer.js") ||
        url.includes("contentful.com") ||
        url.includes("cdn.gpteng.co") ||
        req.resourceType() === "media" ||
        req.resourceType() === "font"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // Wait for React + helmet to finish rendering
    // First wait for the root content to appear
    await page.waitForSelector("#root > *", { timeout: 10000 }).catch(() => {});

    // Then wait for helmet to update the title (should change from the static HTML default)
    await page.waitForFunction(
      () => {
        const t = document.title;
        return (
          t &&
          t !== "Kapes Adventures | Travel That Transforms" &&
          t !== ""
        );
      },
      { timeout: 8000 }
    ).catch(() => {});

    // Scroll through the entire page to trigger all whileInView animations
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      // Scroll in increments to trigger IntersectionObserver
      for (let y = 0; y <= scrollHeight; y += viewportHeight * 0.7) {
        window.scrollTo(0, y);
        await delay(150);
      }
      // Scroll to very bottom then back to top
      window.scrollTo(0, scrollHeight);
      await delay(300);
      window.scrollTo(0, 0);
      await delay(300);
    });

    // Extra buffer for animations to complete
    await new Promise((r) => setTimeout(r, 1500));

    // Force all Framer Motion elements to be visible (remove opacity:0 / transforms)
    await page.evaluate(() => {
      document.querySelectorAll('[style]').forEach((el) => {
        const style = el.getAttribute('style') || '';
        if (style.includes('opacity: 0') || style.includes('opacity:0')) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
    });

    // Extract the actual DOM title and meta description (react-helmet updates these)
    const seoData = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute("content") || "",
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute("content") || "",
    }));

    // Get the fully rendered HTML
    let html = await page.content();

    // Patch <title> with the actual rendered title
    if (seoData.title && seoData.title !== "Kapes Adventures | Travel That Transforms") {
      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${seoData.title}</title>`
      );
    }

    // Patch the static meta description with the page-specific one
    const staticDesc = "Ethical, community-led school trips to Kenya.";
    if (seoData.description && !seoData.description.startsWith("Ethical, community-led school trips")) {
      html = html.replace(
        /<meta name="description" content="Ethical, community-led school trips to Kenya\.[^"]*">/,
        `<meta name="description" content="${seoData.description.replace(/"/g, '&quot;')}">`
      );
    }

    // Add pre-render marker
    html = html.replace(
      "</head>",
      '<meta name="prerender-status" content="pre-rendered" />\n</head>'
    );

    // Determine output path
    const outputDir =
      route === "/"
        ? DIST
        : join(DIST, ...route.split("/").filter(Boolean));
    const outputFile = join(outputDir, "index.html");

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(outputFile, html, "utf-8");

    completed++;
    process.stdout.write(`\r  ✅ ${completed}/${prerenderRoutes.length} rendered (${failed} failed)`);
  } catch (err) {
    failed++;
    console.error(`\n  ❌ Failed: ${route} — ${err.message}`);
  } finally {
    await page.close();
  }
}

// --- 3. Render in batches ---
const failedRoutes = [];

const originalRenderRoute = renderRoute;
async function renderRouteTracked(route) {
  const before = failed;
  await originalRenderRoute(route);
  if (failed > before) failedRoutes.push(route);
}

for (let i = 0; i < prerenderRoutes.length; i += CONCURRENCY) {
  const batch = prerenderRoutes.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(renderRouteTracked));
}

// Retry failed routes one at a time with longer timeout
if (failedRoutes.length > 0) {
  console.log(`\n\n  🔄 Retrying ${failedRoutes.length} failed routes...`);
  for (const route of failedRoutes) {
    const page = await browser.newPage();
    try {
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const url = req.url();
        if (
          url.includes("calendly.com") || url.includes("typekit.net") ||
          url.includes("google-analytics") || url.includes("googletagmanager") ||
          url.includes("gptengineer.js") || url.includes("contentful.com") ||
          url.includes("cdn.gpteng.co") ||
          req.resourceType() === "media" || req.resourceType() === "font"
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 15000,
      });
      await new Promise((r) => setTimeout(r, 5000));

      let html = await page.content();
      html = html.replace("</head>", '<meta name="prerender-status" content="pre-rendered" />\n</head>');

      const outputDir = route === "/" ? DIST : join(DIST, ...route.split("/").filter(Boolean));
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, "index.html"), html, "utf-8");

      failed--;
      completed++;
      console.log(`  ✅ Retry succeeded: ${route}`);
    } catch (err) {
      console.log(`  ❌ Retry failed: ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }
}

console.log(`\n  Done! ${completed} pages pre-rendered, ${failed} failed.\n`);

// --- 4. Generate sitemap.xml ---
const SITE_URL = "https://kapesadventures.com";
const today = new Date().toISOString().split("T")[0];

const sitemapEntries = prerenderRoutes.map((route) => {
  const priority = route === "/" ? "1.0" : route.startsWith("/trips-from/") ? "0.7" : "0.8";
  const changefreq = route.startsWith("/blog/") ? "weekly" : "monthly";
  return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>`;

writeFileSync(join(DIST, "sitemap.xml"), sitemap, "utf-8");
console.log(`  📋 sitemap.xml generated with ${prerenderRoutes.length} URLs\n`);

// --- 5. Generate robots.txt ---
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml

# Block admin/auth routes
Disallow: /admin/
Disallow: /student/
Disallow: /parent/
Disallow: /auth
`;

writeFileSync(join(DIST, "robots.txt"), robotsTxt, "utf-8");
console.log(`  🤖 robots.txt generated\n`);

// --- Cleanup ---
// Remove the SPA shell backup
try { unlinkSync(SPA_SHELL_BACKUP); } catch {}

await browser.close();
server.close();
