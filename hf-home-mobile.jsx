/* HOMEPAGE — mobile-first redesign
   Renders when viewport < 768px.
   Different hero, different section order, mobile-specific cards, swipe carousels. */

function MobileHomeHero() {
  return (
    <section style={{position:"relative", minHeight:"calc(100vh - 64px)", color:"#fff", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
      <img src={IMG.hero} alt=""
        style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%"}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.92) 100%)"}}/>

      <div style={{position:"relative", padding:"0 22px 56px"}}>
        <div style={{
          display:"inline-flex", alignItems:"center", gap:10,
          padding:"7px 13px", borderRadius:50,
          background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.25)",
          backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)",
          fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700,
          color:"rgba(255,255,255,.95)", marginBottom:24,
        }}>
          <span style={{width:6, height:6, borderRadius:50, background:"var(--orange)"}}/>
          A different kind of school trip
        </div>

        <h1 className="display" style={{
          color:"#fff",
          fontSize:"clamp(46px, 13vw, 64px)",
          lineHeight:.96, letterSpacing:"-.02em", margin:0,
        }}>
          Your students<br/>don't need <span className="accent">to save Africa.</span>
        </h1>

        <p style={{
          color:"rgba(255,255,255,.85)", fontSize:17, lineHeight:1.5,
          marginTop:22, maxWidth:340,
        }}>
          A week inside real work in Kenya. The work runs whether you visit or not.
        </p>

        <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:32}}>
          <button
            onClick={()=>khifiNavigate("programs")}
            style={{
              padding:"17px 22px", borderRadius:50, border:"none",
              background:"var(--orange)", color:"#fff",
              fontSize:15, fontWeight:700, letterSpacing:".02em",
              display:"flex", alignItems:"center", justifyContent:"space-between",
              cursor:"pointer",
            }}>
            <span>See the programmes</span><span>→</span>
          </button>
          <button
            onClick={()=>khifiNavigate("lp")}
            style={{
              padding:"17px 22px", borderRadius:50,
              background:"transparent", color:"#fff",
              border:"1.5px solid rgba(255,255,255,.45)",
              fontSize:15, fontWeight:600,
              display:"flex", alignItems:"center", justifyContent:"space-between",
              cursor:"pointer",
            }}>
            <span>Take the 5-min Scorecard</span><span>→</span>
          </button>
        </div>

        <div style={{
          marginTop:36, paddingTop:20, borderTop:"1px solid rgba(255,255,255,.18)",
          display:"flex", justifyContent:"space-between", gap:18,
          fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:600,
        }}>
          <div>Founded 2025</div>
          <div>3 programmes</div>
          <div>1:10 ratio</div>
        </div>
      </div>
    </section>
  );
}

/* The essence — a one-line manifesto + portrait card */
function MobileEssence() {
  return (
    <section style={{padding:"64px 22px", background:"var(--cream)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>A manifesto · not a brochure</div>
      <h2 className="display" style={{fontSize:34, lineHeight:1.05, letterSpacing:"-.01em", margin:"0 0 20px"}}>
        Five commitments<br/>we'll <span className="accent">never quietly drop.</span>
      </h2>
      <p style={{fontSize:16, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>
        Our flagship programme runs year-round in Kenya, with a permanent crew. Your students join their work for a week. The crew keeps going for the other 51.
      </p>

      <div style={{
        marginTop:32, position:"relative",
        borderRadius:6, overflow:"hidden", aspectRatio:"4/5",
      }}>
        <img src={IMG.wewCelebration} alt="Hope School + visiting cohort, finished water tank"
          style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 35%", display:"block"}}/>
        <div style={{
          position:"absolute", left:14, right:14, bottom:14,
          background:"var(--charcoal)", color:"#fff",
          padding:"14px 16px", borderRadius:4,
        }}>
          <div style={{color:"var(--orange)", fontSize:9.5, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, marginBottom:6}}>
            Hope School · Water Empowering Women
          </div>
          <div style={{fontSize:12.5, lineHeight:1.5}}>
            Tank installed, classroom rebuilt, mural painted. Enrolment rose 40% in the weeks after.
          </div>
        </div>
      </div>
    </section>
  );
}

/* Manifesto — five points as a vertical list */
function MobileManifestoList() {
  const points = [
    { n:"01", t:"Our flagship runs all year.",
      b:"Seeds2Education operates continuously in Kenya. A permanent crew works the land week in, week out. Trips visit. They never start the work, and they never end it." },
    { n:"02", t:"Students plant the seed — or join it mid-stream.",
      b:"Sometimes they help start a project. Sometimes they join one already running. In every case the work is chosen and led by Kenyan partners." },
    { n:"03", t:"No orphanages. No classrooms with strangers.",
      b:"A six-day visit from unfamiliar adults is not education — it's disruption. We never place students in direct contact with vulnerable children." },
    { n:"04", t:"The community is the client. You are the guest.",
      b:"Every programme is shaped by Kenyan partners against their own priorities. If a project isn't useful to the community, we don't run it." },
    { n:"05", t:"Designed in Dubai. Delivered by Kenyans.",
      b:"Every trip is led on the ground by Kenyan trip leaders we contract directly. 1:10 leader-to-student ratio, minimum two leaders per trip." },
  ];
  return (
    <section style={{padding:"56px 22px 40px", background:"var(--cream)"}}>
      <div style={{borderTop:"2px solid var(--charcoal)"}}>
        {points.map(p=>(
          <div key={p.n} style={{padding:"24px 0", borderBottom:"1px solid var(--line)"}}>
            <div style={{display:"flex", gap:14, alignItems:"baseline", marginBottom:10}}>
              <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--orange)", fontWeight:700, lineHeight:1}}>{p.n}</div>
              <h3 className="display" style={{fontSize:22, lineHeight:1.15, margin:0, letterSpacing:"-.005em"}}>{p.t}</h3>
            </div>
            <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, paddingLeft:38}}>{p.b}</p>
          </div>
        ))}
      </div>
      <button
        onClick={()=>khifiNavigate("approach")}
        style={{
          marginTop:28, width:"100%", padding:"15px 22px", borderRadius:50,
          background:"transparent", color:"var(--charcoal)",
          border:"1.5px solid var(--charcoal)",
          fontSize:14, fontWeight:700, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"space-between",
        }}>
        <span>Read the full approach</span><span>→</span>
      </button>
    </section>
  );
}

/* Three programme cards — vertical stack with photo on top */
function MobileProgrammes() {
  const programmes = [
    {
      code:"S2E", color:"#e07a3f",
      headline:"A working farm that feeds 5,000 students a year.",
      img: IMG.farmGroupWide,
      cadence:"Year-round, 365 days",
      sub:"Seeds2Education · Kenya",
    },
    {
      code:"WEW", color:"#3a8a8a",
      headline:"Water tanks and refurbished classrooms.",
      img: IMG.wewFinishedTank,
      cadence:"Multi-year build cycles",
      sub:"Water Empowering Women · Kenya",
    },
    {
      code:"CC", color:"#5a7a4f",
      headline:"Five years of partner conservation work.",
      img: IMG.ccLookout,
      cadence:"Running since 2022",
      sub:"Community Conservation · Kenya",
    },
  ];
  return (
    <section style={{padding:"64px 22px", background:"var(--sand)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>What each programme delivers</div>
      <h2 className="display" style={{fontSize:32, lineHeight:1.05, margin:"0 0 18px", letterSpacing:"-.01em"}}>
        The trip is a chapter. <span className="accent">The work runs whether you visit or not.</span>
      </h2>
      <p style={{fontSize:15.5, lineHeight:1.55, color:"var(--ink-2)", margin:"0 0 32px"}}>
        Three different shapes of outcome — none of them depend on a school visit.
      </p>

      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        {programmes.map(p=>(
          <div key={p.code}
            onClick={()=>khifiNavigate("programs")}
            style={{
              background:"#fff",
              border:"1px solid var(--line)", borderRadius:6,
              overflow:"hidden", cursor:"pointer",
              boxShadow:"0 1px 3px rgba(0,0,0,.04)",
            }}>
            <div style={{position:"relative", aspectRatio:"16/10"}}>
              <img src={p.img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{
                position:"absolute", top:12, left:12,
                background:p.color, color:"#fff", fontSize:10, fontWeight:700,
                letterSpacing:".14em", textTransform:"uppercase", padding:"5px 10px", borderRadius:3,
              }}>{p.code}</div>
            </div>
            <div style={{padding:"18px 18px 20px"}}>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:8}}>
                {p.sub}
              </div>
              <h3 className="display" style={{fontSize:20, lineHeight:1.2, margin:"0 0 12px", letterSpacing:"-.005em"}}>
                {p.headline}
              </h3>
              <div style={{
                display:"flex", justifyContent:"space-between", alignItems:"center",
                paddingTop:12, borderTop:"1px solid var(--line)",
              }}>
                <span style={{fontSize:12, color:"var(--muted)", letterSpacing:".06em"}}>{p.cadence}</span>
                <span style={{fontSize:18, color:p.color}}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Voluntourism comparison — vertical stack with toggle */
function MobileVsVoluntourism() {
  const rows = [
    ["Who decides what gets done",  "The trip operator",          "The Kenyan community partner"],
    ["What happens between visits", "Often, very little",         "Year-round work continues"],
    ["The work output",             "Built for the visit",        "Built for the community"],
    ["Money to community",          "Marketing claim",            "Audited & published"],
  ];
  return (
    <section style={{padding:"64px 22px", background:"var(--cream)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>An honest comparison</div>
      <h2 className="display" style={{fontSize:32, lineHeight:1.05, margin:"0 0 28px", letterSpacing:"-.01em"}}>
        What makes us <span className="accent">different —</span><br/>in plain language.
      </h2>

      <div style={{border:"1px solid var(--line)", borderRadius:6, overflow:"hidden", background:"#fff"}}>
        {rows.map(([q,v,k], i)=>(
          <div key={i} style={{borderBottom: i===rows.length-1?"none":"1px solid var(--line)", padding:"18px 18px"}}>
            <div style={{fontSize:13, fontWeight:700, color:"var(--charcoal)", marginBottom:14, letterSpacing:".005em"}}>
              {q}
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr", gap:12}}>
              <div style={{padding:"10px 12px", background:"var(--sand)", borderRadius:4, borderLeft:"3px solid #c5b9a6"}}>
                <div style={{fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:4}}>Typical voluntourism</div>
                <div style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.4}}>{v}</div>
              </div>
              <div style={{padding:"10px 12px", background:"var(--sand)", borderRadius:4, borderLeft:"3px solid var(--orange)"}}>
                <div style={{fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:4}}>The Kapes way</div>
                <div style={{fontSize:14, color:"var(--charcoal)", lineHeight:1.4, fontWeight:500}}>{k}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Pull quote — student voice */
function MobilePullQuote() {
  return (
    <section style={{padding:"72px 22px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"rgba(255,255,255,.55)", marginBottom:24}}>
        Student voice · BIS Jeddah
      </div>
      <div style={{
        fontFamily:"var(--display)", fontSize:36, lineHeight:1.05, letterSpacing:"-.01em", color:"#fff",
      }}>
        "I expected the cultures wouldn't fit.<br/><span className="accent">I was wrong.</span>"
      </div>
      <p style={{
        fontFamily:"var(--serif)", fontStyle:"italic",
        fontSize:15, lineHeight:1.7, color:"rgba(255,255,255,.78)",
        marginTop:24, marginBottom:24,
      }}>
        "I expected to find a country I wasn't really used to seeing — that the culture and traditions wouldn't fit with mine back home. I was wrong. They're more respectful than the people I have around me back home."
      </p>
      <div style={{fontSize:12, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", fontWeight:600}}>
        Year 11 student · Water Empowering Women · Nov 2025
      </div>
    </section>
  );
}

/* CTA — two clear paths */
function MobileCTA() {
  return (
    <section style={{padding:"64px 22px 80px", background:"var(--charcoal)", color:"#fff", borderTop:"1px solid #262626"}}>
      <div className="eyebrow" style={{color:"var(--orange)", marginBottom:14}}>Two ways to start</div>
      <h2 className="display" style={{fontSize:36, lineHeight:1.02, color:"#fff", margin:"0 0 16px", letterSpacing:"-.015em"}}>
        A conversation,<br/>not a brochure.
      </h2>
      <p style={{fontSize:15.5, lineHeight:1.55, color:"rgba(255,255,255,.75)", margin:"0 0 32px"}}>
        Take our 5-minute Impact Scorecard, or book a 30-minute call with our Head of Schools.
      </p>

      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <button
          onClick={()=>khifiNavigate("lp")}
          style={{
            padding:"17px 22px", borderRadius:50, border:"none",
            background:"var(--orange)", color:"#fff",
            fontSize:15, fontWeight:700,
            display:"flex", alignItems:"center", justifyContent:"space-between",
            cursor:"pointer",
          }}>
          <span>Take the Impact Scorecard</span><span>→</span>
        </button>
        <button
          onClick={bookCall}
          style={{
            padding:"17px 22px", borderRadius:50,
            background:"transparent", color:"#fff",
            border:"1.5px solid rgba(255,255,255,.4)",
            fontSize:15, fontWeight:600,
            display:"flex", alignItems:"center", justifyContent:"space-between",
            cursor:"pointer",
          }}>
          <span>Book a 30-min call</span><span>→</span>
        </button>
      </div>
    </section>
  );
}

/* Trusted-by — horizontal scroll strip of school logos */
function MobileSocialProof() {
  const schools = [
    {name:"Fairgreen International School", logo:"photos/logos/fairgreen-logo.png"},
    {name:"BIS Jeddah",                     logo:"photos/logos/bisj-logo.png"},
    {name:"NLCS Dubai",                     logo:"photos/logos/nlcs-logo.png"},
    {name:"Arbor School",                   logo:"photos/logos/arbor-logo.png"},
    {name:"Cranleigh Abu Dhabi",            logo:"photos/logos/cac-logo.png"},
    {name:"American School of Dubai",       logo:"photos/logos/asd-logo.png"},
    {name:"ACS Hillingdon",                 logo:"photos/logos/acs-logo.png"},
  ];
  return (
    <section style={{padding:"40px 0", background:"var(--cream)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div style={{padding:"0 22px", marginBottom:18}}>
        <div className="eyebrow">Trusted by international schools</div>
      </div>
      <div style={{
        display:"flex", gap:0, overflowX:"auto", paddingLeft:22, paddingRight:22,
        scrollSnapType:"x mandatory",
        WebkitOverflowScrolling:"touch",
      }}>
        {schools.map(s=>(
          <div key={s.name} style={{
            flex:"0 0 140px", height:78, marginRight:1,
            background:"var(--sand)", border:"1px solid var(--line)",
            display:"flex", alignItems:"center", justifyContent:"center",
            scrollSnapAlign:"start",
          }}>
            <img src={s.logo} alt={s.name}
              style={{maxHeight:54, maxWidth:"75%", objectFit:"contain", filter:"grayscale(1)", opacity:.7}}/>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileHomePage() {
  return (
    <div>
      <SiteNav/>
      <MobileHomeHero/>
      <MobileSocialProof/>
      <MobileEssence/>
      <MobileManifestoList/>
      <MobileProgrammes/>
      <MobileVsVoluntourism/>
      <MobilePullQuote/>
      <MobileCTA/>
      <Footer/>
    </div>
  );
}
window.MobileHomePage = MobileHomePage;
