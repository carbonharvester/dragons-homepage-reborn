// Kapes Adventures · Board Pack request
// POST { school, contactName, contactRole, contactEmail, yearGroup, cohortSize, travelWindow, notes }
// → 1) Email Matthew with the request details so he can prep + send the pack
// → 2) Auto-acknowledgement to the requester ("we'll be in touch within 48 hours")

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };

  let payload;
  try { payload = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, body: "Invalid JSON" }; }

  const {
    school, contactName, contactRole, contactEmail,
    yearGroup, cohortSize, travelWindow, notes,
  } = payload;

  if (!school || !contactEmail || !contactName) {
    return { statusCode: 400, body: JSON.stringify({ ok:false, error:"Missing required fields" }) };
  }

  const sgKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "matthew@kapesadventures.com";
  const fromName = process.env.SENDGRID_FROM_NAME || "Matthew Benjamin";

  if (!sgKey) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error:"SendGrid not configured" }) };
  }

  const esc = (s) => String(s == null ? "" : s).replace(/[<>&"]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c]));
  const safeSchool = esc(school);
  const safeName = esc(contactName);
  const safeRole = esc(contactRole || "—");
  const safeEmail = esc(contactEmail);
  const safeYear = esc(yearGroup || "—");
  const safeCohort = esc(cohortSize || "—");
  const safeWindow = esc(travelWindow || "—");
  const safeNotes = esc(notes || "");

  // Suggest a slug for Matthew to use when creating the JSON file
  const slug = String(school).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40);
  const yearSuffix = (() => {
    const m = String(travelWindow || "").match(/20\d\d/);
    return m ? "-" + m[0] : "";
  })();
  const suggestedSlug = slug + yearSuffix;

  // ───────────────────────────────────────────────
  // 1) Notify Matthew
  // ───────────────────────────────────────────────
  const subjectMatthew = `Board Pack request — ${safeSchool}`;
  const htmlMatthew = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:32px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#888;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:12px;">● Board Pack request</div>
  <h1 style="font-size:22px;color:#1A1A1A;margin:0 0 8px;line-height:1.25;">${safeSchool}</h1>
  <div style="font-size:13px;color:#666;margin-bottom:24px;">${safeName} · ${safeRole} · <a href="mailto:${safeEmail}" style="color:#FF7700;">${safeEmail}</a></div>

  <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
    <tr><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;width:40%;color:#888;">Year group</td><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${safeYear}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;color:#888;">Cohort size</td><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${safeCohort}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;color:#888;">Travel window</td><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${safeWindow}</td></tr>
  </table>

  ${safeNotes ? `<div style="background:#F5F0E5;padding:14px 16px;border-left:3px solid #FF7700;border-radius:0 4px 4px 0;margin-bottom:24px;"><div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#888;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">Notes</div><div style="font-size:14px;line-height:1.6;">${safeNotes.replace(/\n/g,"<br/>")}</div></div>` : ""}

  <div style="background:#1A1A1A;color:#fff;padding:18px 20px;border-radius:6px;margin-bottom:20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#FF7700;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:8px;">Suggested slug</div>
    <div style="font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:.02em;">${esc(suggestedSlug)}</div>
    <div style="font-size:12px;color:rgba(255,255,255,.7);margin-top:8px;line-height:1.5;">Copy <code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:3px;">board-packs/_template.json</code> to <code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:3px;">${esc(suggestedSlug)}.json</code>, fill in the fields, commit, then send <code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:3px;">kapesadventures.com/board-pack/${esc(suggestedSlug)}</code> to ${safeName.split(" ")[0] || "the contact"}.</div>
  </div>

  <p style="font-size:14px;line-height:1.65;color:#4A4A4A;margin:0;">Reply to this email to start the conversation directly.</p>
</div></body></html>`;

  const sgPayloadMatthew = {
    personalizations: [{ to: [{ email: fromEmail, name: fromName }] }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email: contactEmail, name: contactName },
    subject: subjectMatthew,
    content: [{ type: "text/html", value: htmlMatthew }],
  };

  // ───────────────────────────────────────────────
  // 2) Auto-acknowledgement to the requester
  // ───────────────────────────────────────────────
  const recipientFirst = String(contactName).split(" ")[0] || "there";
  const subjectAck = `Your Board Pack request — ${school}`;
  const htmlAck = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:32px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#888;letter-spacing:.04em;margin-bottom:8px;">From: ${esc(fromName)} &lt;${esc(fromEmail)}&gt;</div>
  <h1 style="font-size:22px;color:#1A1A1A;margin:0 0 16px;line-height:1.25;">Your Board Pack is on the way.</h1>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">Hi ${esc(recipientFirst)},</p>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">Thanks for the request. I'll prepare a Board Pack tailored to ${safeSchool} — your year group (${safeYear}), cohort size (${safeCohort}) and travel window (${safeWindow}) — and send you the unique link within <b>48 hours</b>.</p>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">The pack is 16 pages, A4, print-ready, and sized for the room: editorial cover with your school's logo, decision ask, executive summary, day-by-day itinerary, curriculum alignment, safeguarding, risk register, transparent pricing, anticipated Q&amp;A. Most heads we work with route it through the IB DP Coordinator and Bursar before the Board meeting; the routing sheet is built for exactly that.</p>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">If your decision deadline is sooner than 48 hours, reply to this email and I'll prioritise it.</p>
  <hr style="border:none;border-top:1px solid #E4DFD3;margin:24px 0;"/>
  <p style="font-size:13px;line-height:1.55;color:#4A4A4A;margin:0;"><b style="color:#1A1A1A;">${esc(fromName)}</b> · Founder, Kapes Adventures<br/>Dubai · UAE · <a href="mailto:${esc(fromEmail)}" style="color:#FF7700;">${esc(fromEmail)}</a></p>
</div></body></html>`;

  const sgPayloadAck = {
    personalizations: [{ to: [{ email: contactEmail, name: contactName }] }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email: fromEmail, name: fromName },
    subject: subjectAck,
    content: [{ type: "text/html", value: htmlAck }],
  };

  // Fire both — don't block the response on the ack succeeding
  const [matthewRes, ackRes] = await Promise.all([
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(sgPayloadMatthew),
    }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(sgPayloadAck),
    }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
  ]);

  // The notification to Matthew is the one we can't lose; the ack is nice-to-have.
  if (!matthewRes.ok) {
    const errText = matthewRes._err || (await (matthewRes.text ? matthewRes.text() : Promise.resolve("")));
    return { statusCode: 502, body: JSON.stringify({ ok:false, error:"Could not send notification", detail: errText }) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, ackSent: !!ackRes.ok, suggestedSlug }),
  };
};
