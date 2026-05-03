/* FOR ORGANISATIONS — hub page for non-school cohorts */

function OrgsHero(){
  return (
    <section style={{background:"var(--cream)", padding:"72px 0 64px", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"center"}}>
        <div>
          <div className="eyebrow">For Organisations · Bespoke cohorts</div>
          <h1 className="display" style={{marginTop:18}}>
            Same Kenyan-led work.<br/>
            <span className="accent">Re-shaped for adult cohorts.</span>
          </h1>
          <p className="lead" style={{marginTop:22, color:"var(--ink-2)", maxWidth:560}}>
            NGOs, corporate learning and development, foundations, university programmes. The three programmes don't change — Seeds2Education, Water Empowering Women, Community Conservation — but the shape does. You join the work; you don't tour it. Bespoke dates, group sizes from 8 to 24.
          </p>
          <div style={{display:"flex", gap:12, marginTop:32, flexWrap:"wrap"}}>
            <button className="btn-pill btn-action" style={{padding:"15px 26px"}} onClick={bookCall}>Book a 30-min call →</button>
            <button className="btn-pill btn-ghost" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("approach")}>Read our approach</button>
          </div>
          <div style={{marginTop:32, display:"flex", gap:24, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, flexWrap:"wrap"}}>
            <span>Dubai-based · Kenyan-led</span><span>·</span>
            <span>3 Kenya programmes</span><span>·</span>
            <span>Custom dates</span>
          </div>
        </div>
        <div style={{background:"var(--charcoal)", color:"#fff", padding:28, borderRadius:6}}>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>The intro call</div>
          <h3 className="display" style={{color:"#fff", fontSize:24, marginBottom:16}}>What 30 minutes covers.</h3>
          <div style={{display:"flex", flexDirection:"column", gap:10, fontSize:13, color:"rgba(255,255,255,.8)"}}>
            {[
              ["Your cohort", "Team size, seniority mix, what you want them to leave with"],
              ["Programme match", "Which of the three is right for your group's brief"],
              ["Shape of the week", "How adult cohorts differ from student trips on the ground"],
              ["Practicalities", "Bespoke pricing, dates, in-country logistics"],
              ["Next step", "Costed proposal within a week if it's a fit"],
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

function OrgsAudienceFit(){
  const fits = [
    {
      title:"NGOs and foundations",
      body:"Field-team training, board immersions, sector education for grant-makers. Ground-truth a thesis about food security, water access, or community-led conservation by joining work that's actually happening — not a curated tour.",
      meta:"Common shape: 5–7 days · 8–16 pax",
    },
    {
      title:"Corporate L&D and leadership programmes",
      body:"For senior teams who've done the boardroom offsite, the high-ropes course, and the coastal hike — and want something that does the leadership work without the contrived metaphors. Real partners, real constraints, real decisions.",
      meta:"Common shape: 4–6 days · 12–24 pax",
    },
    {
      title:"University programmes",
      body:"Postgraduate field study, MBA international modules, undergraduate gap-year programmes. Pre-trip reading, on-site work with Kenyan partners, post-trip reflection. Built around your academic frame, not ours.",
      meta:"Common shape: 7–10 days · 10–20 pax",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Who this is for</div>
        <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>
          Three audiences <span className="accent">we re-shape the work for.</span>
        </h2>
        <p className="lead" style={{maxWidth:760, marginBottom:48, color:"var(--ink-2)"}}>
          The Kenyan partners and the work are constant. What changes is the shape of the week — pace, pre-trip context, depth of partner conversation, the kind of reflection we build in.
        </p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18}}>
          {fits.map((f,i)=>(
            <div key={i} style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:28, display:"flex", flexDirection:"column", gap:14}}>
              <h3 className="display" style={{fontSize:"clamp(20px,1.8vw,26px)", lineHeight:1.2, margin:0}}>{f.title}</h3>
              <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{f.body}</p>
              <div style={{fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, paddingTop:14, borderTop:"1px solid var(--line)"}}>{f.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgsHowItDiffers(){
  const rows = [
    ["Pre-trip context",       "Parent letter + safeguarding pack",     "Briefing pack written for your cohort's frame — sector terminology, your strategic context"],
    ["Pace on the ground",     "Structured day, evening reflection",    "Adult pace — earlier starts, longer partner conversations, more time off-script"],
    ["Partner access",         "Group introductions, shared meals",     "1-on-1 time with Kenyan programme leads where useful — including the people who decide what gets built next"],
    ["Reflection",             "Curriculum-linked debriefs",            "Built around your brief — leadership lessons, sector insight, board-ready takeaways"],
    ["Outcome on return",      "Student-led presentation",              "Whatever your team needs — internal report, board memo, sector-specific writeup"],
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">Schools vs. organisations · what we change</div>
        <h2 className="display" style={{marginTop:14, marginBottom:40, maxWidth:900}}>
          Same work. <span className="accent">Different shape.</span>
        </h2>
        <div style={{border:"1px solid var(--line)", borderRadius:10, overflow:"hidden"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1.2fr", background:"var(--charcoal)", color:"#fff", padding:"18px 24px", fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700}}>
            <div>What changes</div>
            <div style={{opacity:.55}}>School cohort default</div>
            <div style={{color:"var(--orange)"}}>Organisation cohort</div>
          </div>
          {rows.map(([q,s,o], i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1.2fr", padding:"22px 24px", background: i%2? "var(--cream)":"var(--sand)", alignItems:"start", fontSize:15, borderTop: i===0? "none":"1px solid var(--line)"}}>
              <div style={{fontWeight:600, color:"var(--charcoal)"}}>{q}</div>
              <div style={{color:"var(--muted)"}}>{s}</div>
              <div style={{color:"var(--charcoal)", fontWeight:500}}>{o}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrgsHonest(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="container" style={{maxWidth:900}}>
        <div className="eyebrow">An honest note on impact metrics</div>
        <h2 className="display" style={{marginTop:14, marginBottom:24}}>
          We won't sell you a number we <span className="accent">can't defend.</span>
        </h2>
        <p style={{fontSize:16, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>
          If you're here because your CSR or ESG report needs a tidy headline figure, we're probably the wrong partner. The work is real — Seeds2Education feeds Kenyan students, Water Empowering Women installs tanks at partner schools, Community Conservation joins ten years of Kenyan-led conservancy work. We can show you the inputs and the outputs honestly. We won't attribute outcomes to your trip that the year-round work would have produced anyway.
        </p>
        <p style={{fontSize:16, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>
          What we can give you, on return: a clear account of what your cohort contributed, what the partners are doing this quarter, and what the next chapter looks like. That's the honest version. It's the only version we know how to write.
        </p>
      </div>
    </section>
  );
}

function OrgsCTA(){
  return (
    <CTABar
      kicker="Ready when you are"
      title={<>One call. <span className="accent">A costed proposal within a week.</span></>}
      primary="Book the call"
      secondary="Read our approach"
      onPrimary={bookCall}
      onSecondary={()=>khifiNavigate("approach")}
    />
  );
}

function OrganisationsPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileOrganisationsPage) return <window.MobileOrganisationsPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <OrgsHero/>
      <OrgsAudienceFit/>
      <OrgsHowItDiffers/>
      <OrgsHonest/>
      <OrgsCTA/>
      <Footer/>
    </div>
  );
}
window.OrganisationsPage = OrganisationsPage;
