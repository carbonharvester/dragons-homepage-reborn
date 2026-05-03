// Kapes Adventures · Scorecard email + Supabase persistence
// POST { name, email, school, country, pct, band, sections, answers, reportUrl }
// → 1) Insert row into Supabase scorecard_submissions
// → 2) Send styled HTML email via SendGrid v3, signed by Matthew

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };

  let payload;
  try { payload = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, body: "Invalid JSON" }; }

  const { name, email, school, country, pct, band, bandColor, total, max, sections, answers, reportUrl } = payload;
  if (!email) return { statusCode: 400, body: JSON.stringify({ ok:false, error:"Missing email" }) };

  const sgKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "matthew@kapesadventures.com";
  const fromName = process.env.SENDGRID_FROM_NAME || "Matthew Benjamin";
  const sbUrl = process.env.SUPABASE_URL;
  const sbAnon = process.env.SUPABASE_ANON_KEY;

  const result = { supabase: null, sendgrid: null };

  // ───────────────────────────────────────────────
  // 1) Persist to Supabase (don't block on it — we still want the email to fly)
  // ───────────────────────────────────────────────
  if (sbUrl && sbAnon) {
    const row = {
      name: name || null,
      email,
      school: school || null,
      country: country || null,
      score: typeof pct === "number" ? pct : parseInt(pct, 10) || 0,
      band: band || null,
      band_color: bandColor || null,
      total: typeof total === "number" ? total : null,
      max_score: typeof max === "number" ? max : null,
      sections: sections || null,
      answers: answers || null,
      user_agent: event.headers["user-agent"] || null,
      referrer: event.headers["referer"] || null,
      source: "web",
    };
    try {
      const sbRes = await fetch(`${sbUrl}/rest/v1/scorecard_submissions`, {
        method: "POST",
        headers: {
          "apikey": sbAnon,
          "Authorization": `Bearer ${sbAnon}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(row),
      });
      result.supabase = { ok: sbRes.ok, status: sbRes.status };
      if (!sbRes.ok) result.supabase.error = await sbRes.text();
    } catch (err) {
      result.supabase = { ok: false, error: String(err) };
    }
  } else {
    result.supabase = { ok: false, error: "Supabase env vars not configured" };
  }

  // ───────────────────────────────────────────────
  // 2) Send the email via SendGrid
  // ───────────────────────────────────────────────
  if (sgKey) {
    const recipientFirst = (name || "there").split(" ")[0];
    const schoolDisplay = school || "your school";
    const subject = `Your Impact Scorecard report — ${schoolDisplay} (${pct}/100, ${band || ""})`;
    const sectionsRows = (sections || []).map(s =>
      `<tr><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;">${s.title}</td><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;text-align:right;font-family:'JetBrains Mono',monospace;">${s.score}/${s.max} · ${s.pct}%</td></tr>`
    ).join("");
    const html = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:32px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#888;letter-spacing:.04em;margin-bottom:8px;">From: ${fromName} &lt;${fromEmail}&gt;</div>
  <h1 style="font-size:22px;color:#1A1A1A;margin:0 0 16px;line-height:1.2;">Your Impact Scorecard report — ${schoolDisplay} (${pct}/100, ${band || ""})</h1>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">Hi ${recipientFirst},</p>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">Thanks for taking the time on the Scorecard. Your headline result: <b>${pct}/100 — ${band || ""}</b>. The full personalised report is linked below; it's print-ready A4 and built to read at a board table.</p>
  <p style="margin:24px 0;"><a href="${reportUrl || "https://kapesadventures.com/scorecard/report"}" style="display:inline-block;background:#FF7700;color:#fff;text-decoration:none;padding:14px 24px;border-radius:999px;font-size:14px;font-weight:600;">Open your report →</a></p>
  ${sectionsRows ? `<h3 style="font-size:14px;letter-spacing:.1em;text-transform:uppercase;color:#888;margin:28px 0 6px;">Section breakdown</h3><table style="width:100%;border-collapse:collapse;font-size:13px;">${sectionsRows}</table>` : ""}
  <p style="font-size:14px;line-height:1.65;margin:28px 0 12px;">Three notes before you read it:</p>
  <ul style="font-size:14px;line-height:1.65;color:#2A2A2A;padding-left:18px;">
    <li>The recommendations are operator-agnostic. Nothing in the report assumes you'll work with us.</li>
    <li>The assessment is new — we deliberately don't cite a "network average" yet. Your report is a diagnostic, not a leaderboard.</li>
    <li>If you'd like to walk through the result with someone — your CAS coordinator, ops lead — feel free to forward this email.</li>
  </ul>
  <p style="font-size:14px;line-height:1.65;margin:24px 0 0;">Honest question: what surprised you most in the breakdown?</p>
  <hr style="border:none;border-top:1px solid #E4DFD3;margin:24px 0;"/>
  <p style="font-size:13px;line-height:1.55;color:#4A4A4A;margin:0;"><b style="color:#1A1A1A;">${fromName}</b> · Founder, Kapes Adventures<br/>Dubai · UAE · <a href="mailto:${fromEmail}" style="color:#FF7700;">${fromEmail}</a></p>
</div></body></html>`;

    const sgPayload = {
      personalizations: [{ to: [{ email, name: name || email }] }],
      from: { email: fromEmail, name: fromName },
      reply_to: { email: fromEmail, name: fromName },
      subject,
      content: [{ type: "text/html", value: html }],
    };

    // ─── Admin notification email — Matthew gets pinged on every submission ───
    const adminSubject = `Scorecard submission · ${schoolDisplay} · ${pct}/100 · ${band || ""}`;
    const adminHtml = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:28px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#888;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:10px;">● New scorecard submission</div>
  <h1 style="font-size:20px;color:#1A1A1A;margin:0 0 4px;line-height:1.25;">${schoolDisplay} · ${pct}/100 · ${band || ""}</h1>
  <div style="font-size:13px;color:#666;margin-bottom:20px;">${name || "(no name)"} · <a href="mailto:${email}" style="color:#FF7700;">${email}</a>${country ? " · " + country : ""}</div>

  <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px;">
    <tr><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;width:40%;color:#888;">Score</td><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;font-weight:600;font-family:'JetBrains Mono',monospace;">${pct}/100${total != null && max != null ? ` (${total}/${max})` : ""}</td></tr>
    <tr><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;color:#888;">Band</td><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${band || "—"}</td></tr>
    <tr><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;color:#888;">School</td><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${school || "—"}</td></tr>
    <tr><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;color:#888;">Country</td><td style="padding:6px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${country || "—"}</td></tr>
  </table>

  ${sectionsRows ? `<h3 style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#888;margin:18px 0 4px;font-weight:700;">Section breakdown</h3><table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:18px;">${sectionsRows}</table>` : ""}

  <div style="background:#1A1A1A;color:#fff;padding:14px 18px;border-radius:6px;margin-bottom:14px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#FF7700;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">Reply directly</div>
    <div style="font-size:13px;line-height:1.5;">Hit Reply on this email to respond to ${name ? name.split(" ")[0] : "the submitter"}; reply-to is set to <a href="mailto:${email}" style="color:#FF7700;">${email}</a>. Full row in Supabase (<code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:3px;">scorecard_submissions</code>).</div>
  </div>
</div></body></html>`;

    const adminPayload = {
      personalizations: [{ to: [{ email: fromEmail, name: fromName }] }],
      from: { email: fromEmail, name: "Kapes Scorecard" },
      reply_to: { email, name: name || email },
      subject: adminSubject,
      content: [{ type: "text/html", value: adminHtml }],
    };

    // Fire user-report email + admin-notification email in parallel
    const [userRes, adminRes] = await Promise.all([
      fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
        body: JSON.stringify(sgPayload),
      }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
      fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
        body: JSON.stringify(adminPayload),
      }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
    ]);

    result.sendgrid = { ok: userRes.ok, status: userRes.status };
    if (!userRes.ok) result.sendgrid.error = userRes._err || (userRes.text ? await userRes.text() : "");
    result.adminNotification = { ok: adminRes.ok, status: adminRes.status };
    if (!adminRes.ok) result.adminNotification.error = adminRes._err || (adminRes.text ? await adminRes.text() : "");
  } else {
    result.sendgrid = { ok: false, error: "SendGrid API key not configured" };
  }

  const overallOk = (result.supabase?.ok || false) && (result.sendgrid?.ok || false);
  return {
    statusCode: overallOk ? 200 : 207,  // 207 = partial success (one of the two failed)
    body: JSON.stringify({ ok: overallOk, ...result }),
  };
};
