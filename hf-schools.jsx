/* FOR SCHOOLS — hub / book-a-call landing */

function SchoolsHero(){
  return (
    <section style={{background:"var(--cream)", padding:"72px 0 64px", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"center"}}>
        <div>
          <div className="eyebrow">For Schools · 2026–27 enquiries open</div>
          <h1 className="display" style={{marginTop:18}}>
            A school trip your bursar,<br/>
            your head, and your <span className="accent">trip coordinator</span> all sign off.
          </h1>
          <p className="lead" style={{marginTop:22, color:"var(--ink-2)", maxWidth:540}}>
            Our flagship programme — <b>Seeds2Education</b> — runs year-round in Kenya with a permanent farm crew. Two further programmes available (Water Empowering Women, Community Conservation). Best as a <b>3 year partnership</b>: Year 1's cohort plants the seed; Year 3's cohort sees a thriving farm or transformed school. From USD 2,600 per student.
          </p>
          <div style={{display:"flex", gap:12, marginTop:32, flexWrap:"wrap"}}>
            <button className="btn-pill btn-action" style={{padding:"15px 26px"}} onClick={bookCall}>Book a 30-min call →</button>
            <button className="btn-pill btn-ghost" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("lp")}>Take the 5-min scorecard</button>
          </div>
          <div style={{marginTop:32, display:"flex", gap:24, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, flexWrap:"wrap"}}>
            <span>Founded 2025</span><span>·</span>
            <span>3 Kenya programmes</span><span>·</span>
            <span>1:10 leader ratio</span>
          </div>
        </div>
        <div style={{background:"var(--charcoal)", color:"#fff", padding:28, borderRadius:6}}>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>The intro call</div>
          <h3 className="display" style={{color:"#fff", fontSize:24, marginBottom:16}}>What 30 minutes covers.</h3>
          <div style={{display:"flex", flexDirection:"column", gap:10, fontSize:13, color:"rgba(255,255,255,.8)"}}>
            {[
              ["Your school's posture", "Where service learning sits in your curriculum today"],
              ["Cohort fit", "Year group, group size, time of year that works"],
              ["Programme match", "Seeds2Education / Water Empowering Women / Community Conservation"],
              ["Practicalities", "Pricing, bespoke options, lead times, parent communications"],
              ["Next step", "Programme overview sent the same day if it's a fit"],
            ].map(([f,d])=>(
              <div key={f} style={{display:"flex", gap:10, borderBottom:"1px solid #2a2a2a", paddingBottom:10}}>
                <div style={{width:18, height:18, background:"var(--orange)", color:"#fff", fontSize:10, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:3, flexShrink:0, marginTop:2}}>✓</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700, color:"#fff"}}>{f}</div>
                  <div style={{fontSize:11, color:"#888", marginTop:2}}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-pill btn-action" style={{marginTop:20, padding:"12px 20px", width:"100%"}} onClick={bookCall}>Book the call →</button>
          <div style={{marginTop:12, fontSize:11, color:"#888", textAlign:"center"}}>Direct with Matthew Benjamin, founder.</div>
        </div>
      </div>
    </section>
  );
}

function Worries(){
  const worries = [
    {
      q:"\"The head asks: is this just voluntourism with new wrapping?\"",
      a:"No. The work, the partnerships, and the schedule are decided by Kenyan partners — students contribute, but they aren't the trigger. Our flagship programme (Seeds2Education) runs year-round whether your school visits or not. The other two are anchored on partner work that exists outside our trips. We'll send you the one-pager that explains the mechanism.",
      link:"Read Our Approach", to:"approach"
    },
    {
      q:"\"The bursar asks: what's the price and what's included?\"",
      a:"From USD 2,600 per student for the 7-night standard trip, excluding international flights. Each programme is priced separately — Seeds2Education USD 3,000, Water Empowering Women USD 2,850, Community Conservation USD 2,600. No tiers within a programme. Bespoke quotes for shorter, longer, or combined trips.",
      link:"See pricing", to:"approach"
    },
    {
      q:"\"The safeguarding lead asks: what about child contact?\"",
      a:"Students never have direct one-on-one contact with vulnerable children at partner schools. Activities are designed around the work — building tanks, planting onions, painting classrooms — not around the children. Risk-assessed itineraries, 1:10 leader ratio.",
      link:"Read the safety detail", to:"approach"
    },
    {
      q:"\"Parents ask: what will my child actually do?\"",
      a:"Honest roles in real work. Planting alongside the farm crew. Painting a water tank with the community installing it. Helping with a classroom refurbishment. Reflective sessions in the evenings. Closing ceremony with the community on the final day.",
      link:"See the programme overview", to:"program"
    },
    {
      q:"\"I ask: how long does this take to set up?\"",
      a:"First call: 30 minutes. Programme overview sent the same day if it's a fit. SLT-ready pack within a week. Trip booked typically 2–4 months out (longer for full-cohort options).",
      link:"See the timeline below", to:"contact"
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Five questions that get asked in every SLT meeting</div>
        <h2 className="display" style={{marginTop:12, marginBottom:48, maxWidth:900}}>
          The answers we've <span className="accent">prepared for you.</span>
        </h2>
        <div style={{display:"flex", flexDirection:"column", gap:2, borderTop:"2px solid var(--charcoal)"}}>
          {worries.map((w,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1.1fr 1.4fr auto", gap:32, padding:"30px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
              <div style={{fontFamily:"var(--serif)", fontSize:18, fontStyle:"italic", color:"var(--charcoal)", lineHeight:1.45}}>{w.q}</div>
              <div style={{fontSize:14, lineHeight:1.65, color:"var(--ink-2)"}}>{w.a}</div>
              <button className="btn-pill btn-ghost" style={{padding:"9px 16px", fontSize:12, whiteSpace:"nowrap"}} onClick={()=>khifiNavigate(w.to)}>{w.link} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process(){
  const steps = [
    { n:"01", t:"Intro call", dur:"30 min",     d:"Direct with Matthew. No deck, no pitch — a conversation about what your school wants and whether we're the right fit."},
    { n:"02", t:"Programme overview", dur:"Same day", d:"If we're a fit, we send a programme overview matched to your year group, intended timing, and group size."},
    { n:"03", t:"SLT pack", dur:"Within a week", d:"Parent letter template, safety overview, pricing breakdown, indicative itinerary — everything your SLT will ask for."},
    { n:"04", t:"Confirmation + planning", dur:"2–4 months out", d:"Deposit secures dates. Detailed itinerary, parent communications, kit list, pre-departure reflection materials."},
    { n:"05", t:"The trip", dur:"7 nights", d:"Kenyan trip leaders on the ground (1:10, min 2). Daily updates available to the school. Closing ceremony with the local community."},
    { n:"06", t:"Post-trip reflection", dur:"After return", d:"Reflection materials, photo + video pack with permissions handled, optional student-led presentation back to the school."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <BarHead kicker="Process" title="From first call to post-trip reflection."/>
        <div style={{marginTop:32, display:"grid", gridTemplateColumns:`repeat(${steps.length},1fr)`, gap:0, borderTop:"2px solid var(--charcoal)"}}>
          {steps.map((s,i)=>(
            <div key={s.n} style={{
              paddingTop:28,
              paddingBottom:32,
              paddingLeft: i===0 ? 0 : 24,
              paddingRight: i===steps.length-1 ? 0 : 24,
              borderRight: i===steps.length-1 ? "none" : "1px solid var(--line)",
              display:"flex", flexDirection:"column",
            }}>
              <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--charcoal)", opacity:.3, marginTop:-8, marginBottom:22, lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:15, fontWeight:700, color:"var(--charcoal)", lineHeight:1.25, marginBottom:8}}>{s.t}</div>
              <div style={{fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:18}}>{s.dur}</div>
              <div style={{fontSize:12.5, lineHeight:1.6, color:"var(--ink-2)"}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TripGlimpse(){
  const shots = [
    {src:IMG.actTeaching,  cap:"Africa Collect Textiles workshop",            pos:"center 40%"},
    {src:IMG.schoolGroup,  cap:"Partner school · the children we work with",         pos:"center 30%"},
    {src:IMG.soccer,       cap:"Community day · soccer with the partner school",     pos:"center 50%"},
    {src:IMG.actWide,      cap:"Inside the ACT workshop · Kenyan-led",                pos:"center 30%"},
  ];
  return (
    <section style={{padding:"96px 0 72px", background:"var(--cream)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:32, flexWrap:"wrap", gap:20}}>
          <div>
            <div className="eyebrow">A glimpse of the trip</div>
            <h2 className="display" style={{marginTop:14, maxWidth:680, fontSize:"clamp(28px,3vw,42px)"}}>What a typical week <span className="accent">actually looks like.</span></h2>
          </div>
          <div style={{fontSize:12, color:"var(--muted)", maxWidth:300, lineHeight:1.55, textAlign:"right"}}>Real photography from our pilot trips. More on the way as we transcribe consents.</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10}}>
          {shots.map((s,i)=>(
            <div key={i} style={{position:"relative", aspectRatio:"3/4", overflow:"hidden", borderRadius:6}}>
              <img src={s.src} alt={s.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:s.pos, display:"block", filter:"saturate(.95)"}}/>
              <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.7) 100%)"}}/>
              <div style={{position:"absolute", bottom:14, left:14, right:14, color:"#fff", fontSize:10, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, lineHeight:1.4}}>{s.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolsProof(){
  const quotes = [
    {
      pull:"I expected the cultures wouldn't fit. I was wrong.",
      body:"I expected to find a country I wasn't really used to seeing — that the culture and traditions wouldn't fit with mine back home. I was wrong. I've never met nicer people. They're more respectful than the people I have back in the Middle East.",
      by:"Student",
      ctx:"BIS Jeddah · Water Empowering Women · 2025",
    },
    {
      pull:"The generosity, the joy, the pride — despite the lack of resources.",
      body:"I haven't been surprised by the lack of resources — I've been surprised by the strong sense of community Kenya has. The generosity, the joy, the pride. It all comes together, despite the lack of resources, both on an educational level and on a water level.",
      by:"Student",
      ctx:"BIS Jeddah · Water Empowering Women · 2025",
    },
    {
      pull:"Visiting Hope School truly gave me a different perspective on life.",
      body:"My experience in Kenya was truly humbling. The hospitality is amazing — kind, welcoming, genuinely funny people. Back in Saudi, we used to think our bathrooms were dirty, our houses weren't nice, our school wasn't nice. Visiting Hope School here gave me a completely different perspective on life.",
      by:"Student",
      ctx:"BIS Jeddah · Water Empowering Women · 2025",
    },
  ];
  return (
    <section className="section" style={{padding:"88px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">From a head of school</div>
        <h2 className="display" style={{marginTop:12, marginBottom:8, maxWidth:900}}>The voices <span className="accent">your SLT will want to hear.</span></h2>
        <p style={{fontSize:14, color:"var(--muted)", maxWidth:620, marginBottom:40, lineHeight:1.55}}>From video debriefs after our 2025 cohorts. Lightly edited for clarity. Permission to publish granted by participants.</p>

        {/* Lead — principal video */}
        <div style={{background:"var(--cream)", borderTop:"3px solid var(--orange)", marginBottom:24, overflow:"hidden"}}>
          <div style={{position:"relative", aspectRatio:"16/9", background:"#000"}}>
            <video
              src={VIDEO.brett}
              poster={VIDEO.brettPoster}
              controls
              preload="metadata"
              playsInline
              style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
            />
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:40, alignItems:"start", padding:32}}>
            <div>
              <div className="display" style={{fontSize:22, lineHeight:1.15, marginBottom:6}}>Brett Girvin</div>
              <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>Ex-principal · The Arbor School, Dubai</div>
              <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginTop:12}}>Community Conservation · 2023 + 2024 cohorts</div>
            </div>
            <div>
              <div className="display" style={{fontSize:"clamp(22px,2.4vw,32px)", lineHeight:1.2, color:"var(--charcoal)", borderLeft:"4px solid var(--orange)", paddingLeft:22, marginBottom:22}}>
                "Mind-blowing to see those children in their uniforms — in school, happy, confident, ready to learn."
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:15, lineHeight:1.7, color:"var(--ink-2)", margin:0}}>
                "Experiential learning brings to life what we can only do in theory in the classroom. Children can only do that in person. It will change them as much as it's changed me."
              </p>
            </div>
          </div>
        </div>

        {/* Student voices */}
        <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, margin:"32px 0 16px"}}>Student voices · BIS Jeddah · Water Empowering Women</div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:18}}>
          {quotes.map((q,i)=>(
            <div key={i} style={{padding:32, background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--charcoal)", display:"flex", flexDirection:"column", gap:18}}>
              <div className="display" style={{fontSize:22, lineHeight:1.2, color:"var(--charcoal)"}}>"{q.pull}"</div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:15, lineHeight:1.65, color:"var(--ink-2)", margin:0, flex:1}}>{q.body}</p>
              <div style={{paddingTop:14, borderTop:"1px dashed var(--line)"}}>
                <div style={{fontSize:13, fontWeight:700, color:"var(--charcoal)"}}>— {q.by}</div>
                <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginTop:4}}>{q.ctx}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoardPackCTA(){
  return (
    <section style={{padding:"80px 0", background:"var(--charcoal)", color:"#fff", borderTop:"1px solid #262626", borderBottom:"1px solid #262626"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:48, alignItems:"center"}}>
        <div>
          <div className="eyebrow" style={{color:"var(--orange)"}}>For your SLT</div>
          <h2 className="display" style={{color:"#fff", marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>
            The 16-page <span className="accent">Board Pack.</span><br/>Print-ready. A4. Bring it to the meeting.
          </h2>
          <p style={{fontSize:15, lineHeight:1.65, color:"rgba(255,255,255,.78)", marginTop:20, maxWidth:600}}>
            Editorial cover, decision ask, executive summary, day-by-day itinerary, curriculum alignment, safeguarding posture, risk register, transparent pricing, anticipated Q&A, and a comparison table. The document your champion teacher walks into the meeting with.
          </p>
          <div style={{display:"flex", gap:12, marginTop:28, flexWrap:"wrap"}}>
            <a href="Board Pack.html" target="_blank" rel="noopener" className="btn-pill btn-action" style={{padding:"14px 24px", textDecoration:"none"}}>Open the Board Pack →</a>
            <a href="Board Pack.html" target="_blank" rel="noopener" className="btn-pill" style={{padding:"14px 24px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.5)", textDecoration:"none"}}>Print / Save as PDF</a>
          </div>
          <div style={{marginTop:22, fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.45)", fontWeight:600}}>16 pages · A4 · Seeds2Education · Rev. 2026.04</div>
        </div>
        <div style={{position:"relative", aspectRatio:"210/297", maxHeight:380, justifySelf:"end"}}>
          <div style={{position:"absolute", inset:0, background:"#fff", borderRadius:4, boxShadow:"0 24px 48px rgba(0,0,0,.6), 0 4px 14px rgba(0,0,0,.4)", overflow:"hidden", display:"flex", flexDirection:"column"}}>
            <div style={{position:"relative", flex:1, background:"url('https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg') center/cover"}}>
              <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.62) 0%, rgba(26,26,26,.25) 35%, rgba(26,26,26,.82) 100%)"}}/>
              <div style={{position:"absolute", top:14, left:18, fontSize:7, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.78)", fontWeight:600, fontFamily:"'JetBrains Mono', ui-monospace, monospace"}}>Kapes Adventures · Kenya</div>
              <div style={{position:"absolute", top:14, right:18, fontSize:7, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.78)", fontWeight:600, fontFamily:"'JetBrains Mono', ui-monospace, monospace"}}>Programme pack · Rev. 2026.04</div>
              <div style={{position:"absolute", left:18, top:"42%", fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, fontFamily:"'JetBrains Mono', ui-monospace, monospace"}}>● For board review</div>
              <div style={{position:"absolute", left:18, top:"50%", color:"#fff", fontFamily:"var(--display)", fontSize:36, lineHeight:.95}}>Seeds2<br/>Education</div>
              <div style={{position:"absolute", left:18, bottom:18, color:"#fff", fontFamily:"var(--serif)", fontStyle:"italic", fontSize:11, lineHeight:1.4, paddingTop:8, borderTop:"2px solid var(--orange)", maxWidth:"75%"}}>A seven-night programme in Kenya — proposed for the Grade 10 cohort, November 2026.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SchoolsPage(){
  return (
    <div>
      <SiteNav sticky/>
      <SchoolsHero/>
      <Worries/>
      <Process/>
      <TripGlimpse/>
      <SchoolsProof/>
      <BoardPackCTA/>
      <CTABar
        kicker="Ready when you are"
        title={<>One call. One programme overview. <span className="accent">A clear next step either way.</span></>}
        primary="Book the call"
        secondary="See the programmes"
        onPrimary={bookCall}
        onSecondary={()=>khifiNavigate("programs")}
      />
      <Footer/>
    </div>
  );
}
window.SchoolsPage = SchoolsPage;
