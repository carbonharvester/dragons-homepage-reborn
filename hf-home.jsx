/* HOMEPAGE — Manifesto + system diagram (Approach 4 at hi-fi) */

function HomeHero({ variant = "manifesto" }) {
  if (variant === "declaration") {
    // Alternate hero: big declarative statement over image
    return (
      <section style={{position:"relative", minHeight:680, color:"#fff", overflow:"hidden"}}>
        <img className="kapes" src={IMG.hero} alt="" style={{position:"absolute",inset:0, width:"100%", height:"100%", objectFit:"cover"}}/>
        <div style={{position:"absolute",inset:0, background:"linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.75) 100%)"}}/>
        <div className="container" style={{position:"relative", paddingTop:120, paddingBottom:100}}>
          <div className="eyebrow" style={{color:"#fff"}}><span style={{background:"#fff",width:24,height:1,display:"inline-block",marginRight:10}}/>Year-round impact in Kenya · funded by school trips</div>
          <h1 className="display" style={{color:"#fff", fontSize:"clamp(56px,6.4vw,108px)", marginTop:20, maxWidth:1100}}>
            Year-round impact. <span className="accent">Not just the week your cohort visits.</span>
          </h1>
          <p className="lead" style={{color:"rgba(255,255,255,.88)", maxWidth:640, marginTop:28}}>
            Seeds2Education employs 30+ Kenyans to grow food that feeds 45,000 student meals a year. The crew works the land every week of the year. Your cohort joins for one of them.
          </p>
          <div style={{display:"flex",gap:12, marginTop:36}}>
            <button className="btn-pill btn-action" style={{padding:"16px 28px", fontSize:14}} onClick={()=>khifiNavigate("programs")}>See the programmes →</button>
            <button className="btn-pill" style={{padding:"16px 28px", fontSize:14, background:"rgba(255,255,255,.12)", color:"#fff", border:"1.5px solid rgba(255,255,255,.5)"}} onClick={()=>khifiNavigate("lp")}>Take the 5-min assessment</button>
          </div>
        </div>
      </section>
    );
  }

  // MANIFESTO hero — the chosen direction
  return (
    <section style={{background:"var(--cream)", paddingTop:56, paddingBottom:72, borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:64, alignItems:"start"}}>
          <div>
            <div className="eyebrow">Year-round impact in Kenya · funded by school trips</div>
            <h1 className="display" style={{marginTop:20, fontSize:"clamp(48px, 5.2vw, 84px)"}}>
              Removing the barriers between children<br/>
              <span className="accent">and their classrooms.</span>
            </h1>
            <div style={{marginTop:28, maxWidth:560, fontSize:18, lineHeight:1.6, color:"var(--ink-2)"}}>
              Three Kenyan-led programmes work continuously in Kenya. <b>Seeds2Education</b> employs 30+ Kenyans to grow food that feeds 45,000 student meals a year — wages stay in the community, kids eat, kids stay in class. <b>Water Empowering Women</b> installs tanks at schools where girls were missing classes to collect water. <b>Community Conservation</b> funds school bursaries through Kenyan-led conservancy work. School cohorts join for a week. The work runs whether they do or not — that's the point.
            </div>
            <div style={{marginTop:18, fontSize:13, color:"var(--muted)", letterSpacing:".02em"}}>
              We also run a standalone 5-day CPD trip for educators.
            </div>
            <div style={{display:"flex",gap:12, marginTop:36, flexWrap:"wrap"}}>
              <button className="btn-pill btn-action" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("programs")}>See the programmes →</button>
              <button className="btn-pill btn-ghost" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("lp")}>Take the 5-min assessment</button>
            </div>
            <div style={{marginTop:40, display:"flex", gap:24, fontSize:12, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, flexWrap:"wrap"}}>
              <div>Dubai-based · Kenyan-led</div>
              <div>·</div>
              <div>30+ Kenyans on payroll</div>
              <div>·</div>
              <div>Year-round impact</div>
            </div>
          </div>
          <div style={{position:"relative", aspectRatio:"4/5"}}>
            <img className="kapes" src={IMG.wewCelebration} alt="Hope School + visiting cohort, finished water tank with mural behind" style={{borderRadius:6, objectFit:"cover", width:"100%", height:"100%", objectPosition:"center 35%"}}/>
            <div style={{position:"absolute", bottom:-18, left:-18, background:"var(--charcoal)", color:"#fff", padding:"14px 18px", maxWidth:300, fontSize:12, lineHeight:1.5}}>
              <div style={{color:"var(--orange)", fontSize:10, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, marginBottom:6}}>Hope School · Water Empowering Women</div>
              Hope School students and the visiting cohort, after the build. Tank installed, classroom rebuilt, mural painted. Enrolment rose 40% in the weeks after.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  const points = [
    { n:"01", t:"Social impact first. Trips are how we fund it.", b:"Kapes Adventures isn't a trip operator that does some good on the side. It's the inverse. The Kenyan teams running our three programmes are paid year-round — by us, from trip income — and they keep working whether your cohort visits this term or not. Every commercial decision serves the work, not the other way around." },
    { n:"02", t:"Salaries, not handouts.", b:"Seeds2Education employs 30+ Kenyans to grow onions on land donated by a partner school. The harvest is exchanged at 0.85 USD/kg with Food for Education — three subsidised school meals per kilogram. Wages stay in the community. Meals reach students. The aid model is broken; we're not interested in repeating it." },
    { n:"03", t:"Year-round impact. Yours is one week of it.", b:"Seeds2Education operates continuously in Kenya. The permanent crew works the land week in, week out — planting, weeding, harvesting on the season's schedule, not yours. Visiting cohorts join. They never start the work, and they never end it. The crew keeps going whether your group comes back next year or not." },
    { n:"04", t:"The community is the client. You are the guest.", b:"Every programme is shaped by Kenyan partners against their own priorities. If a project isn't useful to the community, we don't run it. Full stop. Activities are chosen because they matter to the people whose communities you're visiting — not because they look good in a brochure." },
    { n:"05", t:"No orphanages. No classrooms with strangers.", b:"A six-day visit from unfamiliar adults is not education — it's disruption. We never place visiting cohorts in direct contact with vulnerable children." },
    { n:"06", t:"Designed in Dubai. Delivered by Kenyans.", b:"Every trip is led on the ground by Kenyan trip leaders we contract directly. 1:10 leader-to-participant ratio, minimum two leaders per trip — regardless of group size." },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:56}}>
          <div>
            <div className="eyebrow">The Kapes Manifesto</div>
            <h2 className="display" style={{marginTop:14, maxWidth:860}}>
              Six commitments we'll <span className="accent">never quietly drop.</span>
            </h2>
          </div>
          <div style={{fontSize:12, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, maxWidth:240, textAlign:"right"}}>
            Written 2025.<br/>Unchanged since.
          </div>
        </div>
        <div style={{borderTop:"2px solid var(--charcoal)"}}>
          {points.map((p, i) => (
            <div key={i} style={{display:"grid", gridTemplateColumns:"90px 1fr 1fr", gap:40, padding:"36px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
              <div style={{fontFamily:"var(--display)", fontSize:40, color:"var(--charcoal)", opacity:.25, lineHeight:1}}>{p.n}</div>
              <h3 className="display" style={{fontSize:"clamp(24px,2.2vw,34px)"}}>{p.t}</h3>
              <div style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)", paddingTop:6}}>{p.b}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:48, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap"}}>
          <button className="btn-pill btn-primary" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("approach")}>Read the full approach →</button>
          <div style={{fontSize:13, color:"var(--muted)"}}>Written by Matthew Benjamin, founder. Reviewed with our Kenyan partners.</div>
        </div>
      </div>
    </section>
  );
}

function Diagram() {
  // What each programme actually delivers. Three different shapes of outcome — none of them dependent on the trip happening.
  const programmes = [
    {
      code:"S2E·01", flagship:true, color:"#22C55E", title:"Seeds2Education",
      headline:"A working farm. Year-round wages.",
      body:"30+ Kenyans paid year-round to grow onions on 1.5 acres of land donated by a partner school. The harvest is exchanged at 0.85 USD/kg with Food for Education — three subsidised school meals per kilogram. Wages stay in the community. Kids eat. Kids stay in class. The visiting cohort joins the work for a week — they're a chapter, not the whole story.",
      stats:[["30+","Kenyans · paid year-round"], ["45,000","meals · forecast Y1"], ["1.5","acres of farmland"]],
    },
    {
      code:"WEW·02", color:"#F43F5E", title:"Water Empowering Women",
      headline:"Tanks at schools where girls were dropping out.",
      body:"When water is scarce, girls walk hours to fetch it — and miss class. We install tanks at partner schools so they don't. The build happens with the visiting cohort, but the infrastructure stays. Hope School fills the tank every day. Enrolment rose 40% in the weeks after our first build. We're not interested in tanks that get installed for the photo and stop working in two years.",
      stats:[["+40%","enrolment · post-build"], ["1 tank","installed at Hope School"], ["40+","children · daily clean water"]],
    },
    {
      code:"CC·03", color:"#3B82F6", title:"Community Conservation",
      headline:"A different mental model of Africa.",
      body:"Kenyans run the wildlife conservancy at the heart of CC. Kenyans run the carbon-neutral garment factory. Kenyans run the community enterprises that sit alongside both. 50% of REDD+ profits fund school bursaries. The impact your cohort takes home is the collapse of the single-story narrative — not a saviour fantasy, an honest one. The conservancy site has been running this way since long before we showed up.",
      stats:[["50%","REDD+ profits · bursaries"], ["3","Kenyan-led systems on site"], ["since 2022","first cohort"]],
    },
  ];

  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">What each programme actually does</div>
        <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>
          Three barriers to education.<br/>
          <span className="accent">Three Kenyan-led ways to remove them.</span>
        </h2>
        <p className="lead" style={{maxWidth:820, marginBottom:48, color:"var(--ink-2)"}}>
          Hunger. Water scarcity. Lack of livelihood. Each programme exists because one of those things keeps children out of school in Kenya. We employ Kenyans to fix it — year-round, regardless of whether a cohort visits this term. Trip income funds the work; the work compounds whether the trip happens or not. That's the whole anti-voluntourism point in one paragraph.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
          {programmes.map((p)=>(
            <div key={p.code} style={{
              background:"var(--cream)",
              border: p.flagship ? "2px solid var(--orange)" : "1px solid var(--line)",
              borderTop: `4px solid ${p.color}`,
              padding:28,
              display:"flex",
              flexDirection:"column",
              gap:14,
              boxShadow: p.flagship ? "0 14px 32px rgba(255,119,0,.14)" : "none",
            }}>
              <div style={{display:"flex", alignItems:"center", gap:8, justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems:"center", gap:8}}>
                  <span style={{width:9, height:9, borderRadius:50, background:p.color}}/>
                  <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".12em", color: p.flagship?"var(--orange)":"var(--muted)", fontWeight:700}}>{p.code}</span>
                </div>
                {p.flagship && <span style={{fontSize:9, background:"var(--orange)", color:"#fff", padding:"3px 8px", borderRadius:3, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700}}>★ Flagship</span>}
              </div>
              <div style={{fontFamily:"var(--display)", fontSize:18, color:"var(--muted)", lineHeight:1.15, letterSpacing:".01em"}}>{p.title}</div>
              <h3 className="display" style={{fontSize:"clamp(22px,1.9vw,28px)", lineHeight:1.15, margin:0}}>{p.headline}</h3>
              <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{p.body}</p>
              <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, marginTop:12, paddingTop:18, borderTop:"1px solid var(--line)"}}>
                {p.stats.map(([n,l],i)=>(
                  <div key={i} style={{paddingLeft: i===0?0:14, borderLeft: i===0?"none":"1px solid var(--line)"}}>
                    <div className="display tnum" style={{fontSize:22, color:p.color, lineHeight:1.05}}>{n}</div>
                    <div style={{fontSize:10, color:"var(--ink-2)", marginTop:4, lineHeight:1.4, letterSpacing:".02em"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Chip({children, hot, off}){
  return <div style={{
    padding:"6px 11px", fontSize:11, fontWeight:700, letterSpacing:".08em",
    border: hot ? "none": off ? "1px dashed var(--line)":"1px solid var(--line)",
    background: hot ? "var(--orange)":"transparent",
    color: hot ? "#fff": off ? "var(--muted)":"var(--ink-2)",
    borderRadius:999,
    textTransform:"uppercase",
    opacity: off? .5 : 1,
  }}>{children}</div>;
}
function ProgramNode({ color, code, title, sub, cadence, img }) {
  return (
    <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:8, padding:18, display:"grid", gridTemplateColumns:"64px 1fr", gap:14, alignItems:"center"}}>
      <div style={{width:64, height:64, borderRadius:6, overflow:"hidden"}}>
        <img className="kapes" src={img} alt=""/>
      </div>
      <div>
        <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:4}}>
          <span style={{width:8, height:8, borderRadius:50, background:color}}/>
          <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".1em", color:"var(--muted)", fontWeight:600}}>{code}</span>
        </div>
        <div style={{fontFamily:"var(--display)", fontSize:17, lineHeight:1.1, color:"var(--charcoal)"}}>{title}</div>
        <div style={{fontSize:12, color:"var(--muted)", marginTop:3}}>{sub}</div>
        <div style={{fontSize:10, marginTop:6, letterSpacing:".1em", textTransform:"uppercase", color:color, fontWeight:700}}>{cadence}</div>
      </div>
    </div>
  );
}
function Stat({n,l}){
  return (
    <div style={{background:"var(--cream)", borderTop:"2px solid var(--charcoal)", padding:"20px 4px"}}>
      <div className="display tnum" style={{fontSize:44, color:"var(--charcoal)"}}>{n}</div>
      <div style={{fontSize:12, color:"var(--ink-2)", marginTop:8, lineHeight:1.4}}>{l}</div>
    </div>
  );
}

function Audiences() {
  const groups = [
    {
      tag:"For schools",
      title:"Student cohorts.",
      body:"Year 10–12 cohorts visit one of the three programmes for a week. CAS / EE / DofE-eligible. The bookable shape we've run since 2022 — Fairgreen, NLCS, ASD, Arbor and others.",
      meta:"7-day trip · Y10–12 · 1:10 ratio",
      cta:"For schools →",
      route:"schools",
      color:"#22C55E",
    },
    {
      tag:"For educators",
      title:"A standalone CPD trip.",
      body:"Five days inside Kenyan-led social impact work — all three programmes, in one trip. A serious professional development experience for teachers and school leaders. Independent of any school booking.",
      meta:"5-day CPD · S2E + WEW + CC · Small groups",
      cta:"For educators →",
      route:"teachers",
      color:"#F43F5E",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Two products · same impact engine</div>
        <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>
          The school trip. <span className="accent">The educator CPD trip.</span>
        </h2>
        <p className="lead" style={{maxWidth:780, marginBottom:48, color:"var(--ink-2)"}}>
          Both join the same year-round work in Kenya. School cohorts visit one of the three programmes for a week. The CPD trip is a separate, standalone product for educators — not a sales pipeline for school bookings, just five days of serious professional development inside the work.
        </p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:18, maxWidth:980}}>
          {groups.map((g)=>(
            <div key={g.tag} style={{
              background:"var(--sand)",
              border:"1px solid var(--line)",
              borderTop:`4px solid ${g.color}`,
              padding:28,
              display:"flex",
              flexDirection:"column",
              gap:14,
            }}>
              <div style={{display:"flex", alignItems:"center", gap:8}}>
                <span style={{width:9, height:9, borderRadius:50, background:g.color}}/>
                <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".14em", color:"var(--muted)", fontWeight:700, textTransform:"uppercase"}}>{g.tag}</span>
              </div>
              <h3 className="display" style={{fontSize:"clamp(22px,1.9vw,28px)", lineHeight:1.15, margin:0}}>{g.title}</h3>
              <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{g.body}</p>
              <div style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, paddingTop:14, borderTop:"1px solid var(--line)"}}>{g.meta}</div>
              <button className="btn-pill btn-ghost" style={{padding:"11px 18px", fontSize:13, alignSelf:"flex-start"}} onClick={()=>khifiNavigate(g.route)}>{g.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VsVoluntourism() {
  const rows = [
    ["Who decides what gets done",      "The trip operator",          "The Kenyan community partner"],
    ["Who delivers the trip",           "Trip leaders flown in",      "Kenyan trip leaders (1:10, min 2)"],
    ["Long-term jobs created",          "None — staff go home with the cohort", "30+ Kenyans on year-round payroll across the three programmes"],
    ["What cohorts do",                 "A role invented for them",   "Real contribution — sometimes starting, sometimes joining mid-stream"],
    ["What happens after the trip",     "The site goes quiet",        "Wages keep flowing, crews keep working. The Seeds2Education farm runs week in, week out — no school visit required."],
    ["Who the work is really for",      "The visiting cohort",        "Kenyan kids in classrooms — barriers removed by Kenyans we employ"],
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">An honest comparison</div>
        <h2 className="display" style={{marginTop:14, marginBottom:40, maxWidth:900}}>
          What makes us <span className="accent">different —</span> in plain language.
        </h2>
        <div style={{border:"1px solid var(--line)", borderRadius:10, overflow:"hidden"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", background:"var(--charcoal)", color:"#fff", padding:"18px 24px", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>
            <div>The question</div>
            <div style={{opacity:.55}}>Typical voluntourism</div>
            <div style={{color:"var(--orange)"}}>The Kapes model</div>
          </div>
          {rows.map(([q,v,k], i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", padding:"22px 24px", background: i%2? "var(--cream)":"var(--sand)", alignItems:"start", fontSize:15, borderTop: i===0? "none":"1px solid var(--line)"}}>
              <div style={{fontWeight:600, color:"var(--charcoal)"}}>{q}</div>
              <div style={{color:"var(--muted)"}}>{v}</div>
              <div style={{color:"var(--charcoal)", fontWeight:500}}>{k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const schools = [
    {name:"Fairgreen International School",         short:"Fairgreen",            city:"Dubai · UAE",      logo:"photos/logos/fairgreen-logo.png"},
    {name:"British International School of Jeddah", short:"BISJ",                 city:"Jeddah · KSA",      logo:"photos/logos/bisj-logo.png"},
    {name:"The Arbor School",                       short:"The Arbor School",     city:"Dubai · UAE",       logo:"photos/logos/arbor-logo.png"},
    {name:"NLCS Dubai",                             short:"NLCS Dubai",           city:"Dubai · UAE",       logo:"photos/logos/nlcs-logo.png"},
    {name:"American School of Dubai",               short:"American School of Dubai", city:"Dubai · UAE",   logo:"photos/logos/asd-logo.png"},
    {name:"American Community School · Abu Dhabi",  short:"ACS Abu Dhabi",        city:"Abu Dhabi · UAE",   logo:"photos/logos/acs-logo.png"},
    {name:"Cairo American College",                 short:"Cairo American College", city:"Cairo · Egypt",   logo:"photos/logos/cac-logo.png"},
  ];
  const countries = Array.from(new Set(schools.map(s => s.city.split(" · ")[1]))).length;
  return (
    <section style={{padding:"80px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        {/* Header — confident stat-led intro instead of small all-caps eyebrow */}
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", flexWrap:"wrap", gap:24, marginBottom:44, paddingBottom:22, borderBottom:"1px solid var(--line)"}}>
          <div style={{maxWidth:620}}>
            <div className="eyebrow" style={{marginBottom:12}}>Schools whose Kenya trips we've designed</div>
            <h2 className="display" style={{fontSize:"clamp(24px,2.4vw,36px)", lineHeight:1.15, margin:0}}>
              <span className="tnum" style={{color:"var(--orange)"}}>{schools.length}</span> schools across <span className="tnum">{countries}</span> countries — since 2022.
            </h2>
          </div>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>● Across MENA · Trips designed by Kapes</div>
        </div>

        {/* Logo grid — unified treatment, hover restores colour */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:1, background:"var(--line)", border:"1px solid var(--line)"}}>
          {schools.map((s)=>(
            <div key={s.name} title={s.name} style={{
              padding:"32px 14px",
              minHeight:160,
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center",
              gap:14,
              background:"var(--sand)",
              transition:"background .2s",
              cursor:"default",
            }}
            onMouseEnter={(e)=>{ e.currentTarget.style.background = "var(--cream)"; const img = e.currentTarget.querySelector('img'); if (img) { img.style.filter = "grayscale(0)"; img.style.opacity = "1"; } const ph = e.currentTarget.querySelector('[data-placeholder]'); if (ph) { ph.style.opacity = "1"; } }}
            onMouseLeave={(e)=>{ e.currentTarget.style.background = "var(--sand)"; const img = e.currentTarget.querySelector('img'); if (img) { img.style.filter = "grayscale(1)"; img.style.opacity = "0.6"; } const ph = e.currentTarget.querySelector('[data-placeholder]'); if (ph) { ph.style.opacity = "0.5"; } }}
            >
              <div style={{height:72, display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
                {s.logo ? (
                  <img src={s.logo} alt={s.name} style={{maxHeight:72, maxWidth:"100%", width:"auto", objectFit:"contain", display:"block", filter:"grayscale(1)", opacity:.6, transition:"filter .25s, opacity .25s"}}/>
                ) : (
                  <div data-placeholder style={{fontFamily:"var(--display)", fontSize:15, color:"var(--charcoal)", textAlign:"center", lineHeight:1.15, opacity:.5, transition:"opacity .25s", letterSpacing:"-.005em"}}>{s.short}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section" style={{padding:"100px 0", background:"var(--charcoal)", color:"#fff"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"center"}}>
        <div>
          <div className="eyebrow" style={{color:"var(--orange)"}}>Two ways to start</div>
          <h2 className="display" style={{color:"#fff", marginTop:14}}>
            Start with a question, <br/>
            not a brochure.
          </h2>
          <p className="lead" style={{color:"rgba(255,255,255,.75)", marginTop:18, maxWidth:460}}>
            Take our 5-minute Impact Scorecard and see where your existing program sits. Or book a 30-minute call with our Head of Schools.
          </p>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:14}}>
          <div style={{border:"1px solid #333", padding:28, borderRadius:10, background:"#161616"}}>
            <div style={{fontSize:10, letterSpacing:".14em", color:"var(--orange)", textTransform:"uppercase", fontWeight:700, marginBottom:8}}>Self-serve</div>
            <div className="display" style={{color:"#fff", fontSize:26, marginBottom:6}}>Impact Scorecard</div>
            <div style={{fontSize:13, color:"rgba(255,255,255,.6)", marginBottom:18}}>5 minutes · 12 questions · diagnostic report delivered instantly.</div>
            <button className="btn-pill btn-action" style={{padding:"12px 22px"}}>Take it now →</button>
          </div>
          <div style={{border:"1px solid #333", padding:28, borderRadius:10, background:"#161616"}}>
            <div style={{fontSize:10, letterSpacing:".14em", color:"var(--orange)", textTransform:"uppercase", fontWeight:700, marginBottom:8}}>With a human</div>
            <div className="display" style={{color:"#fff", fontSize:26, marginBottom:6}}>30-min intro call</div>
            <div style={{fontSize:13, color:"rgba(255,255,255,.6)", marginBottom:18}}>Direct with Matthew Benjamin, founder. Not a sales pitch — a conversation about what your school actually wants.</div>
            <button className="btn-pill" style={{padding:"12px 22px", background:"#fff", color:"var(--charcoal)"}} onClick={bookCall}>Book a time →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TripVideo() {
  const posterSrc = VIDEO.s2eFullPoster;
  const videoSrc = VIDEO.s2eFull;
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:40, gap:40, flexWrap:"wrap"}}>
          <div>
            <div className="eyebrow" style={{color:"var(--orange)"}}>Watch · 3 min · full trip film</div>
            <h2 className="display" style={{marginTop:14, maxWidth:820, color:"#fff"}}>
              The week, <span className="accent">from a student's hands.</span>
            </h2>
          </div>
          <div style={{fontSize:13, color:"rgba(255,255,255,.6)", maxWidth:360, lineHeight:1.55}}>
            The full Seeds2Education trip recap — Fairgreen International School cohort, November 2025. Farmland transformation, the Food for Education partnership, Nairobi National Park, Ngong Hills hike, the Maasai meetup, and the closing ceremony.
          </div>
        </div>

        <div style={{position:"relative", aspectRatio:"16/9", borderRadius:10, overflow:"hidden", border:"1px solid rgba(255,255,255,.12)"}}>
          {videoSrc ? (
            <video src={videoSrc} poster={posterSrc} controls style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
          ) : (
            <>
              <img src={posterSrc} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(.55)"}}/>
              <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.55) 100%)"}}/>
              {/* Play button */}
              <button style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:92, height:92, borderRadius:"50%", background:"var(--orange)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 12px 40px rgba(0,0,0,.45)"}}>
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none" style={{marginLeft:4}}>
                  <path d="M2 2L26 16L2 30V2Z" fill="#fff"/>
                </svg>
              </button>
              {/* Corner meta */}
              <div style={{position:"absolute", top:20, left:20, display:"flex", gap:8, alignItems:"center"}}>
                <span style={{display:"inline-block", width:8, height:8, borderRadius:"50%", background:"var(--orange)"}}/>
                <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"#fff"}}>Seeds2Education · Fairgreen · Nov 2025</span>
              </div>
              <div style={{position:"absolute", bottom:20, left:20, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.75)", fontWeight:600}}>
                Full 3-min trip recap
              </div>
            </>
          )}
        </div>

        <div style={{marginTop:20, fontSize:11, color:"rgba(255,255,255,.6)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>
          Full trip recap · Fairgreen International School · 7 nights · November 2025
        </div>
      </div>
    </section>
  );
}

function MediaStrip() {
  const [playing, setPlaying] = React.useState(null);
  const items = [
    {kind:"Radio interview", outlet:"Dubai Eye 103.8",        note:"Founder interview on UAE's leading talk-radio station — the Fairgreen International School trip and the Kapes Adventures model.", media:"https://res.cloudinary.com/dng12bd0a/video/upload/f_auto,q_auto/v1777703190/dubai_eye_fairgreen_trip_full_radio_interview_gcvo31.mp4"},
    {kind:"Feature",         outlet:"Education UAE",          note:"Profile on Kapes Adventures and the Kenya programmes — published in Education UAE's digital edition.", url:"https://portfolio.quantummedia.me/view/815469704/200/"},
    {kind:"Feature",         outlet:"Education Saudi",        note:"Coverage of the BIS Jeddah Water Empowering Women cohort — published in Education Saudi's digital edition.", url:"https://portfolio.quantummedia.me/view/210698821/118/"},
    {kind:"Podcast",         outlet:"QTheVoices",             note:"Founder interview on QTheVoices — educational travel, ethical school trips, and the Kapes Adventures model.", embed:"https://www.youtube.com/embed/LOYMYkjvLEc"},
  ];
  return (
    <section style={{padding:"72px 0", background:"var(--cream)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", flexWrap:"wrap", gap:24, marginBottom:32, paddingBottom:18, borderBottom:"1px solid var(--line)"}}>
          <div style={{maxWidth:560}}>
            <div className="eyebrow">Press · Media</div>
            <h2 className="display" style={{fontSize:"clamp(22px,2.2vw,32px)", lineHeight:1.15, marginTop:12, margin:0}}>
              Featured in.
            </h2>
          </div>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>● 4 mentions · 2025</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0, background:"var(--line)", border:"1px solid var(--line)"}}>
          {items.map((m, i)=>{
            const interactive = m.media || m.embed || m.url;
            const onClick = (m.media || m.embed) ? ()=>setPlaying(m) : (m.url ? ()=>window.open(m.url, "_blank", "noopener") : undefined);
            const ctaLabel = m.media ? "Listen" : m.embed ? "Watch" : m.url ? "Read article" : null;
            const ctaIcon  = m.media ? "▶" : m.embed ? "▶" : "↗";
            return (
              <div key={i}
                   onClick={onClick}
                   style={{padding:"28px 22px", background:"var(--cream)", display:"flex", flexDirection:"column", gap:8, minHeight:180, cursor: interactive?"pointer":"default", transition:"background .2s", position:"relative"}}
                   onMouseEnter={interactive ? (e)=>{e.currentTarget.style.background="var(--sand)";} : undefined}
                   onMouseLeave={interactive ? (e)=>{e.currentTarget.style.background="var(--cream)";} : undefined}>
                <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{m.kind}</div>
                <div className="display" style={{fontSize:"clamp(18px,1.6vw,22px)", lineHeight:1.2}}>{m.outlet}</div>
                <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.55, flex:1}}>{m.note}</div>
                {ctaLabel && (
                  <div style={{display:"inline-flex", alignItems:"center", gap:8, marginTop:6, fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--charcoal)", fontWeight:700}}>
                    <span style={{width:24, height:24, borderRadius:"50%", background:"var(--orange)", color:"#fff", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:10}}>{ctaIcon}</span>
                    {ctaLabel}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal player */}
      {playing && (
        <div onClick={()=>setPlaying(null)} style={{position:"fixed", inset:0, background:"rgba(0,0,0,.78)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 24px", cursor:"pointer"}}>
          <div onClick={(e)=>e.stopPropagation()} style={{background:"var(--charcoal)", borderRadius:12, overflow:"hidden", maxWidth:920, width:"100%", boxShadow:"0 40px 100px rgba(0,0,0,.6)", cursor:"default"}}>
            <div style={{padding:"18px 22px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #262626"}}>
              <div>
                <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{playing.kind}</div>
                <div style={{fontFamily:"var(--display)", fontSize:18, color:"#fff", marginTop:4}}>{playing.outlet}</div>
              </div>
              <button onClick={()=>setPlaying(null)} style={{background:"transparent", border:"1px solid rgba(255,255,255,.3)", color:"#fff", padding:"8px 14px", borderRadius:999, fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, cursor:"pointer"}}>Close ✕</button>
            </div>
            {playing.embed ? (
              <div style={{position:"relative", aspectRatio:"16/9", background:"#000"}}>
                <iframe src={`${playing.embed}?autoplay=1`} title={playing.outlet} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{position:"absolute", inset:0, width:"100%", height:"100%", border:"none"}}/>
              </div>
            ) : (
              <video src={playing.media} controls autoPlay style={{width:"100%", height:"auto", maxHeight:"70vh", display:"block", background:"#000"}}/>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function BarriersToEducation() {
  const cards = [
    {
      tag:"Uniform · the original barrier",
      programme:"Kapes Uniforms",
      sister:true,
      color:"#FF7700",
      img: IMG.togo25Distribution,
      imgPos:"center 50%",
      body:"Where Kapes started, in 2020. A study showed free uniforms reduce absenteeism in Kenyan primary schools. The model is per-student: for every student a partner school dresses, we donate a free uniform to a child in need. Active in Kenya and Togo — most recent drive: Togo 2025.",
    },
    {
      tag:"Hunger",
      programme:"Seeds2Education",
      color:"#22C55E",
      img: IMG.farmKenyanKid,
      imgPos:"center 30%",
      body:"A child can't focus when they're hungry. We turn unused school land into productive onion farms; the harvest is exchanged for school meals via Food for Education. The kids eat, they focus, they stay.",
    },
    {
      tag:"Water scarcity",
      programme:"Water Empowering Women",
      color:"#F43F5E",
      img: IMG.wewPaintingTank,
      imgPos:"center 30%",
      body:"Drought is real and worsening. When water is scarce, girls walk to fetch it — and miss school. Unclean water makes kids sick. We install tanks at partner schools. At Hope School, enrolment rose 40% in the weeks after our build.",
    },
    {
      tag:"Seeing the system",
      programme:"Community Conservation",
      color:"#3B82F6",
      img: IMG.ccFactory,
      imgPos:"center 40%",
      body:"The Kenyan conservancy at the heart of CC funds school bursaries with 50% of its REDD+ profits — students see the loop between conservation, manufacturing, and education on a single site.",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Why we do this</div>
        <h2 className="display" style={{marginTop:14, marginBottom:18, maxWidth:1000}}>
          Every Kapes programme — from uniforms to onions to water — exists to <span className="accent">remove a barrier to education.</span>
        </h2>
        <p className="lead" style={{maxWidth:780, marginBottom:48, color:"var(--ink-2)"}}>
          The same idea has run through both businesses since Kapes Uniforms launched in 2020. A child has the right to an education. Our job is to identify what's stopping them — and remove it. The barrier changes. The mission doesn't.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:18}}>
          {cards.map((c)=>(
            <div key={c.tag} style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:`3px solid ${c.color}`, display:"flex", flexDirection:"column", overflow:"hidden"}}>
              <div style={{position:"relative", aspectRatio:"4/3", background:"var(--charcoal)"}}>
                <img src={c.img} alt={c.programme} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:c.imgPos, display:"block"}}/>
                {c.sister && <span style={{position:"absolute", top:12, right:12, fontSize:9, background:"#fff", color:"var(--charcoal)", padding:"4px 10px", borderRadius:3, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>Sister brand</span>}
              </div>
              <div style={{padding:22, display:"flex", flexDirection:"column", gap:10, flex:1}}>
                <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:c.color, fontWeight:700}}>{c.tag}</div>
                <div className="display" style={{fontSize:22, lineHeight:1.15, color:"var(--charcoal)"}}>{c.programme}</div>
                {c.note && <div style={{fontSize:11, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>{c.note}</div>}
                <p style={{fontSize:14, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function MultiYearVision() {
  const years = [
    { y:"Year 1", t:"Plant the seed", b:"A cohort starts the work — helping clear and develop unused school land into a pilot farm, or installing a water tank and refurbishing the first classroom."},
    { y:"Year 2–3", t:"Build the system", b:"Subsequent cohorts add to it: more beds, more crops, more tanks, more classrooms refurbished. The community continues running it between visits."},
    { y:"Year 3", t:"See the transformation", b:"A thriving onion farm feeding a partner-school's lunch programme. A school with reliable water, growing enrolment, and a transformed grounds. Year 1's cohort can come back as alumni."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Designed as 3 year partnerships</div>
        <h2 className="display" style={{marginTop:14, marginBottom:18, maxWidth:920}}>
          A trip is a chapter.<br/>
          <span className="accent">A partnership is the story.</span>
        </h2>
        <p className="lead" style={{maxWidth:680, marginBottom:48, color:"var(--ink-2)"}}>
          One school. One programme. Three years. Year 1's students help start something — a farm, a tank, a classroom. Year 3's students see what their school built. The 40% enrolment increase at our Water Empowering Women partner school in the weeks after our build is what this looks like immediately — three years compounds it.
        </p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:0, borderTop:"2px solid var(--charcoal)"}}>
          {years.map((y,i)=>(
            <div key={y.y} style={{
              paddingTop:28,
              paddingBottom:32,
              paddingLeft: i===0 ? 0 : 24,
              paddingRight: i===years.length-1 ? 0 : 24,
              borderRight: i===years.length-1 ? "none" : "1px solid var(--line)",
            }}>
              <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--charcoal)", opacity:.3, marginTop:-8, marginBottom:18}}>{y.y}</div>
              <div className="display" style={{fontSize:22, lineHeight:1.2, marginBottom:12}}>{y.t}</div>
              <div style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.6}}>{y.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff", borderTop:"1px solid #262626", borderBottom:"1px solid #262626"}}>
      <div className="container" style={{maxWidth:980, textAlign:"center"}}>
        <div className="eyebrow" style={{justifyContent:"center", color:"rgba(255,255,255,.55)"}}>Student voice · BIS Jeddah · Water Empowering Women</div>
        <div style={{marginTop:30, fontFamily:"var(--display)", fontSize:"clamp(36px,4.4vw,68px)", lineHeight:1.05, letterSpacing:"-.01em", color:"#fff"}}>
          "I expected the cultures<br/>wouldn't fit. <span className="accent">I was wrong.</span>"
        </div>
        <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.7, color:"rgba(255,255,255,.78)", marginTop:32, maxWidth:680, marginInline:"auto"}}>
          "I expected to find a country I wasn't really used to seeing — that the culture and traditions wouldn't fit with mine back home. I was wrong. They're more respectful than the people I have back in the Middle East."
        </p>
        <div style={{marginTop:24, fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>Student · BIS Jeddah · 2025</div>
      </div>
    </section>
  );
}

function PrincipalQuote() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const start = () => {
    setPlaying(true);
    requestAnimationFrame(()=> { if (videoRef.current) { videoRef.current.play().catch(()=>{}); } });
  };
  return (
    <section style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"end", flexWrap:"wrap", gap:24, marginBottom:36}}>
          <div>
            <div className="eyebrow">From a head of school</div>
            <h2 className="display" style={{marginTop:14, maxWidth:920, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>
              The full circle, in his own words.
            </h2>
          </div>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>● Watch · 2 min</div>
        </div>

        <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", overflow:"hidden"}}>
          {/* Video — full-width 16:9 with branded play overlay */}
          <div style={{position:"relative", aspectRatio:"16/9", background:"#000", cursor: playing ? "default" : "pointer"}} onClick={!playing ? start : undefined}>
            {playing ? (
              <video
                ref={videoRef}
                src={VIDEO.brett}
                poster={VIDEO.brettPoster}
                controls
                preload="metadata"
                playsInline
                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
              />
            ) : (
              <>
                <img src={VIDEO.brettPoster} alt="Brett Girvin on a Kapes Adventures trip — Tsavo lookout" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
                <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.45) 100%)"}}/>
                <button aria-label="Play Brett Girvin video" style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:96, height:96, borderRadius:"50%", background:"var(--orange)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 14px 44px rgba(0,0,0,.45)"}}>
                  <svg width="30" height="34" viewBox="0 0 28 32" fill="none" style={{marginLeft:5}}>
                    <path d="M2 2L26 16L2 30V2Z" fill="#fff"/>
                  </svg>
                </button>
                <div style={{position:"absolute", top:18, left:18, display:"flex", gap:8, alignItems:"center"}}>
                  <span style={{display:"inline-block", width:8, height:8, borderRadius:"50%", background:"var(--orange)"}}/>
                  <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"#fff", textShadow:"0 1px 4px rgba(0,0,0,.6)"}}>Brett Girvin · Community Conservation</span>
                </div>
                <div style={{position:"absolute", bottom:16, left:18, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.85)", fontWeight:600, textShadow:"0 1px 4px rgba(0,0,0,.55)"}}>
                  On the trip · Kenya
                </div>
              </>
            )}
          </div>

          {/* Attribution + quote body */}
          <div style={{display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:40, padding:36, alignItems:"start"}}>
            <div>
              <div className="display" style={{fontSize:24, lineHeight:1.15, marginBottom:6}}>Brett Girvin</div>
              <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>Ex-principal · The Arbor School, Dubai</div>
              <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginTop:12}}>Community Conservation · 2023 + 2024 cohorts</div>
              <div style={{marginTop:22, paddingTop:18, borderTop:"1px dashed var(--line)", fontSize:12, color:"var(--muted)", lineHeight:1.55}}>
                Brett joined the first-ever Kapes Adventures trip in 2022 — which sponsored 15 local Kenyan children's school places. The Arbor School was a Kapes Uniforms partner from 2022 to 2025; Brett, then principal, brought two Arbor cohorts back on Community Conservation trips in 2023 and 2024.
              </div>
            </div>
            <div>
              <div style={{fontFamily:"var(--display)", fontSize:"clamp(22px,2.4vw,32px)", lineHeight:1.2, color:"var(--charcoal)", borderLeft:"4px solid var(--orange)", paddingLeft:22, marginBottom:24}}>
                "Mind-blowing to see those children in their uniforms — in school, happy, confident, ready to learn."
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:15, lineHeight:1.7, color:"var(--ink-2)", margin:0}}>
                "We're here in Kenya with our partners from Kapes, who produce the sustainable uniforms for The Arbor School. For every student we dress, a child in need somewhere else receives a free uniform. Experiential learning brings to life what we can only do in theory in the classroom. Children can only do that in person. It will change them as much as it's changed me on this short trip."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ heroVariant = "manifesto" }) {
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileHomePage) return <window.MobileHomePage/>;
  return (
    <div>
      <SiteNav/>
      <HomeHero variant={heroVariant}/>
      <SocialProof/>
      <MediaStrip/>
      <BarriersToEducation/>
      <PrincipalQuote/>
      <Manifesto/>
      <Audiences/>
      <MultiYearVision/>
      <PullQuote/>
      <TripVideo/>
      <Diagram/>
      <VsVoluntourism/>
      <CTA/>
      <Footer/>
    </div>
  );
}
window.HomePage = HomePage;
