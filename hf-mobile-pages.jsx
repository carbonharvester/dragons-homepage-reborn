/* hf-mobile-pages.jsx — mobile-first redesigns for Scorecard LP and Programme pages.
   Substituted at the page level via window.useIsMobile(). Desktop variants untouched. */

/* =========================================================================
   MOBILE SCORECARD LP — full-bleed hero, swipeable answers, big tap targets
   ========================================================================= */

function MobileLPHero({ onStart }) {
  return (
    <section style={{position:"relative", minHeight:"calc(100vh - 56px)", background:"var(--charcoal)", color:"#fff", overflow:"hidden", display:"flex", flexDirection:"column"}}>
      <img className="kapes" src={IMG.farmActionShovel} alt=""
        style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:.42, objectPosition:"center 40%"}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.7) 0%, rgba(26,26,26,.45) 30%, rgba(26,26,26,.92) 100%)"}}/>
      <div style={{position:"relative", padding:"32px 22px 100px", flex:1, display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
        <div style={{display:"inline-flex", alignSelf:"flex-start", alignItems:"center", gap:10, padding:"7px 14px", background:"rgba(255,119,0,.18)", border:"1px solid rgba(255,119,0,.45)", borderRadius:999, fontSize:10, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, color:"var(--orange)", marginBottom:24}}>
          <span style={{width:5, height:5, borderRadius:"50%", background:"var(--orange)"}}/>Free · 8 min · No mailing list
        </div>
        <h1 className="display" style={{color:"#fff", fontSize:"clamp(40px,11vw,58px)", lineHeight:.96, letterSpacing:"-.02em", margin:0}}>
          Is your school trip<br/>
          <span className="accent">building anything?</span>
        </h1>
        <p style={{color:"rgba(255,255,255,.78)", marginTop:18, fontSize:15, lineHeight:1.55}}>
          Twenty questions. Five dimensions. We grade your programme honestly — then send you the SLT-ready PDF.
        </p>
        <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:28}}>
          <button onClick={onStart} className="btn-pill btn-action" style={{padding:"18px 24px", fontSize:14, width:"100%"}}>
            Take the assessment →
          </button>
          <a href="#proof" className="btn-pill" style={{padding:"15px 24px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)", fontSize:13, textDecoration:"none", textAlign:"center"}}>
            What it tests for
          </a>
        </div>
        <div style={{marginTop:36, paddingTop:24, borderTop:"1px solid rgba(255,255,255,.18)", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12}}>
          {[["8 min","Avg complete"],["20 qs","5 dimensions"],["No funnel","Honest report"]].map(([n,l])=>(
            <div key={n}>
              <div style={{fontFamily:"var(--display)", fontSize:18, color:"#fff", lineHeight:1}}>{n}</div>
              <div style={{fontSize:9, letterSpacing:".1em", textTransform:"uppercase", marginTop:6, color:"rgba(255,255,255,.5)", fontWeight:600, lineHeight:1.3}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileLPProof() {
  return (
    <section id="proof" style={{padding:"60px 22px", background:"var(--sand)"}}>
      <div className="eyebrow">What the scorecard tests for</div>
      <h3 className="display" style={{marginTop:12, marginBottom:24, fontSize:32, lineHeight:1.05}}>
        Five dimensions.<br/><span className="accent">Twenty questions.</span>
      </h3>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {QUIZ_DATA.sections.map((s, i)=>(
          <div key={s.title} style={{padding:20, background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", borderRadius:6}}>
            <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>
              Section {String(i+1).padStart(2,"0")} · {s.questions.length} qs
            </div>
            <div className="display" style={{fontSize:19, marginBottom:8, lineHeight:1.15}}>{s.title}</div>
            <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{s.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileLPSectionIntro({ section, sectionIndex, totalSections, onContinue }) {
  return (
    <section style={{padding:"80px 22px", background:"var(--cream)", textAlign:"center", minHeight:"calc(100vh - 56px)", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <div style={{fontFamily:"var(--display)", fontSize:96, color:"var(--orange)", lineHeight:1, opacity:.85, marginBottom:8}}>
        {String(sectionIndex+1).padStart(2,"0")}
      </div>
      <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:20}}>
        Section {sectionIndex+1} of {totalSections}
      </div>
      <h2 className="display" style={{fontSize:34, lineHeight:1.05, marginBottom:18}}>{section.title}</h2>
      <p style={{fontFamily:"var(--serif)", fontStyle:"italic", color:"var(--ink-2)", marginBottom:32, fontSize:16, lineHeight:1.5}}>
        {section.description}
      </p>
      <button onClick={onContinue} className="btn-pill btn-action" style={{padding:"16px 24px", alignSelf:"center"}}>
        Begin section {sectionIndex+1} →
      </button>
    </section>
  );
}

function MobileLPQuiz({ state, setState, onFinish }) {
  const [showSectionIntro, setShowSectionIntro] = React.useState(true);
  const total = ALL_QUESTIONS.length;
  const step = state.step;
  const q = ALL_QUESTIONS[step];
  const section = QUIZ_DATA.sections[q.sectionIndex];
  const totalSections = QUIZ_DATA.sections.length;

  React.useEffect(()=>{
    if (q.qInSection === 0) setShowSectionIntro(true);
  }, [q.sectionIndex]);

  if (showSectionIntro && q.qInSection === 0) {
    return <MobileLPSectionIntro section={section} sectionIndex={q.sectionIndex} totalSections={totalSections} onContinue={()=>setShowSectionIntro(false)}/>;
  }

  const answer = (i) => {
    const ans = {...state.answers, [q.id]: i};
    if (step + 1 >= total) {
      setState({ ...state, answers: ans, step: step+1 });
      onFinish(ans);
    } else {
      setState({ ...state, answers: ans, step: step+1 });
    }
  };
  const back = () => { if (step > 0) setState({...state, step: step-1}); };

  return (
    <section id="quiz" style={{padding:"24px 22px 80px", background:"var(--cream)", minHeight:"calc(100vh - 56px)"}}>
      <div style={{position:"sticky", top:56, background:"var(--cream)", paddingTop:8, paddingBottom:14, marginBottom:18, zIndex:5}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10, gap:10}}>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
            S{q.sectionIndex+1} · {section.title}
          </div>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>
            Q{step+1}/{total}
          </div>
        </div>
        <div style={{height:3, background:"var(--sand-2)", borderRadius:2, overflow:"hidden"}}>
          <div style={{height:"100%", width:`${((step+1)/total)*100}%`, background:"var(--orange)", transition:"width .3s"}}/>
        </div>
      </div>

      <div className="display" style={{fontSize:24, lineHeight:1.18, marginBottom:24, letterSpacing:"-.01em"}}>{q.q}</div>

      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        {q.opts.map((o,i)=>(
          <button key={i} onClick={()=>answer(i)} style={{
            padding:"18px 18px", textAlign:"left", background:"#fff",
            border:"1.5px solid var(--line)", borderRadius:8, cursor:"pointer",
            fontSize:15, color:"var(--charcoal)", fontFamily:"var(--body)", fontWeight:500,
            display:"flex", alignItems:"flex-start", gap:14, lineHeight:1.4,
            WebkitTapHighlightColor:"rgba(255,119,0,.2)"
          }}>
            <div style={{width:30, height:30, border:"1.5px solid var(--charcoal)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--display)", fontSize:13, flexShrink:0, marginTop:1}}>
              {String.fromCharCode(65+i)}
            </div>
            <div style={{flex:1}}>{o.label}</div>
          </button>
        ))}
      </div>

      {step > 0 && (
        <button onClick={back} style={{marginTop:24, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"var(--muted)", fontWeight:600, padding:"8px 0"}}>
          ← Previous question
        </button>
      )}
    </section>
  );
}

function MobileLPResults({ answers, onRetake }) {
  const sectionsScored = QUIZ_DATA.sections.map((s, si) => {
    const qs = s.questions;
    const score = qs.reduce((sum, q) => sum + (q.opts[answers[q.id]]?.score ?? 0), 0);
    const max = qs.reduce((sum, q) => sum + Math.max(...q.opts.map(o=>o.score)), 0);
    return { title: s.title, score, max, pct: Math.round((score/max)*100) };
  });
  const total = sectionsScored.reduce((s,x)=>s+x.score, 0);
  const max = sectionsScored.reduce((s,x)=>s+x.max, 0);
  const pct = Math.round((total/max)*100);

  let band, bandColor, bandVerdict;
  if (pct >= 80)      { band = "Strong programme";       bandColor="#0B7A5A"; bandVerdict="Your programme already operates along lines similar to ours. We'd love to compare notes — and probably learn from you on a couple of dimensions."; }
  else if (pct >= 60) { band = "Solid · room to grow";   bandColor="#FF7700"; bandVerdict="A real impact programme is within reach. Three to four specific changes would move you to the top tier."; }
  else if (pct >= 40) { band = "Promising · with gaps";  bandColor="#FF7700"; bandVerdict="There are several specific changes that would move your programme to the top tier."; }
  else if (pct >= 25) { band = "Several red flags";      bandColor="#C75D32"; bandVerdict="Some of your current setup may be doing more harm than good. Fixable — but not where you want to stay."; }
  else                { band = "Classic voluntourism";   bandColor="#8B1A1A"; bandVerdict="Your programme pattern-matches the model the sector has been moving away from."; }

  const sortedWeak = [...sectionsScored].sort((a,b)=>a.pct-b.pct);
  const weakest = sortedWeak[0];

  const [emailStatus, setEmailStatus] = React.useState("idle");

  const sendReport = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form') || e.target.parentElement;
    const name = form.querySelector('input[name="name"]')?.value || "";
    const email = form.querySelector('input[name="email"]')?.value || "";
    const school = form.querySelector('input[name="school"]')?.value || "";
    if (!email) { alert("Please enter your school email."); return; }
    const payload = {
      pct, total, max, band, bandColor, bandVerdict, name, email, school,
      date: new Date().toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'}),
      sections: sectionsScored,
    };
    try { sessionStorage.setItem('kapes.scorecard', JSON.stringify(payload)); } catch(err) {}
    window.open('Scorecard Report.html', '_blank', 'noopener');
    setEmailStatus("sending");
    try {
      const res = await fetch('/.netlify/functions/scorecard-email', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, school, pct, band, bandColor, total, max, sections: sectionsScored, answers, reportUrl: window.location.origin + '/Scorecard Report.html' }),
      });
      setEmailStatus(res.ok ? "sent" : "error");
    } catch (err) { setEmailStatus("error"); }
  };

  return (
    <div>
      <section style={{padding:"40px 22px 32px", background:"var(--charcoal)", color:"#fff"}}>
        <div className="eyebrow" style={{color:"var(--orange)"}}>Your Impact Scorecard</div>
        <h1 className="display" style={{color:"#fff", marginTop:14, fontSize:42, lineHeight:1, letterSpacing:"-.02em"}}>
          You scored<br/>
          <span className="accent tnum" style={{fontSize:80, lineHeight:1}}>{pct}</span>
          <span style={{opacity:.4, fontSize:32}}> / 100</span>
        </h1>
        <div style={{marginTop:18, display:"inline-flex", alignItems:"center", gap:8, padding:"8px 16px", background:bandColor, borderRadius:999, fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>
          ● {band}
        </div>
        <p style={{color:"rgba(255,255,255,.85)", marginTop:18, fontSize:14.5, lineHeight:1.55}}>{bandVerdict}</p>
      </section>

      <section style={{padding:"44px 22px", background:"var(--sand)"}}>
        <div className="eyebrow">Per-section breakdown</div>
        <h2 className="display" style={{marginTop:12, marginBottom:22, fontSize:28, lineHeight:1.05}}>
          Five dimensions.<br/><span className="accent">Where you scored.</span>
        </h2>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {sectionsScored.map((s,i)=>{
            const col = s.pct>=75 ? "#0B7A5A" : s.pct>=50 ? "#FF7700" : s.pct>=30 ? "#C75D32" : "#8B1A1A";
            return (
              <div key={s.title} style={{padding:"16px 18px", background:"var(--cream)", border:"1px solid var(--line)", borderRadius:8}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:8, gap:12}}>
                  <div style={{fontSize:14, fontWeight:600, color:"var(--charcoal)", lineHeight:1.25}}>
                    <span style={{fontFamily:"var(--display)", color:"var(--charcoal)", opacity:.3, marginRight:8}}>{String(i+1).padStart(2,"0")}</span>
                    {s.title}
                  </div>
                  <div className="tnum" style={{fontSize:13, fontWeight:700, whiteSpace:"nowrap"}}>{s.score}/{s.max}</div>
                </div>
                <div style={{height:8, background:"var(--sand-2)", borderRadius:4, overflow:"hidden"}}>
                  <div style={{width:`${s.pct}%`, height:"100%", background:col, transition:"width .6s"}}/>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{padding:"48px 22px", background:"var(--cream)"}}>
        <div className="eyebrow">Where to focus first</div>
        <h2 className="display" style={{marginTop:12, marginBottom:22, fontSize:30, lineHeight:1.05}}>
          Start with <span className="accent">{weakest.title}.</span>
        </h2>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          {[
            {t:"Ask who actually leads the trip on the ground", b:"If the answer is 'our staff' flown in from your country — you're paying for tourism with a service-learning sticker.", tag:"Low effort · high trust"},
            {t:"Move student roles from 'build' to 'join'", b:"Ask your operator what happens on site when no school group is visiting. If 'nothing,' your students aren't joining — they're the trigger.", tag:"Medium effort · high impact"},
            {t:"Eliminate one-on-one contact with vulnerable children", b:"The safeguarding bar has moved. A visit is fine. A classroom takeover by visiting teenagers is not.", tag:"Critical · do this year"},
          ].map((r,i)=>(
            <div key={i} style={{padding:22, background:"var(--sand)", border:"1px solid var(--line)", borderRadius:10}}>
              <div style={{fontFamily:"var(--display)", fontSize:32, color:"var(--charcoal)", opacity:.25, marginBottom:8}}>0{i+1}</div>
              <div className="display" style={{fontSize:19, marginBottom:8, lineHeight:1.2}}>{r.t}</div>
              <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", marginBottom:12}}>{r.b}</div>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>{r.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"40px 22px", background:"var(--sand)"}}>
        <div style={{padding:24, background:"var(--cream)", border:"2px solid var(--orange)", borderRadius:12, boxShadow:"0 12px 28px -14px rgba(255,119,0,.3)"}}>
          <div style={{display:"inline-flex", alignItems:"center", gap:6, fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"#fff", background:"var(--orange)", padding:"5px 11px", borderRadius:3, fontWeight:700, marginBottom:14}}>★ Your match</div>
          <h3 className="display" style={{fontSize:28, lineHeight:1.05, marginBottom:14}}>
            Start with <span className="accent">Seeds2Education.</span>
          </h3>
          <p style={{fontSize:14, lineHeight:1.6, color:"var(--ink-2)", margin:0, marginBottom:20}}>
            {pct >= 75
              ? "Your programme already operates along similar lines to ours — Seeds2Education is the closest fit."
              : pct >= 50
              ? "Seeds2Education is the programme schools at your stage typically grow into. Year-round work, permanent farm crew."
              : "Seeds2Education is where most schools start with us. Year-round in Kenya. The easiest first-year fit."}
          </p>
          <div style={{padding:"16px 18px", background:"var(--sand)", borderLeft:"3px solid var(--orange)", borderRadius:6, marginBottom:16}}>
            <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:6}}>Programme · 7 nights</div>
            <div className="display" style={{fontSize:22, lineHeight:1.1, marginBottom:4}}>Seeds2Education</div>
            <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>USD 3,000 / student · excl. flights</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:8}}>
            <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("program")}>See the programme →</button>
            <button className="btn-pill btn-ghost" style={{padding:"14px 22px"}} onClick={bookCall}>Book an intro call</button>
          </div>
        </div>
      </section>

      <section style={{padding:"44px 22px", background:"var(--charcoal)", color:"#fff"}}>
        <div className="eyebrow" style={{color:"var(--orange)"}}>Get the SLT-ready report</div>
        <h2 className="display" style={{color:"#fff", marginTop:12, fontSize:30, lineHeight:1.05, marginBottom:14}}>
          Open your<br/>personalised report.
        </h2>
        <p style={{color:"rgba(255,255,255,.75)", fontSize:14, lineHeight:1.55, marginBottom:24}}>
          4-page PDF you can bring to your SLT. Cover with your score, per-dimension breakdown, three prioritised actions, voluntourism-vs-impact comparison.
        </p>
        <form onSubmit={sendReport} style={{background:"#141414", border:"1px solid #333", borderRadius:10, padding:18, display:"flex", flexDirection:"column", gap:10}}>
          <input name="name" placeholder="Your name" style={mobileInputStyle}/>
          <input name="email" type="email" required placeholder="School email" style={mobileInputStyle}/>
          <input name="school" placeholder="School / organisation" style={mobileInputStyle}/>
          <button type="submit" disabled={emailStatus==="sending"} className="btn-pill btn-action" style={{padding:"15px 22px", marginTop:4, cursor:"pointer", border:"none", opacity:emailStatus==="sending"?0.7:1}}>
            {emailStatus==="sending" ? "Sending…" : emailStatus==="sent" ? "✓ Sent · Open again" : "Email me my report →"}
          </button>
          <div style={{fontSize:11, color:emailStatus==="error"?"#FFB07A":"rgba(255,255,255,.45)", lineHeight:1.5}}>
            {emailStatus==="sent"
              ? `Report opened in a new tab. A copy is on its way to your inbox.`
              : emailStatus==="error"
              ? `Email send failed. Report still opened in a new tab.`
              : `Opens in a new tab + emails a copy. We never share school data.`}
          </div>
        </form>
      </section>

      <section style={{padding:"32px 22px", background:"var(--cream)", textAlign:"center", borderTop:"1px solid var(--line)"}}>
        <button onClick={onRetake} className="btn-pill btn-ghost" style={{padding:"12px 22px"}}>↻ Retake the assessment</button>
      </section>
    </div>
  );
}

const mobileInputStyle = {
  background:"#0C0C0C", border:"1px solid #333", borderRadius:8, padding:"14px 14px",
  color:"#fff", fontSize:15, fontFamily:"var(--body)", outline:"none",
};

function MobileLPMiniNav() {
  return (
    <nav style={{position:"sticky", top:0, zIndex:50, background:"rgba(245,242,237,.96)", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)", padding:"12px 18px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid var(--line)"}}>
      <div style={{display:"flex", alignItems:"center", gap:10, cursor:"pointer"}} onClick={()=>khifiNavigate("home")}>
        <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:26, width:"auto", display:"block"}}/>
        <span style={{fontSize:9, letterSpacing:".22em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, paddingLeft:10, borderLeft:"1px solid var(--line)"}}>Adventures</span>
      </div>
      <a href="#quiz" className="btn-pill btn-action" style={{padding:"7px 14px", fontSize:11, textDecoration:"none"}}>Start →</a>
    </nav>
  );
}

function MobileLPPage() {
  const [state, setState] = useStateLP({ step:-1, answers:{}, done:false });
  const start  = () => setState({...state, step:0});
  const finish = (ans) => setState({...state, step:ALL_QUESTIONS.length, answers:ans, done:true});
  const retake = () => setState({ step:-1, answers:{}, done:false });

  return (
    <div>
      <MobileLPMiniNav/>
      {!state.done && state.step === -1 && (<>
        <MobileLPHero onStart={start}/>
        <MobileLPProof/>
        {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
      </>)}
      {!state.done && state.step >= 0 && state.step < ALL_QUESTIONS.length && (
        <MobileLPQuiz state={state} setState={setState} onFinish={finish}/>
      )}
      {state.done && (<>
        <MobileLPResults answers={state.answers} onRetake={retake}/>
        {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
      </>)}
    </div>
  );
}

/* =========================================================================
   MOBILE PROGRAMME PAGE — full-bleed hero, swipeable day-by-day, mobile pricing
   ========================================================================= */

function MobileProgramHero() {
  return (
    <section style={{position:"relative", height:"82vh", minHeight:560, background:"var(--charcoal)", overflow:"hidden"}}>
      <img src={IMG.farmActionShovel} alt="Seeds2Education — student shovelling earth"
        style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 50%"}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.55) 0%, rgba(26,26,26,.2) 30%, rgba(26,26,26,.92) 100%)"}}/>
      <div style={{position:"absolute", top:18, left:22, right:22, display:"flex", alignItems:"center", justifyContent:"space-between", zIndex:2}}>
        <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:700}}>Programme · 1 of 3</div>
        <div style={{fontSize:10, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, display:"flex", alignItems:"center", gap:6}}>
          <span style={{width:6, height:6, borderRadius:"50%", background:"var(--orange)"}}/>Live programme
        </div>
      </div>
      <div style={{position:"absolute", bottom:0, left:0, right:0, padding:"0 22px 32px", color:"#fff"}}>
        <div className="eyebrow" style={{color:"#fff", marginBottom:14}}>
          <span style={{background:"var(--orange)", width:24, height:1, display:"inline-block", marginRight:10}}/>Seeds2Education
        </div>
        <h1 className="display" style={{color:"#fff", fontSize:54, lineHeight:.94, letterSpacing:"-.02em", margin:0}}>
          Seeds2<br/><span className="accent">Education.</span>
        </h1>
        <p style={{color:"rgba(255,255,255,.82)", marginTop:14, fontSize:14.5, lineHeight:1.55, maxWidth:480}}>
          Turning unused school land into productive onion farms — with the harvest exchanged through Food for Education to feed students at Kenyan partner schools.
        </p>
        <div style={{display:"flex", flexDirection:"column", gap:8, marginTop:22}}>
          <button className="btn-pill btn-action" style={{padding:"15px 22px", fontSize:13}} onClick={()=>khifiNavigate("contact")}>Request the programme PDF</button>
          <button className="btn-pill" style={{padding:"13px 22px", fontSize:13, background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}} onClick={bookCall}>Book an intro call</button>
        </div>
      </div>
    </section>
  );
}

function MobileProgramSpec() {
  const kvs = [
    ["Mode","Year-round programme"],
    ["Base","Rongai · Nairobi area"],
    ["Partner school","Oloosirkon Primary"],
    ["Length","7 nights"],
    ["Group size","Up to 30"],
    ["Age group","Y9–Y13"],
    ["Programme partner","Food for Education"],
    ["Price","USD 3,000 / student"],
  ];
  return (
    <section style={{padding:"40px 22px", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow" style={{marginBottom:16}}>The spec sheet</div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
        {kvs.map(([l,v])=>(
          <div key={l} style={{padding:"12px 12px", background:"var(--sand)", border:"1px solid var(--line)", borderRadius:6}}>
            <div style={{fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:4}}>{l}</div>
            <div style={{fontWeight:600, color:"var(--charcoal)", fontSize:13, lineHeight:1.3}}>{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileProgramOverviewVideo() {
  const v = (typeof window !== "undefined" && window.VIDEO) || {};
  if (!v.s2eFull) return null;
  return (
    <section style={{padding:"40px 0 0", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
      <div style={{padding:"0 22px 16px"}}>
        <div className="eyebrow" style={{marginBottom:8}}>● Watch · 90 sec</div>
        <h2 className="display" style={{fontSize:26, lineHeight:1.1, margin:0}}>The trip in one minute.</h2>
        <p style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.55, marginTop:10, marginBottom:20}}>
          Edited from the November 2025 pilot with Fairgreen International School — the same week, staff, and partner schools your students would join.
        </p>
      </div>
      <div style={{position:"relative", aspectRatio:"16/9", background:"#000", overflow:"hidden"}}>
        <video src={v.s2eFull} poster={v.s2eFullPoster} controls preload="metadata" playsInline style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
      </div>
    </section>
  );
}

function MobileProgramReels() {
  const reels = (typeof window !== "undefined" && window.S2E_REELS) || [];
  if (!reels.length) return null;
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);
  return (
    <section style={{padding:"48px 0 56px", background:"var(--charcoal)", color:"#fff"}}>
      <div style={{padding:"0 22px 18px"}}>
        <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>● Day reels</div>
        <h2 className="display" style={{fontSize:26, lineHeight:1.1, margin:0, color:"#fff"}}>What each day looks like.</h2>
        <p style={{fontSize:14, color:"rgba(255,255,255,.7)", lineHeight:1.55, marginTop:10, marginBottom:0}}>
          Tap any card to play the reel. Swipe →
        </p>
      </div>
      <div style={{display:"flex", gap:12, overflowX:"auto", overflowY:"hidden", padding:"4px 22px 24px", scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch"}}>
        {reels.map((r, i) => (
          <div key={i} onClick={()=>setActive(r)} style={{
            flex:"0 0 78%", maxWidth:280, scrollSnapAlign:"start",
            background:"#1F1F1F", border:"1px solid #262626", borderRadius:10, overflow:"hidden",
            cursor:"pointer", display:"flex", flexDirection:"column",
          }}>
            <div style={{position:"relative", aspectRatio:"4/5", background:"#000", overflow:"hidden"}}>
              <img src={r.poster} alt={r.title} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,0) 50%)"}}/>
              <div style={{position:"absolute", top:10, left:10, background:"var(--orange)", color:"#fff", padding:"4px 9px", borderRadius:3, fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>{r.day}</div>
              <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{width:54, height:54, borderRadius:"50%", background:"rgba(255,255,255,.92)", color:"var(--charcoal)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, paddingLeft:4}}>▶</div>
              </div>
            </div>
            <div style={{padding:"14px 14px 16px"}}>
              <div className="display" style={{fontSize:15.5, lineHeight:1.2, color:"#fff", marginBottom:6}}>{r.title}</div>
              <div style={{fontSize:12.5, color:"rgba(255,255,255,.7)", lineHeight:1.5}}>{r.sub}</div>
            </div>
          </div>
        ))}
        <div style={{flex:"0 0 8px"}}/>
      </div>

      {active && (
        <div onClick={()=>setActive(null)} style={{position:"fixed", inset:0, background:"rgba(0,0,0,.9)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:14, cursor:"pointer"}}>
          <div onClick={(e)=>e.stopPropagation()} style={{width:"100%", maxWidth:520, cursor:"default"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12, color:"#fff"}}>
              <div>
                <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{active.day}</div>
                <div style={{fontFamily:"var(--display)", fontSize:18, marginTop:4}}>{active.title}</div>
              </div>
              <button onClick={()=>setActive(null)} style={{background:"transparent", border:"1px solid rgba(255,255,255,.3)", color:"#fff", padding:"7px 12px", borderRadius:999, fontSize:10, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, cursor:"pointer"}}>Close ✕</button>
            </div>
            <video src={active.src} poster={active.poster} controls autoPlay playsInline style={{width:"100%", height:"auto", maxHeight:"75vh", display:"block", background:"#000", borderRadius:6}}/>
          </div>
        </div>
      )}
    </section>
  );
}

function MobileProgramProblem() {
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)"}}>
      <div style={{display:"inline-flex", alignItems:"center", gap:8, padding:"6px 12px", background:"#1D3557", color:"#fff", borderRadius:3, fontSize:10, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, marginBottom:18}}>
        The problem
      </div>
      <h2 className="display" style={{fontSize:30, lineHeight:1.05, marginBottom:18}}>
        Why this <span className="accent">programme</span> exists.
      </h2>
      <p style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)", marginBottom:28}}>
        Many partner schools in Kenya have unused land — and many students go without lunch. Seeds2Education turns that land into onion farms. The harvest is exchanged through Food for Education to feed students. The school owns it. The crew is permanent. The trip joins what's already running.
      </p>
      <div style={{padding:22, background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, borderLeft:"4px solid var(--orange)"}}>
        <div className="eyebrow" style={{color:"var(--orange)", marginBottom:10}}>Our answer</div>
        <div className="display" style={{fontSize:22, lineHeight:1.15, marginBottom:14}}>
          A permanent farm crew. The trip <span className="accent">joins</span> — it doesn't trigger.
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {[
            ["01","Identify a partner school with unused land"],
            ["02","Install farm infrastructure with the school"],
            ["03","Permanent farm crew runs it year-round"],
            ["04","School groups join the work during their trip"],
            ["05","Harvest exchanged through Food for Education"],
          ].map(([n,t])=>(
            <div key={n} style={{display:"flex", gap:12, alignItems:"flex-start"}}>
              <div style={{fontFamily:"var(--display)", fontSize:14, color:"var(--orange)", fontWeight:700, marginTop:1, minWidth:22}}>{n}</div>
              <div style={{fontSize:14, color:"var(--ink)", lineHeight:1.5}}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileProgramDayByDay() {
  const days = [
    {d:"Day 1", t:"Arrive Nairobi", img:IMG.communityFace,
      b:"JKIA pickup. Transfer to base accommodation. Welcome briefing and orientation."},
    {d:"Day 2", t:"Orientation + community day", img:IMG.farmKenyanLed,
      b:"Tour Oloosirkon Primary School with the partner-school team. Meet the permanent farm crew."},
    {d:"Day 3", t:"Base prep + cultural exchange", img:IMG.farmPrepRake,
      b:"Site walk for the farmland project. Tools and safety briefing. Cultural exchange with the host community."},
    {d:"Day 4", t:"Food for Education + ACT", img:IMG.ffePresentation,
      b:"Drive to Ruiru. Tour the Food for Education kitchen and warehouse. Afternoon weaving workshop with ACT artisans."},
    {d:"Day 5", t:"Farmland — 1 of 3", img:IMG.farmPrepRake,
      b:"First full day on the farmland project. Groundwork through the morning; bed formation and irrigation prep."},
    {d:"Day 6", t:"Farmland — 2 of 3", img:IMG.farmWalking,
      b:"Onion planting, shade-structure assembly, irrigation setup. Lunch on site with the school community."},
    {d:"Day 7", t:"Farmland — 3 of 3 + closing", img:IMG.farmWatering,
      b:"Compost layering, watering-system testing, signage install. Closing ceremony with the local community."},
    {d:"Day 8", t:"Depart", img:IMG.farmKenyanLed,
      b:"Breakfast, packing, final reflections. Transfer to JKIA. The farm crew continues without you."},
  ];
  return (
    <section style={{padding:"56px 0 56px", background:"var(--cream)"}}>
      <div style={{padding:"0 22px"}}>
        <div className="eyebrow">7 nights · day by day</div>
        <h2 className="display" style={{marginTop:12, marginBottom:8, fontSize:30, lineHeight:1.05}}>
          The <span className="accent">trip</span>, day by day.
        </h2>
        <p style={{fontSize:14, color:"var(--muted)", marginBottom:24, lineHeight:1.55}}>
          Based on the Nov 2025 Fairgreen International School itinerary. Swipe →
        </p>
      </div>
      <div style={{display:"flex", gap:14, overflowX:"auto", overflowY:"hidden", padding:"4px 22px 24px", scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch"}}>
        {days.map((d,i)=>(
          <div key={i} style={{flex:"0 0 80%", maxWidth:300, scrollSnapAlign:"start", background:"var(--sand)", border:"1px solid var(--line)", borderRadius:10, overflow:"hidden", display:"flex", flexDirection:"column"}}>
            <div style={{position:"relative", aspectRatio:"4/3", overflow:"hidden", background:"var(--charcoal)"}}>
              <img src={d.img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{position:"absolute", top:10, left:10, background:"var(--charcoal)", color:"#fff", padding:"5px 10px", borderRadius:3, fontSize:10, letterSpacing:".12em", textTransform:"uppercase", fontWeight:700}}>{d.d}</div>
            </div>
            <div style={{padding:18, flex:1, display:"flex", flexDirection:"column"}}>
              <div className="display" style={{fontSize:18, lineHeight:1.2, marginBottom:10}}>{d.t}</div>
              <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>{d.b}</div>
            </div>
          </div>
        ))}
        <div style={{flex:"0 0 8px"}}/>
      </div>
    </section>
  );
}

function MobileProgramPricing() {
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)"}}>
      <div className="eyebrow">Pricing</div>
      <h2 className="display" style={{marginTop:12, marginBottom:8, fontSize:30, lineHeight:1.05}}>
        Honest <span className="accent">pricing.</span> No upsells.
      </h2>
      <p style={{fontSize:14, color:"var(--muted)", marginBottom:28, lineHeight:1.55}}>
        Year-round programme cost split per student.
      </p>
      <div style={{padding:28, background:"var(--charcoal)", color:"#fff", borderRadius:12, marginBottom:18}}>
        <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:14}}>Standard · 7 nights</div>
        <div style={{display:"baseline", marginBottom:8}}>
          <span className="display tnum" style={{fontSize:64, lineHeight:1, color:"#fff"}}>$3,000</span>
        </div>
        <div style={{fontSize:13, color:"rgba(255,255,255,.6)", marginBottom:24}}>per student · excl. flights</div>
        <div style={{paddingTop:18, borderTop:"1px solid rgba(255,255,255,.18)", fontSize:13, lineHeight:1.6, color:"rgba(255,255,255,.85)"}}>
          <strong style={{color:"#fff", display:"block", marginBottom:8, fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>Includes</strong>
          In-country accommodation, all meals on programme, transport, all programme activities, Kenyan trip leaders, partner contributions, insurance and safety cover.
        </div>
        <div style={{paddingTop:14, marginTop:14, borderTop:"1px solid rgba(255,255,255,.18)", fontSize:13, lineHeight:1.6, color:"rgba(255,255,255,.85)"}}>
          <strong style={{color:"#fff", display:"block", marginBottom:8, fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>Excludes</strong>
          International flights from your home airport.
        </div>
      </div>
      <button className="btn-pill btn-action" style={{padding:"15px 22px", width:"100%"}} onClick={()=>khifiNavigate("contact")}>
        Request the full breakdown →
      </button>
    </section>
  );
}

function MobileProgramFAQ() {
  const qs = [
    ["Why are standard trips 7 nights?", "It's the sweet spot for school calendars — long enough for students to move past 'tourist' mode, short enough to fit a half-term or end-of-term window."],
    ["What if our group is bigger than 30?", "We'd run two trips back-to-back rather than push group size higher. The 1:10 leader-to-student ratio is core to safeguarding and quality."],
    ["What's the safeguarding posture?", "No direct one-on-one student contact with vulnerable children. Activities designed around the work, not the children. 1:10 ratio with at least two Kenyan trip leaders."],
    ["Who actually leads the trip?", "Kenyan trip leaders — every day, every activity. Permanent crew on the farm, year-round. The trip joins the work; it doesn't trigger it."],
    ["Can we visit the farm before signing on?", "Yes. We host SLT site visits during the year-round window. Book an intro call to schedule one."],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Honest FAQ</div>
      <h2 className="display" style={{marginTop:12, marginBottom:24, fontSize:30, lineHeight:1.05}}>
        The questions <span className="accent">you'll get</span> from your SLT.
      </h2>
      <div style={{display:"flex", flexDirection:"column", gap:8}}>
        {qs.map(([q,a],i)=>(
          <div key={i} style={{background:"var(--sand)", border:"1px solid var(--line)", borderRadius:8, overflow:"hidden"}}>
            <button onClick={()=>setOpen(open===i?-1:i)} style={{width:"100%", padding:"16px 18px", textAlign:"left", background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
              <div style={{fontSize:14, fontWeight:600, color:"var(--charcoal)", lineHeight:1.35, flex:1}}>{q}</div>
              <div style={{fontSize:18, color:"var(--orange)", fontWeight:600, transform:open===i?"rotate(45deg)":"rotate(0)", transition:"transform .2s"}}>+</div>
            </button>
            {open===i && (
              <div style={{padding:"0 18px 18px", fontSize:13.5, lineHeight:1.6, color:"var(--ink-2)"}}>{a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileProgramCTA() {
  return (
    <section style={{padding:"56px 22px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"var(--orange)"}}>Bring this to your SLT</div>
      <h2 className="display" style={{color:"#fff", marginTop:12, fontSize:32, lineHeight:1.05, marginBottom:16}}>
        Ready to <span className="accent">talk?</span>
      </h2>
      <p style={{color:"rgba(255,255,255,.78)", fontSize:14.5, lineHeight:1.6, marginBottom:24}}>
        We share the full programme PDF, our scorecard, and references from schools currently running with us.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <button className="btn-pill btn-action" style={{padding:"15px 22px"}} onClick={()=>khifiNavigate("contact")}>Request the programme PDF →</button>
        <button className="btn-pill" style={{padding:"15px 22px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}} onClick={bookCall}>Book an intro call</button>
      </div>
    </section>
  );
}

function MobileProgramPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileProgramHero/>
      <MobileProgramSpec/>
      <MobileProgramOverviewVideo/>
      <MobileProgramProblem/>
      <MobileProgramDayByDay/>
      <MobileProgramReels/>
      <MobileProgramPricing/>
      <MobileProgramFAQ/>
      <MobileProgramCTA/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE APPROACH PAGE
   ========================================================================= */

function MobileApproachHero() {
  return (
    <section style={{position:"relative", background:"var(--cream)", padding:"40px 22px 56px", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Our Approach</div>
      <h1 className="display" style={{marginTop:14, fontSize:42, lineHeight:1.02, letterSpacing:"-.02em"}}>
        Every programme exists to <span className="accent">remove a barrier to education.</span>
      </h1>
      <p style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)", marginTop:18}}>
        Hunger keeps kids out of school. Water scarcity keeps girls home. The same idea runs through Kapes Uniforms (a uniform is the barrier) and Kapes Adventures. The barriers change. The mission doesn't.
      </p>
      <div style={{position:"relative", marginTop:32, aspectRatio:"4/3"}}>
        <img className="kapes" src={IMG.educator} alt="" style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:6, display:"block"}}/>
        <div style={{position:"absolute", bottom:-12, right:0, background:"var(--orange)", color:"#fff", padding:"12px 14px", maxWidth:240, fontSize:11, lineHeight:1.5, fontWeight:600, borderRadius:3}}>
          "Identify what's stopping a child from going to school. Remove it. That's the work."
        </div>
      </div>
    </section>
  );
}

function MobileApproachPrinciples() {
  const items = [
    {n:"01", t:"Community as client. School as guest.",
      p:"Every programme has a Kenyan partner — a school, a community leader, a farm — that decides what's useful. Students plant the seed of some projects and join others already running.",
      evidence:["Activities chosen by the Kenyan partner","Some projects students help start; others they join","What gets built keeps running after the trip"]},
    {n:"02", t:"Flagship runs year-round.",
      p:"Seeds2Education runs continuously. A permanent farm crew works the land week in, week out. WEW and CC are trip-window programmes anchored on partner work.",
      evidence:["S2E: 30+ Kenyans employed year-round","WEW + CC: trip-window programmes","10 months of trips · pause Jul–Aug for long rains"]},
    {n:"03", t:"Designed in Dubai. Delivered by Kenyans.",
      p:"Trip design and school relationships sit with us in Dubai. Every trip on the ground is led by Kenyan trip leaders. The farm crew, community lead, and trip leaders are all Kenyan.",
      evidence:["1:10 leader-to-student ratio (min 2)","Kenyan trip leaders, not flown-in staff","40+ Kenyans employed year-round"]},
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Three principles</div>
      <h2 className="display" style={{marginTop:12, marginBottom:28, fontSize:32, lineHeight:1.05}}>
        Everything else flows from <span className="accent">these three.</span>
      </h2>
      <div style={{borderTop:"2px solid var(--charcoal)"}}>
        {items.map(it=>(
          <div key={it.n} style={{paddingTop:24, paddingBottom:24, borderBottom:"1px solid var(--line)"}}>
            <div style={{fontFamily:"var(--display)", fontSize:42, color:"var(--charcoal)", opacity:.22, lineHeight:1, marginBottom:12}}>{it.n}</div>
            <h3 className="display" style={{fontSize:24, lineHeight:1.15, marginBottom:12}}>{it.t}</h3>
            <p style={{fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>{it.p}</p>
            <div style={{background:"var(--sand)", padding:18, borderLeft:"3px solid var(--orange)"}}>
              <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:10}}>How we work it</div>
              <ul style={{margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:7}}>
                {it.evidence.map((e,i)=>(
                  <li key={i} style={{fontSize:13, lineHeight:1.5, color:"var(--ink-2)", paddingLeft:16, position:"relative"}}>
                    <span style={{position:"absolute", left:0, top:8, width:8, height:1, background:"var(--orange)"}}/>{e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileApproachPricing() {
  const progs = [
    {name:"Seeds2Education", price:"USD 3,000", color:"#22C55E"},
    {name:"Water Empowering Women", price:"USD 2,850", color:"#F43F5E"},
    {name:"Community Conservation", price:"USD 2,600", color:"#3B82F6"},
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Pricing</div>
      <h2 className="display" style={{marginTop:12, marginBottom:18, fontSize:30, lineHeight:1.05}}>
        Priced per programme. <span className="accent">Quoted on request.</span>
      </h2>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginBottom:24}}>
        Each programme priced separately. Flights excluded. No "premium" or "basic" tier within a programme.
      </p>
      <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:22}}>
        <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:14}}>Standard 7-night · per student</div>
        {progs.map(p=>(
          <div key={p.name} style={{display:"grid", gridTemplateColumns:"10px 1fr auto", gap:12, alignItems:"center", padding:"10px 0", borderBottom:"1px dashed var(--line)"}}>
            <span style={{width:8, height:8, borderRadius:50, background:p.color}}/>
            <div style={{fontSize:13.5, fontWeight:600, color:"var(--charcoal)"}}>{p.name}</div>
            <div className="display tnum" style={{fontSize:16, color:"var(--charcoal)"}}>{p.price}</div>
          </div>
        ))}
        <div style={{fontSize:12, color:"var(--ink-2)", marginTop:14, lineHeight:1.5}}>excl. international flights · bespoke quotes available</div>
        <button className="btn-pill btn-action" style={{marginTop:16, padding:"13px 22px", width:"100%"}} onClick={()=>khifiNavigate("contact")}>Request a quote →</button>
      </div>
    </section>
  );
}

function MobileApproachSafeguarding() {
  const items = [
    {t:"No one-on-one with vulnerable children", d:"Activities designed around the work — not around the kids."},
    {t:"1:10 leader ratio", d:"Min two Kenyan trip leaders per trip, regardless of cohort size."},
    {t:"Risk-assessed itineraries", d:"Each itinerary risk-assessed in advance. Health and safety checks at every site."},
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Safety & safeguarding</div>
      <h3 className="display" style={{marginTop:12, marginBottom:24, fontSize:30, lineHeight:1.05}}>
        Three <span className="accent">non-negotiables.</span>
      </h3>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {items.map(i=>(
          <div key={i.t} style={{background:"var(--sand)", padding:20, borderTop:"3px solid var(--orange)"}}>
            <h4 className="display" style={{fontSize:18, marginBottom:8, lineHeight:1.2}}>{i.t}</h4>
            <p style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileApproachCTA() {
  return (
    <section style={{padding:"56px 22px", background:"var(--charcoal)", color:"#fff", textAlign:"center"}}>
      <div className="eyebrow" style={{justifyContent:"center", color:"rgba(255,255,255,.55)"}}>The honest invitation</div>
      <h2 className="display" style={{color:"#fff", marginTop:14, fontSize:30, lineHeight:1.05}}>
        Disagree with any of these? <span className="accent">Tell us why.</span>
      </h2>
      <p style={{color:"rgba(255,255,255,.7)", marginTop:14, fontSize:14.5, lineHeight:1.6}}>
        We'd rather have a sharp 30-minute conversation about where we differ than a polite call where everyone agrees.
      </p>
      <div style={{marginTop:24, display:"flex", flexDirection:"column", gap:10}}>
        <button className="btn-pill btn-action" style={{padding:"15px 22px"}} onClick={bookCall}>Book the conversation →</button>
        <button className="btn-pill" style={{padding:"15px 22px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}} onClick={()=>khifiNavigate("programs")}>See the programmes</button>
      </div>
    </section>
  );
}

function MobileApproachPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileApproachHero/>
      <MobileApproachPrinciples/>
      <MobileApproachPricing/>
      <MobileApproachSafeguarding/>
      <MobileApproachCTA/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE PROGRAMS INDEX
   ========================================================================= */

function MobileProgramsHero() {
  return (
    <section style={{padding:"40px 22px 36px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"rgba(255,255,255,.6)"}}>Programmes</div>
      <h1 className="display" style={{color:"#fff", marginTop:14, fontSize:40, lineHeight:1.02, letterSpacing:"-.02em"}}>
        Designed as <span className="accent">3-year partnerships.</span>
      </h1>
      <p style={{color:"rgba(255,255,255,.78)", marginTop:16, fontSize:15, lineHeight:1.6}}>
        One trip is a chapter — not the story. Year 1's cohort plants a farm; Year 3's cohort returns to a thriving project.
      </p>
      <div style={{marginTop:22, display:"flex", flexWrap:"wrap", gap:12, fontSize:11, color:"rgba(255,255,255,.7)", paddingTop:18, borderTop:"1px solid rgba(255,255,255,.15)"}}>
        <span><strong style={{color:"#fff"}}>All trips</strong> · 7 nights</span>
        <span style={{color:"rgba(255,255,255,.3)"}}>·</span>
        <span>up to 30 students</span>
        <span style={{color:"rgba(255,255,255,.3)"}}>·</span>
        <span>1:10 ratio</span>
      </div>
    </section>
  );
}

function MobileProgramsList() {
  const progs = [
    {slug:"s2e", code:"S2E·01", color:"#22C55E", img:IMG.farmActionShovel,
      audience:"Y9–13 · Our flagship", duration:"7 nights",
      title:"Seeds2Education", featured:true,
      desc:"Transforming unused school land into productive onion farms — produce exchanged for school meals through Food for Education. Permanent Kenyan farm crew runs it year-round.",
      cost:"USD 3,000 / student", cohort:"Up to 30 students"},
    {slug:"wew", code:"WEW·02", color:"#F43F5E", img:IMG.wewPaintingTank,
      audience:"Y9–13 · Gender, water, community", duration:"7 nights",
      title:"Water Empowering Women",
      desc:"Working with a Kenyan community leader to install a water tank and refurbish a classroom at Hope School. 25/26: 1 tank, 1 classroom, 40+ children with daily clean-water access.",
      cost:"USD 2,850 / student", cohort:"Up to 30 students"},
    {slug:"cc", code:"CC·03", color:"#3B82F6", img:IMG.ccFactory,
      audience:"Mixed · Wildlife + conservation", duration:"7 nights",
      title:"Community Conservation",
      desc:"Based at a Kenyan wildlife conservancy where conservation, community livelihoods, and ethical manufacturing intersect. First trip ran 2022 with Arbor School.",
      cost:"USD 2,600 / student", cohort:"Up to 30 students"},
  ];
  return (
    <section style={{padding:"40px 22px 56px", background:"var(--sand)"}}>
      <div style={{fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:20}}>Three programmes · 25/26</div>
      <div style={{display:"flex", flexDirection:"column", gap:16}}>
        {progs.map(p=>(
          <div key={p.code} onClick={()=>navigateToProgram(p.slug)}
            style={{background:"var(--cream)", border:p.featured?"2px solid var(--orange)":"1px solid var(--line)", borderRadius:8, overflow:"hidden", boxShadow:p.featured?"0 8px 22px rgba(255,119,0,.16)":"none", cursor:"pointer"}}>
            <div style={{position:"relative", aspectRatio:"16/10", overflow:"hidden"}}>
              <img className="kapes" src={p.img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{position:"absolute", top:12, left:12, background:p.color, color:"#fff", padding:"4px 9px", fontSize:10, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, borderRadius:3}}>{p.code}</div>
              <div style={{position:"absolute", bottom:12, right:12, background:"rgba(0,0,0,.78)", color:"#fff", padding:"5px 9px", fontSize:10, fontWeight:600, borderRadius:3}}>{p.duration}</div>
              {p.featured && <div style={{position:"absolute", top:12, right:12, background:"var(--orange)", color:"#fff", padding:"4px 9px", fontSize:9, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700, borderRadius:3}}>★ Flagship</div>}
            </div>
            <div style={{padding:18}}>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:p.featured?"var(--orange)":"var(--muted)", fontWeight:700, marginBottom:8}}>{p.audience}</div>
              <h3 className="display" style={{fontSize:22, lineHeight:1.15, marginBottom:10}}>{p.title}</h3>
              <p style={{fontSize:13.5, lineHeight:1.55, color:"var(--ink-2)", margin:0, marginBottom:14}}>{p.desc}</p>
              <div style={{display:"flex", gap:10, paddingTop:12, borderTop:"1px solid var(--line)", fontSize:10, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600, flexWrap:"wrap"}}>
                <span>{p.cost}</span>
                <span>·</span>
                <span>{p.cohort}</span>
              </div>
              <div style={{marginTop:10, fontSize:12, color:"var(--charcoal)", fontWeight:700}}>View programme →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileProgramsHelpChoose() {
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Not sure which?</div>
      <h2 className="display" style={{marginTop:12, marginBottom:14, fontSize:30, lineHeight:1.05}}>
        Take the <span className="accent">Impact Scorecard</span> — we'll match you.
      </h2>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginBottom:20}}>
        A short diagnostic. Report instantly. No sales follow-up unless you ask.
      </p>
      <div style={{padding:22, background:"var(--sand)", borderLeft:"3px solid var(--orange)", marginBottom:24}}>
        <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:8}}>A typical match</div>
        <div className="display" style={{fontSize:18, lineHeight:1.25, marginBottom:12}}>"Y10 · 30 students · first Kenya trip · no existing partnership"</div>
        <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.55, paddingTop:12, borderTop:"1px dashed var(--line)"}}>
          <strong style={{color:"var(--charcoal)"}}>Recommended:</strong> Seeds2Education — our flagship.
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("lp")}>Take the scorecard →</button>
        <button className="btn-pill btn-ghost" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("contact")}>Talk to Matthew</button>
      </div>
    </section>
  );
}

function MobileProgramsPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileProgramsHero/>
      <MobileProgramsList/>
      <MobileProgramsHelpChoose/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE IMPACT PAGE
   ========================================================================= */

function MobileImpactHero() {
  return (
    <section style={{position:"relative", padding:"40px 22px 44px", background:"var(--charcoal)", color:"#fff", overflow:"hidden"}}>
      <img src={IMG.garden} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%", opacity:.18}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.55) 0%, rgba(26,26,26,.85) 70%, var(--charcoal) 100%)"}}/>
      <div style={{position:"relative"}}>
        <div className="eyebrow" style={{color:"#fff"}}>Impact · what each programme delivers</div>
        <h1 className="display" style={{color:"#fff", marginTop:14, fontSize:38, lineHeight:1.02, letterSpacing:"-.02em"}}>
          Two programmes that <span className="accent">deliver local impact.</span>
        </h1>
        <p style={{color:"rgba(255,255,255,.85)", marginTop:16, fontSize:14.5, lineHeight:1.6}}>
          Seeds2Education and Water Empowering Women each create outcomes that continue long after the trip. Community Conservation is experiential — we don't claim metrics there we can't honestly attribute.
        </p>
        <div style={{marginTop:32, display:"flex", flexDirection:"column", gap:24}}>
          <div>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:10}}>
              <span style={{width:9, height:9, borderRadius:50, background:"#22C55E"}}/>
              <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".1em", color:"#22C55E", fontWeight:700}}>S2E · YEAR-ROUND</span>
            </div>
            <div className="display" style={{color:"#fff", fontSize:22, marginBottom:14}}>Seeds2Education</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:"#262626"}}>
              {[["1.5","acres","Unused land transformed"],["45,000","meals","Supported via first harvest"],["15,000","kg","Onion harvest forecast"],["30+","Kenyans","Employed year-round"]].map(([n,u,l])=>(
                <div key={l} style={{padding:"16px 14px", background:"var(--charcoal)"}}>
                  <div style={{display:"flex", alignItems:"baseline", gap:5, marginBottom:6}}>
                    <span className="display tnum" style={{fontSize:24, color:"#fff", lineHeight:1}}>{n}</span>
                    <span style={{fontSize:10, color:"#22C55E", fontWeight:700, letterSpacing:".06em", textTransform:"uppercase"}}>{u}</span>
                  </div>
                  <div style={{fontSize:11, color:"rgba(255,255,255,.7)", lineHeight:1.4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:10}}>
              <span style={{width:9, height:9, borderRadius:50, background:"#F43F5E"}}/>
              <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".1em", color:"#F43F5E", fontWeight:700}}>WEW · TRIP-WINDOW</span>
            </div>
            <div className="display" style={{color:"#fff", fontSize:22, marginBottom:14}}>Water Empowering Women</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:"#262626"}}>
              {[["40","%","Increase in enrolment"],["1","tank","Installed at Hope School"],["40+","children","Daily clean-water access"],["↓","soil erosion","Reported reduction"]].map(([n,u,l])=>(
                <div key={l} style={{padding:"16px 14px", background:"var(--charcoal)"}}>
                  <div style={{display:"flex", alignItems:"baseline", gap:5, marginBottom:6}}>
                    <span className="display tnum" style={{fontSize:24, color:"#fff", lineHeight:1}}>{n}</span>
                    <span style={{fontSize:10, color:"#F43F5E", fontWeight:700, letterSpacing:".06em", textTransform:"uppercase"}}>{u}</span>
                  </div>
                  <div style={{fontSize:11, color:"rgba(255,255,255,.7)", lineHeight:1.4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileImpactForecast() {
  const rows = [
    {n:"1.5", u:"acres", l:"converted to farmland this year"},
    {n:"15,000", u:"kg", l:"onions forecast at first harvest"},
    {n:"$0.85", u:"/ kg", l:"= 3 school meals via Food for Education"},
    {n:"45,000", u:"meals", l:"supported in year one (forecast)"},
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">First harvest · forecast</div>
      <h2 className="display" style={{marginTop:12, marginBottom:18, fontSize:30, lineHeight:1.02}}>
        15,000 kg of onions.<br/>
        <span className="accent">45,000 school meals.</span>
      </h2>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginBottom:24}}>
        At current exchange rates: <strong>$0.85 per kg of onions = three school meals.</strong> 15,000 kg translates into ~45,000 meals supported through the year.
      </p>
      <div style={{background:"var(--cream)", padding:22, border:"1px solid var(--line)", borderTop:"3px solid var(--orange)"}}>
        <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:14}}>The exchange</div>
        {rows.map((row,i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"auto 1fr", gap:12, alignItems:"baseline", padding:"10px 0", borderBottom:i===rows.length-1?"none":"1px dashed var(--line)"}}>
            <div style={{display:"flex", alignItems:"baseline", gap:4, minWidth:90}}>
              <span className="display tnum" style={{fontSize:24, color:"var(--charcoal)", lineHeight:1}}>{row.n}</span>
              <span style={{fontSize:10, letterSpacing:".06em", color:"var(--orange)", fontWeight:700, textTransform:"uppercase"}}>{row.u}</span>
            </div>
            <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.4}}>{row.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileImpactProgrammeBreakdown() {
  const programmes = [
    {code:"S2E", title:"Seeds2Education", flagship:true, year:"Flagship · year-round · 25/26", img:IMG.farmActionShovel,
      bullets:["1.5 acres of school land developed into onion farmland","15,000 kg onion harvest forecast","45,000 school meals supported (forecast)","30+ Kenyans employed year-round"], partners:"Food for Education · Kenyan farm partner"},
    {code:"WEW", title:"Water Empowering Women", year:"Trip-window · 25/26", img:IMG.wewPaintingTank,
      bullets:["40% increase in enrolment at Hope School after our build","1 water tank installed at Hope School","1 classroom refurbished alongside the tank","40+ children with daily clean-water access"], partners:"Kenyan community leader · Hope School"},
    {code:"CC", title:"Community Conservation", noLocalImpact:true, year:"Experiential · since 2022", img:IMG.ccFactory,
      bullets:["Based at a Kenyan wildlife conservancy with the Kapes Uniforms factory","Connects ethical manufacturing, conservation, community livelihoods","First trip ran 2022 — our longest-running programme","Different by design: experiential, not impact-creating"], partners:"Kenyan conservancy partner"},
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">By programme</div>
      <h2 className="display" style={{marginTop:12, marginBottom:24, fontSize:28, lineHeight:1.05}}>
        What each programme has <span className="accent">actually delivered.</span>
      </h2>
      <div style={{display:"flex", flexDirection:"column", gap:18}}>
        {programmes.map(p=>(
          <div key={p.code} style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:`3px solid ${p.flagship?"var(--orange)":(p.noLocalImpact?"var(--muted)":"var(--charcoal)")}`, overflow:"hidden", opacity:p.noLocalImpact?.92:1}}>
            <div style={{position:"relative", aspectRatio:"16/9", overflow:"hidden", background:"var(--charcoal)"}}>
              <img src={p.img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              {p.flagship && <span style={{position:"absolute", top:12, right:12, fontSize:9, background:"var(--orange)", color:"#fff", padding:"4px 9px", borderRadius:3, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700}}>★ Flagship</span>}
              {p.noLocalImpact && <span style={{position:"absolute", top:12, right:12, fontSize:9, background:"rgba(0,0,0,.7)", color:"#fff", padding:"4px 9px", borderRadius:3, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>Experiential</span>}
            </div>
            <div style={{padding:20}}>
              <div style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".1em", color:p.flagship?"var(--orange)":"var(--muted)", fontWeight:700, marginBottom:6}}>{p.code}</div>
              <h3 className="display" style={{fontSize:20, marginBottom:6}}>{p.title}</h3>
              <div style={{fontSize:10, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:14}}>{p.year}</div>
              <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:7, fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>
                {p.bullets.map((b,i)=><li key={i}>{b}</li>)}
              </ul>
              <div style={{fontSize:10, color:"var(--muted)", marginTop:14, paddingTop:12, borderTop:"1px dashed var(--line)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>
                Delivered with · {p.partners}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileImpactHonest() {
  const refuse = [
    ["Total volunteer hours", "Counts input, not outcome."],
    ["Children 'reached'", "Being in a photograph isn't impact."],
    ["Generic 'children helped' counts", "We measure outputs we can verify (acres farmed, tanks installed, meals supported)."],
    ["Smiles-per-trip", "Not a serious unit of measurement."],
    ["Years running trips", "Counts longevity, not outcome. Ask what got built last year."],
  ];
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)"}}>
      <div className="eyebrow">What we don't measure</div>
      <h2 className="display" style={{marginTop:12, marginBottom:20, fontSize:28, lineHeight:1.05}}>
        Numbers that make <span className="accent">the industry look good</span> — and why we skip them.
      </h2>
      <div style={{border:"1px solid var(--line)", borderRadius:8, overflow:"hidden"}}>
        {refuse.map(([m, why], i)=>(
          <div key={m} style={{padding:"16px 18px", background:i%2?"var(--cream)":"var(--sand)", borderBottom:i<refuse.length-1?"1px solid var(--line)":"none"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, marginBottom:6}}>
              <div style={{fontFamily:"var(--display)", fontSize:16, color:"var(--charcoal)", textDecoration:"line-through", textDecorationThickness:2, textDecorationColor:"var(--orange)", lineHeight:1.25}}>{m}</div>
              <div style={{fontSize:9, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, whiteSpace:"nowrap", marginTop:3}}>Skipped</div>
            </div>
            <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>{why}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileImpactQuote() {
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Voices · from the community</div>
      <h2 className="display" style={{marginTop:12, marginBottom:20, fontSize:28, lineHeight:1.05}}>
        The water tank changed <span className="accent">enrolment too.</span>
      </h2>
      <div style={{padding:24, background:"var(--sand)", borderLeft:"4px solid var(--orange)", position:"relative"}}>
        <div className="display" style={{fontSize:22, lineHeight:1.18, color:"var(--charcoal)", marginBottom:14}}>
          Parents are seeing <span className="accent">a school with potential.</span>
        </div>
        <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:15, lineHeight:1.65, color:"var(--ink-2)", margin:0, marginBottom:14}}>
          "The tank is great — we collected lots of water. Also more students got enrolled this year because of the tank. Parents are seeing a school with potential."
        </p>
        <div style={{paddingTop:12, borderTop:"1px dashed var(--line)", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>
          Monica Makori · Hope School · Kenya
        </div>
      </div>
    </section>
  );
}

function MobileImpactPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileImpactHero/>
      <MobileImpactForecast/>
      <MobileImpactProgrammeBreakdown/>
      <MobileImpactHonest/>
      <MobileImpactQuote/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE STORIES INDEX
   ========================================================================= */

function MobileStoriesHero() {
  return (
    <section style={{padding:"40px 22px 32px", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Blog · field notes</div>
      <h1 className="display" style={{marginTop:14, fontSize:36, lineHeight:1.05, letterSpacing:"-.02em"}}>
        Things we've <span className="accent">written down.</span>
      </h1>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginTop:14}}>
        Long reads on ethical travel, IB CAS, voluntourism vs. real impact — plus a founder note on how the company started.
      </p>
    </section>
  );
}

function MobileFeaturedFounderCard({s, onOpen}) {
  return (
    <div onClick={onOpen} style={{background:"var(--sand)", borderTop:"3px solid var(--orange)", padding:18, marginBottom:24, cursor:"pointer"}}>
      <div style={{aspectRatio:"16/10", overflow:"hidden", borderRadius:4, marginBottom:14}}>
        <img className="kapes" src={s.img} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
      </div>
      <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>Featured · {s.cat}</div>
      <h2 className="display" style={{fontSize:24, lineHeight:1.15, marginBottom:12}}>{s.title}</h2>
      <p style={{fontSize:14, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>{s.dek}</p>
      <div style={{marginTop:14, fontSize:11, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>
        {s.date} · {s.readMin} min · <span style={{color:"var(--charcoal)"}}>Read →</span>
      </div>
    </div>
  );
}

function MobileBlogCard({p, onOpen}) {
  const img = p.featuredImage || p.img;
  const fmtDate = (s) => {
    const d = new Date(s.length > 10 ? s : s + "T00:00:00Z");
    if (isNaN(d)) return s;
    return d.toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"});
  };
  return (
    <div onClick={onOpen} style={{background:"var(--cream)", border:"1px solid var(--line)", display:"flex", flexDirection:"column", cursor:"pointer", marginBottom:14}}>
      <div style={{aspectRatio:"4/3", overflow:"hidden", background:"var(--charcoal)"}}>
        {img ? <img className="kapes" src={img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/> : null}
      </div>
      <div style={{padding:18, display:"flex", flexDirection:"column", gap:8}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:10}}>
          <span style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{p.category}</span>
          <span style={{fontSize:10, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>{p.readTime}</span>
        </div>
        <h3 className="display" style={{fontSize:18, lineHeight:1.2, margin:0}}>{p.title}</h3>
        <p style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>{p.excerpt}</p>
        <div style={{marginTop:6, paddingTop:10, borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:10.5, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>
          <span>{fmtDate(p.date)}</span>
          <span style={{color:"var(--charcoal)"}}>Read →</span>
        </div>
      </div>
    </div>
  );
}

function MobileStoriesPage() {
  const FOUNDER_NOTE = (typeof window !== "undefined" && window.FOUNDER_NOTE_DATA) ? window.FOUNDER_NOTE_DATA : null;
  const POSTS = (typeof window !== "undefined" && window.BLOG_POSTS) ? window.BLOG_POSTS : [];
  const [open, setOpen] = React.useState(null);
  React.useEffect(()=> window.scrollTo(0,0), [open]);

  // For article views, fall back to desktop Article/BlogPost (they use max-width 760, work on mobile)
  if (open?.kind === "founder" && window.Article) {
    return (
      <div>
        {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
        <window.Article s={open.data} onBack={()=>setOpen(null)}/>
        {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
      </div>
    );
  }
  if (open?.kind === "post" && window.BlogPost) {
    return (
      <div>
        {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
        <window.BlogPost p={open.data} onBack={()=>setOpen(null)}/>
        {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
      </div>
    );
  }
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileStoriesHero/>
      <section style={{padding:"32px 22px 56px", background:"var(--cream)"}}>
        {FOUNDER_NOTE && <MobileFeaturedFounderCard s={FOUNDER_NOTE} onOpen={()=>setOpen({kind:"founder", data:FOUNDER_NOTE})}/>}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:16}}>
          <h2 className="display" style={{fontSize:22, margin:0}}>From the blog</h2>
          <div style={{fontSize:10, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600}}>{POSTS.length} posts</div>
        </div>
        {POSTS.map(p=> <MobileBlogCard key={p.slug} p={p} onOpen={()=>setOpen({kind:"post", data:p})}/>)}
      </section>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE ABOUT PAGE
   ========================================================================= */

function MobileAboutHero() {
  return (
    <section style={{background:"var(--cream)", padding:"40px 22px 44px", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Who we are</div>
      <h1 className="display" style={{marginTop:14, fontSize:34, lineHeight:1.05, letterSpacing:"-.02em"}}>
        A school-trip company born from a <span className="accent">uniform factory</span> inside a Kenyan conservancy.
      </h1>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginTop:18}}>
        Kapes Adventures grew directly out of Kapes Uniforms — same founder, same Kenyan relationships. <strong>Identify the barrier keeping a child out of school. Remove it.</strong> The barrier changes; the mission doesn't.
      </p>
      <div style={{position:"relative", marginTop:28}}>
        <div style={{aspectRatio:"4/5", maxHeight:480, overflow:"hidden", borderRadius:4}}>
          <img className="kapes" src={IMG.mattVista} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%", display:"block"}}/>
        </div>
        <div style={{marginTop:14, background:"var(--charcoal)", color:"#fff", padding:"14px 16px", fontSize:11.5, lineHeight:1.5}}>
          <div style={{color:"var(--orange)", fontSize:9.5, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, marginBottom:6}}>Matthew Benjamin · founder · Kenya</div>
          The trip that started Kapes Adventures began as a uniform factory tour. By the end of the night, it was something else.
        </div>
      </div>
    </section>
  );
}

function MobileFounderStory() {
  return (
    <section style={{padding:"48px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Founder's story</div>
      <h2 className="display" style={{marginTop:12, fontSize:30, lineHeight:1.05, marginBottom:24}}>
        The trip that <span className="accent">started the company.</span>
      </h2>
      <div style={{background:"var(--cream)", borderTop:"3px solid var(--orange)", marginBottom:24, overflow:"hidden"}}>
        <div style={{aspectRatio:"4/5", maxHeight:380, overflow:"hidden", background:"var(--charcoal)"}}>
          <img src={IMG.mattPortrait} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%", display:"block"}}/>
        </div>
        <div style={{padding:18}}>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:6}}>Founder</div>
          <div className="display" style={{fontSize:20, marginBottom:4}}>Matthew Benjamin</div>
          <div style={{fontSize:12, color:"var(--ink-2)"}}>Founder &amp; CEO · also founded Kapes Uniforms (2020)</div>
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap:16, fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)"}}>
        <p>I started Kapes Uniforms in 2020, after reading a study showing that giving a child in Kenya a free uniform measurably reduced their absenteeism. For every student a partner school dresses, we donate a free uniform to a child in need.</p>
        <p>To make the uniforms, I went looking for a Kenyan manufacturer. I found one inside a wildlife conservancy — the world's first carbon-neutral garment factory. After the factory tour they offered me a game drive. We spent the night at the camp.</p>
        <p style={{padding:"14px 16px", background:"var(--cream)", borderLeft:"3px solid var(--orange)", fontStyle:"italic", color:"var(--charcoal)", margin:"4px 0"}}>That night made it obvious. This was where international students should come.</p>
        <p>Many of the children I met couldn't afford a uniform; many couldn't afford to eat. That's where <strong>Seeds2Education</strong> began — turning unused school land into productive farmland that feeds the students on it.</p>
        <p>In 2025 we began designing and delivering programmes directly with Kenyan-led organisations. Every trip is built and led by the people who live in the communities we visit.</p>
      </div>
    </section>
  );
}

function MobileTimeline() {
  const events = [
    { y:"2020", t:"Kapes Uniforms founded", d:"After research showing free uniforms reduce absenteeism in Kenyan primary schools — Matthew founds Kapes Uniforms."},
    { y:"2022", t:"First Kapes Adventures trip", d:"First trip runs with Arbor School — a Community Conservation programme at the Kenyan conservancy where Kapes uniforms are made. The trip sponsored 15 local Kenyan children's school places."},
    { y:"2022–24", t:"7 trips through Mountain Quests", d:"Seven trips run through partnership — building the model and safeguarding posture before going direct."},
    { y:"2025", t:"Direct delivery begins", d:"Three programmes live: Seeds2Education, Water Empowering Women, Community Conservation."},
    { y:"25/26", t:"Seeds2Education pilot", d:"1.5 acres of unused land transformed into farmland. 2 water tanks installed. 1 classroom rebuilt. 40+ Kenyans employed."},
    { y:"Next", t:"Where you come in", d:"International schools whose students step inside year-round work in Kenya — joining a permanent farm crew."},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">How we got here</div>
      <h2 className="display" style={{marginTop:12, fontSize:28, lineHeight:1.05, marginBottom:28}}>
        Six years. One <span className="accent">through-line.</span>
      </h2>
      <div style={{borderLeft:"2px solid var(--charcoal)", paddingLeft:18}}>
        {events.map((e,i)=>(
          <div key={e.y} style={{paddingBottom:24, position:"relative"}}>
            <div style={{position:"absolute", left:-25, top:4, width:10, height:10, borderRadius:50, background: i===events.length-1?"var(--orange)":"var(--charcoal)"}}/>
            <div style={{fontFamily:"var(--display)", fontSize:20, color:"var(--charcoal)", lineHeight:1, marginBottom:6}}>{e.y}</div>
            <div style={{fontSize:14, fontWeight:700, color:"var(--charcoal)", lineHeight:1.25, marginBottom:8}}>{e.t}</div>
            <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{e.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileTeam() {
  const people = [
    {name:"Matthew Benjamin", role:"Founder & CEO", loc:"Dubai, UAE", img: IMG.mattPortrait, imgPos:"center 25%",
      bio:"Founder of both Kapes Uniforms (2020) and Kapes Adventures. Designs trip programmes, builds school relationships, brings each trip to life with our Kenyan partners."},
    {name:'Elijah "Elly" Oenga', role:"Programme Partner · Seeds2Education", loc:"Rongai, Nairobi", img: IMG.ellyPortrait, imgPos:"center 25%",
      bio:'Kenyan entrepreneur who left a UK career to transform arid land in Rongai into a thriving farm and eco-lodge. Co-runs Seeds2Education. "I am because we are."'},
    {name:"Monica Makori", role:"Programme Partner · Water Empowering Women", loc:"Mwachabo, Taita-Taveta", img: IMG.monicaPortrait, imgPos:"center 25%",
      bio:'Kenyan entrepreneur and coordinator of the Neema Women\'s Group. Runs the partner-side of every Water Empowering Women build. "Parents are seeing a school with potential."'},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--sand)"}}>
      <div className="eyebrow">The people behind the trips</div>
      <h2 className="display" style={{marginTop:12, fontSize:28, lineHeight:1.05, marginBottom:8}}>Built in Dubai. <span className="accent">Run in Kenya.</span></h2>
      <p style={{fontSize:13, color:"var(--muted)", marginBottom:24, lineHeight:1.5}}>
        On-trip delivery is led by Kenyan trip leaders (1:10, min two), a farm manager, a community lead, and 40+ local employees.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:16}}>
        {people.map(p=>(
          <div key={p.name} style={{background:"var(--cream)", border:"1px solid var(--line)", padding:22, borderTop:"3px solid var(--orange)"}}>
            <div style={{width:64, height:64, borderRadius:50, overflow:"hidden", background:"var(--charcoal)", marginBottom:14}}>
              <img src={p.img} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:p.imgPos}}/>
            </div>
            <h3 className="display" style={{fontSize:20, lineHeight:1.15, marginBottom:6}}>{p.name}</h3>
            <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:6}}>{p.role}</div>
            <div style={{fontSize:10, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600, marginBottom:12}}>Based · {p.loc}</div>
            <p style={{fontSize:13, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>{p.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileAboutPartners() {
  const partners = [
    {logo: IMG.f4eLogo, name:"Food for Education", tag:"Kenyan NGO · School-meals partner",
      note:"Subsidises school meals at scale. The Seeds2Education harvest is exchanged through their kitchen at $0.85/kg = three school meals.", url:"https://food4education.org/"},
    {logo: IMG.wildlifeWorksFactory, name:"Wildlife Works", tag:"Kenyan conservancy · CC site + factory",
      note:"World's first carbon-neutral garment factory inside a working wildlife conservation operation. Manufactures Kapes Uniforms; hosts Community Conservation cohorts.", url:"https://wildlifeworks.com/", isPhoto:true},
    {logo: IMG.edsideraLogo, name:"Edsidera", tag:"Digital partner · life-skills awards · 25/26",
      note:"UAE-based platform recognised by FOBISIA, BSME and COBIS. Students log evidence from trip work and earn formally credentialled awards.", url:"https://edsidera.com/"},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="eyebrow">Partners</div>
      <h2 className="display" style={{marginTop:12, fontSize:28, lineHeight:1.05, marginBottom:8}}>The organisations behind <span className="accent">the work.</span></h2>
      <p style={{fontSize:13, color:"var(--muted)", marginBottom:24, lineHeight:1.5}}>Three partners do the year-round work that the trips join.</p>
      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        {partners.map(p=>(
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
            style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:20, display:"flex", flexDirection:"column", gap:10, textDecoration:"none", color:"inherit"}}>
            <div style={{height:60, display:"flex", alignItems:"center"}}>
              {p.isPhoto ? (
                <div style={{width:60, height:60, borderRadius:50, overflow:"hidden", background:"var(--charcoal)"}}>
                  <img src={p.logo} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%", display:"block"}}/>
                </div>
              ) : (
                <img src={p.logo} alt={p.name} style={{maxHeight:48, maxWidth:160, objectFit:"contain", display:"block"}}/>
              )}
            </div>
            <div className="display" style={{fontSize:20, lineHeight:1.15}}>{p.name}</div>
            <div style={{fontSize:10, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{p.tag}</div>
            <p style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>{p.note}</p>
            <div style={{fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--charcoal)", fontWeight:700}}>Visit {p.name} ↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function MobileAboutCTA() {
  return (
    <section style={{padding:"40px 22px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"var(--orange)"}}>How we work</div>
      <h2 className="display" style={{color:"#fff", marginTop:12, fontSize:26, lineHeight:1.1, marginBottom:20}}>Designed in Dubai. <span className="accent">Delivered by Kenyans.</span></h2>
      <div style={{display:"flex", flexDirection:"column", gap:14, marginBottom:28}}>
        {[
          {h:"Designed by us", s:"Trip concept, itinerary, school partnership, learning outcomes — designed and managed by Kapes Adventures."},
          {h:"Delivered in Kenya", s:"Every trip led on the ground by Kenyan trip leaders we contract directly. 1:10 ratio, min two leaders per trip."},
          {h:"Real partnerships", s:"We work with Kenyan-led organisations on the work that runs all year. The school trip joins that work — it doesn't create it."},
        ].map(b=>(
          <div key={b.h} style={{background:"#161616", padding:18, borderTop:"3px solid var(--orange)"}}>
            <h3 className="display" style={{color:"#fff", fontSize:18, marginBottom:8}}>{b.h}</h3>
            <p style={{fontSize:13, color:"rgba(255,255,255,.75)", lineHeight:1.55, margin:0}}>{b.s}</p>
          </div>
        ))}
      </div>
      <div style={{display:"flex", gap:12, alignItems:"center", paddingTop:24, borderTop:"1px solid #2a2a2a"}}>
        <div style={{width:54, height:54, borderRadius:50, overflow:"hidden", background:"var(--charcoal)", flexShrink:0}}>
          <img src={IMG.mattPortrait} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%", display:"block"}}/>
        </div>
        <div>
          <p style={{fontFamily:"var(--serif)", fontSize:14, lineHeight:1.5, color:"#fff", margin:0, fontStyle:"italic"}}>
            "If your school is even thinking about this kind of trip — I'd rather have a 30-minute conversation than send a brochure."
          </p>
          <div style={{marginTop:8, fontSize:11, color:"rgba(255,255,255,.55)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>Matthew Benjamin · Founder</div>
        </div>
      </div>
      <button className="btn-pill btn-action" style={{padding:"15px 22px", marginTop:20, width:"100%"}} onClick={bookCall}>Book a call →</button>
    </section>
  );
}

function MobileAboutPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileAboutHero/>
      <MobileFounderStory/>
      <MobileTimeline/>
      <MobileTeam/>
      <MobileAboutPartners/>
      <MobileAboutCTA/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE CONTACT PAGE
   ========================================================================= */

function MobileContactHero() {
  return (
    <section style={{padding:"40px 22px 32px", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Contact</div>
      <h1 className="display" style={{marginTop:14, fontSize:34, lineHeight:1.05, letterSpacing:"-.02em"}}>
        Start with a question, <span className="accent">not a brochure request.</span>
      </h1>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginTop:14}}>
        Three ways in. None go to a sales queue — all three land with a named human.
      </p>
    </section>
  );
}

function MobileContactOptions() {
  const opts = [
    {tag:"Fastest", title:"Book a 30-min call", who:"Matthew Benjamin · Founder & CEO",
      body:"No sales pitch. A conversation about where your school is and what would actually be useful.", cta:"See calendar →", accent:true, action:"calendly"},
    {tag:"Self-serve", title:"Take the Impact Scorecard", who:"5 minutes · diagnostic report",
      body:"A short diagnostic on your school's service-learning posture. Report instantly. No follow-up unless you ask.", cta:"Start scorecard →", to:"lp"},
    {tag:"Old-fashioned", title:"Write a real email", who:"hello@kapesadventures.com",
      body:"Read by Matthew within one working day. Copy your head, bursar, or trip coordinator.", cta:"Open mail →", action:"mailto"},
  ];
  return (
    <section style={{padding:"32px 22px 48px", background:"var(--cream)"}}>
      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        {opts.map(o=>(
          <div key={o.title} style={{
            background: o.accent?"var(--charcoal)":"var(--sand)",
            color: o.accent?"#fff":"var(--charcoal)",
            padding:22, borderTop:`3px solid ${o.accent?"var(--orange)":"var(--charcoal)"}`
          }}>
            <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:o.accent?"var(--orange)":"var(--muted)", fontWeight:700}}>{o.tag}</div>
            <h3 className="display" style={{fontSize:22, color:o.accent?"#fff":"var(--charcoal)", lineHeight:1.15, marginTop:6, marginBottom:8}}>{o.title}</h3>
            <div style={{fontSize:11, color:"var(--orange)", fontWeight:700, marginBottom:10}}>{o.who}</div>
            <p style={{fontSize:13.5, lineHeight:1.6, color:o.accent?"rgba(255,255,255,.8)":"var(--ink-2)", margin:0, marginBottom:14}}>{o.body}</p>
            <button className="btn-pill" style={{padding:"12px 18px", background:"var(--orange)", color:"#fff", width:"100%"}} onClick={()=>{
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

function MobileEnquiryForm() {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [stage, setStage] = React.useState("Exploring");
  const [msg, setMsg] = React.useState("");
  const [news, setNews] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Kapes Adventures enquiry — ${school || name || "school"}`;
    const body = [
      `Name: ${name}`, `Role: ${role}`, `School: ${school}`, `Email: ${email}`, `Stage: ${stage}`,
      news ? "Field-letter opt-in: yes" : "", "", "Message:", msg,
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:hello@kapesadventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const stages = ["Exploring","Year group identified","Budget in hand","Trip in pipeline","Reviewing existing provider"];
  const Field = ({label, placeholder, value, onChange, type}) => (
    <div>
      <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:6}}>{label}</label>
      <input type={type||"text"} placeholder={placeholder} value={value||""} onChange={e=>onChange&&onChange(e.target.value)}
        style={{width:"100%", padding:"12px 14px", border:"1px solid var(--line)", fontFamily:"var(--body)", fontSize:14, borderRadius:6, color:"var(--charcoal)", background:"var(--cream)", boxSizing:"border-box"}}/>
    </div>
  );
  return (
    <section style={{padding:"48px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">Or — write it all out</div>
      <h2 className="display" style={{marginTop:12, fontSize:28, lineHeight:1.05, marginBottom:14}}>The long-form <span className="accent">enquiry.</span></h2>
      <p style={{fontSize:14, lineHeight:1.6, color:"var(--ink-2)", marginBottom:24}}>
        Every enquiry is read by Matthew personally — no shared inbox, no auto-responder.
      </p>
      <form onSubmit={onSubmit} style={{background:"var(--cream)", padding:22, border:"1px solid var(--line)", borderRadius:8}}>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          <Field label="Your name" placeholder="Jane Holloway" value={name} onChange={setName}/>
          <Field label="Role" placeholder="Head of Geography" value={role} onChange={setRole}/>
          <Field label="School" placeholder="St. Bartholomew's" value={school} onChange={setSchool}/>
          <Field label="Email" placeholder="jholloway@stbarts.sch.uk" value={email} onChange={setEmail} type="email"/>
        </div>
        <div style={{marginTop:16}}>
          <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:8}}>Where are you in your thinking?</label>
          <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
            {stages.map((s)=>(
              <button key={s} type="button" onClick={()=>setStage(s)} style={{
                padding:"8px 12px", fontSize:11.5, fontWeight:600,
                border: stage===s?"1.5px solid var(--charcoal)":"1px solid var(--line)",
                background: stage===s?"var(--charcoal)":"transparent",
                color: stage===s?"#fff":"var(--ink-2)",
                borderRadius:999, cursor:"pointer"
              }}>{s}</button>
            ))}
          </div>
        </div>
        <div style={{marginTop:16}}>
          <label style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, display:"block", marginBottom:8}}>What's on your mind?</label>
          <textarea rows={5} placeholder="Anything. Context, constraints, the thing you're worried about." value={msg} onChange={e=>setMsg(e.target.value)}
            style={{width:"100%", padding:"12px 14px", border:"1px solid var(--line)", fontFamily:"var(--body)", fontSize:14, lineHeight:1.5, borderRadius:6, resize:"vertical", color:"var(--charcoal)", boxSizing:"border-box"}}/>
        </div>
        <div style={{display:"flex", alignItems:"flex-start", gap:8, marginTop:14, fontSize:12, color:"var(--ink-2)"}}>
          <input type="checkbox" id="news-mobile" checked={news} onChange={e=>setNews(e.target.checked)} style={{marginTop:3}}/>
          <label htmlFor="news-mobile" style={{lineHeight:1.4}}>Send the quarterly field letter (4× a year)</label>
        </div>
        <button type="submit" className="btn-pill btn-action" style={{marginTop:18, padding:"14px 22px", width:"100%"}}>Send to Matthew →</button>
        <div style={{marginTop:10, fontSize:11, color:"var(--muted)", lineHeight:1.4}}>Opens your mail client with everything filled in — review before sending.</div>
      </form>
    </section>
  );
}

function MobileOffices() {
  return (
    <section style={{padding:"48px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Where we sit</div>
      <h2 className="display" style={{marginTop:12, fontSize:24, lineHeight:1.1, marginBottom:24}}>
        One office. Plus a lot of <span className="accent">field time.</span>
      </h2>
      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        <div style={{background:"var(--sand)", padding:22, borderLeft:"3px solid var(--orange)"}}>
          <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>Head office</div>
          <h3 className="display" style={{fontSize:24, lineHeight:1.1, margin:"6px 0 10px"}}>Dubai · UAE</h3>
          <p style={{fontSize:13.5, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>
            Kapes Adventures FZ-LLC · Dubai. Where the schools team sits, calendars get built, and the first call happens.
          </p>
          <div style={{marginTop:14, paddingTop:12, borderTop:"1px dashed var(--line)", display:"flex", flexDirection:"column", gap:6, fontSize:13}}>
            <a href="mailto:hello@kapesadventures.com" style={{color:"var(--charcoal)", fontWeight:600, textDecoration:"underline", textUnderlineOffset:3}}>hello@kapesadventures.com</a>
            <div style={{color:"var(--muted)", fontSize:11, letterSpacing:".04em"}}>Mon–Fri · 9am–5pm</div>
          </div>
        </div>
        <div style={{background:"var(--sand)", padding:22}}>
          <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>On the ground</div>
          <h3 className="display" style={{fontSize:18, lineHeight:1.2, margin:"6px 0 10px"}}>In Kenya, on the programmes.</h3>
          <p style={{fontSize:13, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>
            Trip leaders, the farm crew, and our Kenyan partners are based at the programme sites. You'll meet them on Zoom during scoping, then in person on the trip.
          </p>
        </div>
      </div>
    </section>
  );
}

function MobileContactPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileContactHero/>
      <MobileContactOptions/>
      <MobileEnquiryForm/>
      <MobileOffices/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* =========================================================================
   MOBILE FOR-SCHOOLS PAGE
   ========================================================================= */

function MobileSchoolsHero() {
  return (
    <section style={{background:"var(--cream)", padding:"40px 22px 32px", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">For Schools · 26–27 enquiries open</div>
      <h1 className="display" style={{marginTop:14, fontSize:34, lineHeight:1.02, letterSpacing:"-.02em"}}>
        A school trip your bursar, head, and <span className="accent">trip coordinator</span> all sign off.
      </h1>
      <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", marginTop:16}}>
        Our flagship — <strong>Seeds2Education</strong> — runs year-round in Kenya. Two further programmes available. Best as a <strong>3-year partnership</strong>. From USD 2,600 / student.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:22}}>
        <button className="btn-pill btn-action" style={{padding:"15px 22px"}} onClick={bookCall}>Book a 30-min call →</button>
        <button className="btn-pill btn-ghost" style={{padding:"15px 22px"}} onClick={()=>khifiNavigate("lp")}>Take the 5-min scorecard</button>
      </div>
      <div style={{marginTop:24, paddingTop:20, borderTop:"1px solid var(--line)", display:"flex", gap:12, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, flexWrap:"wrap"}}>
        <span>Kenyan-led</span><span>·</span>
        <span>3 programmes</span><span>·</span>
        <span>1:10 ratio</span>
      </div>
    </section>
  );
}

function MobileIntroCallCard() {
  const items = [
    ["Your school's posture", "Where service learning sits in your curriculum today"],
    ["Cohort fit", "Year group, group size, time of year that works"],
    ["Programme match", "Seeds2Education / WEW / Community Conservation"],
    ["Practicalities", "Pricing, bespoke options, lead times, parent comms"],
    ["Next step", "Programme overview sent the same day if it's a fit"],
  ];
  return (
    <section style={{padding:"32px 22px", background:"var(--cream)"}}>
      <div style={{background:"var(--charcoal)", color:"#fff", padding:24, borderTop:"3px solid var(--orange)"}}>
        <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>The intro call</div>
        <h3 className="display" style={{color:"#fff", fontSize:22, marginBottom:16}}>What 30 minutes covers.</h3>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {items.map(([f,d])=>(
            <div key={f} style={{display:"flex", gap:10, paddingBottom:10, borderBottom:"1px solid #2a2a2a"}}>
              <div style={{width:18, height:18, background:"var(--orange)", color:"#fff", fontSize:10, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:3, flexShrink:0, marginTop:2}}>✓</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700, color:"#fff", fontSize:13}}>{f}</div>
                <div style={{fontSize:11.5, color:"#999", marginTop:2, lineHeight:1.4}}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-pill btn-action" style={{marginTop:18, padding:"13px 18px", width:"100%"}} onClick={bookCall}>Book the call →</button>
        <div style={{marginTop:10, fontSize:10.5, color:"#888", textAlign:"center"}}>Direct with Matthew Benjamin, founder.</div>
      </div>
    </section>
  );
}

function MobileWorries() {
  const worries = [
    {q:'"Is this just voluntourism with new wrapping?"',
      a:"No. The work, partnerships, and schedule are decided by Kenyan partners. Our flagship runs year-round whether your school visits or not. The other two are anchored on partner work that exists outside our trips.",
      link:"Read Our Approach", to:"approach"},
    {q:'"What\'s the price and what\'s included?"',
      a:"From USD 2,600 / student for a 7-night trip, excluding international flights. S2E USD 3,000 · WEW USD 2,850 · CC USD 2,600. No tiers within a programme.",
      link:"See pricing", to:"approach"},
    {q:'"What about child contact?"',
      a:"Students never have one-on-one contact with vulnerable children. Activities are designed around the work — building tanks, planting onions, painting classrooms — not around the children. Risk-assessed itineraries, 1:10 ratio.",
      link:"Safety detail", to:"approach"},
    {q:'"What will my child actually do?"',
      a:"Honest roles in real work. Planting alongside the farm crew. Painting a water tank. Helping with classroom refurbishment. Reflective sessions evenings. Closing ceremony.",
      link:"Programme overview", to:"program"},
    {q:'"How long does this take to set up?"',
      a:"First call: 30 min. Programme overview same day if a fit. SLT-ready pack within a week. Trip booked typically 2–4 months out.",
      link:"Get in touch", to:"contact"},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="eyebrow">5 questions every SLT meeting raises</div>
      <h2 className="display" style={{marginTop:12, fontSize:26, lineHeight:1.05, marginBottom:24}}>
        The answers we've <span className="accent">prepared for you.</span>
      </h2>
      <div style={{borderTop:"2px solid var(--charcoal)"}}>
        {worries.map((w,i)=>(
          <div key={i} style={{padding:"22px 0", borderBottom:"1px solid var(--line)"}}>
            <div style={{fontFamily:"var(--serif)", fontSize:16, fontStyle:"italic", color:"var(--charcoal)", lineHeight:1.45, marginBottom:12}}>{w.q}</div>
            <div style={{fontSize:13.5, lineHeight:1.6, color:"var(--ink-2)", marginBottom:12}}>{w.a}</div>
            <button className="btn-pill btn-ghost" style={{padding:"9px 14px", fontSize:11.5}} onClick={()=>khifiNavigate(w.to)}>{w.link} →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileProcess() {
  const steps = [
    {n:"01", t:"Intro call", dur:"30 min", d:"Direct with Matthew. No deck, no pitch — a conversation about whether we're a fit."},
    {n:"02", t:"Programme overview", dur:"Same day", d:"If we're a fit, we send a programme overview matched to your year group, timing, and group size."},
    {n:"03", t:"SLT pack", dur:"Within a week", d:"Parent letter template, safety overview, pricing, indicative itinerary."},
    {n:"04", t:"Confirmation + planning", dur:"2–4 months out", d:"Deposit secures dates. Detailed itinerary, parent comms, kit list, reflection materials."},
    {n:"05", t:"The trip", dur:"7 nights", d:"Kenyan trip leaders on the ground (1:10, min 2). Daily updates available. Closing ceremony."},
    {n:"06", t:"Post-trip reflection", dur:"After return", d:"Reflection materials, photo + video pack, optional student-led presentation back to the school."},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--cream)"}}>
      <div className="eyebrow">Process</div>
      <h2 className="display" style={{marginTop:12, fontSize:26, lineHeight:1.05, marginBottom:24}}>
        From first call to <span className="accent">post-trip reflection.</span>
      </h2>
      <div style={{borderLeft:"2px solid var(--charcoal)", paddingLeft:18}}>
        {steps.map(s=>(
          <div key={s.n} style={{paddingBottom:24, position:"relative"}}>
            <div style={{position:"absolute", left:-25, top:4, width:10, height:10, borderRadius:50, background:"var(--charcoal)"}}/>
            <div style={{fontFamily:"var(--display)", fontSize:18, color:"var(--charcoal)", opacity:.4, marginBottom:4, lineHeight:1}}>{s.n}</div>
            <div style={{fontSize:14, fontWeight:700, color:"var(--charcoal)", lineHeight:1.25, marginBottom:6}}>{s.t}</div>
            <div style={{fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>{s.dur}</div>
            <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileSchoolsProof() {
  const quotes = [
    {pull:"I expected the cultures wouldn't fit. I was wrong.",
      body:"I expected to find a country I wasn't really used to seeing. I was wrong. I've never met nicer people. They're more respectful than the people I have back in the Middle East.",
      ctx:"Student · BIS Jeddah · WEW · 2025"},
    {pull:"The generosity, the joy, the pride — despite the lack of resources.",
      body:"I haven't been surprised by the lack of resources — I've been surprised by the strong sense of community. The generosity, the joy, the pride. It all comes together.",
      ctx:"Student · BIS Jeddah · WEW · 2025"},
    {pull:"Visiting Hope School gave me a different perspective on life.",
      body:"My experience in Kenya was truly humbling. The hospitality is amazing. Back in Saudi we used to think our school wasn't nice. Visiting Hope School here gave me a completely different perspective on life.",
      ctx:"Student · BIS Jeddah · WEW · 2025"},
  ];
  return (
    <section style={{padding:"48px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="eyebrow">From a head of school</div>
      <h2 className="display" style={{marginTop:12, fontSize:26, lineHeight:1.05, marginBottom:8}}>The voices <span className="accent">your SLT will want to hear.</span></h2>
      <p style={{fontSize:13, color:"var(--muted)", marginBottom:24, lineHeight:1.5}}>From video debriefs after our 2025 cohorts. Permission to publish granted.</p>

      {/* Principal video */}
      <div style={{background:"var(--cream)", borderTop:"3px solid var(--orange)", marginBottom:18, overflow:"hidden"}}>
        <div style={{position:"relative", aspectRatio:"16/9", background:"#000"}}>
          <video src={VIDEO.brett} poster={VIDEO.brettPoster} controls preload="metadata" playsInline
            style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
        </div>
        <div style={{padding:20}}>
          <div className="display" style={{fontSize:18, lineHeight:1.15, marginBottom:4}}>Brett Girvin</div>
          <div style={{fontSize:12, color:"var(--ink-2)", lineHeight:1.5, marginBottom:14}}>Ex-principal · The Arbor School, Dubai</div>
          <div className="display" style={{fontSize:18, lineHeight:1.2, color:"var(--charcoal)", borderLeft:"3px solid var(--orange)", paddingLeft:14, marginBottom:14}}>
            "Mind-blowing to see those children in their uniforms — in school, happy, confident, ready to learn."
          </div>
          <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:13.5, lineHeight:1.65, color:"var(--ink-2)", margin:0}}>
            "Experiential learning brings to life what we can only do in theory in the classroom. Children can only do that in person."
          </p>
        </div>
      </div>

      <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, margin:"24px 0 12px"}}>Student voices · BIS Jeddah · WEW</div>
      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        {quotes.map((q,i)=>(
          <div key={i} style={{padding:20, background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--charcoal)"}}>
            <div className="display" style={{fontSize:18, lineHeight:1.2, color:"var(--charcoal)", marginBottom:12}}>"{q.pull}"</div>
            <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:13.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, marginBottom:12}}>{q.body}</p>
            <div style={{paddingTop:10, borderTop:"1px dashed var(--line)", fontSize:10, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{q.ctx}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileBoardPackCTA() {
  return (
    <section style={{padding:"48px 22px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"var(--orange)"}}>For your SLT</div>
      <h2 className="display" style={{color:"#fff", marginTop:12, fontSize:28, lineHeight:1.1, marginBottom:14}}>
        The 16-page <span className="accent">Board Pack.</span>
      </h2>
      <p style={{fontSize:14, lineHeight:1.65, color:"rgba(255,255,255,.78)", marginBottom:20}}>
        Editorial cover, decision ask, executive summary, day-by-day itinerary, curriculum alignment, safeguarding, risk register, transparent pricing — tailored to your cohort size, year group and dates.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <a href="/board-pack" target="_blank" rel="noopener" className="btn-pill btn-action" style={{padding:"14px 22px", textDecoration:"none", textAlign:"center"}}>Request your school's pack →</a>
      </div>
      <div style={{marginTop:18, fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", fontWeight:600}}>16 pages · A4 · Customised per school · Sent within 48h</div>
    </section>
  );
}

function MobileSchoolsCTA() {
  return (
    <section style={{padding:"48px 22px", background:"var(--cream)", borderTop:"1px solid var(--line)", textAlign:"center"}}>
      <div className="eyebrow" style={{justifyContent:"center"}}>Ready when you are</div>
      <h2 className="display" style={{marginTop:14, fontSize:26, lineHeight:1.05, marginBottom:24}}>
        One call. One programme overview. <span className="accent">A clear next step either way.</span>
      </h2>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <button className="btn-pill btn-action" style={{padding:"15px 22px"}} onClick={bookCall}>Book the call</button>
        <button className="btn-pill btn-ghost" style={{padding:"15px 22px"}} onClick={()=>khifiNavigate("programs")}>See the programmes</button>
      </div>
    </section>
  );
}

function MobileSchoolsPage() {
  return (
    <div>
      {window.MobileSiteNav ? <window.MobileSiteNav/> : <SiteNav/>}
      <MobileSchoolsHero/>
      <MobileIntroCallCard/>
      <MobileWorries/>
      <MobileProcess/>
      <MobileSchoolsProof/>
      <MobileBoardPackCTA/>
      <MobileSchoolsCTA/>
      {window.MobileFooter ? <window.MobileFooter/> : <Footer/>}
    </div>
  );
}

/* Expose */
Object.assign(window, {
  MobileLPPage,
  MobileProgramPage,
  MobileApproachPage,
  MobileProgramsPage,
  MobileImpactPage,
  MobileStoriesPage,
  MobileAboutPage,
  MobileContactPage,
  MobileSchoolsPage,
});
