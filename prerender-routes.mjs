/**
 * All routes to pre-render at build time.
 * Only public, SEO-relevant pages — excludes admin, student, parent portals.
 */

// Location page slugs (must match src/data/locationPages.ts)
const locationSlugs = [
  // UK (20)
  "london", "manchester", "birmingham", "leeds", "bristol",
  "edinburgh", "glasgow", "liverpool", "nottingham", "cambridge",
  "cardiff", "newcastle", "sheffield", "oxford", "brighton",
  "reading", "southampton", "belfast", "exeter", "york",
  // US (10)
  "california", "new-york", "texas", "florida", "massachusetts",
  "illinois", "washington", "georgia", "pennsylvania", "colorado",
  // International (10)
  "dubai", "abu-dhabi", "singapore", "hong-kong",
  "sydney", "melbourne", "toronto", "dublin", "auckland", "bangkok",
];

// Blog post slugs (must match src/content/blog/*.md frontmatter)
const blogSlugs = [
  "ethical-school-trips-guide",
  "voluntourism-vs-service-learning",
  "questions-to-ask-school-trip-provider",
  "school-trip-to-kenya",
  "school-trip-transparency",
  "beyond-textbooks-why-educational-trips-create-tomorrow-s-changemakers",
  "proof-and-practice-in-kenya",
  "the-transformative-power-of-educational-travel-with-social-impact",
  "how-school-trips-develop-global-citizens",
  "the-surprising-mental-health-benefits-of-nature-based-educational-trips",
  "beyond-giving-creating-social-impact-without-fueling-the-false-african-narrative",
  "tacklingfoodsecuritythrougheducationinkenya",
  "empowering-children-and-building-sustainable-communities-through-free-uniforms",
  // New SEO blog posts
  "ib-cas-trip-ideas",
  "kenya-school-trip-safety",
  "service-learning-curriculum-integration",
  "best-service-learning-trips",
  "global-citizenship-school-travel",
];

// Static public routes
const staticRoutes = [
  "/",
  "/about",
  "/partner-with-us",
  "/curriculum-guide",
  "/blog",
  "/privacy-policy",
  "/terms-of-service",
  "/trip-registration",
  "/media-consent-policy",

  // Programs
  "/programs",
  "/school-trips",
  "/school-trips-landing",
  "/summer-abroad",
  "/multi-year-curriculum",
  "/adult-programs",
  "/educator-trips",

  // Individual Programs
  "/programs/seeds2education",
  "/programs/community-conservation",
  "/programs/empowering-women",
  "/programs/capturing-kenya",
  "/programs/capturing-kenya/itinerary",
  "/programs/feeding-the-future",
  "/programs/feeding-the-future/itinerary",
  "/programs/educational-leadership",
  "/programs/permaculture-design-course",

  // Resources
  "/get-started",
  "/impact",
  "/faq",
  "/health-and-safety",
  "/discover-kenya",
  "/impact-scorecard",

  // Landing Pages
  "/lp/anti-voluntourism",
  "/lp/year-round-impact",
  "/lp/mirror-test",
  "/lp/community-led",
  "/lp/educators",

  // Lead Magnets
  "/resources/transparency-checklist",
  "/resources/ethical-planning-guide",
  "/resources/impact-report",

  // Scorecard
  "/scorecard",
  "/scorecard/start",
  "/scorecard/quiz",
  "/scorecard/lead-capture",
  "/scorecard/results",
];

export const prerenderRoutes = [
  ...staticRoutes,
  ...blogSlugs.map((slug) => `/blog/${slug}`),
  ...locationSlugs.map((slug) => `/trips-from/${slug}`),
];

export default prerenderRoutes;
