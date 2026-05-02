/* Marketing LP wireframes — example: Anti-Voluntourism LP */

const { Photo, Lines, Annot, NavComponent:Nav } = window;

/* ===================================================== */
/* APPROACH 1 — Classical long-form LP (conversion)       */
/* ===================================================== */
const LPA1 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    {/* minimal header — LP strips nav for conversion */}
    <div style={{display:"flex", alignItems:"center", borderBottom:"1.5px solid var(--ink)", paddingBottom:10, marginBottom:18}}>
      <div className="logo" style={{fontFamily:"var(--hand)", fontSize:22, fontWeight:700, border:"1.5px solid var(--ink)", padding:"2px 8px"}}>Kapes·adv</div>
      <div className="mono" style={{fontSize:10, color:"var(--muted)", marginLeft:12}}>anti-voluntourism · for schools</div>
      <span className="chip acc" style={{marginLeft:"auto"}}>▸ Book a call</span>
    </div>

    {/* Hero */}
    <section style={{marginBottom:22, position:"relative"}}>
      <div className="eyebrow">FOR HEADS OF SCHOOL + TRIP COORDINATORS</div>
      <div className="display" style={{fontSize:64, marginTop:8, lineHeight:.9}}>
        If your school trip<br/>
        <span className="accent">looks like voluntourism,</span><br/>
        parents are already asking.
      </div>
      <div style={{marginTop:14, display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:22, alignItems:"center"}}>
        <div>
          <div className="serif" style={{fontSize:20, fontStyle:"italic"}}>
            A 5-minute read on why "service learning" stopped working — and what to run instead, backed by year-round Kenyan programmes.
          </div>
          <div style={{marginTop:14, display:"flex", gap:10}}>
            <span className="chip acc">▸ Take the 5-min scorecard</span>
            <span className="chip">Book strategy call</span>
          </div>
          <div className="mono" style={{fontSize:10, color:"var(--muted)", marginTop:8}}>no email required for the article · scorecard captures email</div>
        </div>
        <Photo label="student + Kenyan teacher, side-by-side" h={180}/>
      </div>
    </section>

    {/* Pain list */}
    <section style={{marginBottom:22}}>
      <div className="display" style={{fontSize:32}}>Five things parents now ask — and most schools can't answer.</div>
      <div className="col" style={{marginTop:10, gap:8}}>
        {[
          "Where does our money actually go?",
          "What happens when our kids leave?",
          "Who designs the project — you, or them?",
          "Why is our child 'helping' a community that has experts?",
          "Can we see the safety + safeguarding plan?",
        ].map((q,i)=>(
          <div key={i} className="box" style={{display:"flex", gap:14, padding:"10px 14px", fontSize:13}}>
            <span className="hand" style={{fontSize:22, color:"var(--accent)", width:28}}>{i+1}.</span>
            <span>{q}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Article-style body */}
    <section style={{marginBottom:22, display:"grid", gridTemplateColumns:"160px 1fr", gap:22}}>
      <div>
        <div className="eyebrow">THE ARGUMENT</div>
        <div className="mono" style={{fontSize:10, color:"var(--muted)", marginTop:6}}>~5 min read</div>
      </div>
      <div>
        <div className="serif" style={{fontSize:26, lineHeight:1.2, marginBottom:12}}>
          "Voluntourism" is the label. The real problem is that projects built for visitors are built to end.
        </div>
        <Lines n={6}/>
        <div style={{marginTop:14, borderLeft:"3px solid var(--accent)", paddingLeft:12}}>
          <div className="serif" style={{fontSize:20, fontStyle:"italic"}}>
            "Projects get built for visitors. When the bus leaves, the project stops."
          </div>
        </div>
        <div style={{marginTop:14}}><Lines n={5}/></div>
      </div>
    </section>

    {/* Scorecard as inline lead capture */}
    <section className="box rough" style={{padding:"22px 24px", marginBottom:22, background:"var(--paper-2)", position:"relative"}}>
      <div className="grid-2" style={{alignItems:"center"}}>
        <div>
          <div className="eyebrow">INLINE ASSESSMENT</div>
          <div className="display" style={{fontSize:34, marginTop:6}}>Score your programme in 5 min.</div>
          <div style={{marginTop:8, fontSize:13}}>20 questions · 5 dimensions · honest result + where to improve.</div>
        </div>
        <div className="col" style={{gap:8}}>
          <div className="box" style={{padding:"8px 10px", fontSize:12, background:"var(--paper)"}}>✎ Name</div>
          <div className="box" style={{padding:"8px 10px", fontSize:12, background:"var(--paper)"}}>✎ School email</div>
          <div className="box" style={{padding:"8px 10px", fontSize:12, background:"var(--paper)"}}>✎ School name</div>
          <span className="chip acc" style={{textAlign:"center"}}>▸ Start the 5-min scorecard</span>
        </div>
      </div>
      <Annot style={{top:18, right:18}}>lead capture<br/>BEFORE quiz ▸</Annot>
    </section>

    {/* Social proof */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">SCHOOLS WHO'VE SWITCHED</div>
      <div className="grid-3" style={{marginTop:8}}>
        {["school 1","school 2","school 3"].map(s=>(
          <div key={s} className="box">
            <div className="serif" style={{fontSize:17, fontStyle:"italic", lineHeight:1.3}}>"Our CAS trip used to be a safari with a service day. Now it's a programme."</div>
            <div className="mono" style={{fontSize:10, marginTop:10, color:"var(--ink-2)"}}>— Head of Service Learning, {s}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="box" style={{padding:"22px 24px", textAlign:"center"}}>
      <div className="display" style={{fontSize:38}}>Ready to talk about <span className="accent">your next trip?</span></div>
      <div style={{marginTop:14, display:"flex", justifyContent:"center", gap:10}}>
        <span className="chip acc">▸ Book a 20-min call</span>
        <span className="chip">Take the scorecard</span>
      </div>
    </section>
  </div>
);

/* ===================================================== */
/* APPROACH 2 — Scorecard-first quiz-style LP             */
/* ===================================================== */
const LPA2 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <div style={{display:"flex", alignItems:"center", paddingBottom:10, marginBottom:18}}>
      <div className="logo" style={{fontFamily:"var(--hand)", fontSize:22, fontWeight:700, border:"1.5px solid var(--ink)", padding:"2px 8px"}}>Kapes·adv</div>
      <div className="mono" style={{fontSize:10, color:"var(--muted)", marginLeft:12}}>the mirror test · free 5-min scorecard</div>
    </div>

    {/* Hero that IS the quiz */}
    <section style={{marginBottom:22, border:"2px solid var(--ink)", padding:0}}>
      <div style={{padding:"20px 22px 0"}}>
        <div className="mono" style={{fontSize:10, letterSpacing:".12em", color:"var(--muted)"}}>THE IMPACT SCORECARD · FOR SCHOOLS</div>
        <div className="display" style={{fontSize:54, marginTop:8, lineHeight:.92}}>
          Is your school trip<br/>making a <span className="accent">real difference?</span>
        </div>
        <div className="serif" style={{fontSize:20, fontStyle:"italic", marginTop:8, maxWidth:620}}>
          Most trips create photos and memories. But do they create lasting change? Find out in 5 minutes.
        </div>
      </div>
      {/* quiz shell preview */}
      <div style={{marginTop:18, borderTop:"1.5px dashed var(--ink)", display:"grid", gridTemplateColumns:"1fr 300px"}}>
        <div style={{padding:"20px 22px"}}>
          <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:12}}>
            <div className="meter" style={{flex:1}}>
              <div className="fill"/><div className="fill"/><div className="fill"/><div/><div/>
            </div>
            <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>Q 3 / 20</span>
          </div>
          <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>DIMENSION 1 · COMMUNITY RELATIONSHIPS</div>
          <div className="serif" style={{fontSize:24, marginTop:6, lineHeight:1.2}}>
            Who sets the priorities on your current trip — your school, your operator, or the community itself?
          </div>
          <div className="col" style={{gap:8, marginTop:14}}>
            {["Our school sets priorities","Our operator sets priorities","The community sets priorities","Honestly, we're not sure"].map((o,i)=>(
              <div key={i} className="box" style={{padding:"10px 12px", fontSize:12, display:"flex", gap:10, alignItems:"center"}}>
                <span style={{width:18,height:18, border:"1.5px solid var(--ink)", borderRadius:50, display:"inline-block"}}/>
                {o}
              </div>
            ))}
          </div>
          <div style={{display:"flex", gap:10, marginTop:14}}>
            <span className="chip">← Back</span>
            <span className="chip acc">Next question →</span>
          </div>
        </div>
        <aside style={{borderLeft:"1.5px dashed var(--ink)", padding:"20px 16px", background:"var(--paper-2)"}}>
          <div className="eyebrow">5 DIMENSIONS</div>
          <div className="col" style={{gap:6, marginTop:6, fontSize:11}}>
            {[["✓","Current trip"],["✓","Student experience"],["▸","Community relationships"],["","Measurable impact"],["","Ethics & accountability"]].map(([s,l])=>(
              <div key={l} style={{display:"flex", gap:8}}>
                <span style={{width:12, color:"var(--accent-ink)"}}>{s}</span>
                <span style={{color: s ? "var(--ink)" : "var(--muted)"}}>{l}</span>
              </div>
            ))}
          </div>
          <hr className="hr-dashed"/>
          <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>5 MIN · 20 Q · NO CREDIT CARD</div>
        </aside>
      </div>
    </section>

    {/* Results preview */}
    <section style={{marginBottom:22, position:"relative"}}>
      <div className="eyebrow">WHAT YOU GET AT THE END</div>
      <div className="grid-3" style={{marginTop:8}}>
        <div className="box" style={{padding:14}}>
          <div className="hand" style={{fontSize:22}}>1 · Your score</div>
          <div className="display" style={{fontSize:48, marginTop:6}}>42<span style={{fontSize:20, color:"var(--muted)"}}>/80</span></div>
          <div className="mono" style={{fontSize:11, color:"var(--ink-2)", marginTop:4}}>Category: Room to grow</div>
        </div>
        <div className="box" style={{padding:14}}>
          <div className="hand" style={{fontSize:22}}>2 · Gap analysis</div>
          <div className="col" style={{marginTop:6, gap:6}}>
            {[["Community","weak"],["Impact","moderate"],["Hands-on","strong"],["Reputation","moderate"],["Ethics","weak"]].map(([k,s])=>(
              <div key={k} style={{display:"flex", justifyContent:"space-between", fontSize:11}}>
                <span>{k}</span><span className="mono" style={{color:"var(--ink-2)"}}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="box" style={{padding:14, background:"var(--paper-2)"}}>
          <div className="hand" style={{fontSize:22, color:"var(--accent-ink)"}}>3 · What to do</div>
          <div style={{marginTop:6}}><Lines n={3}/></div>
          <div style={{marginTop:10}}><span className="chip acc">▸ Book follow-up call</span></div>
        </div>
      </div>
      <Annot style={{top:-12, right:0}}>the results page is the pitch ↗</Annot>
    </section>

    {/* Disqualifier strip */}
    <section style={{marginBottom:22}}>
      <div className="box dashed" style={{padding:14, display:"flex", gap:18, alignItems:"center"}}>
        <span className="hand" style={{fontSize:22}}>not for everyone.</span>
        <span className="mono" style={{fontSize:11, color:"var(--ink-2)"}}>
          If your trip is a safari with a service day — this quiz will sting. That's the point.
        </span>
      </div>
    </section>

    {/* CTA */}
    <section className="box rough" style={{padding:"22px 24px", textAlign:"center", background:"var(--paper-2)"}}>
      <div className="display" style={{fontSize:40}}>Take the <span className="accent">5-min scorecard.</span></div>
      <div className="mono" style={{fontSize:11, color:"var(--muted)", marginTop:6}}>20 Q · results emailed · no sales call unless you ask</div>
      <div style={{marginTop:14}}><span className="chip acc">▸ Start now</span></div>
    </section>
  </div>
);

/* ===================================================== */
/* APPROACH 3 — Single bold letter / essay                */
/* ===================================================== */
const LPA3 = () => (
  <div className="wf" style={{padding:"22px 60px"}}>
    <div style={{display:"flex", alignItems:"center", paddingBottom:10, marginBottom:22}}>
      <div className="logo" style={{fontFamily:"var(--hand)", fontSize:22, fontWeight:700, border:"1.5px solid var(--ink)", padding:"2px 8px"}}>Kapes·adv</div>
      <div className="mono" style={{fontSize:10, color:"var(--muted)", marginLeft:"auto"}}>an open letter to heads of school · apr 2026</div>
    </div>

    <div style={{maxWidth:760, margin:"0 auto"}}>
      <div className="mono" style={{fontSize:10, letterSpacing:".14em", color:"var(--muted)"}}>AN OPEN LETTER</div>
      <div className="display" style={{fontSize:72, marginTop:8, lineHeight:.9}}>
        Your students<br/>don't need <span className="accent">to save Africa.</span>
      </div>

      <div style={{marginTop:22, display:"grid", gridTemplateColumns:"1fr", gap:10}}>
        <div className="serif" style={{fontSize:22, lineHeight:1.35, fontStyle:"italic"}}>
          Dear Head of School,
        </div>
        <Lines n={8}/>
        <div className="serif" style={{fontSize:26, lineHeight:1.2, margin:"12px 0", borderLeft:"3px solid var(--accent)", paddingLeft:14}}>
          "Communities need more than tourists — they need partners."
        </div>
        <Lines n={6}/>
        <div className="serif" style={{fontSize:22, lineHeight:1.2, margin:"10px 0"}}>
          Three things that changed our mind.
        </div>
        {[
          "1 · Projects built for visitors are projects that end.",
          "2 · 70% of tourism revenue never reaches local families.",
          "3 · When women have water, girls stay in school — but only if the infrastructure keeps working.",
        ].map((t,i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"30px 1fr", gap:10, paddingBottom:6, borderBottom:"1.5px dashed var(--ink)"}}>
            <div className="hand" style={{fontSize:26, color:"var(--accent)"}}>{i+1}</div>
            <div className="serif" style={{fontSize:18, lineHeight:1.3}}>{t.replace(/^\d\s·\s/,"")}</div>
          </div>
        ))}
        <Lines n={5}/>

        <div className="hand" style={{fontSize:28, marginTop:16}}>— Matthew</div>
        <div className="mono" style={{fontSize:11, color:"var(--muted)"}}>Matthew Benjamin · Founder, Kapes Adventures · Kasigau Corridor, Kenya</div>
      </div>

      {/* inline CTA */}
      <div className="box rough" style={{marginTop:28, padding:"18px 20px", background:"var(--paper-2)"}}>
        <div className="serif" style={{fontSize:22}}>If any of this lands, start here.</div>
        <div style={{marginTop:12, display:"flex", gap:10, flexWrap:"wrap"}}>
          <span className="chip acc">▸ Take the 5-min scorecard</span>
          <span className="chip">Book 20 min with the Kenya team</span>
          <span className="chip">Read the positioning doc</span>
        </div>
      </div>

      {/* postscript proof */}
      <div style={{marginTop:20, borderTop:"1.5px solid var(--ink)", paddingTop:14}}>
        <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>P.S.</div>
        <div className="serif" style={{fontSize:18, marginTop:4, fontStyle:"italic"}}>
          Since 2022 we've served 45,000 meals from one harvest, transformed 1.5 acres into permaculture gardens, and run year-round programmes across 11 partner schools. The work keeps going, whether a school group is here or not.
        </div>
      </div>
    </div>
  </div>
);

/* ===================================================== */
/* APPROACH 4 — Side-by-side comparator + ROI calculator  */
/* ===================================================== */
const LPA4 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <div style={{display:"flex", alignItems:"center", paddingBottom:10, marginBottom:18}}>
      <div className="logo" style={{fontFamily:"var(--hand)", fontSize:22, fontWeight:700, border:"1.5px solid var(--ink)", padding:"2px 8px"}}>Kapes·adv</div>
      <div className="mono" style={{fontSize:10, color:"var(--muted)", marginLeft:12}}>the switch · compare your current provider</div>
    </div>

    {/* Hero */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">THE SWITCH</div>
      <div className="display" style={{fontSize:56, marginTop:6, lineHeight:.92}}>
        Put your current provider<br/>
        <span className="accent">next to Kapes.</span>
      </div>
      <div style={{marginTop:8, fontSize:13, maxWidth:720}}>
        A side-by-side tool for heads of school evaluating their current supplier. No login. No sales-chase. Print it, bring it to the board.
      </div>
    </section>

    {/* Comparator */}
    <section style={{marginBottom:22, border:"1.5px solid var(--ink)"}}>
      <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr 1fr", background:"var(--ink)", color:"var(--paper)", fontSize:11, textTransform:"uppercase", letterSpacing:".08em"}}>
        <div style={{padding:"10px 12px", borderRight:"1.5px dashed var(--paper)"}}>Evaluate on…</div>
        <div style={{padding:"10px 12px", borderRight:"1.5px dashed var(--paper)", display:"flex", justifyContent:"space-between"}}>
          <span>Your current provider</span>
          <span className="mono" style={{fontSize:10}}>✎ enter name</span>
        </div>
        <div style={{padding:"10px 12px", background:"var(--accent)", color:"#1e1e1c"}}>Kapes</div>
      </div>
      {[
        ["Runs year-round without visiting groups","unclear","yes"],
        ["Community sets the project priorities","no","yes"],
        ["Pricing transparency (% to community)","no","yes · 50%+"],
        ["Pre-trip curriculum included","sometimes","yes"],
        ["Measurable community outputs","no","yes"],
        ["Parent risk + safety pack","ask","yes · PDF"],
        ["Board-ready impact report","no","yes"],
      ].map(([row,them,us],i)=>(
        <div key={i} style={{display:"grid", gridTemplateColumns:"1.1fr 1fr 1fr", borderTop:"1.5px dashed var(--ink)", fontSize:12}}>
          <div style={{padding:"10px 12px", borderRight:"1.5px dashed var(--ink)", background:"var(--paper-2)"}}>{row}</div>
          <div style={{padding:"10px 12px", borderRight:"1.5px dashed var(--ink)"}}>
            <span className={them==="yes"?"tick": them==="no"?"cross":""}>{them==="yes"?"✓":them==="no"?"✗":"?"}</span> {them}
          </div>
          <div style={{padding:"10px 12px", background:"rgba(255,255,255,.4)"}}>
            <span className="tick">✓</span> {us}
          </div>
        </div>
      ))}
    </section>

    {/* Impact calculator */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">IMPACT PREVIEW · BEFORE YOU BOOK</div>
      <div className="grid-2" style={{marginTop:8}}>
        <div className="box" style={{padding:16}}>
          <div className="mono" style={{fontSize:11, color:"var(--ink-2)"}}>Students on the trip</div>
          <div className="display" style={{fontSize:40}}>24</div>
          <div style={{height:6, background:"var(--ink)", marginTop:4}}/>
          <div style={{display:"flex", justifyContent:"space-between", fontSize:10, color:"var(--muted)", marginTop:4}}>
            <span>10</span><span>30</span>
          </div>
          <hr className="hr-dashed"/>
          <div className="mono" style={{fontSize:11, color:"var(--ink-2)"}}>Program duration</div>
          <div className="display" style={{fontSize:40}}>12 days</div>
          <div className="col" style={{gap:6, marginTop:6}}>
            {[7,10,12,14].map(n=>(
              <span key={n} className="chip" style={{width:"fit-content", background: n===12 ? "var(--accent)": "transparent"}}>{n} days</span>
            ))}
          </div>
        </div>
        <div className="box" style={{padding:16, background:"var(--paper-2)"}}>
          <div className="eyebrow">WHAT THAT UNLOCKS</div>
          <div style={{marginTop:8, display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
            {[["~3,800","meals funded"],["~0.1 ac","garden expansion"],["1–2","ranger months"],["~60 hrs","CAS per student"]].map(([n,l])=>(
              <div key={l}>
                <div className="display" style={{fontSize:30}}>{n}</div>
                <div className="mono" style={{fontSize:10, color:"var(--ink-2)"}}>{l}</div>
              </div>
            ))}
          </div>
          <hr className="hr-dashed"/>
          <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>INDICATIVE · BASED ON 2025–26 COHORTS · NOT A GUARANTEE</div>
          <div style={{marginTop:10, display:"flex", gap:8}}>
            <span className="chip acc">▸ Get full quote</span>
            <span className="chip">↓ Save as PDF</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="box" style={{padding:"20px 22px", textAlign:"center"}}>
      <div className="display" style={{fontSize:32}}>Bring this comparison to your next board meeting.</div>
      <div style={{marginTop:12, display:"flex", justifyContent:"center", gap:10}}>
        <span className="chip">↓ Download PDF</span>
        <span className="chip acc">▸ Book board-prep call</span>
      </div>
    </section>
  </div>
);

window.LPApproaches = [LPA1, LPA2, LPA3, LPA4];
window.LPMeta = [
  { label:"Classical", title:"Classical long-form LP", sub:"Hook → pain list → article body → inline scorecard lead-capture → social proof → CTA. Your standard conversion LP, cleanly dressed to not feel like one."},
  { label:"Quiz-first", title:"Scorecard-first quiz LP", sub:"The quiz IS the hero. Side rail tracks 5 dimensions. Results-page preview sells the value. Highest engagement, highest lead-capture — the mirror-test angle made literal."},
  { label:"Open letter", title:"An open letter", sub:"Long-form essay from founder. One column. Letter tone, three numbered beats, inline CTA, postscript proof. For heads of school who buy on voice, not on checklists."},
  { label:"Comparator", title:"Side-by-side comparator + impact calculator", sub:"Editable comparison vs current provider. Sliders for group size + trip length that surface indicative impact. Print-ready PDF — designed to be brought into board meetings."}
];
