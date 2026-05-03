// Kapes Adventures · Contact form enquiry
// POST { name, role, school, email, stage, message, newsletter }
// → 1) Insert row into Supabase contact_enquiries
// → 2) Email Matthew with enquiry details (reply-to = submitter)
// → 3) Auto-ack the submitter ("we'll be in touch within one working day")

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };

  let payload;
  try { payload = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, body: "Invalid JSON" }; }

  const { name, role, school, email, stage, message, newsletter } = payload;
  if (!name || !email) return { statusCode: 400, body: JSON.stringify({ ok:false, error:"Missing name or email" }) };

  const sgKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "matthew@kapesadventures.com";
  const fromName = process.env.SENDGRID_FROM_NAME || "Matthew Benjamin";
  const sbUrl = process.env.SUPABASE_URL;
  const sbAnon = process.env.SUPABASE_ANON_KEY;

  const result = { supabase: null, sendgrid: null };

  // ─── 1) Persist to Supabase ──────────────────────────────────────
  if (sbUrl && sbAnon) {
    const row = {
      name,
      role: role || null,
      school: school || null,
      email,
      stage: stage || null,
      message: message || null,
      newsletter_optin: !!newsletter,
      user_agent: event.headers["user-agent"] || null,
      referrer: event.headers["referer"] || null,
      source: "web",
    };
    try {
      const sbRes = await fetch(`${sbUrl}/rest/v1/contact_enquiries`, {
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

  // ─── 2) Email Matthew + 3) Auto-ack to submitter ─────────────────
  if (!sgKey) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, ...result, sendgrid: { ok:false, error:"SendGrid not configured" } }),
    };
  }

  const esc = (s) => String(s == null ? "" : s).replace(/[<>&"]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c]));
  const safeName = esc(name);
  const safeRole = esc(role || "—");
  const safeSchool = esc(school || "—");
  const safeEmail = esc(email);
  const safeStage = esc(stage || "—");
  const safeMessage = esc(message || "").replace(/\n/g,"<br/>");
  const recipientFirst = String(name).split(" ")[0] || "there";

  // Notification to Matthew
  const adminSubject = `New enquiry · ${school || name}${stage ? ' · ' + stage : ''}`;
  const adminHtml = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:28px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#888;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:10px;">● New contact enquiry</div>
  <h1 style="font-size:20px;color:#1A1A1A;margin:0 0 6px;line-height:1.25;">${safeName}${role ? ` · ${safeRole}` : ''}</h1>
  <div style="font-size:13px;color:#666;margin-bottom:20px;">${safeSchool} · <a href="mailto:${safeEmail}" style="color:#FF7700;">${safeEmail}</a></div>

  <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px;">
    <tr><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;width:32%;color:#888;">Stage</td><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${safeStage}</td></tr>
    <tr><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;color:#888;">Newsletter opt-in</td><td style="padding:8px 0;border-bottom:1px solid #E4DFD3;font-weight:600;">${newsletter ? 'Yes' : 'No'}</td></tr>
  </table>

  ${safeMessage ? `<div style="background:#F5F0E5;padding:14px 16px;border-left:3px solid #FF7700;border-radius:0 4px 4px 0;margin-bottom:20px;"><div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#888;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">Message</div><div style="font-size:14px;line-height:1.6;">${safeMessage}</div></div>` : ''}

  <div style="background:#1A1A1A;color:#fff;padding:14px 18px;border-radius:6px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:9.5px;color:#FF7700;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">Reply directly</div>
    <div style="font-size:13px;line-height:1.5;">Hit Reply on this email to respond to ${esc(recipientFirst)}; reply-to is set to <a href="mailto:${safeEmail}" style="color:#FF7700;">${safeEmail}</a>. Full row in Supabase (<code style="background:rgba(255,255,255,.1);padding:1px 5px;border-radius:3px;">contact_enquiries</code>).</div>
  </div>
</div></body></html>`;

  const adminPayload = {
    personalizations: [{ to: [{ email: fromEmail, name: fromName }] }],
    from: { email: fromEmail, name: "Kapes Enquiries" },
    reply_to: { email, name },
    subject: adminSubject,
    content: [{ type: "text/html", value: adminHtml }],
  };

  // Auto-ack to submitter
  const ackSubject = `Thanks for getting in touch — ${name.split(' ')[0] || 'hello'}`;
  const ackHtml = `<!doctype html><html><body style="margin:0;padding:0;background:#FAFAF8;font-family:Inter,system-ui,sans-serif;color:#2A2A2A;">
<div style="max-width:640px;margin:0 auto;padding:32px 24px;background:#fff;">
  <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#888;letter-spacing:.04em;margin-bottom:8px;">From: ${esc(fromName)} &lt;${esc(fromEmail)}&gt;</div>
  <h1 style="font-size:22px;color:#1A1A1A;margin:0 0 16px;line-height:1.25;">Got it — thanks, ${esc(recipientFirst)}.</h1>
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">Your enquiry's landed in my inbox. I'll come back to you within one working day with something useful — not an auto-responder, not a sales sequence. Just a real reply.</p>
  ${stage ? `<p style="font-size:15px;line-height:1.65;margin:0 0 12px;">You said you're at the <b>"${esc(stage)}"</b> stage — that helps me know how to pitch the response.</p>` : ''}
  <p style="font-size:15px;line-height:1.65;margin:0 0 12px;">If something pressing comes up before I reply, you can hit Reply on this email or call: +971 (Dubai office hours).</p>
  <hr style="border:none;border-top:1px solid #E4DFD3;margin:24px 0;"/>
  <p style="font-size:13px;line-height:1.55;color:#4A4A4A;margin:0;"><b style="color:#1A1A1A;">${esc(fromName)}</b> · Founder, Kapes Adventures<br/>Dubai · UAE · <a href="mailto:${esc(fromEmail)}" style="color:#FF7700;">${esc(fromEmail)}</a></p>
</div></body></html>`;

  const ackPayload = {
    personalizations: [{ to: [{ email, name }] }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email: fromEmail, name: fromName },
    subject: ackSubject,
    content: [{ type: "text/html", value: ackHtml }],
  };

  const [adminRes, ackRes] = await Promise.all([
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(adminPayload),
    }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: { "Authorization": `Bearer ${sgKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(ackPayload),
    }).catch(err => ({ ok: false, status: 0, _err: String(err) })),
  ]);

  result.sendgrid = { ok: adminRes.ok, status: adminRes.status };
  if (!adminRes.ok) result.sendgrid.error = adminRes._err || (adminRes.text ? await adminRes.text() : "");
  result.ack = { ok: ackRes.ok, status: ackRes.status };

  // 200 if Supabase wrote AND admin email landed; ack is best-effort
  const overallOk = (result.supabase?.ok || false) && (result.sendgrid?.ok || false);
  return {
    statusCode: overallOk ? 200 : 207,
    body: JSON.stringify({ ok: overallOk, ...result }),
  };
};
