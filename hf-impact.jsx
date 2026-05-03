/* IMPACT — real Year-1 numbers, honest about what we don't yet measure */

function ImpactHero(){
  return (
    <section style={{position:"relative", background:"var(--charcoal)", color:"#fff", padding:"96px 0 88px", borderBottom:"1px solid #262626", overflow:"hidden"}}>
      <img src={IMG.garden} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%", opacity:.22}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.55) 0%, rgba(26,26,26,.85) 70%, var(--charcoal) 100%)"}}/>
      <div className="container" style={{position:"relative"}}>
        <div className="eyebrow" style={{color:"#fff"}}>Impact · what each programme delivers</div>
        <h1 className="display" style={{color:"#fff", marginTop:20, maxWidth:1100}}>
          Two programmes that <span className="accent">deliver local impact.</span>
        </h1>
        <p className="lead" style={{color:"rgba(255,255,255,.85)", maxWidth:720, marginTop:24}}>
          Seeds2Education and Water Empowering Women each create outcomes that continue long after the trip — a year-round farm feeding students, a school transformed by water access. Community Conservation is different: it's an experiential programme, not a local-impact one. We don't claim metrics there we can't honestly attribute.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:32, marginTop:56}}>
          {/* S2E side */}
          <div>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
              <span style={{width:10, height:10, borderRadius:50, background:"#22C55E"}}/>
              <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:11, letterSpacing:".1em", color:"#22C55E", fontWeight:700}}>S2E · FLAGSHIP · YEAR-ROUND</span>
            </div>
            <div className="display" style={{color:"#fff", fontSize:24, marginBottom:18}}>Seeds2Education</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:2, background:"#262626"}}>
              <BigStat dark n="1.5" unit="acres" label="Unused school land transformed into farmland" note="25/26"/>
              <BigStat dark n="45,000" label="School meals supported via first-harvest forecast" note="Via Food for Education"/>
              <BigStat dark n="15,000" unit="kg" label="Onion harvest forecast at first cycle" note="$0.85/kg = 3 meals"/>
              <BigStat dark n="30+" label="Kenyans employed year-round on the farm" note="Permanent crew"/>
            </div>
          </div>
          {/* WEW side */}
          <div>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:14}}>
              <span style={{width:10, height:10, borderRadius:50, background:"#F43F5E"}}/>
              <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:11, letterSpacing:".1em", color:"#F43F5E", fontWeight:700}}>WEW · TRIP-WINDOW</span>
            </div>
            <div className="display" style={{color:"#fff", fontSize:24, marginBottom:18}}>Water Empowering Women</div>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:2, background:"#262626"}}>
              <BigStat dark n="40" unit="%" label="Increase in student enrolment at Hope School" note="After tank + classroom"/>
              <BigStat dark n="1" unit="tank" label="Water tank installed at Hope School" note="25/26"/>
              <BigStat dark n="40+" unit="children" label="With new daily clean-water access through the programme" note="Hope School community"/>
              <BigStat dark n="↓" unit="soil erosion" label="Reported reduction at Hope School after the tank install" note="Year 1 outcome"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForecastSection(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">First harvest · forecast</div>
        <h2 className="display" style={{marginTop:14, marginBottom:40, maxWidth:900}}>
          15,000 kg of onions.<br/>
          <span className="accent">45,000 school meals.</span>
        </h2>

        <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"center"}}>
          <div>
            <p className="lead" style={{color:"var(--ink-2)", maxWidth:560}}>
              The Seeds2Education pilot turns unused land at Kenyan partner schools into onion farms. The harvest is exchanged with our partner Food for Education, who run subsidised school feeding across Kenya.
            </p>
            <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)", marginTop:18, maxWidth:560}}>
              At current exchange rates: <b>$0.85 per kg of onions = three school meals.</b> Our first-harvest forecast of 15,000 kg therefore translates into roughly 45,000 meals supported through the year — and the farm continues to produce in the years that follow.
            </p>
          </div>
          <div style={{background:"var(--cream)", padding:36, border:"1px solid var(--line)", borderTop:"3px solid var(--orange)"}}>
            <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:18}}>The exchange</div>
            <div style={{display:"flex", flexDirection:"column", gap:18}}>
              {[
                {n:"1.5", u:"acres", l:"converted to farmland this year"},
                {n:"15,000", u:"kg", l:"onions forecast at first harvest"},
                {n:"$0.85", u:"/ kg", l:"= 3 school meals via Food for Education"},
                {n:"45,000", u:"meals", l:"supported in year one (forecast)"},
              ].map((row,i)=>(
                <div key={i} style={{display:"grid", gridTemplateColumns:"auto 1fr", gap:18, alignItems:"baseline", paddingBottom:14, borderBottom: i===3?"none":"1px dashed var(--line)"}}>
                  <div style={{display:"flex", alignItems:"baseline", gap:6}}>
                    <span className="display tnum" style={{fontSize:34, color:"var(--charcoal)", lineHeight:1}}>{row.n}</span>
                    <span style={{fontSize:11, letterSpacing:".06em", color:"var(--orange)", fontWeight:700, textTransform:"uppercase"}}>{row.u}</span>
                  </div>
                  <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.4}}>{row.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgrammeBreakdown(){
  const programmes = [
    {
      code:"S2E", title:"Seeds2Education", flagship:true,
      year:"Flagship · year-round · pilot 25/26",
      img:IMG.farmActionShovel, imgPos:"center 50%",
      bullets:[
        "1.5 acres of unused school land developed into onion farmland",
        "15,000 kg onion harvest forecast",
        "45,000 school meals supported (forecast, via Food for Education)",
        "30+ Kenyans employed year-round on the farm",
      ],
      partners:"Food for Education · Kenyan farm partner",
    },
    {
      code:"WEW", title:"Water Empowering Women",
      year:"Trip-window programme · 25/26",
      img:IMG.wewPaintingTank, imgPos:"center 30%",
      bullets:[
        "40% increase in student enrolment at Hope School in the weeks after our build",
        "1 water tank installed at Hope School",
        "1 classroom refurbished alongside the tank install",
        "40+ children with daily clean-water access through the programme",
      ],
      partners:"Kenyan community leader · Hope School",
    },
    {
      code:"CC",  title:"Community Conservation",
      year:"Experiential programme · since 2022",
      img:IMG.ccFactory, imgPos:"center 40%",
      noLocalImpact:true,
      bullets:[
        "Programme based at a Kenyan wildlife conservancy that hosts the Kapes Uniforms factory",
        "Connects ethical garment manufacturing, conservation, and community livelihoods on a single site",
        "First trip ran in 2022 with Arbor School — our longest-running programme",
        "Different by design: experiential rather than impact-creating. We don't claim local-impact metrics here.",
      ],
      partners:"Kenyan conservancy partner",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">By programme</div>
        <h2 className="display" style={{marginTop:12, marginBottom:48, maxWidth:900}}>
          What each programme has <span className="accent">actually delivered.</span>
        </h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:24}}>
          {programmes.map(p=>(
            <div key={p.code} style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:`3px solid ${p.flagship?"var(--orange)":(p.noLocalImpact?"var(--muted)":"var(--charcoal)")}`, overflow:"hidden", display:"flex", flexDirection:"column", opacity: p.noLocalImpact?.92:1}}>
              <div style={{position:"relative", aspectRatio:"16/9", overflow:"hidden", background:"var(--charcoal)"}}>
                <img src={p.img} alt={p.title} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:p.imgPos, display:"block"}}/>
                {p.flagship && <span style={{position:"absolute", top:14, right:14, fontSize:9, background:"var(--orange)", color:"#fff", padding:"4px 10px", borderRadius:3, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700}}>★ Flagship</span>}
                {p.noLocalImpact && <span style={{position:"absolute", top:14, right:14, fontSize:9, background:"rgba(0,0,0,.7)", color:"#fff", padding:"4px 10px", borderRadius:3, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>Experiential</span>}
              </div>
              <div style={{padding:28, display:"flex", flexDirection:"column", flex:1}}>
              <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
                <div style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:11, letterSpacing:".1em", color:p.flagship?"var(--orange)":"var(--muted)", fontWeight:700}}>{p.code}</div>
              </div>
              <h3 className="display" style={{fontSize:22, marginBottom:6}}>{p.title}</h3>
              <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:18}}>{p.year}</div>
              <ul style={{margin:0, paddingLeft:18, display:"flex", flexDirection:"column", gap:8, fontSize:14, lineHeight:1.55, color:"var(--ink-2)", flex:1}}>
                {p.bullets.map((b,i)=> <li key={i}>{b}</li>)}
              </ul>
              <div style={{fontSize:11, color:"var(--muted)", marginTop:18, paddingTop:14, borderTop:"1px dashed var(--line)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>
                Delivered with · {p.partners}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HonestSection(){
  const refuse = [
    ["Total volunteer hours", "Counts input, not outcome. A bad hour and a good hour aren't the same."],
    ["Children 'reached'", "Being in a photograph isn't impact."],
    ["Generic 'children helped' counts", "We measure outputs we can verify (acres farmed, tanks installed, meals supported). Not vague reach numbers."],
    ["Smiles-per-trip", "Not a serious unit of measurement."],
    ["Years running trips", "Counts longevity, not outcome. A decade of trips at a typical operator builds nothing that compounds. We'll be honest about how long we've been running — but we'd rather you ask what got built last year than how many years we've been at it."],
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
      <div className="container">
        <div className="eyebrow">What we don't measure (yet, or ever)</div>
        <h2 className="display" style={{marginTop:12, marginBottom:40, maxWidth:900}}>
          Numbers that make <span className="accent">the industry look good</span> — and why we skip them.
        </h2>
        <div style={{border:"1px solid var(--line)", borderRadius:10, overflow:"hidden"}}>
          {refuse.map(([m, why], i)=>(
            <div key={m} style={{display:"grid", gridTemplateColumns:"320px 1fr auto", gap:30, padding:"22px 28px", background: i%2? "var(--cream)":"var(--sand)", alignItems:"center"}}>
              <div style={{fontFamily:"var(--display)", fontSize:20, color:"var(--charcoal)", textDecoration:"line-through", textDecorationThickness:2, textDecorationColor:"var(--orange)"}}>{m}</div>
              <div style={{fontSize:14, color:"var(--ink-2)"}}>{why}</div>
              <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>Skipped</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesPlaceholder(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">Voices · from the community we work with</div>
        <h2 className="display" style={{marginTop:12, marginBottom:40, maxWidth:900}}>
          The water tank changed <span className="accent">enrolment too.</span>
        </h2>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:48, alignItems:"center", padding:48, background:"var(--sand)", borderLeft:"4px solid var(--orange)"}}>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute", left:-8, top:-30, fontFamily:"var(--display)", fontSize:120, color:"var(--orange)", opacity:.18, lineHeight:1}}>"</div>
            <div className="display" style={{fontSize:"clamp(28px,3vw,42px)", lineHeight:1.15, color:"var(--charcoal)", position:"relative"}}>
              Parents are seeing <span className="accent">a school with potential.</span>
            </div>
          </div>
          <div>
            <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.65, color:"var(--ink-2)", margin:0}}>
              "The tank is great — we collected lots of water. Also more students got enrolled this year because of the tank. Parents are seeing a school with potential. More clean water available."
            </p>
            <div style={{marginTop:20, paddingTop:14, borderTop:"1px dashed var(--line)", fontSize:12, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>
              Monica Makori · Hope School · Kenya
            </div>
          </div>
        </div>

        <div style={{marginTop:18, fontSize:13, color:"var(--muted)", textAlign:"right"}}>
          Student voices from the same trip on the <span style={{color:"var(--orange)", cursor:"pointer", fontWeight:700}} onClick={()=>khifiNavigate("schools")}>For Schools page →</span>
        </div>
      </div>
    </section>
  );
}

function ImpactPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileImpactPage) return <window.MobileImpactPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <ImpactHero/>
      <ForecastSection/>
      <ProgrammeBreakdown/>
      <HonestSection/>
      <StoriesPlaceholder/>
      <section style={{padding:"80px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"end"}}>
          <div>
            <div className="eyebrow">Next year's commitment</div>
            <h3 className="display" style={{marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>
              Same metrics. <span className="accent">Same publication.</span> Whether they're flattering or not.
            </h3>
            <p style={{fontSize:14, color:"var(--ink-2)", marginTop:18, maxWidth:520, lineHeight:1.6}}>
              We'll publish the 26/27 numbers in the same format on this page — including a comparison line versus the year above. If something underperforms, it stays visible.
            </p>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:8, alignItems:"flex-start"}}>
            <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>Want the detail today?</span>
            <span style={{fontSize:18, color:"var(--charcoal)", cursor:"pointer", fontWeight:600}} onClick={()=>khifiNavigate("contact")}>30 min with Matthew →</span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
window.ImpactPage = ImpactPage;
