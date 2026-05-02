/* Homepage wireframe approaches — 4 options, progressively bolder. */

const Nav = ({ variant="plain" }) => (
  <div className="nav">
    <div className="logo">Kapes·adv</div>
    <ul>
      <li>School trips</li>
      <li>Programs</li>
      <li>Impact</li>
      <li>Educators</li>
      <li>About</li>
      <li>Blog</li>
    </ul>
    <button className="cta ghost">Scorecard</button>
    <button className="cta">Talk to Kenya team</button>
  </div>
);

const Photo = ({ label, sub, h=160, style={} }) => (
  <div className="photo" style={{minHeight:h, ...style}}>
    <div>
      [ photo: {label} ]
      {sub && <small>{sub}</small>}
    </div>
  </div>
);

const Lines = ({ n=3, w=[100,92,74] }) => (
  <div style={{display:"flex", flexDirection:"column", gap:6, width:"100%"}}>
    {Array.from({length:n}).map((_,i)=>(
      <div key={i} className="placeholder-text" style={{width:`${w[i%w.length]}%`}}/>
    ))}
  </div>
);

const Annot = ({ children, style }) => (
  <div className="annot" style={style}>{children}</div>
);

/* ===================================================== */
/* APPROACH 1 — Classical: safe, shipping-ready          */
/* ===================================================== */
const HomeA1 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <Nav/>

    {/* HERO */}
    <section className="box rough" style={{position:"relative", padding:"28px", marginBottom:22}}>
      <div className="row" style={{alignItems:"stretch", gap:22}}>
        <div style={{flex:"1 1 56%"}}>
          <div className="eyebrow" style={{marginBottom:10}}>YEAR-ROUND PROGRAMS · KENYA</div>
          <div className="display" style={{fontSize:54}}>
            Your students don't need<br/>
            to <span className="accent">save Africa.</span>
          </div>
          <div style={{marginTop:16, maxWidth:520}}>
            <Lines n={3} w={[100,96,70]}/>
          </div>
          <div style={{display:"flex", gap:10, marginTop:18}}>
            <span className="chip acc">▸ See how it works</span>
            <span className="chip">Take the 5-min scorecard</span>
          </div>
          <div style={{display:"flex", gap:14, marginTop:22, flexWrap:"wrap"}}>
            {["Year-round","45k meals / harvest","Kenyan-led","Pre-trip curriculum"].map(t=>(
              <span key={t} className="mono" style={{fontSize:10, color:"var(--ink-2)"}}>✓ {t}</span>
            ))}
          </div>
        </div>
        <div style={{flex:"1 1 44%"}}>
          <Photo label="students + Kenyan rangers in garden" sub="full-bleed; warm, natural light — no staged posing" h={280}/>
        </div>
      </div>
      <Annot className="annot arrow" style={{top:16, right:22}}>
        lead with the sharp<br/>anti-voluntourism line ✏️
      </Annot>
    </section>

    {/* LOGO STRIP */}
    <div className="box dashed" style={{padding:"10px 14px", marginBottom:22, display:"flex", alignItems:"center", gap:18}}>
      <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>TRUSTED BY ↴</span>
      <div style={{flex:1, display:"flex", gap:28, alignItems:"center"}}>
        {["school 1","school 2","school 3","school 4","school 5","school 6"].map(s=>(
          <span key={s} className="mono" style={{fontSize:10, color:"var(--ink-2)", opacity:.7}}>— {s} —</span>
        ))}
      </div>
    </div>

    {/* THE PROBLEM */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">THE PROBLEM</div>
      <div className="display" style={{fontSize:36, marginTop:6, marginBottom:14}}>
        Most school trips call it <span className="accent">"service learning"</span>
      </div>
      <div className="grid-4">
        {[
          ["70%","of tourism revenue never reaches communities"],
          ["1 in 3","Kenyan children go to school hungry"],
          ["4M+","kids facing food insecurity"],
          ["60%","of farmers are women — often unsupported"],
        ].map(([n,l])=>(
          <div key={l} className="box">
            <div className="display" style={{fontSize:34}}>{n}</div>
            <div className="mono" style={{fontSize:11, color:"var(--ink-2)", marginTop:6}}>{l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* HOW IT WORKS (3-step) */}
    <section style={{marginBottom:22, position:"relative"}}>
      <div className="eyebrow">OUR YEAR-ROUND MODEL</div>
      <div className="display" style={{fontSize:36, marginTop:6, marginBottom:14}}>
        The impact doesn't start when <span className="accent">your students arrive.</span>
      </div>
      <div className="grid-3">
        {[
          ["01","Programs run year-round","Seeds2Education, water co-ops, school feeding — 365 days. Kenyan-led teams."],
          ["02","Your students join the work","Small groups (10–30). They arrive as learners, not helpers."],
          ["03","Impact continues after they leave","Gardens keep feeding kids. Water keeps flowing. Students leave with understanding, not hero stories."],
        ].map(([n,t,d])=>(
          <div key={n} className="box">
            <div className="hand" style={{fontSize:34, color:"var(--accent)", lineHeight:1}}>{n}</div>
            <div style={{fontWeight:600, marginTop:6, fontSize:13}}>{t}</div>
            <div style={{marginTop:8}}><Lines n={3} w={[100,90,60]}/></div>
            <div style={{marginTop:10}}><span className="chip">{d.split(".")[0]}.</span></div>
          </div>
        ))}
      </div>
      <Annot style={{top:-14, right:0}}>proof-of-mechanism<br/>= our whole moat</Annot>
    </section>

    {/* TWO PROGRAMS */}
    <section style={{marginBottom:22}}>
      <div className="grid-2">
        <div className="box" style={{padding:0, overflow:"hidden"}}>
          <Photo label="Seeds2Education garden" h={200}/>
          <div style={{padding:14}}>
            <span className="chip">School trip program</span>
            <div className="display" style={{fontSize:24, marginTop:8}}>Seeds2Education</div>
            <div style={{marginTop:8}}><Lines n={2} w={[100,80]}/></div>
            <div className="mono" style={{fontSize:11, marginTop:10, color:"var(--accent-ink)"}}>→ Learn more</div>
          </div>
        </div>
        <div className="box" style={{padding:0, overflow:"hidden"}}>
          <Photo label="Water Empowering Women" h={200}/>
          <div style={{padding:14}}>
            <span className="chip">School trip program</span>
            <div className="display" style={{fontSize:24, marginTop:8}}>Water Empowering Women</div>
            <div style={{marginTop:8}}><Lines n={2} w={[100,75]}/></div>
            <div className="mono" style={{fontSize:11, marginTop:10, color:"var(--accent-ink)"}}>→ Learn more</div>
          </div>
        </div>
      </div>
    </section>

    {/* WHY KAPES */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">WHY KAPES</div>
      <div className="display" style={{fontSize:30, marginTop:6, marginBottom:14}}>Why schools choose Kapes</div>
      <div className="grid-3">
        {[
          "Year-Round Programs",
          "10–30 Students, Local Rangers",
          "Curriculum Before the Flight",
          "24/7 Local Staff",
          "Meals Served. Gardens Built.",
          "Students Learn. Communities Lead.",
        ].map(t=>(
          <div key={t} className="box">
            <div style={{width:28,height:28,border:"1.5px solid var(--ink)"}}/>
            <div style={{fontWeight:600, marginTop:8, fontSize:12}}>{t}</div>
            <div style={{marginTop:6}}><Lines n={2} w={[100,80]}/></div>
          </div>
        ))}
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section style={{marginBottom:22}}>
      <div className="box" style={{padding:"22px 24px"}}>
        <div className="serif" style={{fontSize:24, lineHeight:1.25}}>
          "Seeing these enterprises firsthand — the children can only do that firsthand, and it will change them as much as it's changed me."
        </div>
        <div style={{marginTop:12}} className="mono">— Brett Girven · Former Principal, The Arbor School</div>
      </div>
    </section>

    {/* FIT / NOT FIT */}
    <section style={{marginBottom:22}}>
      <div className="display" style={{fontSize:28, marginBottom:12}}>Is Kapes right for your school?</div>
      <div className="grid-2">
        <div className="box">
          <div className="hand" style={{fontSize:22, color:"var(--good)"}}>A great fit if…</div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.6}}>
            <li><span className="tick">✓</span> students learn alongside, not "help"</li>
            <li><span className="tick">✓</span> you want curriculum-aligned trips</li>
            <li><span className="tick">✓</span> you want to know where money goes</li>
            <li><span className="tick">✓</span> you care what happens after they leave</li>
          </ul>
        </div>
        <div className="box">
          <div className="hand" style={{fontSize:22, color:"var(--bad)"}}>Probably not if…</div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.6}}>
            <li><span className="cross">✗</span> you want safari + service-day bolted on</li>
            <li><span className="cross">✗</span> you need 100+ student groups</li>
            <li><span className="cross">✗</span> cheapest-option trumps impact</li>
            <li><span className="cross">✗</span> instagram-first trip</li>
          </ul>
        </div>
      </div>
    </section>

    {/* SCORECARD CTA */}
    <section className="box rough" style={{padding:"22px 24px", background:"var(--paper-2)", marginBottom:22, position:"relative"}}>
      <div className="eyebrow">FREE ASSESSMENT</div>
      <div className="display" style={{fontSize:34, marginTop:6}}>
        Are your school trips making <span className="accent">a real difference?</span>
      </div>
      <div style={{marginTop:10, maxWidth:620}}><Lines n={2}/></div>
      <div style={{marginTop:16, display:"flex", gap:10, alignItems:"center"}}>
        <span className="chip acc">▸ Take the Impact Scorecard</span>
        <span className="mono" style={{fontSize:11, color:"var(--muted)"}}>20 Q · 5 min · honest results</span>
      </div>
      <Annot style={{top:18, right:22}}>mirror-test lead<br/>magnet (angle 3)</Annot>
    </section>

    {/* FINAL CTA + FOOTER */}
    <section className="box" style={{padding:"22px 24px", marginBottom:22, textAlign:"center"}}>
      <div className="display" style={{fontSize:42}}>Ready to join <span className="accent">the work?</span></div>
      <div style={{marginTop:14, display:"flex", justifyContent:"center", gap:10}}>
        <span className="chip acc">▸ Book a call</span>
        <span className="chip">5-min scorecard</span>
      </div>
    </section>

    <footer className="box dashed" style={{padding:"14px"}}>
      <div className="row" style={{gap:40}}>
        {[
          ["PROGRAMS","Seeds2Education / Water / Roots of Change / Feeding the Future"],
          ["EDUCATORS","Curriculum / CAS / Multi-year / Partner with us"],
          ["RESOURCES","Scorecard / Blog / Transparency / Safety"],
          ["CONTACT","Talk to Kenya team / WhatsApp / Calendly"],
        ].map(([h,s])=>(
          <div key={h} style={{flex:1}}>
            <div className="eyebrow">{h}</div>
            <div className="mono" style={{fontSize:11, color:"var(--ink-2)", marginTop:6, lineHeight:1.5}}>{s}</div>
          </div>
        ))}
      </div>
    </footer>
  </div>
);


/* ===================================================== */
/* APPROACH 2 — Split-screen argument: US vs THEM        */
/* ===================================================== */
const HomeA2 = () => (
  <div className="wf" style={{padding:"22px 28px"}}>
    <Nav/>

    {/* HERO — split from the first pixel */}
    <section style={{marginBottom:24, position:"relative"}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", border:"1.5px solid var(--ink)"}}>
        <div style={{padding:22, borderRight:"1.5px dashed var(--ink)", background:"var(--paper-2)"}}>
          <div className="eyebrow" style={{color:"var(--bad)"}}>MOST SCHOOL TRIPS</div>
          <div className="display" style={{fontSize:34, marginTop:6, color:"var(--ink)", opacity:.75}}>
            Two weeks.<br/>A project built for the visitor.<br/>Then nothing.
          </div>
          <div style={{marginTop:14}}><Lines n={3}/></div>
          <div style={{marginTop:14}}>
            <Photo label="volunteer holding a brush — rural classroom" sub="the image we're arguing against" h={130}/>
          </div>
        </div>
        <div style={{padding:22}}>
          <div className="eyebrow">KAPES</div>
          <div className="display" style={{fontSize:34, marginTop:6}}>
            Year-round programs.<br/>Kenyan-led.<br/><span className="accent">Students join the work.</span>
          </div>
          <div style={{marginTop:14}}><Lines n={3}/></div>
          <div style={{marginTop:14}}>
            <Photo label="Kenyan team at garden + students learning" h={130}/>
          </div>
        </div>
      </div>
      <div className="box rough" style={{marginTop:-22, width:"fit-content", marginLeft:"auto", marginRight:"auto", padding:"10px 18px", background:"var(--paper)", position:"relative", zIndex:2}}>
        <span className="hand" style={{fontSize:22}}>the difference, all the way down ↓</span>
      </div>
    </section>

    {/* COMPARISON SPINE — a repeating split */}
    <section style={{marginBottom:22}}>
      <div style={{border:"1.5px solid var(--ink)"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", background:"var(--ink)", color:"var(--paper)"}}>
          <div style={{padding:"10px 16px", fontSize:11, textTransform:"uppercase", letterSpacing:".08em", borderRight:"1.5px dashed var(--paper)"}}>Traditional trip</div>
          <div style={{padding:"10px 16px", fontSize:11, textTransform:"uppercase", letterSpacing:".08em"}}>Kapes model</div>
        </div>
        {[
          ["Projects built for visitors.","Programs built for communities — students join."],
          ["Impact ends when the bus leaves.","Impact continues year-round."],
          ["70% of revenue leaves the community.","Revenue stays in Kenyan-led teams."],
          ["Students framed as 'helpers'.","Students framed as learners."],
          ["Vague 'life-changing' promise.","Measurable outputs: meals, water, girls in school."],
          ["Curriculum? Optional.","Pre-trip, on-ground, post-trip — tied to CAS & SDGs."],
          ["Safety — vaguely mentioned.","Risk plans + protocols shared upfront with parents."],
        ].map(([l,r],i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"1fr 1fr", borderTop:"1.5px dashed var(--ink)"}}>
            <div style={{padding:"14px 16px", borderRight:"1.5px dashed var(--ink)", background:"var(--paper-2)", fontSize:13}}>
              <span className="cross" style={{marginRight:8}}>✗</span>{l}
            </div>
            <div style={{padding:"14px 16px", fontSize:13}}>
              <span className="tick" style={{marginRight:8}}>✓</span>{r}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* DAMNING NUMBER + PROOF */}
    <section style={{marginBottom:22, position:"relative"}}>
      <div className="grid-2">
        <div className="box" style={{padding:22, background:"var(--paper-2)"}}>
          <div className="hand" style={{fontSize:24, color:"var(--bad)"}}>The number that keeps us up.</div>
          <div className="display" style={{fontSize:120, lineHeight:.9, marginTop:4}}>70<span style={{fontSize:60}}>%</span></div>
          <div style={{fontSize:12, marginTop:4}}>of tourism revenue never reaches local communities.</div>
        </div>
        <div className="box" style={{padding:22}}>
          <div className="hand" style={{fontSize:24, color:"var(--good)"}}>The number we keep counting.</div>
          <div className="display" style={{fontSize:120, lineHeight:.9, marginTop:4}}>45<span style={{fontSize:44, marginLeft:4}}>k</span></div>
          <div style={{fontSize:12, marginTop:4}}>meals from Seeds2Education's first harvest. And it keeps growing.</div>
          <div style={{marginTop:12, display:"flex", gap:10, alignItems:"center"}}>
            <div className="meter" style={{width:160}}>
              <div className="fill"/><div className="fill"/><div className="fill"/><div/><div/>
            </div>
            <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>harvest 1 of 5</span>
          </div>
        </div>
      </div>
    </section>

    {/* PROGRAMS — same split language */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">PROGRAMS YOU PLUG INTO</div>
      <div className="grid-2" style={{marginTop:6}}>
        {[
          ["Seeds2Education","year-round permaculture gardens — hunger = #1 barrier to learning"],
          ["Water Empowering Women","women-led water infrastructure — girls stay in school when women have water"],
          ["Roots of Change","agroforestry + conservation in the Kasigau Corridor"],
          ["Feeding the Future","school feeding programs across 11 partner schools"],
        ].map(([t,d])=>(
          <div key={t} className="box" style={{display:"flex", gap:12, padding:14}}>
            <div style={{width:110}}><Photo label={t.toLowerCase()} h={100}/></div>
            <div style={{flex:1}}>
              <div style={{fontSize:12, fontWeight:600}}>{t}</div>
              <div style={{fontSize:11, color:"var(--ink-2)", marginTop:4, lineHeight:1.5}}>{d}</div>
              <div style={{marginTop:8, display:"flex", gap:6, flexWrap:"wrap"}}>
                <span className="chip">year-round</span>
                <span className="chip">Kenyan-led</span>
                <span className="chip">curriculum</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* SCORECARD CTA in split style */}
    <section style={{marginBottom:22, border:"1.5px solid var(--ink)", display:"grid", gridTemplateColumns:"1.3fr 1fr"}}>
      <div style={{padding:22, borderRight:"1.5px dashed var(--ink)"}}>
        <div className="eyebrow">THE MIRROR TEST</div>
        <div className="display" style={{fontSize:32, marginTop:6}}>
          Score your <em>own</em> school trips in 5 minutes.
        </div>
        <div style={{marginTop:10, maxWidth:520}}><Lines n={2}/></div>
      </div>
      <div style={{padding:22, background:"var(--paper-2)"}}>
        <div className="mono" style={{fontSize:10, textTransform:"uppercase", letterSpacing:".08em", color:"var(--muted)"}}>Your programme</div>
        <div style={{marginTop:8}}>
          <div className="meter"><div className="fill"/><div className="fill"/><div/><div/><div/></div>
          <div className="mono" style={{fontSize:10, marginTop:6, color:"var(--ink-2)"}}>Room to Grow · 42 / 80</div>
        </div>
        <div style={{marginTop:14}}>
          <span className="chip acc">▸ Take the scorecard</span>
        </div>
      </div>
    </section>

    <footer className="box dashed" style={{padding:"14px", textAlign:"center"}}>
      <span className="hand" style={{fontSize:22}}>on the ground before your first trip · after your last one ·</span>
    </footer>
  </div>
);


/* ===================================================== */
/* APPROACH 3 — Editorial longform magazine               */
/* ===================================================== */
const HomeA3 = () => (
  <div className="wf" style={{padding:"18px 32px"}}>
    <Nav/>

    {/* Masthead-style hero */}
    <section style={{borderTop:"2px solid var(--ink)", borderBottom:"2px solid var(--ink)", padding:"18px 0", marginBottom:20, position:"relative"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
        <span className="mono" style={{fontSize:10, letterSpacing:".12em"}}>ISSUE №001 · NAIROBI / KASIGAU / MARA · APR 2026</span>
        <span className="mono" style={{fontSize:10, letterSpacing:".12em"}}>A KAPES FIELD DISPATCH</span>
      </div>
      <div className="display" style={{fontSize:110, lineHeight:.88, marginTop:14, marginBottom:6}}>
        Kenya<br/>
        <span className="accent">has something</span><br/>
        to teach them.
      </div>
      <div style={{display:"flex", gap:40, marginTop:10, alignItems:"flex-end"}}>
        <div style={{flex:"0 0 40%"}}>
          <div className="serif" style={{fontSize:20, lineHeight:1.3, fontStyle:"italic"}}>
            Most trip companies arrive for two weeks and leave. We've been here since 2022, running Seeds2Education gardens, water cooperatives, and school feeding programmes year-round. Students don't save anything. They join.
          </div>
        </div>
        <div style={{flex:1, display:"flex", gap:10, alignItems:"center"}}>
          <span className="chip acc">▸ See how it works</span>
          <span className="chip">Scorecard</span>
          <span className="mono" style={{fontSize:10, marginLeft:"auto", color:"var(--muted)"}}>pp. 01 — 09</span>
        </div>
      </div>
    </section>

    {/* Big editorial photo spread */}
    <section style={{marginBottom:22}}>
      <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", gap:14}}>
        <Photo label="Marasi Primary — harvest morning" sub="full-bleed editorial; students + Kenyan rangers; golden hour" h={320}/>
        <div className="col">
          <Photo label="portrait — woman leading water coop" h={150}/>
          <Photo label="hands in soil, close crop" h={155}/>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", marginTop:6}}>
        <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>PHOTO ESSAY · 01</span>
        <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>—</span>
      </div>
    </section>

    {/* Feature essay columns */}
    <section style={{marginBottom:24}}>
      <div style={{display:"grid", gridTemplateColumns:"180px 1fr 1fr 1fr", gap:22}}>
        <div>
          <div className="eyebrow">FEATURE</div>
          <div className="hand" style={{fontSize:26, marginTop:4, lineHeight:1}}>The operating model, not the brochure</div>
          <div className="mono" style={{fontSize:10, marginTop:10, color:"var(--muted)"}}>by the Kenya team</div>
        </div>
        <div>
          <div className="serif" style={{fontSize:44, lineHeight:.95, float:"left", marginRight:6}}>T</div>
          <Lines n={9}/>
        </div>
        <div><Lines n={10}/></div>
        <div>
          <Lines n={5}/>
          <div style={{marginTop:10, borderLeft:"2px solid var(--accent)", paddingLeft:10}}>
            <div className="serif" style={{fontSize:18, lineHeight:1.25, fontStyle:"italic"}}>
              "Communities need more than tourists — they need partners."
            </div>
          </div>
          <div style={{marginTop:10}}><Lines n={3}/></div>
        </div>
      </div>
    </section>

    {/* By the numbers — editorial */}
    <section style={{marginBottom:24, borderTop:"1.5px solid var(--ink)", borderBottom:"1.5px solid var(--ink)", padding:"18px 0"}}>
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:10}}>
        <div className="eyebrow">BY THE NUMBERS</div>
        <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>reported figures · Jan–Apr 2026</div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:0}}>
        {[
          ["45,000","meals from first harvest"],
          ["1.5 ac","farmland transformed"],
          ["11","partner schools"],
          ["10–30","students per group"],
          ["2 + rangers","leaders per trip"],
        ].map(([n,l],i,arr)=>(
          <div key={l} style={{padding:"0 18px", borderRight: i<arr.length-1 ? "1.5px dashed var(--ink)":"none"}}>
            <div className="display" style={{fontSize:48, lineHeight:.9}}>{n}</div>
            <div className="mono" style={{fontSize:10, marginTop:6, color:"var(--ink-2)"}}>{l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Dispatch: programs as articles */}
    <section style={{marginBottom:22}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
        <div className="eyebrow">DISPATCHES / PROGRAMS</div>
        <span className="mono" style={{fontSize:10, color:"var(--muted)"}}>4 ongoing programs</span>
      </div>
      <div className="grid-4" style={{marginTop:10}}>
        {[
          ["01","Seeds2Education","permaculture gardens · Marasi Primary"],
          ["02","Water Empowering Women","women-led infrastructure · Kasigau"],
          ["03","Roots of Change","agroforestry · Kasigau Corridor"],
          ["04","Feeding the Future","school feeding · 11 partner schools"],
        ].map(([n,t,sub])=>(
          <div key={t} className="box" style={{padding:0, overflow:"hidden"}}>
            <Photo label={t.toLowerCase()} h={120}/>
            <div style={{padding:12}}>
              <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>№ {n}</div>
              <div className="serif" style={{fontSize:22, marginTop:2, lineHeight:1.05}}>{t}</div>
              <div className="mono" style={{fontSize:10, marginTop:4, color:"var(--ink-2)"}}>{sub}</div>
              <div style={{marginTop:10}}><Lines n={2} w={[100,80]}/></div>
              <div className="mono" style={{fontSize:10, color:"var(--accent-ink)", marginTop:10}}>↳ Read the dispatch</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Letter from the founder */}
    <section style={{marginBottom:22, display:"grid", gridTemplateColumns:"1fr 1fr", gap:22, alignItems:"center"}}>
      <Photo label="Matthew B. in the Kasigau Corridor" sub="portrait, natural — not polished" h={260}/>
      <div>
        <div className="eyebrow">A LETTER FROM THE FOUNDER</div>
        <div className="display" style={{fontSize:36, marginTop:4}}>We were in Kenya before your first trip.</div>
        <div className="serif" style={{fontSize:22, fontStyle:"italic", marginTop:6}}>We'll be here after your last one.</div>
        <div style={{marginTop:14}}><Lines n={6}/></div>
        <div className="mono" style={{fontSize:11, marginTop:10, color:"var(--muted)"}}>— Matthew Benjamin, founder</div>
      </div>
    </section>

    {/* Back-of-book: scorecard */}
    <section style={{marginBottom:22, borderTop:"2px solid var(--ink)", paddingTop:14}}>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:22, alignItems:"center"}}>
        <div>
          <div className="eyebrow">FIELD TOOL</div>
          <div className="display" style={{fontSize:40, lineHeight:.95}}>
            A 5-minute mirror<br/>for your programme.
          </div>
          <div style={{marginTop:10}}><Lines n={2}/></div>
        </div>
        <div className="box" style={{padding:18, background:"var(--paper-2)"}}>
          {[
            ["Community relationships","3 / 16"],
            ["Measurable impact","4 / 16"],
            ["Hands-on learning","6 / 16"],
            ["School reputation","7 / 16"],
            ["Ethics & accountability","5 / 16"],
          ].map(([k,v])=>(
            <div key={k} style={{display:"flex", alignItems:"center", gap:10, marginBottom:8}}>
              <div style={{width:120, fontSize:11}}>{k}</div>
              <div className="meter" style={{flex:1}}>
                <div className="fill"/><div className="fill"/><div/><div/><div/>
              </div>
              <div className="mono" style={{fontSize:10, color:"var(--muted)"}}>{v}</div>
            </div>
          ))}
          <div style={{marginTop:10}}><span className="chip acc">▸ Take the assessment</span></div>
        </div>
      </div>
    </section>

    <footer className="box dashed" style={{padding:"14px"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <span className="mono" style={{fontSize:10}}>END OF ISSUE Nº001</span>
        <span className="hand" style={{fontSize:22}}>on the ground — year round.</span>
        <span className="mono" style={{fontSize:10}}>talk to our Kenya team →</span>
      </div>
    </footer>
  </div>
);


/* ===================================================== */
/* APPROACH 4 — Manifesto / system diagram               */
/* ===================================================== */
const HomeA4 = () => (
  <div className="wf" style={{padding:"18px 28px"}}>
    <Nav/>

    {/* Manifesto wall */}
    <section style={{marginBottom:24, border:"2px solid var(--ink)", padding:28, position:"relative", background:"var(--paper)"}}>
      <div className="mono" style={{fontSize:10, letterSpacing:".14em", color:"var(--muted)"}}>A MANIFESTO · 001 / 007</div>
      <div className="display" style={{fontSize:86, lineHeight:.85, marginTop:10}}>
        We don't<br/>
        <s style={{textDecorationColor:"var(--accent)", textDecorationThickness:"4px"}}>help.</s> &nbsp;
        <s style={{textDecorationColor:"var(--accent)", textDecorationThickness:"4px"}}>save.</s> &nbsp;
        <s style={{textDecorationColor:"var(--accent)", textDecorationThickness:"4px"}}>volunteer.</s><br/>
        <span className="accent">We partner.</span>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(7,1fr)", marginTop:22, gap:10}}>
        {[
          "Projects built for visitors are built to end.",
          "A school bus is not a development strategy.",
          "Communities are experts, not recipients.",
          "Impact is measured in meals. Not memories.",
          "Students learn best when they're not the hero.",
          "Transparency is cheaper than trust, long-term.",
          "We're here year-round. Or we're not here at all.",
        ].map((t,i)=>(
          <div key={i} style={{borderTop:"1.5px solid var(--ink)", paddingTop:8}}>
            <div className="mono" style={{fontSize:10, color:"var(--accent-ink)"}}>№ {String(i+1).padStart(2,"0")}</div>
            <div className="serif" style={{fontSize:15, lineHeight:1.2, marginTop:4}}>{t}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex", gap:10, marginTop:22}}>
        <span className="chip acc">▸ Talk to Kenya team</span>
        <span className="chip">Score your trips (5 min)</span>
      </div>
      <Annot style={{top:24, right:28, transform:"rotate(4deg)"}}>one big claim.<br/>seven beats. ↓</Annot>
    </section>

    {/* System diagram — the year-round engine */}
    <section style={{marginBottom:24}}>
      <div className="eyebrow">THE YEAR-ROUND ENGINE</div>
      <div className="display" style={{fontSize:30, marginTop:4}}>Students plug into programs — <span className="accent">not the other way around.</span></div>

      <div style={{position:"relative", marginTop:20, border:"1.5px dashed var(--ink)", padding:26, minHeight:320}}>
        {/* center hub */}
        <div style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", zIndex:3,
                     border:"2px solid var(--ink)", background:"var(--accent)", padding:"14px 18px", color:"#1e1e1c"}}>
          <div className="hand" style={{fontSize:26, lineHeight:1}}>Kenya, year-round</div>
          <div className="mono" style={{fontSize:10, marginTop:4}}>Kenyan-led teams · 365 d</div>
        </div>

        {/* spokes: programs */}
        {[
          {t:"Seeds2Education", s:"45k meals / harvest", x:"8%", y:"14%"},
          {t:"Water Empowering Women", s:"women-led infra", x:"62%", y:"8%"},
          {t:"Roots of Change", s:"agroforestry · Kasigau", x:"70%", y:"64%"},
          {t:"Feeding the Future", s:"11 partner schools", x:"8%", y:"64%"},
        ].map(p=>(
          <div key={p.t} style={{position:"absolute", left:p.x, top:p.y, width:190, border:"1.5px solid var(--ink)", background:"var(--paper)", padding:10}}>
            <div style={{fontSize:12, fontWeight:600}}>{p.t}</div>
            <div className="mono" style={{fontSize:10, color:"var(--ink-2)", marginTop:2}}>{p.s}</div>
          </div>
        ))}

        {/* diagonal spoke lines */}
        <svg style={{position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none"}} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="15" y1="22" x2="50" y2="50" stroke="#1e1e1c" strokeWidth=".3" strokeDasharray="1,1"/>
          <line x1="72" y1="16" x2="50" y2="50" stroke="#1e1e1c" strokeWidth=".3" strokeDasharray="1,1"/>
          <line x1="72" y1="72" x2="50" y2="50" stroke="#1e1e1c" strokeWidth=".3" strokeDasharray="1,1"/>
          <line x1="15" y1="72" x2="50" y2="50" stroke="#1e1e1c" strokeWidth=".3" strokeDasharray="1,1"/>
        </svg>

        {/* student groups around the edges */}
        {[
          {label:"school group · 10–30 students", x:"2%", y:"2%"},
          {label:"school group · educators", x:"82%", y:"2%"},
          {label:"school group · CAS cohort", x:"82%", y:"90%"},
          {label:"school group · multi-year", x:"2%", y:"90%"},
        ].map((g,i)=>(
          <div key={i} style={{position:"absolute", left:g.x, top:g.y, border:"1.5px dashed var(--ink)", padding:"3px 8px", fontSize:10, fontFamily:"var(--mono)", background:"var(--paper-2)"}}>
            ↓ {g.label}
          </div>
        ))}
      </div>
      <Annot style={{marginTop:8, position:"static", transform:"none", color:"var(--muted)"}}>the "hub" keeps turning — school visits are spokes, not the wheel.</Annot>
    </section>

    {/* Proof strip — audit-table */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">RECEIPTS</div>
      <div style={{border:"1.5px solid var(--ink)"}}>
        <div style={{display:"grid", gridTemplateColumns:"1.3fr 1fr 1fr 1fr", background:"var(--ink)", color:"var(--paper)", fontSize:10, textTransform:"uppercase", letterSpacing:".08em"}}>
          <div style={{padding:"8px 12px", borderRight:"1.5px dashed var(--paper)"}}>Program</div>
          <div style={{padding:"8px 12px", borderRight:"1.5px dashed var(--paper)"}}>Year-round?</div>
          <div style={{padding:"8px 12px", borderRight:"1.5px dashed var(--paper)"}}>Measured output</div>
          <div style={{padding:"8px 12px"}}>Who leads</div>
        </div>
        {[
          ["Seeds2Education","yes","45,000 meals · harvest 1","Marasi Primary + Kapes KE team"],
          ["Water Empowering Women","yes","women's water co-op","local women's collective"],
          ["Roots of Change","yes","agroforestry planting","Kasigau Corridor ranger team"],
          ["Feeding the Future","yes","school feeding · 11 schools","local head teachers"],
        ].map((r,i)=>(
          <div key={i} style={{display:"grid", gridTemplateColumns:"1.3fr 1fr 1fr 1fr", borderTop:"1.5px dashed var(--ink)", fontSize:12}}>
            {r.map((c,j)=>(
              <div key={j} style={{padding:"10px 12px", borderRight: j<r.length-1 ? "1.5px dashed var(--ink)":"none", background: j===0 ? "var(--paper-2)":"var(--paper)"}}>
                {j===1 ? <span className="tick">✓ {c}</span> : c}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>

    {/* Two paths: "for heads" / "for coordinators" */}
    <section style={{marginBottom:22}}>
      <div className="eyebrow">CHOOSE YOUR PATH</div>
      <div className="grid-2" style={{marginTop:6}}>
        <div className="box" style={{padding:18, position:"relative"}}>
          <div className="hand" style={{fontSize:28}}>For heads of school →</div>
          <div style={{marginTop:8}}><Lines n={2}/></div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.6}}>
            <li>Board-ready pricing & impact reporting</li>
            <li>Transparent risk / safety protocol pack</li>
            <li>Multi-year partnership blueprint</li>
          </ul>
          <div style={{marginTop:12}}><span className="chip acc">▸ Book strategy call</span></div>
        </div>
        <div className="box" style={{padding:18, position:"relative"}}>
          <div className="hand" style={{fontSize:28}}>For trip coordinators →</div>
          <div style={{marginTop:8}}><Lines n={2}/></div>
          <ul style={{margin:"10px 0 0 18px", padding:0, fontSize:12, lineHeight:1.6}}>
            <li>Pre-trip curriculum packs (CAS, IB, SDGs)</li>
            <li>Day-by-day itineraries you can show parents</li>
            <li>24/7 local support + parent-comms templates</li>
          </ul>
          <div style={{marginTop:12}}><span className="chip acc">▸ Get coordinator pack</span></div>
        </div>
      </div>
    </section>

    {/* Final manifesto line */}
    <section className="box rough" style={{padding:"36px 28px", textAlign:"center", background:"var(--paper-2)"}}>
      <div className="handline" style={{fontSize:64, color:"var(--ink)"}}>ready to join the work?</div>
      <div style={{marginTop:14, display:"flex", justifyContent:"center", gap:10}}>
        <span className="chip acc">▸ Talk to the Kenya team</span>
        <span className="chip">Score your trips · 5 min</span>
      </div>
    </section>
  </div>
);

/* Export to window */
window.HomeApproaches = [HomeA1, HomeA2, HomeA3, HomeA4];
window.HomeMeta = [
  { label:"Classical", title:"Classical — clean, shipping-ready", sub:"Familiar pattern: hero → problem → mechanism → programs → why → proof → fit → scorecard → CTA. Safe baseline; easiest internal sell."},
  { label:"Us vs Them", title:"Split-screen argument", sub:"Us-vs-them runs the whole spine. Every row contrasts the old model with Kapes — hero, comparison table, paired stats, programs. Forces the differentiation at every scroll step."},
  { label:"Editorial", title:"Editorial longform · a field dispatch", sub:"Magazine masthead, photo essay, body copy columns, by-the-numbers rule, dispatches-as-programs. Speaks to heads of school who read The Atlantic, not landing pages."},
  { label:"Manifesto", title:"Manifesto + system diagram", sub:"Leads with 7-point manifesto, then a spoke diagram proving the year-round engine. Audit-table 'receipts'. Dual-path CTA for heads vs coordinators. Most distinct — highest recall."}
];
window.NavComponent = Nav;
window.Photo = Photo;
window.Lines = Lines;
window.Annot = Annot;
