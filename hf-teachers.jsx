/* FOR TEACHERS — CPD trip across all three programmes */

function TeachersHero(){
  return (
    <section style={{background:"var(--cream)", padding:"72px 0 64px", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:56, alignItems:"center"}}>
        <div>
          <div className="eyebrow">For Teachers · CPD trip · Limited cohorts</div>
          <h1 className="display" style={{marginTop:18}}>
            One trip.<br/>
            <span className="accent">All three programmes.</span>
          </h1>
          <p className="lead" style={{marginTop:22, color:"var(--ink-2)", maxWidth:560}}>
            A 5-day CPD trip for educators — Seeds2Education, Water Empowering Women, Community Conservation, all in one week. Built for the people who are evaluating whether to bring a student cohort, designing curriculum links, or coordinating CAS / DofE / EE programmes back home.
          </p>
          <div style={{display:"flex", gap:12, marginTop:32, flexWrap:"wrap"}}>
            <button className="btn-pill btn-action" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("contact")}>Register interest →</button>
            <button className="btn-pill btn-ghost" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("programs")}>See the three programmes</button>
          </div>
          <div style={{marginTop:32, display:"flex", gap:24, fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, flexWrap:"wrap"}}>
            <span>5 days · 4 nights</span><span>·</span>
            <span>Small groups (max 10)</span><span>·</span>
            <span>1–2 cohorts a year</span>
          </div>
        </div>
        <div style={{background:"var(--charcoal)", color:"#fff", padding:28, borderRadius:6}}>
          <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>What you leave with</div>
          <h3 className="display" style={{color:"#fff", fontSize:24, marginBottom:16}}>Five concrete things.</h3>
          <div style={{display:"flex", flexDirection:"column", gap:10, fontSize:13, color:"rgba(255,255,255,.8)"}}>
            {[
              ["Curriculum links", "Mapped to IB CAS, DofE, BSO, MYP service learning"],
              ["Honest assessment", "Whether the trip fits your cohort — without the sales conversation"],
              ["Pedagogy notes", "What works, what doesn't, what to prepare students for"],
              ["Partner relationships", "First-name introductions to the Kenyans running each programme"],
              ["Back-to-school pack", "Slides + materials to share with SLT, parents, students"],
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
          <button className="btn-pill btn-action" style={{marginTop:20, padding:"12px 20px", width:"100%"}} onClick={()=>khifiNavigate("contact")}>Register interest →</button>
          <div style={{marginTop:12, fontSize:11, color:"#888", textAlign:"center"}}>Cohort dates published when 6+ educators have registered.</div>
        </div>
      </div>
    </section>
  );
}

function TeachersWho(){
  const fits = [
    {
      tag:"Heads of school + deputies",
      body:"You're considering Kenya for your school's service-learning programme and want to see the work in person before signing off a parent letter. We run the trip with that frame — you're evaluating, not being sold to.",
    },
    {
      tag:"CAS / DofE / service-learning coordinators",
      body:"You design the programmes students travel on. Spend a week inside ours — the partner conversations, the daily rhythm, the reflection sessions — and walk away with a clear view of what you'd build.",
    },
    {
      tag:"IB EE supervisors + curriculum leads",
      body:"You're the person who sees how a trip lands in the classroom afterwards. Map the cross-curricular threads (geography, ESS, biology, business management, world studies) against the actual on-the-ground work.",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div className="eyebrow">Who comes on this trip</div>
        <h2 className="display" style={{marginTop:14, marginBottom:14, maxWidth:900}}>
          The educators we've <span className="accent">designed this for.</span>
        </h2>
        <p className="lead" style={{maxWidth:760, marginBottom:48, color:"var(--ink-2)"}}>
          Mixed cohort by design — heads, coordinators, and curriculum leads in the same group. The conversations across roles are most of the value.
        </p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18}}>
          {fits.map((f,i)=>(
            <div key={i} style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:28, display:"flex", flexDirection:"column", gap:14}}>
              <div style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".14em", color:"var(--orange)", fontWeight:700, textTransform:"uppercase"}}>{f.tag}</div>
              <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeachersItinerary(){
  const days = [
    {
      day:"Day 1", title:"Arrival + Seeds2Education orientation",
      body:"Land in Nairobi, transfer to Oloosirkon. Evening orientation with Matthew + the Kenyan trip leaders. The frame: you're here as colleagues, not visitors.",
      tag:"S2E",
    },
    {
      day:"Day 2", title:"Seeds2Education · the farm",
      body:"Full day on the 1.5-acre farmland with the Kenyan crew. The Food for Education partnership in detail — onion harvest, the $0.85/kg exchange, the 45,000-meals-a-year forecast. Conversation with school leadership at Oloosirkon.",
      tag:"S2E",
    },
    {
      day:"Day 3", title:"Water Empowering Women · Hope School",
      body:"Travel to the WEW partner school. Site walk-through with the Neema Women's Group. The build cycle, the enrolment data, what changes when a school gains water. Lunch with the community.",
      tag:"WEW",
    },
    {
      day:"Day 4", title:"Community Conservation · Voi conservancy",
      body:"The conservancy site, the Africa Collect Textiles factory, the community enterprises on a single piece of land. Conversations with the Kenyan staff running each — the systems, the economics, the trade-offs.",
      tag:"CC",
    },
    {
      day:"Day 5", title:"Reflection + curriculum planning + departure",
      body:"Morning workshop: pedagogy notes, what to bring back, how each programme maps to your specific cohort. We hand over the back-to-school pack. Afternoon transfer to Nairobi for evening flights.",
      tag:"All",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">The 5-day rhythm</div>
        <h2 className="display" style={{marginTop:14, marginBottom:40, maxWidth:900}}>
          What the week <span className="accent">actually looks like.</span>
        </h2>
        <div style={{display:"flex", flexDirection:"column", gap:0, borderTop:"2px solid var(--charcoal)"}}>
          {days.map((d,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"110px 1fr 90px", gap:32, padding:"28px 0", borderBottom:"1px solid var(--line)", alignItems:"start"}}>
              <div style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, paddingTop:4}}>{d.day}</div>
              <div>
                <h3 className="display" style={{fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2, margin:"0 0 10px"}}>{d.title}</h3>
                <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>{d.body}</p>
              </div>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, textAlign:"right", paddingTop:6}}>{d.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeachersHonest(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div className="container" style={{maxWidth:900}}>
        <div className="eyebrow">Pricing + how to register</div>
        <h2 className="display" style={{marginTop:14, marginBottom:24}}>
          Small cohorts. <span className="accent">Honest pricing.</span>
        </h2>
        <p style={{fontSize:16, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>
          We run this trip 1–2 times a year, max 10 educators per cohort. Pricing is at-cost plus a small admin fee — this isn't a profit centre, it's how we make sure the people designing student trips have actually been on one. Indicative cost USD 1,800–2,200 per educator (twin share, excluding international flights). Final price confirmed once dates and group size lock.
        </p>
        <p style={{fontSize:16, lineHeight:1.65, color:"var(--ink-2)", marginBottom:18}}>
          Register interest below. We'll publish dates once we have 6+ educators on the list. If your school sends a student cohort within 18 months of your CPD trip, the educator's place is credited against that booking — pre-trip discovery, in effect.
        </p>
        <div style={{display:"flex", gap:12, marginTop:24, flexWrap:"wrap"}}>
          <button className="btn-pill btn-action" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("contact")}>Register interest →</button>
          <button className="btn-pill btn-ghost" style={{padding:"15px 26px"}} onClick={()=>khifiNavigate("schools")}>For schools (student trips)</button>
        </div>
      </div>
    </section>
  );
}

function TeachersPage(){
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  if (isMobile && window.MobileTeachersPage) return <window.MobileTeachersPage/>;
  return (
    <div>
      <SiteNav sticky/>
      <TeachersHero/>
      <TeachersWho/>
      <TeachersItinerary/>
      <TeachersHonest/>
      <Footer/>
    </div>
  );
}
window.TeachersPage = TeachersPage;
