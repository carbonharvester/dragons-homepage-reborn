/* Program Detail wireframes — example: Seeds2Education */

const { Photo, Lines, Annot, NavComponent:Nav } = window;

/* ===================================================== */
/* APPROACH 1 — Classical trip detail                     */
/* ===================================================== */
const ProgA1 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <Nav/>

    {/* Breadcrumb */}
    <div className="mono" style={{fontSize:10, color:"var(--muted)", marginBottom:10}}>
      HOME / PROGRAMS / <span style={{color:"var(--ink)"}}>SEEDS2EDUCATION</span>
    </div>

    {/* Hero */}
    <section style={{marginBottom:22, display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:20}}>
      <div>
        <span className="chip acc">School trip program</span>
        <div className="display" style={{fontSize:56, marginTop:10, lineHeight:.95}}>
          Seeds2<span className="accent">Education</span>
        </div>
        <div className="serif" style={{fontSize:22, fontStyle:"italic", marginTop:8}}>
          Hunger is the #1 barrier to learning. Your students help expand what's already working.
        </div>
        <div style={{marginTop:16, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10}}>
          {[["Duration","2 weeks"],["Ages","14–18"],["Group","10–30"],["Location","Marasi, Kenya"]].map(([k,v])=>(
            <div key={k} className="box" style={{padding:"8px 10px"}}>
              <div className="mono" style={{fontSize:9, color:"var(--muted)"}}>{k}</div>
              <div style={{fontSize:13, fontWeight:600, marginTop:2}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:16, display:"flex", gap:10}}>
          <span className="chip acc">▸ Request brochure</span>
          <span className="chip">Book intro call</span>
        </div>
      </div>
      <Photo label="Seeds2Education — garden + student-Kenyan team" h={320}/>
    </section>

    {/* Overview + sidebar */}
    <section style={{display:"grid", gridTemplateColumns:"1.6fr 1fr", gap:22, marginBottom:22}}>
      <div>
        <div className="eyebrow">OVERVIEW</div>
        <div className="display" style={{fontSize:28, marginTop:4}}>Year-round gardens, not a pop-up project.</div>
        <div style={{marginTop:10}}><Lines n={5}/></div>
        <div style={{marginTop:14, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10}}>
          {[
            ["45,000","meals · harvest 1"],
            ["1.5 ac","farmland transformed"],
            ["200+","children fed daily"],
          ].map(([n,l])=>(
            <div key={l} className="box" style={{padding:12}}>
              <div className="display" style={{fontSize:32}}>{n}</div>
              <div className="mono" style={{fontSize:10, color:"var(--ink-2)", marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <aside className="box" style={{padding:14, background:"var(--paper-2)"}}>
        <div className="eyebrow">AT A GLANCE</div>
        {[["Starts from","$3,400"],["Deposit","$500"],["CAS hours","~60"],["SDGs","2, 4, 5, 15"],["Safety","BS8848-aligned"]].map(([k,v])=>(
          <div key={k} style={{display:"flex", justifyContent:"space-between", padding:"8px 0", borderTop:"1.5px dashed var(--ink)", fontSize:12}}>
            <span className="mono" style={{color:"var(--ink-2)"}}>{k}</span>
            <span style={{fontWeight:600}}>{v}</span>
          </div>
        ))}
        <div style={{marginTop:12}}><span className="chip acc">▸ Download brochure</span></div>
      </aside>
    </section>

    {/* Itinerary */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">DAY BY DAY</div>
      <div className="display" style={{fontSize:28, marginTop:4, marginBottom:12}}>12 days in Kenya</div>
      <div className="col">
        {[
          ["01","Arrival · Nairobi","airport pickup, orientation, Kenyan-led welcome"],
          ["02","Transfer to Marasi","overland, context briefing, meet partner-school staff"],
          ["03–05","Garden build week","permaculture work alongside women's cooperative"],
          ["06","Rest + reflection","journalling, cultural immersion, guided discussion"],
          ["07–09","School feeding + teaching","co-teach with Kenyan staff at Marasi Primary"],
          ["10","Safari · Tsavo","wildlife day — Kenyan rangers"],
          ["11","Community close","harvest dinner, handover to Kenyan team"],
          ["12","Return · Nairobi","departure + CAS debrief pack"],
        ].map(([d,t,s])=>(
          <div key={d} className="box" style={{display:"flex", gap:14, padding:12}}>
            <div style={{width:80}} className="hand" >Day {d}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:13, fontWeight:600}}>{t}</div>
              <div className="mono" style={{fontSize:11, color:"var(--ink-2)", marginTop:2}}>{s}</div>
            </div>
            <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>↓</div>
          </div>
        ))}
      </div>
    </section>

    {/* Gallery */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">GALLERY</div>
      <div className="grid-4" style={{marginTop:6}}>
        {["garden","kids","water","rangers"].map(p=><Photo key={p} label={p} h={130}/>)}
      </div>
    </section>

    {/* Learning outcomes */}
    <section style={{marginBottom:22}}>
      <div className="grid-2">
        <div className="box">
          <div className="eyebrow">LEARNING OUTCOMES</div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.7}}>
            <li>Systems thinking — food security in practice</li>
            <li>Cross-cultural collaboration</li>
            <li>Permaculture + agroecology basics</li>
            <li>Ethical development frameworks</li>
          </ul>
        </div>
        <div className="box">
          <div className="eyebrow">COMMUNITY OUTCOMES</div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.7}}>
            <li>Garden acreage expanded</li>
            <li>More daily meals at Marasi Primary</li>
            <li>Income for local women's cooperative</li>
            <li>Ranger training & employment</li>
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="box rough" style={{padding:"22px 24px", background:"var(--paper-2)", textAlign:"center"}}>
      <div className="display" style={{fontSize:34}}>Talk to our Kenya team about Seeds2Education</div>
      <div style={{marginTop:14, display:"flex", justifyContent:"center", gap:10}}>
        <span className="chip acc">▸ Book a call</span>
        <span className="chip">Download brochure</span>
      </div>
    </section>
  </div>
);

/* ===================================================== */
/* APPROACH 2 — Sticky split: program info + live booking */
/* ===================================================== */
const ProgA2 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <Nav/>
    <div style={{display:"grid", gridTemplateColumns:"1fr 360px", gap:22, position:"relative"}}>
      <div className="col" style={{gap:22}}>
        {/* Hero */}
        <div className="box rough" style={{padding:0, overflow:"hidden"}}>
          <Photo label="Seeds2Education full-bleed" h={260}/>
          <div style={{padding:18}}>
            <span className="chip">Program · school trip</span>
            <div className="display" style={{fontSize:48, marginTop:8}}>
              Seeds2<span className="accent">Education</span>
            </div>
            <div className="serif" style={{fontSize:20, marginTop:6, fontStyle:"italic"}}>
              Year-round permaculture gardens. Your students join. The harvest keeps feeding after they leave.
            </div>
          </div>
        </div>

        {/* In-page anchor nav */}
        <div className="box dashed" style={{padding:"8px 12px", display:"flex", gap:18, fontSize:11, textTransform:"uppercase", letterSpacing:".06em"}}>
          {["Overview","Itinerary","Impact","Safety","FAQ","Dates"].map(s=>(
            <span key={s} style={{color:"var(--ink-2)"}}>{s}</span>
          ))}
        </div>

        {/* Overview */}
        <section>
          <div className="eyebrow">OVERVIEW</div>
          <div className="display" style={{fontSize:28, marginTop:4}}>Not a project we built for visitors.</div>
          <div style={{marginTop:10}}><Lines n={6}/></div>
        </section>

        {/* What your students do */}
        <section>
          <div className="eyebrow">WHAT YOUR STUDENTS DO</div>
          <div className="grid-3" style={{marginTop:8}}>
            {[
              ["Build","permaculture beds with the women's co-op"],
              ["Co-teach","at Marasi Primary with local teachers"],
              ["Learn","food security, systems thinking, Kenyan agroecology"],
            ].map(([k,v])=>(
              <div key={k} className="box">
                <div className="hand" style={{fontSize:28, color:"var(--accent)"}}>{k}</div>
                <div style={{marginTop:6, fontSize:12}}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary (compact) */}
        <section>
          <div className="eyebrow">ITINERARY · 12 DAYS</div>
          <div style={{marginTop:8, border:"1.5px solid var(--ink)"}}>
            {[
              ["Wk 0","Pre-trip curriculum (online, 4 hrs)"],
              ["Day 1–2","Arrival · Nairobi → Marasi"],
              ["Day 3–5","Garden build with women's co-op"],
              ["Day 6","Reflection + cultural exchange"],
              ["Day 7–9","School feeding + co-teaching"],
              ["Day 10","Safari · Tsavo"],
              ["Day 11–12","Harvest close · return"],
              ["Wk +2","Post-trip reflection + CAS pack"],
            ].map((r,i)=>(
              <div key={i} style={{display:"grid", gridTemplateColumns:"100px 1fr", borderTop: i===0 ? "none":"1.5px dashed var(--ink)", fontSize:12}}>
                <div style={{padding:"8px 10px", background:"var(--paper-2)", borderRight:"1.5px dashed var(--ink)"}}>{r[0]}</div>
                <div style={{padding:"8px 10px"}}>{r[1]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Measurable impact bars */}
        <section>
          <div className="eyebrow">MEASURABLE IMPACT</div>
          <div className="display" style={{fontSize:24, marginTop:4}}>What changes after you visit.</div>
          <div style={{marginTop:10}}>
            {[
              ["Meals served (cumulative)","45,000"],
              ["Farmland transformed","1.5 acres"],
              ["Women's co-op income (annual)","↑ 32%"],
              ["Girls retained at partner schools","↑ 18%"],
            ].map(([k,v])=>(
              <div key={k} style={{display:"flex", alignItems:"center", gap:12, marginBottom:8}}>
                <div style={{width:200, fontSize:12}}>{k}</div>
                <div className="meter" style={{flex:1}}>
                  <div className="fill"/><div className="fill"/><div className="fill"/><div className="ink"/><div/>
                </div>
                <div className="mono" style={{width:90, textAlign:"right", fontSize:11, fontWeight:600}}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section>
          <div className="eyebrow">SAFETY · UPFRONT</div>
          <div className="grid-3" style={{marginTop:8}}>
            {["24/7 local staff","Risk plan shared with parents","BS8848-aligned"].map(t=>(
              <div key={t} className="box"><div className="tick" style={{fontSize:18}}>✓</div><div style={{fontSize:12, marginTop:4}}>{t}</div></div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="eyebrow">FAQ</div>
          <div className="col" style={{marginTop:8, gap:8}}>
            {[
              "What happens when our students leave?",
              "How is this different from voluntourism?",
              "What ages + group sizes?",
              "Where does our money go?",
            ].map(q=>(
              <div key={q} className="box" style={{padding:"10px 12px", display:"flex", justifyContent:"space-between", fontSize:12}}>
                <span>{q}</span><span className="hand">+</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STICKY BOOKING SIDEBAR */}
      <aside>
        <div className="box rough" style={{padding:16, position:"sticky", top:20, background:"var(--paper-2)"}}>
          <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>SEEDS2EDUCATION</div>
          <div className="display" style={{fontSize:28, marginTop:2}}>From <span className="accent">$3,400</span></div>
          <div className="mono" style={{fontSize:11, color:"var(--ink-2)"}}>per student · 12 days</div>
          <hr className="hr-dashed"/>
          <div className="eyebrow">UPCOMING WINDOWS</div>
          <div className="col" style={{gap:6, marginTop:6}}>
            {[
              ["Jun 2026","open · 8 seats"],
              ["Oct 2026","open"],
              ["Feb 2027","waitlist"],
            ].map(([d,s])=>(
              <div key={d} className="box" style={{padding:"8px 10px", display:"flex", justifyContent:"space-between", fontSize:12}}>
                <span>{d}</span><span className="mono" style={{fontSize:10, color:"var(--ink-2)"}}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:12, display:"flex", flexDirection:"column", gap:8}}>
            <span className="chip acc" style={{textAlign:"center"}}>▸ Request brochure</span>
            <span className="chip" style={{textAlign:"center"}}>Book intro call</span>
          </div>
          <hr className="hr-dashed"/>
          <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>PARENT COMMS INCLUDED</div>
          <div className="mono" style={{fontSize:11, marginTop:4, color:"var(--ink-2)"}}>Pre-trip letter · risk plan · whatsapp updates · post-trip report.</div>
        </div>
        <Annot style={{position:"relative", marginTop:14, display:"block"}}>
          sidebar sticks — coordinators keep seeing dates + CTA as they scroll ↓
        </Annot>
      </aside>
    </div>
  </div>
);

/* ===================================================== */
/* APPROACH 3 — Diary / dispatch format                   */
/* ===================================================== */
const ProgA3 = () => (
  <div className="wf" style={{padding:"18px 32px"}}>
    <Nav/>
    <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>FIELD DISPATCH · SEEDS2EDUCATION · MARASI, KENYA</div>
    <div className="display" style={{fontSize:96, marginTop:8, lineHeight:.88}}>
      12 days.<br/>
      <span className="accent">A garden that keeps feeding</span><br/>
      long after you leave.
    </div>
    <div style={{display:"grid", gridTemplateColumns:"260px 1fr", gap:28, marginTop:22}}>
      {/* left meta column */}
      <div>
        <div className="eyebrow">THE PROGRAMME</div>
        <div className="mono" style={{fontSize:11, marginTop:6, color:"var(--ink-2)", lineHeight:1.6}}>
          Marasi Primary School<br/>
          Kasigau Corridor, Kenya<br/>
          Partner since 2022<br/>
          Runs year-round
        </div>
        <hr className="hr-dashed"/>
        <div className="eyebrow">YOU'LL JOIN</div>
        <div className="mono" style={{fontSize:11, marginTop:6, color:"var(--ink-2)", lineHeight:1.6}}>
          10–30 students<br/>2 Kapes leaders<br/>Kenyan ranger team<br/>Women's co-op
        </div>
        <hr className="hr-dashed"/>
        <div className="eyebrow">TAKE AWAY</div>
        <div className="mono" style={{fontSize:11, marginTop:6, color:"var(--ink-2)", lineHeight:1.6}}>
          ~60 CAS hours<br/>SDGs: 2 · 4 · 5 · 15<br/>Post-trip reflection pack
        </div>
        <div style={{marginTop:18}}>
          <span className="chip acc">▸ Request brochure</span>
        </div>
      </div>

      {/* right: day-by-day diary */}
      <div>
        {[
          ["DAY 01","Arrival · Nairobi","We pick you up. Short drive. Briefing that isn't a brochure.","arrival-pic"],
          ["DAY 03","In the soil","Day 3 is when the thing clicks. The women's co-op has been doing this for 4 years — you're not teaching them. They're teaching you.","garden"],
          ["DAY 06","Co-teaching at Marasi","Your students work beside local teachers. Lessons are theirs, not yours. Hunger is why attendance drops — now you've seen it.","classroom"],
          ["DAY 09","Harvest dinner","Food we grew this week feeds the kids next week. Same women. Same teachers. Same work — whether your students are here or not.","harvest"],
          ["DAY 12","Departure","Debrief. Parent report pack. CAS framework. Post-trip curriculum. The garden keeps going.","goodbye"],
        ].map(([d,t,body,pic],i)=>(
          <div key={d} style={{display:"grid", gridTemplateColumns:"120px 1fr 180px", gap:14, padding:"14px 0", borderTop: i===0 ? "2px solid var(--ink)":"1.5px dashed var(--ink)"}}>
            <div>
              <div className="hand" style={{fontSize:28, color:"var(--accent)"}}>{d}</div>
            </div>
            <div>
              <div className="serif" style={{fontSize:24, lineHeight:1.1}}>{t}</div>
              <div style={{marginTop:6, fontSize:12, lineHeight:1.6, color:"var(--ink-2)"}}>{body}</div>
            </div>
            <Photo label={pic} h={100}/>
          </div>
        ))}
      </div>
    </div>

    <section style={{marginTop:28, borderTop:"2px solid var(--ink)", paddingTop:18}}>
      <div className="display" style={{fontSize:36}}>The impact doesn't leave with you.</div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", marginTop:10}}>
        {[["45,000","meals · harvest 1"],["200+","kids fed daily"],["1.5 ac","farmland"],["Year 4","with Marasi"]].map(([n,l],i,a)=>(
          <div key={l} style={{padding:"0 18px", borderRight: i<a.length-1 ? "1.5px dashed var(--ink)":"none"}}>
            <div className="display" style={{fontSize:40, lineHeight:.9}}>{n}</div>
            <div className="mono" style={{fontSize:10, marginTop:4, color:"var(--ink-2)"}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:16, display:"flex", gap:10}}>
        <span className="chip acc">▸ Talk to Kenya team</span>
        <span className="chip">Download brochure</span>
      </div>
    </section>
  </div>
);

/* ===================================================== */
/* APPROACH 4 — Dossier: audit-style, transparency-first  */
/* ===================================================== */
const ProgA4 = () => (
  <div className="wf" style={{padding:"18px 28px"}}>
    <Nav/>
    {/* Dossier header */}
    <div style={{border:"2px solid var(--ink)", padding:18, background:"var(--paper-2)", marginBottom:22, position:"relative"}}>
      <div style={{display:"flex", justifyContent:"space-between", fontSize:10, textTransform:"uppercase", letterSpacing:".12em", color:"var(--muted)"}}>
        <span>DOSSIER — SEEDS2EDUCATION</span>
        <span>CONFIDENTIAL · FOR SCHOOL BOARDS & HEADS</span>
      </div>
      <div className="display" style={{fontSize:52, marginTop:10}}>
        SEEDS2EDUCATION<br/>
        <span style={{fontSize:22, color:"var(--ink-2)"}}>PROGRAMME FILE · REV 2026.04</span>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)", marginTop:16, borderTop:"1.5px solid var(--ink)"}}>
        {[["File #","KA-S2E-01"],["Location","Marasi, KE"],["Duration","12 days"],["Group","10–30"],["Start","$3,400/pp"],["Since","2022"]].map(([k,v],i,a)=>(
          <div key={k} style={{padding:"10px 12px", borderRight: i<a.length-1 ? "1.5px dashed var(--ink)":"none"}}>
            <div className="mono" style={{fontSize:9, letterSpacing:".1em", color:"var(--muted)"}}>{k}</div>
            <div style={{fontSize:13, fontWeight:600, marginTop:2}}>{v}</div>
          </div>
        ))}
      </div>
      <Annot style={{top:10, right:14}}>built for board meetings<br/>not brochures ▸</Annot>
    </div>

    {/* Pricing transparency */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">WHERE EVERY DOLLAR GOES</div>
      <div className="display" style={{fontSize:26, marginTop:4}}>Radical pricing transparency.</div>
      <div style={{marginTop:10, border:"1.5px solid var(--ink)"}}>
        {[
          ["Kenyan-led team salaries","32%"],
          ["Women's co-op + community payouts","18%"],
          ["Food, accommodation, in-country transport","20%"],
          ["International logistics + flights coordination","12%"],
          ["Curriculum + pre/post-trip support","8%"],
          ["Safety + insurance","6%"],
          ["Kapes operations","4%"],
        ].map(([k,v],i,a)=>(
          <div key={k} style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 80px", borderTop: i===0 ? "none":"1.5px dashed var(--ink)", fontSize:12}}>
            <div style={{padding:"10px 12px"}}>{k}</div>
            <div style={{padding:"10px 0", display:"flex", alignItems:"center"}}>
              <div className="meter" style={{flex:1, maxWidth:`${parseInt(v)*3}px`, background:"var(--accent)"}}>
                <div style={{flex:1, background:"var(--accent)", borderRight:"none"}}/>
              </div>
            </div>
            <div style={{padding:"10px 12px", fontWeight:600, textAlign:"right"}}>{v}</div>
          </div>
        ))}
      </div>
      <Annot style={{marginTop:8, position:"static"}}>✎ most providers won't print this. we will.</Annot>
    </section>

    {/* Proof-of-year-round receipts */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">RECEIPTS — YEAR-ROUND EVIDENCE</div>
      <div style={{marginTop:8, border:"1.5px solid var(--ink)"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1.5fr 1fr 1fr", background:"var(--ink)", color:"var(--paper)", fontSize:10, textTransform:"uppercase", letterSpacing:".08em"}}>
          {["Month","Activity","Led by","Output"].map((h,i,a)=>(
            <div key={h} style={{padding:"8px 10px", borderRight: i<a.length-1 ? "1.5px dashed var(--paper)":"none"}}>{h}</div>
          ))}
        </div>
        {[
          ["Jan","Garden prep + seed planting","KE team + co-op","—"],
          ["Feb","Partner school feeding","Marasi teachers","~9k meals"],
          ["Mar","Irrigation expansion","KE team","+0.3 ac"],
          ["Apr","School group visits (join)","Kapes + KE","—"],
          ["May","Teacher workshops","Marasi + Kapes","12 trained"],
          ["Jun","School group visits (join)","Kapes + KE","—"],
          ["…","continuous year-round","","—"],
        ].map((r,i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"1fr 1.5fr 1fr 1fr", borderTop:"1.5px dashed var(--ink)", fontSize:12}}>
            {r.map((c,j,a)=>(
              <div key={j} style={{padding:"9px 10px", borderRight: j<a.length-1 ? "1.5px dashed var(--ink)":"none", background: j===0 ? "var(--paper-2)":"var(--paper)"}}>{c}</div>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* Safety pack + educator pack */}
    <section style={{marginBottom:22}} className="grid-2">
      <div className="box" style={{padding:16}}>
        <div className="eyebrow">SAFETY PACK</div>
        <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.7}}>
          <li>Risk assessment (BS8848-aligned)</li>
          <li>Health + vaccination protocol</li>
          <li>24/7 local team on call</li>
          <li>Parent comms plan + whatsapp group</li>
          <li>Safeguarding + child-protection policy</li>
        </ul>
        <div style={{marginTop:12}}><span className="chip">↓ download PDF</span></div>
      </div>
      <div className="box" style={{padding:16}}>
        <div className="eyebrow">EDUCATOR PACK</div>
        <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.7}}>
          <li>Pre-trip curriculum modules (4 hrs)</li>
          <li>On-ground lesson plans</li>
          <li>Post-trip reflection framework</li>
          <li>CAS + IB alignment sheet</li>
          <li>Assessment rubrics</li>
        </ul>
        <div style={{marginTop:12}}><span className="chip">↓ download PDF</span></div>
      </div>
    </section>

    {/* Sign-off */}
    <section className="box" style={{padding:22, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div>
        <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>SIGN-OFF</div>
        <div className="serif" style={{fontSize:22, marginTop:4}}>Bring this dossier to your board. Come back with questions.</div>
      </div>
      <div style={{display:"flex", gap:10}}>
        <span className="chip acc">▸ Book board-prep call</span>
        <span className="chip">WhatsApp Kenya team</span>
      </div>
    </section>
  </div>
);

window.ProgramApproaches = [ProgA1, ProgA2, ProgA3, ProgA4];
window.ProgramMeta = [
  { label:"Classical", title:"Classical — program page", sub:"Hero + at-a-glance → overview + sidebar → day-by-day → gallery → outcomes → CTA. Safe to ship; clear to coordinators."},
  { label:"Sticky split", title:"Content + sticky booking rail", sub:"Long-form content on the left, sticky dates + brochure + price on the right. Coordinators always have a CTA in view; measurable-impact bars instead of vanity numbers."},
  { label:"Dispatch", title:"Field dispatch / trip diary", sub:"Huge masthead, left-margin meta column, diary-format days with photos. Reads like an essay, not a brochure. Great for emotional sell to heads of school."},
  { label:"Dossier", title:"Dossier — transparency-first", sub:"Board-meeting file: revision header, pricing-transparency waterfall, year-round-activity log, safety pack, educator pack. Leans into angle 2 + full disclosure — Kapes' biggest unique lever."}
];
