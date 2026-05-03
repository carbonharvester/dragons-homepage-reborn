/* PROGRAMS INDEX — three Kenya programmes */

function ProgramsHero(){
  return (
    <PageHero
      bg="charcoal"
      eyebrow="Programmes"
      title={<>Designed as <span className="accent">3 year partnerships.</span></>}
      sub="One trip is a chapter — not the story. Year 1's cohort plants a farm or installs a water tank; Year 3's cohort returns to a thriving project. Three programmes: Seeds2Education (our flagship, year-round), Water Empowering Women, and Community Conservation."
    />
  );
}

function SharedAttrs(){
  return (
    <section style={{background:"var(--cream)", padding:"22px 0", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"flex", gap:36, flexWrap:"wrap", alignItems:"center", justifyContent:"center", fontSize:12, letterSpacing:".06em", color:"var(--ink-2)", fontWeight:500}}>
        <span><span style={{color:"var(--muted)", letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, marginRight:8}}>All trips</span>7 nights standard</span>
        <span style={{color:"var(--line)"}}>·</span>
        <span>up to 30 students</span>
        <span style={{color:"var(--line)"}}>·</span>
        <span>1:10 leader ratio (min 2)</span>
        <span style={{color:"var(--line)"}}>·</span>
        <span>From USD 2,600 / student (excl. flights)</span>
      </div>
    </section>
  );
}

function ProgramCard({ program }) {
  return (
    <div style={{background:"var(--cream)", border: program.featured?"2px solid var(--orange)":"1px solid var(--line)", borderRadius:8, overflow:"hidden", display:"flex", flexDirection:"column", cursor:"pointer", boxShadow: program.featured?"0 12px 30px rgba(255,119,0,.18)":"none"}} onClick={()=>navigateToProgram(program.slug)}>
      <div style={{position:"relative", aspectRatio:"4/3", overflow:"hidden"}}>
        <img className="kapes" src={program.img} alt=""/>
        <div style={{position:"absolute", top:14, left:14, background:program.color, color:"#fff", padding:"5px 10px", fontSize:10, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, borderRadius:3}}>{program.code}</div>
        <div style={{position:"absolute", bottom:14, right:14, background:"rgba(0,0,0,.75)", color:"#fff", padding:"6px 10px", fontSize:11, fontWeight:600, borderRadius:3}}>{program.duration}</div>
        {program.featured && <div style={{position:"absolute", top:14, right:14, background:"var(--orange)", color:"#fff", padding:"5px 10px", fontSize:10, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700, borderRadius:3}}>★ Flagship</div>}
      </div>
      <div style={{padding:22, display:"flex", flexDirection:"column", gap:10, flex:1}}>
        <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color: program.featured?"var(--orange)":"var(--muted)", fontWeight:700}}>{program.audience}</div>
        <h3 className="display" style={{fontSize:24, lineHeight:1.15}}>{program.title}</h3>
        <p style={{fontSize:14, lineHeight:1.55, color:"var(--ink-2)", margin:0, flex:1}}>{program.desc}</p>
        <div style={{display:"flex", gap:18, marginTop:10, paddingTop:14, borderTop:"1px solid var(--line)", fontSize:11, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>
          <span>{program.cost}</span>
          <span>·</span>
          <span>{program.cohort}</span>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:6}}>
          <span style={{fontSize:12, color:"var(--charcoal)", fontWeight:600}}>View programme →</span>
          {program.featured && <span style={{fontSize:10, color:"var(--orange)", letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>Year-round work</span>}
        </div>
      </div>
    </div>
  );
}

function ProgramsList(){
  const progs = [
    {
      slug:"s2e",
      code:"S2E·01", color:"#22C55E", img:IMG.farmActionShovel,
      audience:"Y9–13 · Our flagship · Recommended for first-time partners",
      duration:"7 nights",
      title:"Seeds2Education",
      desc:"Our flagship programme. Transforming unused school land into productive onion farms — produce exchanged for school meals through Food for Education. A permanent Kenyan farm crew runs the work year-round; school groups join mid-season.",
      cost:"USD 3,000 / student (excl. flights)",
      cohort:"Up to 30 students",
      featured:true,
    },
    {
      slug:"wew",
      code:"WEW·02", color:"#F43F5E", img:IMG.wewPaintingTank,
      audience:"Y9–13 · Gender, water, community",
      duration:"7 nights",
      title:"Water Empowering Women",
      desc:"Working with a Kenyan community leader to install a water tank and refurbish a classroom at Hope School. 25/26 to date: 1 tank installed, 1 classroom rebuilt, 40+ children with daily clean-water access.",
      cost:"USD 2,850 / student (excl. flights)",
      cohort:"Up to 30 students",
    },
    {
      slug:"cc",
      code:"CC·03", color:"#3B82F6", img:IMG.ccFactory,
      audience:"Mixed · Wildlife + conservation",
      duration:"7 nights",
      title:"Community Conservation",
      desc:"Based at a Kenyan wildlife conservancy where conservation, community livelihoods, and ethical manufacturing intersect. The original Kapes Adventures programme — 7 trips delivered with international schools through Mountain Quests (UAE) from 2022, before going direct in 2025.",
      cost:"USD 2,600 / student (excl. flights)",
      cohort:"Up to 30 students",
    },
  ];

  return (
    <section className="section" style={{padding:"72px 0 96px", background:"var(--sand)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:24, flexWrap:"wrap", gap:14}}>
          <div style={{fontSize:12, letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>Three programmes · 25/26 academic year</div>
          <div style={{fontSize:12, color:"var(--muted)"}}>All trips run 7 nights standard. Bespoke shorter / longer / combined available on request.</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:20}}>
          {progs.map(p=> <ProgramCard key={p.code} program={p}/>)}
        </div>
      </div>
    </section>
  );
}

function Comparison(){
  const dimensions = [
    {
      label:"Mode",
      s2e:"Year-round flagship · permanent farm crew",
      wew:"Trip-window programme · partner-led",
      cc: "Trip-window programme · conservancy partner",
    },
    {
      label:"Price (per student, excl. flights)",
      s2e:"USD 3,000",
      wew:"USD 2,850",
      cc: "USD 2,600",
    },
    {
      label:"What students do",
      s2e:"Plant alongside the farm crew, build raised beds, irrigation work, partner-school visits",
      wew:"Help install a water tank, refurbish a classroom, work alongside the community lead",
      cc: "Conservancy work, community livelihoods, ethical-manufacturing exposure on a single site",
    },
    {
      label:"Location",
      s2e:"Nairobi · Rongai area, Kenya",
      wew:"Voi · Tsavo region, Kenya",
      cc: "Voi · Tsavo region, Kenya",
    },
    {
      label:"Where students stay",
      s2e:"Kenyan-run eco-lodge & farm · Rongai · Nairobi area",
      wew:"Camp on the Wildlife Works conservancy · Voi",
      cc: "Camp on the Wildlife Works conservancy · Voi",
    },
    {
      label:"What it leaves behind",
      s2e:"Ongoing onion farm · 45,000 meals exchanged via Food for Education (forecast Y1)",
      wew:"Permanent water infrastructure · refurbished classroom",
      cc: "Conservancy work continues at partner site",
    },
    {
      label:"Best fit for",
      s2e:"Schools wanting the strongest service-learning + curriculum link",
      wew:"Schools with a gender, water, or community-development focus",
      cc: "Schools with an environmental / wildlife focus",
    },
  ];

  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Side-by-side</div>
        <h2 className="display" style={{marginTop:14, marginBottom:16, maxWidth:900}}>
          Compare the three <span className="accent">at a glance.</span>
        </h2>
        <p className="lead" style={{maxWidth:680, marginBottom:40, color:"var(--ink-2)"}}>
          Most schools we talk to start with Seeds2Education and add a sister programme later. Here's how the three differ on the dimensions schools usually ask about.
        </p>

        <div style={{border:"1px solid var(--line)", borderRadius:10, overflow:"hidden", background:"var(--cream)"}}>
          {/* Header */}
          <div style={{display:"grid", gridTemplateColumns:"220px 1.4fr 1fr 1fr", padding:"18px 22px", background:"var(--charcoal)", color:"#fff", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, gap:18}}>
            <div></div>
            <div style={{display:"flex", alignItems:"center", gap:10}}>
              <span style={{width:8, height:8, borderRadius:50, background:"#22C55E"}}/>
              <span>Seeds2Education</span>
              <span style={{fontSize:9, background:"var(--orange)", padding:"2px 7px", borderRadius:3, letterSpacing:".18em"}}>★ Flagship</span>
            </div>
            <div style={{display:"flex", alignItems:"center", gap:10}}>
              <span style={{width:8, height:8, borderRadius:50, background:"#F43F5E"}}/>
              Water Empowering Women
            </div>
            <div style={{display:"flex", alignItems:"center", gap:10}}>
              <span style={{width:8, height:8, borderRadius:50, background:"#3B82F6"}}/>
              Community Conservation
            </div>
          </div>
          {/* Rows */}
          {dimensions.map((d, i)=>(
            <div key={d.label} style={{display:"grid", gridTemplateColumns:"220px 1.4fr 1fr 1fr", padding:"22px 22px", borderTop:"1px solid var(--line)", background: i%2 === 0 ? "var(--cream)" : "var(--sand)", gap:18, alignItems:"start"}}>
              <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, paddingTop:2}}>{d.label}</div>
              <div style={{fontSize:14, lineHeight:1.55, color:"var(--charcoal)", fontWeight:500, paddingLeft:14, borderLeft:"3px solid var(--orange)"}}>{d.s2e}</div>
              <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{d.wew}</div>
              <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{d.cc}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:22, fontSize:13, color:"var(--muted)", fontStyle:"italic"}}>
          Trips can be combined where the calendar allows — e.g. Seeds2Education + a conservation extension. Bespoke quotes on request.
        </div>
      </div>
    </section>
  );
}

function HelpChoose(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"center"}}>
        <div>
          <div className="eyebrow">Not sure which?</div>
          <h2 className="display" style={{marginTop:14, maxWidth:560}}>
            Take the 5-minute <span className="accent">Impact Scorecard</span> — we'll match you to a programme.
          </h2>
          <p className="lead" style={{marginTop:18, color:"var(--ink-2)", maxWidth:540}}>
            A short diagnostic about your school's service-learning goals, student cohort, and appetite for continuity. Diagnostic report delivered instantly. No sales follow-up unless you ask for one.
          </p>
          <div style={{display:"flex", gap:12, marginTop:28, flexWrap:"wrap"}}>
            <button className="btn-pill btn-action" style={{padding:"14px 24px"}} onClick={()=>khifiNavigate("lp")}>Take the scorecard →</button>
            <button className="btn-pill btn-ghost" style={{padding:"14px 24px"}} onClick={()=>khifiNavigate("contact")}>Talk to Matthew</button>
          </div>
        </div>
        <div style={{background:"var(--sand)", padding:30, borderLeft:"3px solid var(--orange)"}}>
          <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:10}}>A typical match</div>
          <div className="display" style={{fontSize:22, lineHeight:1.2, marginBottom:14}}>"Y10 · up to 30 students · first Kenya trip · no existing partnership"</div>
          <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.6, borderTop:"1px dashed var(--line)", paddingTop:14}}>
            <b style={{color:"var(--charcoal)"}}>Recommended:</b> Seeds2Education — our flagship. Year-round programme, tightest curriculum link, clearest "what students did" story for parents and the SLT. The programme we recommend most schools start with.
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileProgramsPage) return <window.MobileProgramsPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <ProgramsHero/>
      <SharedAttrs/>
      <ProgramsList/>
      <Comparison/>
      <HelpChoose/>
      <Footer/>
    </div>
  );
}
window.ProgramsPage = ProgramsPage;
