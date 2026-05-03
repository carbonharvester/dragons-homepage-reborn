/* PROGRAMME OVERVIEW — Approach 4 at hi-fi.
   The "bring this to the SLT" document:
   spec sheet, year-round activity log, commitment-based pricing (Option A),
   day-by-day for the 7-night standard, outcomes, honest FAQ. */

function ProgrammeHeader() {
  return (
    <section style={{background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{paddingTop:36, paddingBottom:24, display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:12, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>
        <div>Programs &nbsp;/&nbsp; Seeds2Education &nbsp;/&nbsp; <span style={{color:"var(--charcoal)"}}>Programme</span></div>
        <div style={{display:"flex", gap:18}}>
          <span>Doc ID · S2E-2026-03</span>
          <span>Last audit · Feb 2026</span>
          <span style={{color:"var(--orange)"}}>● Live program</span>
        </div>
      </div>
      <div className="container" style={{paddingBottom:56, display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"end"}}>
        <div>
          <div className="eyebrow">Programme overview · 1 of 3</div>
          <h1 className="display" style={{marginTop:18, fontSize:"clamp(52px,5.4vw,84px)"}}>
            Seeds2<br/><span className="accent">Education.</span>
          </h1>
          <p className="lead" style={{marginTop:20, maxWidth:560, color:"var(--ink-2)"}}>
            Turning unused school land into productive onion farms — with the harvest exchanged through Food for Education to feed students at Kenyan partner schools. Pilot year, 25/26 academic year. This programme is what your SLT will ask for.
          </p>
          <div style={{fontSize:13, color:"var(--muted)", marginTop:16}}>
            <b style={{color:"var(--charcoal)"}}>Sister programmes:</b> Water Empowering Women · Community Conservation
          </div>
          <div style={{display:"flex", gap:10, marginTop:24, flexWrap:"wrap"}}>
            <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("contact")}>Request the programme PDF</button>
            <button className="btn-pill btn-ghost" style={{padding:"14px 22px"}} onClick={bookCall}>Book an intro call</button>
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, fontSize:12}}>
          <KV label="Base" value="Rongai · Nairobi area"/>
          <KV label="Partner school" value="Oloosirkon Primary School"/>
          <KV label="Standard length" value="7 nights"/>
          <KV label="Group size" value="up to 30 students"/>
          <KV label="Age group" value="Y9–Y13"/>
          <KV label="Food for Education partner" value="Ruiru · ~1-hr drive"/>
          <KV label="Programme partner" value="Food for Education"/>
          <KV label="Price" value="USD 3,000 / student (excl. flights)"/>
        </div>
      </div>
    </section>
  );
}
function KV({label,value}){
  return <div style={{padding:"12px 14px", border:"1px solid var(--line)", background:"var(--cream)", borderRadius:6}}>
    <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:4}}>{label}</div>
    <div style={{fontWeight:600, color:"var(--charcoal)"}}>{value}</div>
  </div>;
}

function HeroGallery() {
  return (
    <section style={{background:"var(--charcoal)", padding:"0", borderBottom:"1px solid var(--line)", position:"relative"}}>
      {/* Full-bleed hero image */}
      <div style={{position:"relative", height:620, overflow:"hidden"}}>
        <img src={IMG.farmActionShovel} alt="Seeds2Education — student shovelling earth on the partner-school farmland project"
          style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 50%"}}/>
        {/* gradient scrim for legibility */}
        <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.55) 0%, rgba(26,26,26,.15) 40%, rgba(26,26,26,.75) 100%)"}}/>

        {/* Top-left film-strip meta */}
        <div style={{position:"absolute", top:28, left:32, right:32, display:"flex", justifyContent:"space-between", alignItems:"flex-start", color:"rgba(255,255,255,.82)", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>
          <div>• On-location · Rongai, Kenya</div>
          <div>Frame 018 / 042 · S2E-2026</div>
        </div>

        {/* Bottom lockup */}
        <div style={{position:"absolute", bottom:40, left:32, right:32, color:"#fff"}}>
          <div className="container" style={{display:"grid", gridTemplateColumns:"2.2fr 1fr", gap:40, alignItems:"end"}}>
            <div>
              <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700, color:"var(--orange)", marginBottom:18}}>Programme overview · Seeds2Education</div>
              <h1 className="display" style={{fontSize:"clamp(52px,6vw,96px)", lineHeight:.95, letterSpacing:"-.02em", margin:0, color:"#fff"}}>
                A school farm<br/>that feeds the<br/>school.
              </h1>
            </div>
            <div style={{fontSize:13, lineHeight:1.55, color:"rgba(255,255,255,.88)", borderLeft:"2px solid var(--orange)", paddingLeft:18, paddingBottom:6}}>
              Turning unused school land into onion farms — and exchanging the harvest for school meals through our partner Food for Education.
              <div style={{marginTop:14, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", fontWeight:600}}>
                7 nights · USD 3,000 excl. flights · Pilot year 25/26 · Sep–Jun
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting strip under hero */}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", height:220, borderTop:"1px solid rgba(255,255,255,.08)"}}>
        <div style={{position:"relative", overflow:"hidden"}}>
          <img src={IMG.actTeaching} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%"}}/>
          <div style={{position:"absolute", bottom:14, left:14, right:14, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, textShadow:"0 1px 6px rgba(0,0,0,.6)"}}>ACT workshop · Kenyan artisan teaching</div>
        </div>
        <div style={{position:"relative", overflow:"hidden"}}>
          <img src={IMG.schoolGroup} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%"}}/>
          <div style={{position:"absolute", bottom:14, left:14, right:14, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, textShadow:"0 1px 6px rgba(0,0,0,.6)"}}>Oloosirkon Primary School children · in their Kapes uniforms</div>
        </div>
        <div style={{position:"relative", overflow:"hidden"}}>
          <img src={IMG.ffeKitchenTour} alt="" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%"}}/>
          <div style={{position:"absolute", bottom:14, left:14, right:14, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, textShadow:"0 1px 6px rgba(0,0,0,.6)"}}>Food for Education partner</div>
        </div>
      </div>
    </section>
  );
}

function FieldFilm() {
  // Full trip film (lead) + 7-reel grid below for the day-by-day moments
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"end", flexWrap:"wrap", gap:24, marginBottom:32}}>
          <div>
            <div className="eyebrow">See it · don't just read it</div>
            <h2 className="display" style={{marginTop:14, fontSize:"clamp(34px,3vw,46px)", lineHeight:1.05}}>
              The trip on film.
            </h2>
            <p style={{fontSize:15, lineHeight:1.65, color:"var(--ink-2)", marginTop:14, maxWidth:600}}>
              Full 3-minute trip film at the top, plus seven short reels for each moment. No voiceover. No drone sweeps. The days as they happened.
            </p>
          </div>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"var(--muted)"}}>● Full film + 7 reels · Kenya · Nov 2025</div>
        </div>

        {/* Lead — full trip film */}
        <div style={{display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:32, alignItems:"start", marginBottom:36}}>
          <div style={{position:"relative", aspectRatio:"16 / 9", borderRadius:10, overflow:"hidden", border:"1px solid var(--line)", boxShadow:"0 40px 80px -30px rgba(26,26,26,.35)", background:"#000"}}>
            <video src={VIDEO.s2eFull} poster={VIDEO.s2eFullPoster} controls preload="metadata" playsInline style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
          </div>
          <div>
            <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>★ Full trip film · 3 min</div>
            <h3 className="display" style={{fontSize:28, lineHeight:1.1, marginBottom:12}}>The week, end to end.</h3>
            <p style={{fontSize:15, lineHeight:1.65, color:"var(--ink-2)", margin:0}}>The full Seeds2Education trip recap — Fairgreen International School cohort, November 2025. Farmland transformation, the Food for Education partnership, Nairobi National Park, Ngong Hills hike, the Maasai meetup, and the closing ceremony.</p>
          </div>
        </div>

        <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"var(--muted)", marginTop:48, marginBottom:18}}>Or watch by moment ↓</div>

        {/* Grid of 7 short reels */}
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:14}}>
          {S2E_REELS.map((r, i) => (
            <div key={i} style={{display:"flex", flexDirection:"column", background:"var(--cream)", border:"1px solid var(--line)", borderRadius:8, overflow:"hidden"}}>
              <div style={{position:"relative", aspectRatio:"16 / 9", background:"#000"}}>
                <video src={r.src} poster={r.poster} controls preload="metadata" playsInline style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              </div>
              <div style={{padding:"14px 16px 16px"}}>
                <div style={{fontFamily:"var(--display)", fontSize:18, lineHeight:1.2, marginBottom:6}}>{r.title}</div>
                <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryWall() {
  // Editorial six-frame photo wall. Scale + aspect-ratio variety like a picture editor's spread.
  const frames = [
    {src:IMG.tankFinished,     cap:"Tank day · I LOVE KENYA mural · designed by both cohorts together",  w:2, h:2},
    {src:IMG.tankBoyPaint,     cap:"Tank day · partner-school child painting LOVE",                       w:1, h:1},
    {src:IMG.farmKenyanLed,    cap:"Kenyan partner leading the planting",                         w:1, h:1},
    {src:IMG.farmWatering,     cap:"watering line · students + partner-school children",           w:2, h:1},
    {src:IMG.tankGirlElephant, cap:"Tank day · partner-school student painting an elephant",              w:1, h:1},
    {src:IMG.farmKenyanKid,    cap:"candid · partner-school child mid-planting",                   w:1, h:1},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:36, flexWrap:"wrap", gap:20}}>
          <div>
            <div style={{fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:14}}>The field, not the brochure</div>
            <h2 className="display" style={{fontSize:"clamp(36px,3.5vw,56px)", lineHeight:1.02, maxWidth:820, color:"#fff"}}>
              What it actually<br/>looks like there.
            </h2>
          </div>
          <div style={{fontSize:12, color:"rgba(255,255,255,.55)", maxWidth:280, lineHeight:1.55}}>
            Photography from Feb–Oct 2025. We publish raw frames — no stock, no staging, no re-use of imagery from other programs.
          </div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gridAutoRows:"220px", gap:10}}>
          {frames.map((f,i)=>(
            <div key={i} style={{gridColumn:`span ${f.w}`, gridRow:`span ${f.h}`, position:"relative", overflow:"hidden", borderRadius:4}}>
              <img src={f.src} alt={f.cap}
                style={{width:"100%", height:"100%", objectFit:"cover", filter:"saturate(.95)"}}/>
              <div style={{position:"absolute", bottom:10, left:12, right:12, color:"#fff", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", fontWeight:700, textShadow:"0 1px 6px rgba(0,0,0,.75)"}}>{String(i+1).padStart(2,"0")} · {f.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function YearLog() {
  const months = [
    {m:"JAN", work:"School-lunch kitchens running · soil testing · teacher CPD", trip:true},
    {m:"FEB", work:"First planting cycle · greywater install at partner school", trip:true, label:"Half-term"},
    {m:"MAR", work:"Continued planting · Ruiru kitchen operations with Food For Education", trip:true, label:"Easter window"},
    {m:"APR", work:"Harvest 1 · propagation training for partner-school staff", trip:true},
    {m:"MAY", work:"Dry-season prep · Africa Collects Textiles community workshops", trip:true},
    {m:"JUN", work:"Infrastructure repairs · governance review with school heads", trip:true},
    {m:"JUL", work:"Long rains · Kenyan staff continue in-kitchen work · no school groups", trip:false, closed:true},
    {m:"AUG", work:"Long rains · annual planning · no school groups", trip:false, closed:true},
    {m:"SEP", work:"New cohort onboarding · second planting cycle", trip:true},
    {m:"OCT", work:"Seed-saving · partner-school visits", trip:true, label:"Half-term"},
    {m:"NOV", work:"Harvest 2 · farmland conversion builds with visiting groups", trip:true},
    {m:"DEC", work:"Post-harvest processing · year-end community dinner", trip:true},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:32}}>
          <div>
            <div className="eyebrow">A receipt, not a claim</div>
            <h2 className="display" style={{marginTop:14, maxWidth:820}}>
              What happens <span className="accent">the other ten months.</span>
            </h2>
          </div>
          <div style={{fontSize:12, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, textAlign:"right"}}>
            Actual activity log<br/>Rongai farm site · 2025
          </div>
        </div>

        <div style={{border:"1px solid var(--line)", borderRadius:10, overflow:"hidden", background:"var(--cream)"}}>
          <div style={{display:"grid", gridTemplateColumns:"80px 1fr 220px", padding:"14px 22px", background:"var(--charcoal)", color:"#fff", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>
            <div>Month</div>
            <div>Ongoing community work</div>
            <div>School-trip window?</div>
          </div>
          {months.map((x,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"80px 1fr 220px", alignItems:"center", padding:"18px 22px", borderBottom: i<11? "1px solid var(--line)":"none", background: x.trip? "rgba(255,119,0,.04)": x.closed? "rgba(26,26,26,.035)":"transparent"}}>
              <div style={{fontFamily:"var(--display)", fontSize:18, letterSpacing:".04em", color: x.trip? "var(--orange)": x.closed? "var(--muted)":"var(--charcoal)"}}>{x.m}</div>
              <div style={{fontSize:14, color: x.closed? "var(--muted)":"var(--ink-2)", fontStyle: x.closed? "italic":"normal"}}>{x.work}</div>
              <div>
                {x.trip ? (
                  <div style={{display:"inline-flex", gap:8, alignItems:"center", background:"var(--orange)", color:"#fff", padding:"6px 12px", borderRadius:999, fontSize:11, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase"}}>● Trip slot{x.label? ` · ${x.label}`:""}</div>
                ) : (
                  <div style={{fontSize:11, letterSpacing:".08em", color:"var(--muted)", textTransform:"uppercase", fontWeight:600}}>— closed · long rains</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:18, fontSize:13, color:"var(--muted)", fontStyle:"italic"}}>
          Trips run September through June. July and August we're quiet — it's the Kenyan long rains and our communities rest too.
        </div>
      </div>
    </section>
  );
}

function S2EPricing() {
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
      <div className="container">
        <div className="eyebrow">Pricing</div>
        <h2 className="display" style={{marginTop:14, maxWidth:900}}>
          One number.<br/><span className="accent">Bespoke on request.</span>
        </h2>
        <p className="lead" style={{marginTop:20, maxWidth:680, color:"var(--ink-2)", marginBottom:40}}>
          We don't tier our trips. Every cohort gets the same accommodation, the same Kenyan trip leaders, the same 1:10 ratio, the same time on the farm. Bespoke shorter, longer, or combined trips are quoted on request.
        </p>

        <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, padding:36, display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center"}}>
          <div>
            <div style={{fontSize:11, letterSpacing:".14em", color:"var(--muted)", textTransform:"uppercase", fontWeight:700, marginBottom:10}}>Standard 7-night trip</div>
            <div className="display" style={{fontSize:"clamp(44px,4.5vw,64px)"}}>USD 3,000<br/>per student</div>
            <div style={{fontSize:13, color:"var(--ink-2)", marginTop:14, lineHeight:1.55, maxWidth:360}}>
              7-night programme · excluding international flights. Bespoke quotes for shorter or longer trips.
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:14}}>
            <div style={{padding:"18px 20px", background:"var(--sand)", borderRadius:8, fontSize:14, color:"var(--charcoal)", lineHeight:1.55}}>
              <b>What's included:</b> in-country accommodation, all meals on programme, transport, all programme activities, Kenyan trip leaders (1:10, min 2), partner contributions, insurance, safety cover.
            </div>
            <div style={{padding:"18px 20px", background:"var(--sand)", borderRadius:8, fontSize:14, color:"var(--charcoal)", lineHeight:1.55}}>
              <b>What's not included:</b> international flights from your home airport. Visas and tips called out separately.
            </div>
            <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("contact")}>Request a quote →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Commit({n,t,b}){
  return (
    <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, padding:28}}>
      <div className="display tnum" style={{fontSize:52, color:"var(--orange)", lineHeight:1}}>{n}</div>
      <div className="display" style={{fontSize:22, marginTop:14, marginBottom:10}}>{t}</div>
      <div style={{fontSize:13, lineHeight:1.6, color:"var(--ink-2)"}}>{b}</div>
    </div>
  );
}

function DayByDay() {
  // Based on the actual Nov 2025 Fairgreen International School itinerary.
  const days = [
    {d:"Day 1", t:"Arrive Nairobi", img:IMG.communityFace,
      b:"Airport pickup at JKIA. Transfer to our base accommodation for the full week (a Kenyan-run eco-lodge and farm in the Nairobi area). Welcome briefing and site orientation. Evening talk from our Kenyan host on purpose, impact, and the philosophy behind the work."},
    {d:"Day 2", t:"Nairobi National Park & Sheldrick Trust", img:IMG.npTruckGiraffe,
      b:"Early game drive with park rangers. Visit to Sheldrick Wildlife Trust elephant orphanage with a conservation talk. Packed lunch in-park, second afternoon drive. Evening pizza-making night using produce from the farm."},
    {d:"Day 3", t:"Ngong Hills hike & local market day", img:IMG.ngongRidgeTurbines,
      b:"Guided cultural hike in Ngong Hills, lunch en route. Afternoon: a local market day on-site — community vendors host students, students buy directly from local artisans."},
    {d:"Day 4", t:"Food for Education + Africa Collect Textiles", img:IMG.ffePresentation,
      b:"Drive to Ruiru. Tour of the Food for Education kitchen and warehouse — see how school meals are prepped and distributed at scale. Afternoon weaving and upcycling workshop with ACT artisans. Evening talk on Kenyan history and traditions."},
    {d:"Day 5", t:"Farmland transformation — 1 of 3", img:IMG.farmPrepRake,
      b:"First full day on the Oloosirkon Primary School farmland project. Groundwork and soil preparation through the morning; bed formation and irrigation prep in the afternoon. Evening: paint-and-dine group activity back at the lodge."},
    {d:"Day 6", t:"Farmland transformation — 2 of 3", img:IMG.farmWalking,
      b:"Onion planting, shade structure assembly, irrigation setup, pest-barrier installation. Lunch on site with the school community. Evening cultural activities back at the lodge."},
    {d:"Day 7", t:"Farmland transformation — 3 of 3 + closing ceremony", img:IMG.farmWatering,
      b:"Compost layering, watering-system testing, signage install. Closing ceremony with the local community. Farewell dinner; bonfire and reflection night — stories, achievements, closing remarks."},
    {d:"Day 8", t:"Depart", img:IMG.farmKenyanLed,
      b:"Breakfast, packing, final reflections. Transfer to JKIA. Final debrief on the drive — the farm crew continues without you."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">Day-by-day · 7-night standard</div>
        <h2 className="display" style={{marginTop:14, marginBottom:12, maxWidth:900}}>
          A week that joins <span className="accent">an ongoing story.</span>
        </h2>
        <p className="lead" style={{maxWidth:620, color:"var(--ink-2)", marginBottom:40}}>
          The itinerary we ran for Fairgreen International School in November 2025 — one concrete example of the 7-night standard. Bespoke trips run shorter or longer; we shape the mix of farm work, cultural context, and partner visits around your academic calendar.
        </p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14}}>
          {days.map((x,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"120px 1fr", gap:0, background:"var(--sand)", border:"1px solid var(--line)", borderRadius:8, overflow:"hidden", alignItems:"stretch"}}>
              <div style={{position:"relative", minHeight:150, background:"var(--charcoal)"}}>
                <img src={x.img} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}}/>
                <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.15) 0%, rgba(26,26,26,.7) 100%)"}}/>
                <div style={{position:"absolute", left:12, bottom:10, color:"#fff", fontFamily:"var(--display)", fontSize:14, letterSpacing:".06em", textTransform:"uppercase"}}>{x.d}</div>
              </div>
              <div style={{padding:"22px 22px"}}>
                <div style={{fontFamily:"var(--display)", fontSize:19, color:"var(--charcoal)", marginBottom:8, lineHeight:1.2}}>{x.t}</div>
                <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.55}}>{x.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  // 25/26 academic year — pilot for Seeds2Education. Honest, including what's still in pilot.
  const rows = [
    ["Community","Unused school land converted to farmland (acres, 25/26)","1.5"],
    ["Community","Onion harvest forecast (kg, first harvest)","15,000"],
    ["Community","School meals supported via Food for Education exchange","45,000"],
    ["Community","Kenyans employed across the three programmes","40+"],
    ["Programme","Onion-to-meals exchange rate (USD per kg)","$0.85 = 3 meals"],
    ["Students","Reflection sessions per trip (pre, mid, post)","3"],
    ["Operations","Leader-to-student ratio · minimum leaders per trip","1:10 · min 2"],
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
      <div className="container">
        <div className="eyebrow">Measured outcomes</div>
        <h2 className="display" style={{marginTop:14, marginBottom:12, maxWidth:900}}>
          What we measure — <span className="accent">and publish.</span>
        </h2>
        <p className="lead" style={{maxWidth:600, color:"var(--ink-2)", marginBottom:32}}>
          Seeds2Education is in its first year. We’re publishing Year-1 outputs honestly — including what’s still in pilot — and we’ll publish the same metrics every year going forward, flattering or not.
        </p>
        <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, overflow:"hidden"}}>
          <div style={{display:"grid", gridTemplateColumns:"160px 1fr 180px", padding:"14px 22px", background:"var(--charcoal)", color:"#fff", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>
            <div>Category</div>
            <div>Metric</div>
            <div style={{textAlign:"right"}}>2025 value</div>
          </div>
          {rows.map(([c,m,v], i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"160px 1fr 180px", padding:"18px 22px", borderBottom: i<rows.length-1? "1px solid var(--line)":"none", fontSize:14, alignItems:"center"}}>
              <div style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>{c}</div>
              <div style={{color:"var(--charcoal)"}}>{m}</div>
              <div className="display tnum" style={{textAlign:"right", fontSize:22, color:"var(--charcoal)"}}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ["Why are standard trips 7 nights?", "It's the sweet spot for school calendars — long enough for students to move past 'tourist' mode, short enough to fit a half-term or end-of-term window. Bespoke shorter and longer trips on request."],
    ["Can we run a trip in July or August?", "No. Those are the Kenyan long rains — school trips pause. Programme work continues year-round; the trip itself takes a break."],
    ["What if our students want to build a specific thing?", "We'll politely say no. The Kenyan partner sets the work schedule. Students contribute to what's being done anyway — that's the point."],
    ["What's your safeguarding position?", "No direct one-on-one student contact with vulnerable children. Risk-assessed itineraries. 1:10 leader-to-student ratio with a minimum of two Kenyan trip leaders per trip, regardless of group size."],
    ["What's the price?", "USD 3,000 per student for the 7-night Seeds2Education trip, excluding international flights. No tiers within the programme — every cohort gets the same accommodation, ratio, and time on the farm. Bespoke quotes for shorter or longer trips."],
    ["Can we bring journalists or filmmakers?", "Only under a signed media protocol agreed with the Kenyan partner. They decide what's filmed and what isn't. Any photo of a Kenyan child requires consent."],
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">The honest FAQ</div>
        <h2 className="display" style={{marginTop:14, marginBottom:32, maxWidth:900}}>
          Questions your SLT <span className="accent">will ask.</span>
        </h2>
        <div style={{borderTop:"2px solid var(--charcoal)"}}>
          {qs.map(([q,a],i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:40, padding:"28px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
              <div style={{fontFamily:"var(--display)", fontSize:20, color:"var(--charcoal)"}}>{q}</div>
              <div style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)"}}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgrammeCTA() {
  return (
    <section style={{padding:"80px 0", background:"var(--charcoal)", color:"#fff"}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", gap:40, alignItems:"center", flexWrap:"wrap"}}>
        <div>
          <div className="eyebrow" style={{color:"var(--orange)"}}>Next step</div>
          <h2 className="display" style={{color:"#fff", marginTop:14}}>Ready to take this to your SLT?</h2>
          <p style={{color:"rgba(255,255,255,.7)", marginTop:12, maxWidth:520, fontSize:16, lineHeight:1.5}}>We'll send you a school-branded version of this programme overview within 48 hours. No sales call required.</p>
        </div>
        <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          <button className="btn-pill btn-action" style={{padding:"16px 28px"}} onClick={()=>khifiNavigate("contact")}>Request SLT pack →</button>
          <button className="btn-pill" style={{padding:"16px 28px", background:"transparent", color:"#fff", border:"1.5px solid #fff"}} onClick={bookCall}>Book a 30-min call</button>
        </div>
      </div>
    </section>
  );
}

function ProblemAndAnswer() {
  // The "why" — Kapes' own framing, lifted from kapesadventures / Future Seeds copy.
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Why this program exists</div>
        <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>
          Hunger is the #1 barrier <span className="accent">to learning.</span><br/>
          We're solving it.
        </h2>
        <p className="lead" style={{maxWidth:680, color:"var(--ink-2)", marginBottom:48}}>
          SLTs rightly ask: why does this trip exist at all? Here's the specific, documented gap Seeds2Education is built to close — and the mechanism we use to close it.
        </p>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, border:"1px solid var(--line)", borderRadius:10, overflow:"hidden", background:"var(--sand)"}}>
          {/* THE PROBLEM */}
          <div style={{padding:"40px 36px", borderRight:"1px solid var(--line)", background:"#FBF4E6"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:22}}>
              <span style={{display:"inline-block", width:10, height:10, borderRadius:2, background:"#C44A3C", transform:"rotate(45deg)"}}/>
              <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"#C44A3C"}}>The problem</span>
            </div>
            <div className="display" style={{fontSize:"clamp(30px,2.6vw,40px)", lineHeight:1.12, color:"var(--charcoal)", marginBottom:22}}>
              1 in 4 Kenyan children<br/>face stunted growth<br/>from malnutrition.
            </div>
            <p style={{fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>
              Hunger poses a significant barrier to education. It limits focus, attendance, and long-term potential. In the communities we work with, that’s the daily reality inside the classroom.
            </p>
            <p style={{fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)", marginBottom:22}}>
              And yet: most of these same schools sit on <b style={{color:"var(--charcoal)"}}>degraded, unused land</b> — ground that could be feeding the children going hungry inside their own classrooms.
            </p>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:26, paddingTop:22, borderTop:"1px solid rgba(0,0,0,.08)"}}>
              <Stat2 n="1 in 4" l="Kenyan children · stunted growth"/>
              <Stat2 n="#1" l="Cause of lost school days"/>
            </div>
          </div>

          {/* OUR ANSWER */}
          <div style={{padding:"40px 36px"}}>
            <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:22}}>
              <span style={{display:"inline-block", width:10, height:10, borderRadius:"50%", background:"var(--orange)"}}/>
              <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"var(--orange)"}}>Seeds2Education · our answer</span>
            </div>
            <div className="display" style={{fontSize:"clamp(30px,2.6vw,40px)", lineHeight:1.12, color:"var(--charcoal)", marginBottom:22}}>
              Turn unused school land<br/>into onion farms.<br/>Exchange the harvest<br/>for meals.
            </div>
            <p style={{fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)", marginBottom:24}}>
              Students work alongside the Kenyan farm crew on land the school owns but isn't using. Onions grow. The harvest is exchanged through our partner Food for Education at $0.85 per kg — equal to three subsidised school meals. The work continues whether or not a school group is visiting.
            </p>

            {/* Programme goals */}
            <div style={{display:"flex", flexDirection:"column", gap:10, fontSize:13}}>
              {[
                ["01", "Convert unused school land into productive onion farmland"],
                ["02", "Exchange harvested onions for school meals via Food for Education"],
                ["03", "Employ Kenyans from the local community to run the work"],
                ["04", "Give visiting students an honest role inside ongoing work"],
                ["05", "Build the year-on-year case for replication at additional schools"],
              ].map(([n,t])=>(
                <div key={n} style={{display:"grid", gridTemplateColumns:"38px 1fr", gap:14, padding:"12px 14px", background:"var(--cream)", border:"1px solid var(--line)", borderRadius:6, alignItems:"center"}}>
                  <div style={{fontFamily:"var(--display)", fontSize:14, color:"var(--orange)", letterSpacing:".04em"}}>{n}</div>
                  <div style={{color:"var(--charcoal)"}}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{marginTop:22, fontSize:12.5, color:"var(--muted)", fontStyle:"italic", lineHeight:1.55, maxWidth:720}}>
          The school trip is one visible touchpoint of this mechanism — it isn’t the mechanism. The work runs year-round with our Kenyan team; student groups join mid-build.
        </div>
      </div>
    </section>
  );
}
function Stat2({n,l}){
  return (
    <div>
      <div className="display tnum" style={{fontSize:28, lineHeight:1, color:"#C44A3C"}}>{n}</div>
      <div style={{fontSize:11, letterSpacing:".06em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, marginTop:6, lineHeight:1.4}}>{l}</div>
    </div>
  );
}

function KenyaTeam() {
  const team = [
    {img:IMG.ellyPortrait,     name:"Elijah \"Elly\" Oenga", role:"Kenyan host & programme partner",   imgPos:"center 25%", note:"Kenyan entrepreneur who returned from the UK to transform arid land in Rongai into a thriving farm and eco-lodge. Hosts and co-runs the Seeds2Education programme. \"I am because we are.\""},
    {img:IMG.farmKenyanLed,    name:"\"Issacs\"",            role:"Farm manager · on-the-ground lead", placeholder:true, note:"Manages the permanent farm crew and the planting cycle, week in week out. The reason the work continues whether or not a school cohort is on site. Photo + full name to follow."},
    {img:IMG.f4eLogo, logoStyle:true, name:"Food for Education", role:"Programme partner · Kenyan NGO", org:true, note:"Kenyan NGO subsidising school meals at scale. Onions from the Seeds2Education farm are exchanged through their kitchen at $0.85/kg — equal to three subsidised school meals. Forecast 45,000 meals supported in Year 1."},
    {img:IMG.pizzaKenyanChef,  name:"Ubuntu Kreative Village", role:"Programme partner · Kenyan host venue", org:true,    note:"Kenyan eco-lodge and creative space hosting the cohort during the trip. Cultural exchange evenings — including the farm-to-table pizza night with Ubuntu's Kenyan baker — happen here."},
    {img:IMG.edsideraLogo,     name:"Edsidera",                role:"Digital partner · life-skills awards", org:true, logoStyle:true, note:"UAE-based life-skills awards platform recognised by FOBISIA, BSME and COBIS. Students log evidence from their trip work directly through the Edsidera app — citizenship, sustainability, wellbeing, entrepreneurship — and earn formally credentialled awards on top of the trip itself. Partnership launching 25/26."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
      <div className="container">
        <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:48, alignItems:"start"}}>
          <div>
            <div className="eyebrow">Who’s actually on the ground</div>
            <h2 className="display" style={{marginTop:14, fontSize:"clamp(32px,2.8vw,44px)", lineHeight:1.05, marginBottom:16}}>
              Kenyan-led.<br/>Every day of the year.
            </h2>
            <p style={{fontSize:14.5, lineHeight:1.65, color:"var(--ink-2)"}}>
              The program isn’t designed in a Western boardroom and shipped to Africa. It’s led by the people whose communities it serves. Visiting students join their work — not the other way round.
            </p>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10}}>
            {team.map((p,i)=>(
              <div key={i} style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:8, overflow:"hidden"}}>
                <div style={{position:"relative", aspectRatio:"3/4", background: p.logoStyle ? "var(--cream)" : "var(--charcoal)", display: p.logoStyle ? "flex" : "block", alignItems: p.logoStyle ? "center" : undefined, justifyContent: p.logoStyle ? "center" : undefined, padding: p.logoStyle ? "20px" : 0}}>
                  {p.logoStyle ? (
                    <img src={p.img} alt={p.name} style={{maxWidth:"82%", maxHeight:"50%", width:"auto", height:"auto", objectFit:"contain", display:"block"}}/>
                  ) : (
                    <img src={p.img} alt="" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition: p.imgPos || "center", filter: p.placeholder?"saturate(.55) brightness(.78)":"saturate(.95)"}}/>
                  )}
                  {p.placeholder && (
                    <div style={{position:"absolute", top:10, left:10, fontSize:9, letterSpacing:".18em", textTransform:"uppercase", color:"#fff", fontWeight:700, background:"rgba(0,0,0,.7)", padding:"4px 8px", borderRadius:3, border:"1px solid rgba(255,255,255,.3)"}}>Photo to follow</div>
                  )}
                  {p.org && !p.logoStyle && (
                    <div style={{position:"absolute", top:10, left:10, fontSize:9, letterSpacing:".18em", textTransform:"uppercase", color:"#fff", fontWeight:700, background:"var(--orange)", padding:"4px 8px", borderRadius:3}}>Partner</div>
                  )}
                  {p.logoStyle && (
                    <div style={{position:"absolute", top:10, left:10, fontSize:9, letterSpacing:".18em", textTransform:"uppercase", color:"#fff", fontWeight:700, background:"var(--orange)", padding:"4px 8px", borderRadius:3}}>Partner · 25/26</div>
                  )}
                </div>
                <div style={{padding:"14px 14px 16px"}}>
                  <div style={{fontFamily:"var(--display)", fontSize:16, color:"var(--charcoal)", lineHeight:1.15}}>{p.name}</div>
                  <div style={{fontSize:10.5, letterSpacing:".08em", textTransform:"uppercase", fontWeight:700, color:"var(--orange)", marginTop:6, marginBottom:8}}>{p.role}</div>
                  <div style={{fontSize:12, color:"var(--ink-2)", lineHeight:1.5}}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreDetailToggle({ open, onToggle }) {
  return (
    <section style={{padding:"56px 0", background:"var(--cream)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:24, flexWrap:"wrap"}}>
        <div>
          <div className="eyebrow">For your SLT's deeper dive</div>
          <h3 className="display" style={{marginTop:10, fontSize:"clamp(22px,2.2vw,30px)", lineHeight:1.15}}>
            Activity log, photo gallery, video, and Year-1 outcomes table.
          </h3>
        </div>
        <button
          className="btn-pill"
          onClick={onToggle}
          style={{padding:"14px 24px", background: open?"var(--charcoal)":"var(--orange)", color:"#fff", border:"none"}}
        >
          {open ? "Hide more detail ↑" : "Show more detail ↓"}
        </button>
      </div>
    </section>
  );
}

function S2EProgramme() {
  const [showDetail, setShowDetail] = React.useState(false);
  return (
    <div>
      <SiteNav/>
      <ProgrammeHeader/>
      <HeroGallery/>
      <ProblemAndAnswer/>
      <DayByDay/>
      <FieldFilm/>
      <S2EPricing/>
      <KenyaTeam/>
      <FAQ/>

      <MoreDetailToggle open={showDetail} onToggle={()=>setShowDetail(s=>!s)}/>
      {showDetail && (
        <>
          <YearLog/>
          <GalleryWall/>
          <Outcomes/>
        </>
      )}

      <ProgrammeCTA/>
      <Footer/>
    </div>
  );
}

const SLIM_PROGRAMMES = {
  wew: {
    name: "Water Empowering Women",
    code: "WEW·02",
    color: "#F43F5E",
    breadcrumb: "Water Empowering Women",
    headlineTop: "Water",
    headlineAccent: "Empowering Women.",
    sub: "In this part of Kenya, drought is real — and getting worse with climate change. Water scarcity is one of the biggest barriers to a child's education. We work with a Kenyan community leader to install water tanks and refurbish classrooms at partner schools — removing the water barrier, then watching what happens to attendance.",
    sister: "Seeds2Education · Community Conservation",
    img: IMG.wewPaintingTank,
    imgAlt: "Water Empowering Women — student painting the mural on the freshly installed water tank",
    imgPos: "center 30%",
    heroChip: "Water Empowering Women",
    heroLine: "Trip-window programme · 25/26",
    kvs: [
      ["Mode", "Trip-window programme"],
      ["Base", "Wildlife Works conservancy · Voi"],
      ["Standard length", "7 nights"],
      ["Group size", "Up to 30 students"],
      ["Age group", "Y9–Y13"],
      ["Programme partner", "Kenyan community leader · Hope School"],
      ["Price", "USD 2,850 / student (excl. flights)"],
      ["Proven outcome", "+40% enrolment at Hope School (weeks after build)"],
    ],
    problem: {
      eyebrow: "Why this programme exists",
      title: "Drought is the barrier. Water is the answer.",
      tag: "The problem",
      tagColor: "#1D3557",
      pBody: "In this part of Kenya, drought is real and worsening with climate change. When water is scarce, education suffers in three direct ways. Students can't focus when they're dehydrated. Unclean water causes illness, which causes missed school days. And in most communities, it's girls who walk to fetch water — meaning the children who lose the most school time are the ones who can least afford to. Water access isn't about water alone. It's about whether children — especially girls — can stay in school.",
      stats: [["40%","enrolment increase after our build"], ["40+","children with daily clean-water access"]],
      answer: {
        eyebrow: "Water Empowering Women · our answer",
        title: "Install reliable water. Refurbish the classroom. Watch attendance grow.",
        body: "We work with a Kenyan community leader to identify a school where water is the binding constraint. We install water-tank infrastructure that the community owns and maintains. We refurbish a classroom alongside it — because the school becomes a place worth attending. School groups arrive during the build, contribute to the work, and meet the women whose lives the water access changes. At Hope School, enrolment rose 40% in the weeks after our build.",
        bullets: [
          ["01", "Identify a partner school where water is the barrier"],
          ["02", "Install water-tank infrastructure with the community"],
          ["03", "Refurbish a classroom alongside the install"],
          ["04", "School groups join the build during their trip"],
          ["05", "Track the outcome — attendance, enrolment, illness rates"],
        ],
      },
    },
    stats: [
      ["40", "%", "Increase in student enrolment at Hope School", "In the weeks after our build"],
      ["1", "tank", "Water tank installed at Hope School", "25/26"],
      ["1", "classroom", "Refurbished alongside the water-tank install", "25/26"],
      ["40+", "children", "With new daily clean-water access through the programme", "25/26"],
      ["↓", "soil erosion", "Reported reduction at the partner school after the tank install", "Year 1 outcome"],
    ],
    gallery: [
      {src: IMG.wewGroundwork,       cap: "groundwork with the partner-school children", pos:"center 35%"},
      {src: IMG.wewClassroomPaint,   cap: "refurbishing the classroom",                  pos:"center 30%"},
      {src: IMG.wewKenyanLed,        cap: "Kenyan-led · the community working alongside",        pos:"center 40%"},
      {src: IMG.wewPaintingTank,     cap: "painting the tank · designs by both cohorts",  pos:"center 30%"},
      {src: IMG.wewClassroomInside,  cap: "the refurbished classroom · ready for the next term", pos:"center 40%"},
      {src: IMG.wewCelebration,      cap: "the partner school + visiting cohort · finished tank behind", pos:"center 35%"},
    ],
    quote: {
      pull: "Parents are seeing a school with potential.",
      body: "The tank is great — we collected lots of water. Also more students got enrolled this year because of the tank. Parents are seeing a school with potential. More clean water available.",
      by: "Monica Makori",
      ctx: "Hope School · Kenya",
    },
    fullVideo: {
      title: "The Voi trip on film.",
      body: "The full Water Empowering Women trip recap from December 2025 — Hope School build, the cultural exchanges, the Tsavo East morning, the Marugu Hills hike with our scouts. Two and a half minutes, end to end.",
      meta: "Full film · 2:22 · Voi · Dec 2025",
      src: "photos/v-wew-full.mp4",
      poster: "photos/v-wew-full-poster.jpg",
    },
    walk: {
      eyebrow: "The water walk",
      title: "Walking the route ourselves.",
      body: "Before the build is finished, every cohort walks the route women in this community walk daily — down to the water source, fill the jericans, carry them back along the red-dust trail. By the time the cohort reaches the school, they have what no statistic can give them: a body memory of the burden the tank removes.",
      tiles: [
        {src: IMG.wewWalkSource, cap: "At the source — filling jericans",                     pos:"center 45%"},
        {src: IMG.wewWalkLift,   cap: "Lifting the can — taking the weight, briefly",         pos:"center 35%"},
        {src: IMG.wewWalkLine,   cap: "The line on the trail — the route the women walk",     pos:"center 50%"},
        {src: IMG.wewWalkTrail,  cap: "Carrying back — red dust, yellow cans, full weight",   pos:"center 60%"},
      ],
    },
    cultural: {
      eyebrow: "Cultural exchange",
      title: "Hosted, not host.",
      body: "Across the trip, the cohort is welcomed by three different groups of Kenyans: women cooking chapatis, the Neema Women's Group running their workshops, and Maasai elders gathered for the evening. In every room — kitchen, workshop, clearing — the visiting cohort are the learners and the Kenyans are the experts. That's the bias of every Kapes Adventures trip: showing up to be hosted, not the other way around.",
      blocks: [
        {
          subhead: "Cooking chapatis with the women of the community",
          tiles: [
            {src: IMG.wewChapatiPortrait, cap: "The community kitchen — bowls, dough, doorway light",   pos:"center 35%"},
            {src: IMG.wewChapatiOutdoor,  cap: "Kneading outdoors — Kenyan women guiding the cohort",   pos:"center 50%"},
            {src: IMG.wewChapatiWomen,    cap: "Frying on the open stove — students taking their turn", pos:"center 35%"},
            {src: IMG.wewChapatiHands,    cap: "The technique passed on — learning hand-to-hand",       pos:"center 45%"},
          ],
        },
        {
          subhead: "Workshops with the Neema Women's Group",
          tiles: [
            {src: IMG.wewNeemaPortrait, cap: "The Neema Women — kitenge and headwraps, the hosts",   pos:"center 30%"},
            {src: IMG.wewNeemaTeaching, cap: "The demonstration — Kenyan women leading the room",   pos:"center 35%"},
            {src: IMG.wewNeemaWorkshop, cap: "At the table — cohort and women working together",    pos:"center 40%"},
            {src: IMG.wewNeemaCraft,    cap: "The craft — the work the women run as a business",    pos:"center 50%"},
          ],
        },
        {
          subhead: "An evening with the Maasai",
          tiles: [
            {src: IMG.wewMaasaiGreeting,  cap: "The greeting — Maasai elders welcoming the cohort", pos:"center 40%"},
            {src: IMG.wewMaasaiHeaddress, cap: "Golden hour — joining the welcome circle",         pos:"center 30%"},
            {src: IMG.wewMaasaiDance,     cap: "Joining the dance — Maasai dancers leading",       pos:"center 30%"},
            {src: IMG.wewMaasaiEvening,   cap: "The cohort listening — Maasai voices, our seats",  pos:"center 40%"},
          ],
        },
      ],
    },
    landscape: {
      eyebrow: "The land we work in",
      title: "A morning in Tsavo East.",
      body: "Hope School sits on the edge of one of Kenya's largest national parks. Before they leave, every cohort spends a morning inside it — not as the headline of the trip, but as the context. Tsavo's red-dust elephants, the watering holes, the herds at the horizon: this is the landscape the water tank serves.",
      tiles: [
        {src: IMG.wewTsavoTusker,   cap: "Tusker at golden hour",                          pos:"center 50%"},
        {src: IMG.wewTsavoWatering, cap: "Watering hole · elephants and zebras at dusk",   pos:"center 50%"},
        {src: IMG.wewTsavoCohort,   cap: "Lunch in the bush — cohort, picnic, baobabs",    pos:"center 40%"},
        {src: IMG.wewTsavoLion,     cap: "Lion in a tree — a rarer sighting",              pos:"center 30%"},
      ],
    },
    team: {
      eyebrow: "Led by Kenyans, in Kenya",
      title: "A day in the Marugu Hills with our scouts.",
      body: "Every Kapes Adventures trip is led by Kenyans. The Marugu Hills hike — done with community scouts who know the landscape better than anyone — is the clearest version of that on the WEW trip. They set the pace. They set the route. The cohort follows. The point of every outing is the same: the people of this place are not a backdrop, they are the hosts.",
      tiles: [
        {src: IMG.wewMaruguVista,    cap: "The vista — green hills, watering hole below",       pos:"center 50%"},
        {src: IMG.wewMaruguHike,     cap: "The cohort moving through the landscape",            pos:"center 45%"},
        {src: IMG.wewMaruguStudents, cap: "Students scrambling up the rocks",                   pos:"center 50%"},
        {src: IMG.wewMaruguScout,    cap: "Our scout — the trip is led by Kenyans, every day",  pos:"center 30%"},
      ],
    },
    feature: {
      eyebrow: "Heard from the source",
      title: "A talk from a local medical professional.",
      body: "Cohorts hear from a Kenyan community health worker about the human side of the system the tank serves — water access, hygiene, women's health. The link from a half-day's work refurbishing a classroom to maternal-health outcomes in this district is not abstract. It is in the room, in her words, before the cohort flies home.",
      img: IMG.wewMedicalTalk,
      caption: "Voi · Kenya — outdoor pavilion at the partner school, water tank installed behind",
      pos: "center 40%",
    },
    price: "USD 2,850",
    inclusion: "in-country accommodation, all meals on programme, transport, all programme activities, Kenyan trip leaders, partner contributions, water-tank install costs, insurance and safety cover",
    exclusion: "international flights from your home airport",
    faqs: [
      ["Is the water tank really new infrastructure?", "Yes. The community partner identifies the school and water need before the trip is scheduled. The trip's role is to contribute to the install and meet the community — not to design the project."],
      ["Why the focus on women?", "Water access disproportionately affects women's daily lives in the communities we work with — water-collection time, sanitation, ability to run a household and a school kitchen. Naming that explicitly is part of the programme."],
      ["What's the price?", "USD 2,850 per student for the 7-night standard trip, excluding international flights. Bespoke quotes for shorter, longer, or combined trips."],
      ["What's the safeguarding posture?", "No direct one-on-one student contact with vulnerable children at the partner school. Activities are designed around the work — not around the children. Risk-assessed itineraries, 1:10 leader ratio with a minimum of two Kenyan trip leaders per trip."],
    ],
  },
  cc: {
    name: "Community Conservation",
    code: "CC·03",
    color: "#3B82F6",
    breadcrumb: "Community Conservation",
    headlineTop: "Community",
    headlineAccent: "Conservation.",
    sub: "Based at a Kenyan wildlife conservancy where conservation, community livelihoods, and ethical garment manufacturing intersect on a single site. Our longest-running programme — the first Kapes Adventures trip ran with Arbor School in 2022 and sponsored 15 local Kenyan children's school places. Six more followed in partnership with Mountain Quests (UAE) before we began delivering directly in 2025.",
    sister: "Seeds2Education · Water Empowering Women",
    img: IMG.ccFactory,
    imgAlt: "Community Conservation — students hands-on inside the carbon-neutral garment factory tour",
    imgPos: "center 40%",
    heroChip: "Community Conservation",
    heroLine: "Trip-window programme · since 2022",
    kvs: [
      ["Mode", "Trip-window programme"],
      ["Base", "Wildlife Works conservancy · Voi"],
      ["Standard length", "7 nights"],
      ["Group size", "Up to 30 students"],
      ["Age group", "Mixed Y9–Y13"],
      ["Partner", "Kenyan wildlife conservancy"],
      ["Price", "USD 2,600 / student (excl. flights)"],
      ["First trip", "Arbor School · 2022"],
    ],
    problem: {
      eyebrow: "Why this programme exists",
      title: "Conservation, community, and what your uniforms come from.",
      tag: "The intersection",
      tagColor: "#1D3557",
      pBody: "The Kenyan conservancy that hosts Community Conservation is also where Kapes Uniforms are manufactured — the world's first carbon-neutral garment factory sits inside a working wildlife conservation operation, surrounded by community-run enterprises. The trip exposes students to all three on a single site.",
      stats: [["2022","first trip ran with Arbor School"], ["15","local children sponsored on that trip"], ["1","conservancy partner"]],
      answer: {
        eyebrow: "Community Conservation · our answer",
        title: "See the wildlife. See the factory. See how they share a fence.",
        body: "Students join the conservancy partner's existing work — wildlife conservation activities, community-livelihoods exposure, and a tour of the carbon-neutral garment factory where Kapes Uniforms are made. The link between the uniform a student in Dubai is wearing and the conservation they're standing in is made visible, in person.",
        bullets: [
          ["01", "Conservancy-led wildlife and conservation activities"],
          ["02", "Tour the world's first carbon-neutral garment factory"],
          ["03", "Meet community-run enterprises (basket weaving, soap-making)"],
          ["04", "Connect ethical manufacturing to conservation outcomes"],
          ["05", "Reflection: where what you wear comes from"],
        ],
      },
    },
    stats: [
      ["2022", "first trip", "First Kapes Adventures trip — Arbor School · sponsored 15 local children", "Longest-running"],
      ["50%", "to education", "Of conservancy REDD+ profits go to school bursaries + facilities", "REDD+ project"],
      ["1", "factory", "Carbon-neutral garment factory on-site", "Kapes Uniforms manufacturing"],
      ["3", "lenses", "Wildlife · community · ethical manufacturing", "On a single site"],
    ],
    gallery: [
      {src: IMG.ccArbor2022SponsoredKids, cap: "The 15 local children sponsored on the first trip · 2022",        pos:"center 30%"},
      {src: IMG.ccArbor2022KenyanLead,    cap: "Kenyan trip lead with the Arbor cohort · 2022",                   pos:"center 30%"},
      {src: IMG.ccArbor2022Planting,      cap: "Students alongside the Kenyan farm crew · planting nursery",       pos:"center 40%"},
      {src: IMG.ccArbor2022Saplings,      cap: "Examining seedlings with conservancy staff",                       pos:"center 40%"},
      {src: IMG.ccArbor2022Tsavo,         cap: "Tsavo plains · Kenyan wildlife corridor",                          pos:"center 50%"},
      {src: IMG.ccArbor2022Elephants,     cap: "Elephants under the acacia · the conservancy's wildlife work",     pos:"center 40%"},
      {src: IMG.ccArbor2022Overlook,      cap: "Reflection over the plains · Tsavo lookout",                       pos:"center 40%"},
      {src: IMG.ccArbor2022BuildSite,     cap: "Build site with the Kenyan team · Arbor cohort",                   pos:"center 40%"},
    ],
    quote: null,
    price: "USD 2,600",
    inclusion: "in-country accommodation, all meals on programme, transport, all programme activities, Kenyan trip leaders, conservancy partner contributions, factory tour, insurance and safety cover",
    exclusion: "international flights from your home airport",
    faqs: [
      ["What makes this different from a typical safari?", "Most safaris show wildlife. This trip shows wildlife alongside the community-run enterprises that protect it and the manufacturing operation that funds part of it. Three visible systems on one site."],
      ["Is this connected to Kapes Uniforms?", "Yes — directly. The conservancy hosts the carbon-neutral garment factory where Kapes Uniforms are manufactured. Students see what their school's uniforms are connected to."],
      ["What's the price?", "USD 2,600 per student for the 7-night standard trip, excluding international flights. Bespoke quotes for shorter, longer, or combined trips."],
      ["What's the safeguarding posture?", "No direct one-on-one student contact with vulnerable children. Risk-assessed itineraries. 1:10 leader-to-student ratio with a minimum of two Kenyan trip leaders per trip."],
    ],
  },
};
function SlimProgramme({ slug }) {
  const d = SLIM_PROGRAMMES[slug];
  if (!d) return null;
  return (
    <div>
      <SiteNav/>

      {/* Header */}
      <section style={{background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
        <div className="container" style={{paddingTop:36, paddingBottom:24, display:"flex", alignItems:"center", justifyContent:"space-between", fontSize:12, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600, flexWrap:"wrap", gap:14}}>
          <div>Programs &nbsp;/&nbsp; {d.breadcrumb} &nbsp;/&nbsp; <span style={{color:"var(--charcoal)"}}>Programme</span></div>
          <div style={{display:"flex", gap:18}}>
            <span>Doc ID · {d.code}-2026</span>
            <span style={{color:"var(--orange)"}}>● Live programme</span>
          </div>
        </div>
        <div className="container" style={{paddingBottom:56, display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"end"}}>
          <div>
            <div className="eyebrow">Programme overview</div>
            <h1 className="display" style={{marginTop:18, fontSize:"clamp(52px,5.4vw,84px)"}}>
              {d.headlineTop}<br/><span className="accent">{d.headlineAccent}</span>
            </h1>
            <p className="lead" style={{marginTop:20, maxWidth:560, color:"var(--ink-2)"}}>{d.sub}</p>
            <div style={{fontSize:13, color:"var(--muted)", marginTop:16}}>
              <b style={{color:"var(--charcoal)"}}>Sister programmes:</b> {d.sister}
            </div>
            <div style={{display:"flex", gap:10, marginTop:24, flexWrap:"wrap"}}>
              <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("contact")}>Request the programme PDF</button>
              <button className="btn-pill btn-ghost" style={{padding:"14px 22px"}} onClick={bookCall}>Book an intro call</button>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, fontSize:12}}>
            {d.kvs.map(([k,v])=> <KV key={k} label={k} value={v}/>)}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={{background:"var(--charcoal)", padding:0, borderBottom:"1px solid var(--line)", position:"relative"}}>
        <div style={{position:"relative", height:520, overflow:"hidden"}}>
          <img src={d.img} alt={d.imgAlt} style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:d.imgPos}}/>
          <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(26,26,26,.55) 0%, rgba(26,26,26,.15) 40%, rgba(26,26,26,.75) 100%)"}}/>
          <div style={{position:"absolute", bottom:40, left:32, right:32, color:"#fff"}}>
            <div className="container">
              <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", fontWeight:700, color:d.color, marginBottom:18}}>{d.heroChip}</div>
              <div style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:600}}>{d.heroLine}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why this programme exists */}
      <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
        <div className="container">
          <div className="eyebrow">{d.problem.eyebrow}</div>
          <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>{d.problem.title}</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, border:"1px solid var(--line)", borderRadius:10, overflow:"hidden", background:"var(--sand)", marginTop:32}}>
            <div style={{padding:"40px 36px", borderRight:"1px solid var(--line)", background:"#FBF4E6"}}>
              <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:22}}>
                <span style={{display:"inline-block", width:10, height:10, borderRadius:2, background:d.problem.tagColor, transform:"rotate(45deg)"}}/>
                <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:d.problem.tagColor}}>{d.problem.tag}</span>
              </div>
              <p style={{fontSize:15, lineHeight:1.65, color:"var(--ink-2)"}}>{d.problem.pBody}</p>
              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:26, paddingTop:22, borderTop:"1px solid rgba(0,0,0,.08)"}}>
                {d.problem.stats.map(([n,l])=>(
                  <div key={l}>
                    <div className="display tnum" style={{fontSize:28, lineHeight:1, color:d.problem.tagColor}}>{n}</div>
                    <div style={{fontSize:11, letterSpacing:".06em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, marginTop:6, lineHeight:1.4}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{padding:"40px 36px"}}>
              <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:22}}>
                <span style={{display:"inline-block", width:10, height:10, borderRadius:"50%", background:"var(--orange)"}}/>
                <span style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"var(--orange)"}}>{d.problem.answer.eyebrow}</span>
              </div>
              <div className="display" style={{fontSize:"clamp(22px,2.2vw,30px)", lineHeight:1.15, color:"var(--charcoal)", marginBottom:22}}>{d.problem.answer.title}</div>
              <p style={{fontSize:15, lineHeight:1.65, color:"var(--ink-2)", marginBottom:20}}>{d.problem.answer.body}</p>
              <div style={{display:"flex", flexDirection:"column", gap:10, fontSize:13}}>
                {d.problem.answer.bullets.map(([n,t])=>(
                  <div key={n} style={{display:"grid", gridTemplateColumns:"38px 1fr", gap:14, padding:"12px 14px", background:"var(--cream)", border:"1px solid var(--line)", borderRadius:6, alignItems:"center"}}>
                    <div style={{fontFamily:"var(--display)", fontSize:14, color:"var(--orange)"}}>{n}</div>
                    <div style={{color:"var(--charcoal)"}}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip — programme-specific visual context */}
      {d.gallery && (
        <section style={{padding:0, background:"var(--charcoal)"}}>
          <div style={{display:"grid", gridTemplateColumns: d.gallery.length > 4 ? "repeat(3, 1fr)" : `repeat(${d.gallery.length},1fr)`, gap:0}}>
            {d.gallery.map((g,i)=>(
              <div key={i} style={{position:"relative", aspectRatio:"4/3", overflow:"hidden"}}>
                <img src={g.src} alt={g.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:g.pos||"center", display:"block"}}/>
                <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.7) 100%)"}}/>
                <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{g.cap}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trip film — if a fullVideo is configured for this programme */}
      {d.fullVideo && (
        <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
          <div className="container">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"end", flexWrap:"wrap", gap:24, marginBottom:32}}>
              <div>
                <div className="eyebrow">See it · don't just read it</div>
                <h2 className="display" style={{marginTop:14, fontSize:"clamp(34px,3vw,46px)", lineHeight:1.05}}>
                  {d.fullVideo.title}
                </h2>
                <p style={{fontSize:15, lineHeight:1.65, color:"var(--ink-2)", marginTop:14, maxWidth:600}}>{d.fullVideo.body}</p>
              </div>
              <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"var(--muted)"}}>● {d.fullVideo.meta}</div>
            </div>
            <div style={{position:"relative", aspectRatio:"16 / 9", borderRadius:10, overflow:"hidden", border:"1px solid var(--line)", boxShadow:"0 40px 80px -30px rgba(26,26,26,.35)", background:"#000"}}>
              <video src={d.fullVideo.src} poster={d.fullVideo.poster} controls preload="metadata" playsInline style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="section" style={{padding:"72px 0", background:"var(--charcoal)", color:"#fff"}}>
        <div className="container">
          <div className="eyebrow" style={{color:"rgba(255,255,255,.55)"}}>By the numbers</div>
          <h2 className="display" style={{color:"#fff", marginTop:14, marginBottom:36, maxWidth:900, fontSize:"clamp(28px,3vw,42px)"}}>What this programme has <span className="accent">actually delivered.</span></h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:2, background:"#262626"}}>
            {d.stats.map(([n,unit,label,note])=>(
              <BigStat key={label} dark n={n} unit={unit} label={label} note={note}/>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — if available */}
      {d.quote && (
        <section style={{padding:"96px 0", background:"var(--sand)"}}>
          <div className="container" style={{maxWidth:920, textAlign:"center"}}>
            <div className="eyebrow" style={{justifyContent:"center"}}>Voice from the trip</div>
            <div className="display" style={{marginTop:24, fontSize:"clamp(28px,3.4vw,48px)", lineHeight:1.1}}>"{d.quote.pull}"</div>
            <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.7, color:"var(--ink-2)", marginTop:28, maxWidth:680, marginInline:"auto"}}>"{d.quote.body}"</p>
            <div style={{marginTop:22, fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{d.quote.by} · {d.quote.ctx}</div>
          </div>
        </section>
      )}

      {/* Water walk — if available (programme-specific) */}
      {d.walk && (
        <section className="section" style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"start", marginBottom:36}}>
              <div>
                <div className="eyebrow" style={{color:"rgba(255,255,255,.55)"}}>{d.walk.eyebrow}</div>
                <h2 className="display" style={{color:"#fff", marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>{d.walk.title}</h2>
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.75, color:"rgba(255,255,255,.78)"}}>{d.walk.body}</p>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0}}>
              {d.walk.tiles.map((t,i)=>(
                <div key={i} style={{position:"relative", aspectRatio:"4/5", overflow:"hidden"}}>
                  <img src={t.src} alt={t.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:t.pos||"center", display:"block"}}/>
                  <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.78) 100%)"}}/>
                  <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{t.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cultural exchange — if available (programme-specific) */}
      {d.cultural && (
        <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"start", marginBottom:36}}>
              <div>
                <div className="eyebrow">{d.cultural.eyebrow}</div>
                <h2 className="display" style={{marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>{d.cultural.title}</h2>
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.75, color:"var(--ink-2)"}}>{d.cultural.body}</p>
            </div>
            {d.cultural.blocks ? d.cultural.blocks.map((b, bi)=>(
              <div key={bi} style={{marginTop: bi===0 ? 0 : 40}}>
                <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:14}}>
                  <span style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{String(bi+1).padStart(2,"0")}</span>
                  <span style={{fontFamily:"var(--display)", fontSize:18, fontWeight:600, color:"var(--ink)"}}>{b.subhead}</span>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0}}>
                  {b.tiles.map((t,i)=>(
                    <div key={i} style={{position:"relative", aspectRatio:"4/5", overflow:"hidden"}}>
                      <img src={t.src} alt={t.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:t.pos||"center", display:"block"}}/>
                      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.78) 100%)"}}/>
                      <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{t.cap}</div>
                    </div>
                  ))}
                </div>
              </div>
            )) : d.cultural.tiles && (
              <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0}}>
                {d.cultural.tiles.map((t,i)=>(
                  <div key={i} style={{position:"relative", aspectRatio:"4/5", overflow:"hidden"}}>
                    <img src={t.src} alt={t.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:t.pos||"center", display:"block"}}/>
                    <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.78) 100%)"}}/>
                    <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{t.cap}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Landscape band — if available (programme-specific) */}
      {d.landscape && (
        <section className="section" style={{padding:"96px 0", background:"var(--charcoal)", color:"#fff"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"start", marginBottom:36}}>
              <div>
                <div className="eyebrow" style={{color:"rgba(255,255,255,.55)"}}>{d.landscape.eyebrow}</div>
                <h2 className="display" style={{color:"#fff", marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>{d.landscape.title}</h2>
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.75, color:"rgba(255,255,255,.78)"}}>{d.landscape.body}</p>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0}}>
              {d.landscape.tiles.map((t,i)=>(
                <div key={i} style={{position:"relative", aspectRatio:"4/5", overflow:"hidden"}}>
                  <img src={t.src} alt={t.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:t.pos||"center", display:"block"}}/>
                  <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.78) 100%)"}}/>
                  <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{t.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team band — if available (programme-specific) */}
      {d.team && (
        <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:48, alignItems:"start", marginBottom:36}}>
              <div>
                <div className="eyebrow">{d.team.eyebrow}</div>
                <h2 className="display" style={{marginTop:14, fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1}}>{d.team.title}</h2>
              </div>
              <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.75, color:"var(--ink-2)"}}>{d.team.body}</p>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:0}}>
              {d.team.tiles.map((t,i)=>(
                <div key={i} style={{position:"relative", aspectRatio:"4/5", overflow:"hidden"}}>
                  <img src={t.src} alt={t.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:t.pos||"center", display:"block"}}/>
                  <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.78) 100%)"}}/>
                  <div style={{position:"absolute", bottom:14, left:16, right:16, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{t.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature — single editorial image w/ context (programme-specific) */}
      {d.feature && (
        <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
          <div className="container">
            <div style={{display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:48, alignItems:"center"}}>
              <div>
                <div className="eyebrow">{d.feature.eyebrow}</div>
                <h2 className="display" style={{marginTop:14, fontSize:"clamp(26px,2.6vw,38px)", lineHeight:1.15}}>{d.feature.title}</h2>
                <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:17, lineHeight:1.75, color:"var(--ink-2)", marginTop:22}}>{d.feature.body}</p>
              </div>
              <figure style={{margin:0}}>
                <div style={{position:"relative", aspectRatio:"3/2", overflow:"hidden"}}>
                  <img src={d.feature.img} alt={d.feature.caption} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:d.feature.pos||"center", display:"block"}}/>
                </div>
                <figcaption style={{marginTop:12, fontSize:12, letterSpacing:".12em", textTransform:"uppercase", color:"var(--ink-2)", fontWeight:600}}>{d.feature.caption}</figcaption>
              </figure>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
        <div className="container">
          <div className="eyebrow">Pricing</div>
          <h2 className="display" style={{marginTop:14, marginBottom:32, maxWidth:900}}>One number. <span className="accent">Bespoke on request.</span></h2>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:48, alignItems:"start"}}>
            <div>
              <p className="lead" style={{maxWidth:580, color:"var(--ink-2)"}}>
                {d.name} is priced at <b>{d.price} per student</b> for the 7-night standard trip, excluding international flights. We don't tier within a programme — every cohort gets the same accommodation, the same Kenyan trip leaders, the same 1:10 ratio.
              </p>
              <p style={{fontSize:15, lineHeight:1.7, color:"var(--ink-2)", marginTop:18, maxWidth:580}}>
                <b>What's in:</b> {d.inclusion}.<br/><b>What's out:</b> {d.exclusion}.
              </p>
            </div>
            <div style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:32}}>
              <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:14}}>Standard 7-night trip</div>
              <div className="display" style={{fontSize:48, lineHeight:1}}>{d.price}</div>
              <div style={{fontSize:13, color:"var(--ink-2)", marginTop:8}}>per student · excl. international flights</div>
              <button className="btn-pill btn-action" style={{padding:"12px 22px", marginTop:24, width:"100%"}} onClick={()=>khifiNavigate("contact")}>Request a quote →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
        <div className="container">
          <div className="eyebrow">The honest FAQ</div>
          <h2 className="display" style={{marginTop:14, marginBottom:32, maxWidth:900}}>Questions your SLT <span className="accent">will ask.</span></h2>
          <div style={{borderTop:"2px solid var(--charcoal)"}}>
            {d.faqs.map(([q,a],i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:40, padding:"28px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
                <div style={{fontFamily:"var(--display)", fontSize:20, color:"var(--charcoal)"}}>{q}</div>
                <div style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)"}}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgrammeCTA/>
      <Footer/>
    </div>
  );
}

function ProgramPage({ slug }) {
  const s = slug || (typeof window !== "undefined" && window.kapesProgramme) || "s2e";
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && s === "s2e" && window.MobileProgramPage) return <window.MobileProgramPage/>;
  if (s === "s2e") return <S2EProgramme/>;
  return <SlimProgramme slug={s}/>;
}
window.ProgramPage = ProgramPage;
