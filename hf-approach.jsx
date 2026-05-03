/* OUR APPROACH — methodology, anti-voluntourism, safeguarding */

function ApproachHero(){
  return (
    <PageHero
      bg="cream"
      eyebrow="Our Approach"
      title={<>Every programme exists to <span className="accent">remove a barrier to education.</span></>}
      sub="Hunger keeps kids out of school. Water scarcity keeps girls home. The same idea runs through Kapes Uniforms (a uniform is the barrier) and Kapes Adventures (a meal, water access). The barriers change. The mission doesn't. Below: three principles we built the company around."
      art={
        <div style={{position:"relative", aspectRatio:"4/5", maxHeight:440}}>
          <img className="kapes" src={IMG.educator} style={{borderRadius:6}}/>
          <div style={{position:"absolute", bottom:-16, right:-16, background:"var(--orange)", color:"#fff", padding:"14px 18px", maxWidth:280, fontSize:12, lineHeight:1.5, fontWeight:600}}>
            "Identify what's stopping a child from going to school. Remove it. That's the work."
          </div>
        </div>
      }
    />
  );
}

function Principles(){
  const items = [
    {n:"01", t:"Community as client. School as guest.",
      p:"Every programme has a Kenyan partner — a school, a community leader, a farm — that decides what's useful. Students plant the seed of some projects (a water tank install, a classroom refurbishment) and join others already running (the year-round Seeds2Education farm). What we don't do is invent activities to fill a week. If a project isn't useful to the community, we don't run it.",
      evidence:[
        "Activities chosen by the Kenyan partner — not the trip operator",
        "Some projects students help start; others they join mid-stream",
        "What gets built or planted keeps running after the trip"
      ]
    },
    {n:"02", t:"Flagship runs year-round. Trip windows for the rest.",
      p:"Seeds2Education — our flagship — runs continuously in Kenya. A permanent farm crew works the land week in, week out. Water Empowering Women and Community Conservation are programmes built around partner work that exists outside our trips, but we don't employ year-round staff for them in the way we do for Seeds2Education. School trips visit across ten months a year (we pause July and August for the Kenyan long rains).",
      evidence:[
        "Seeds2Education: 30+ Kenyans employed year-round",
        "WEW + CC: trip-window programmes anchored on partner work",
        "Trip windows: 10 months (Jan–Jun, Sep–Dec)"
      ]
    },
    {n:"03", t:"Designed in Dubai. Delivered by Kenyans.",
      p:"Trip design, school relationships, and itinerary planning sit with us in Dubai. Every trip on the ground is led by Kenyan trip leaders we contract directly. The farm crew, the community lead, and the trip leaders are all Kenyan. The trip you book and the trip your students experience are run by the people who live in the communities you're visiting.",
      evidence:[
        "1:10 leader-to-student ratio · minimum two leaders per trip",
        "Kenyan trip leaders, not flown-in staff",
        "40+ Kenyans employed across the programmes year-round"
      ]
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">Three principles</div>
        <h2 className="display" style={{marginTop:12, marginBottom:56, maxWidth:920}}>
          Everything else flows from <span className="accent">these three.</span>
        </h2>
        <div style={{display:"flex", flexDirection:"column", gap:2, borderTop:"2px solid var(--charcoal)"}}>
          {items.map(it => (
            <div key={it.n} style={{display:"grid", gridTemplateColumns:"90px 1.3fr 1fr", gap:40, padding:"40px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
              <div style={{fontFamily:"var(--display)", fontSize:46, color:"var(--charcoal)", opacity:.22, lineHeight:1}}>{it.n}</div>
              <div>
                <h3 className="display" style={{fontSize:"clamp(26px,2.4vw,36px)", marginBottom:14}}>{it.t}</h3>
                <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)"}}>{it.p}</p>
              </div>
              <div style={{background:"var(--sand)", padding:20, borderLeft:"3px solid var(--orange)"}}>
                <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:10}}>How we work it</div>
                <ul style={{margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8}}>
                  {it.evidence.map((e,i)=>(
                    <li key={i} style={{fontSize:13, lineHeight:1.5, color:"var(--ink-2)", paddingLeft:18, position:"relative"}}>
                      <span style={{position:"absolute", left:0, top:7, width:10, height:1, background:"var(--orange)"}}/>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Pricing</div>
        <h2 className="display" style={{marginTop:12, marginBottom:32, maxWidth:900}}>
          Priced per programme. <span className="accent">Quoted on request.</span>
        </h2>

        <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"start"}}>
          <div>
            <p className="lead" style={{maxWidth:580, color:"var(--ink-2)"}}>
              Each of our three programmes — Seeds2Education, Water Empowering Women, Community Conservation — is priced separately, reflecting the different work, partners, and locations behind each one. International flights are excluded; we quote per cohort once we know your group size and dates.
            </p>
            <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)", marginTop:18, maxWidth:580}}>
              We don't tier within a programme — there's no "premium" or "basic" version. Every cohort on a given trip gets the same accommodation, the same Kenyan trip leaders, the same 1:10 ratio, the same time on the work itself.
            </p>
            <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)", marginTop:18, maxWidth:580}}>
              What's typically in: in-country accommodation, transport, all programme activities, Kenyan trip leaders, partner contributions, insurance and safety cover.<br/>
              What's out: international flights from your home airport.
            </p>
          </div>

          <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:32}}>
            <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:14}}>Standard 7-night trip · per student</div>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              {[
                {name:"Seeds2Education",         price:"USD 3,000", color:"#22C55E"},
                {name:"Water Empowering Women",   price:"USD 2,850", color:"#F43F5E"},
                {name:"Community Conservation",   price:"USD 2,600", color:"#3B82F6"},
              ].map((p)=>(
                <div key={p.name} style={{display:"grid", gridTemplateColumns:"12px 1fr auto", gap:12, alignItems:"center", paddingBottom:12, borderBottom:"1px dashed var(--line)"}}>
                  <span style={{width:10, height:10, borderRadius:50, background:p.color}}/>
                  <div style={{fontSize:14, color:"var(--charcoal)", fontWeight:600}}>{p.name}</div>
                  <div className="display tnum" style={{fontSize:18, color:"var(--charcoal)"}}>{p.price}</div>
                </div>
              ))}
            </div>
            <div style={{fontSize:12, color:"var(--ink-2)", marginTop:14, lineHeight:1.5}}>excl. international flights · bespoke quotes for shorter, longer, or combined trips</div>
            <button className="btn-pill btn-action" style={{marginTop:18, padding:"12px 22px", width:"100%"}} onClick={()=>khifiNavigate("contact")}>Request a quote →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafeguardingStrip(){
  const items = [
    {t:"No direct contact with vulnerable children", d:"Students don't work one-on-one with children at partner schools. We design activity around the work — not around the kids."},
    {t:"1:10 leader-to-student ratio", d:"Every trip runs with a minimum of two Kenyan trip leaders, regardless of cohort size."},
    {t:"Risk assessment per trip", d:"Each itinerary is risk-assessed in advance. Health and safety checks at every site we use."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <BarHead kicker="Safety & safeguarding" title="Three non-negotiables."/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:20, marginTop:32}}>
          {items.map(i=>(
            <div key={i.t} style={{background:"var(--sand)", padding:24, borderTop:"3px solid var(--orange)"}}>
              <h4 className="display" style={{fontSize:20, marginBottom:10, lineHeight:1.2}}>{i.t}</h4>
              <p style={{fontSize:13, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileApproachPage) return <window.MobileApproachPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <ApproachHero/>
      <Principles/>
      <Pricing/>
      <SafeguardingStrip/>
      <section style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff"}}>
        <div className="container" style={{maxWidth:880, textAlign:"center"}}>
          <div className="eyebrow" style={{justifyContent:"center", color:"rgba(255,255,255,.55)"}}>The honest invitation</div>
          <h2 className="display" style={{color:"#fff", marginTop:18, fontSize:"clamp(32px,3.6vw,52px)"}}>
            Disagree with any of these three? <span className="accent">Tell us why.</span>
          </h2>
          <p style={{color:"rgba(255,255,255,.7)", marginTop:18, maxWidth:560, marginInline:"auto", fontSize:16, lineHeight:1.6}}>
            We'd rather have a sharp 30-minute conversation about where we differ than a polite call where everyone agrees and nothing happens.
          </p>
          <div style={{marginTop:32, display:"inline-flex", gap:14, flexWrap:"wrap", justifyContent:"center"}}>
            <button className="btn-pill btn-action" style={{padding:"14px 26px"}} onClick={bookCall}>Book the conversation →</button>
            <button className="btn-pill" style={{padding:"14px 26px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}} onClick={()=>khifiNavigate("programs")}>See the programmes</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
window.ApproachPage = ApproachPage;
