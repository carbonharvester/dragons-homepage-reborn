/* CONTACT / ENQUIRY */

function ContactHero(){
  return (
    <section style={{background:"var(--cream)", padding:"88px 0 56px", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Contact</div>
        <h1 className="display" style={{marginTop:18, maxWidth:1040}}>
          Start with a question,<br/>
          <span className="accent">not a brochure request.</span>
        </h1>
        <p className="lead" style={{marginTop:22, color:"var(--ink-2)", maxWidth:680}}>
          Three ways in. Pick whichever suits where you are in your thinking. None of them go to a sales queue — all three land with a named human.
        </p>
      </div>
    </section>
  );
}

function ContactOptions(){
  const opts = [
    { tag:"Fastest", title:"Book a 30-min call", who:"Matthew Benjamin · Founder & CEO", body:"No sales pitch. A conversation about where your school is, what you've tried, and what would actually be useful.", cta:"See Matthew's calendar →", accent:true, action:"calendly" },
    { tag:"Self-serve", title:"Take the Impact Scorecard", who:"5 minutes · diagnostic report", body:"A short diagnostic on your school's service-learning posture. Report delivered instantly. No follow-up unless you ask.", cta:"Start the scorecard →", to:"lp" },
    { tag:"Old-fashioned", title:"Write us a real email", who:"hello@kapesadventures.com", body:"Read by Matthew within one working day. Copy your head, bursar, or trip coordinator — we'll loop them in on the reply.", cta:"Open mail →", action:"mailto" },
  ];
  return (
    <section className="section" style={{padding:"64px 0", background:"var(--cream)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20}}>
        {opts.map(o=>(
          <div key={o.title} style={{
            background: o.accent?"var(--charcoal)":"var(--sand)",
            color: o.accent?"#fff":"var(--charcoal)",
            padding:32, display:"flex", flexDirection:"column", gap:14,
            borderTop:`3px solid ${o.accent?"var(--orange)":"var(--charcoal)"}`
          }}>
            <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:o.accent?"var(--orange)":"var(--muted)", fontWeight:700}}>{o.tag}</div>
            <h3 className="display" style={{fontSize:26, color:o.accent?"#fff":"var(--charcoal)", lineHeight:1.15, marginTop:4}}>{o.title}</h3>
            <div style={{fontSize:12, color:o.accent?"var(--orange)":"var(--orange)", fontWeight:700, letterSpacing:".04em"}}>{o.who}</div>
            <p style={{fontSize:14, lineHeight:1.6, color:o.accent?"rgba(255,255,255,.8)":"var(--ink-2)", margin:0, flex:1}}>{o.body}</p>
            <button className="btn-pill" style={{marginTop:14, padding:"12px 20px", background:o.accent?"var(--orange)":"var(--charcoal)", color:"#fff", alignSelf:"flex-start"}} onClick={()=>{
              if (o.action === "calendly") bookCall();
              else if (o.action === "mailto") window.location.href = "mailto:hello@kapesadventures.com";
              else if (o.to) khifiNavigate(o.to);
            }}>{o.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function EnquiryForm(){
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [stage, setStage] = React.useState("Exploring");
  const [msg, setMsg] = React.useState("");
  const [news, setNews] = React.useState(false);
  const [status, setStatus] = React.useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [errorMsg, setErrorMsg] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMsg("Please fill in your name and email.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/.netlify/functions/contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, school, email, stage, message: msg, newsletter: news }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error(out.error || "Send failed");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your enquiry. Please try again or email matthew@kapesadventures.com directly.");
    }
  };

  const stages = ["Exploring","Year group identified","Budget in hand","Trip in pipeline","Existing provider — reviewing"];

  return (
    <section className="section" style={{padding:"88px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:56}}>
        <div>
          <div className="eyebrow">Or — write it all out</div>
          <h2 className="display" style={{marginTop:14}}>The long-form <span className="accent">enquiry.</span></h2>
          <p style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)", marginTop:18, maxWidth:380}}>
            Prefer to put it in writing? Fill this in. Every enquiry is read by Matthew personally — no shared inbox, no auto-responder.
          </p>
        </div>

        <form onSubmit={onSubmit} style={{background:"var(--cream)", padding:36, border:"1px solid var(--line)", borderRadius:8}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:20}}>
            <Field label="Your name" placeholder="Jane Holloway" value={name} onChange={setName}/>
            <Field label="Role" placeholder="Head of Geography" value={role} onChange={setRole}/>
            <Field label="School" placeholder="St. Bartholomew's" value={school} onChange={setSchool}/>
            <Field label="Email" placeholder="jholloway@stbarts.sch.uk" value={email} onChange={setEmail} type="email"/>
          </div>
          <div style={{marginTop:18}}>
            <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:10}}>Where are you in your thinking?</label>
            <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
              {stages.map((s)=>(
                <button key={s} type="button" onClick={()=>setStage(s)} style={{
                  padding:"8px 14px", fontSize:12, fontWeight:600,
                  border: stage===s?"1.5px solid var(--charcoal)":"1px solid var(--line)",
                  background: stage===s?"var(--charcoal)":"transparent",
                  color: stage===s?"#fff":"var(--ink-2)",
                  borderRadius:999, cursor:"pointer"
                }}>{s}</button>
              ))}
            </div>
          </div>
          <div style={{marginTop:18}}>
            <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:8}}>What's on your mind?</label>
            <textarea rows={5} placeholder="Anything. Context, constraints, a specific programme. The thing you're worried about." value={msg} onChange={e=>setMsg(e.target.value)} style={{width:"100%", padding:"12px 14px", border:"1px solid var(--line)", fontFamily:"var(--body)", fontSize:14, lineHeight:1.5, borderRadius:6, resize:"vertical", color:"var(--charcoal)"}}/>
          </div>
          <div style={{display:"flex", alignItems:"center", gap:10, marginTop:16, fontSize:12, color:"var(--ink-2)"}}>
            <input type="checkbox" id="news" checked={news} onChange={e=>setNews(e.target.checked)}/> <label htmlFor="news">Send the quarterly field letter (four times a year, unsubscribe anytime)</label>
          </div>
          {status === "sent" ? (
            <div style={{marginTop:24, padding:"18px 22px", background:"var(--charcoal)", color:"#fff", borderRadius:6}}>
              <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:6}}>● Sent</div>
              <div style={{fontSize:14, lineHeight:1.55}}>Thanks {name.split(" ")[0]}. I'll come back to you within one working day. Check your inbox for a confirmation receipt.</div>
            </div>
          ) : (
            <>
              <button type="submit" disabled={status==="sending"} className="btn-pill btn-action" style={{marginTop:24, padding:"14px 26px", opacity: status==="sending"?0.6:1, cursor: status==="sending"?"wait":"pointer"}}>
                {status === "sending" ? "Sending…" : "Send to Matthew →"}
              </button>
              {errorMsg && <div style={{marginTop:14, padding:"10px 14px", background:"#FBE9E7", border:"1px solid #C44A3C", color:"#7A2B22", borderRadius:6, fontSize:13, lineHeight:1.5}}>{errorMsg}</div>}
              <div style={{marginTop:10, fontSize:11, color:"var(--muted)"}}>Read by Matthew personally — typical reply within one working day.</div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
function Field({label, placeholder, value, onChange, type}){
  return (
    <div>
      <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:6}}>{label}</label>
      <input type={type||"text"} placeholder={placeholder} value={value||""} onChange={e=>onChange&&onChange(e.target.value)} style={{width:"100%", padding:"12px 14px", border:"1px solid var(--line)", fontFamily:"var(--body)", fontSize:14, borderRadius:6, color:"var(--charcoal)"}}/>
    </div>
  );
}

function Offices(){
  return (
    <section className="section" style={{padding:"88px 0", background:"var(--cream)"}}>
      <div className="container">
        <BarHead kicker="Where we sit" title="One office. Plus a lot of field time."/>
        <div style={{display:"grid", gridTemplateColumns:"1.1fr 1.4fr", gap:32, marginTop:32, alignItems:"stretch"}}>
          <div style={{background:"var(--sand)", padding:36, borderLeft:"3px solid var(--orange)", display:"flex", flexDirection:"column", gap:14}}>
            <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>Head office</div>
            <h3 className="display" style={{fontSize:32, lineHeight:1.1}}>Dubai · UAE</h3>
            <p style={{fontSize:14, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>
              Kapes Adventures FZ-LLC · Dubai. Where the schools team sits, the calendars get built, and the first call happens.
            </p>
            <div style={{marginTop:16, paddingTop:16, borderTop:"1px dashed var(--line)", display:"flex", flexDirection:"column", gap:8, fontSize:13}}>
              <a href="mailto:hello@kapesadventures.com" style={{color:"var(--charcoal)", fontWeight:600, textDecoration:"underline", textUnderlineOffset:3}}>hello@kapesadventures.com</a>
              <div style={{color:"var(--muted)", fontSize:11, letterSpacing:".04em"}}>Mon–Fri · 9am–5pm</div>
            </div>
          </div>
          <div style={{background:"var(--sand)", padding:36, display:"flex", flexDirection:"column", gap:14}}>
            <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>On the ground</div>
            <h3 className="display" style={{fontSize:24, lineHeight:1.2}}>In Kenya, on the programmes.</h3>
            <p style={{fontSize:14, lineHeight:1.65, color:"var(--ink-2)", margin:0}}>
              Trip leaders, the farm crew, and our Kenyan programme partners are based at the programme sites — not in a corporate office. You'll meet them on Zoom during scoping, then in person on the trip itself.
            </p>
            <div style={{marginTop:14, fontSize:12, color:"var(--muted)", letterSpacing:".04em"}}>
              The address that matters is the one you'll be at — your school, our partner schools in Kenya, the farm and water sites. We come to all three.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileContactPage) return <window.MobileContactPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <ContactHero/>
      <ContactOptions/>
      <EnquiryForm/>
      <Offices/>
      <Footer/>
    </div>
  );
}
window.ContactPage = ContactPage;
