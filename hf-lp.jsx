/* LP — Quiz-first Impact Scorecard (5 sections × 4 questions, ported from kapesadventures.com) */

const { useState: useStateLP } = React;

const QUIZ_DATA = {
  sections: [
    {
      title: "Your Current Trip",
      description: "Let's start with what your trips look like today.",
      questions: [
        { id:"q1-1", q:"How would you describe your school's international trips?",
          opts:[
            {label:"Primarily cultural immersion and sightseeing.", score:1},
            {label:"Adventure travel with some community visits.", score:2},
            {label:"Service-learning trips with volunteer activities.", score:3},
            {label:"Social-impact programmes designed around community-identified needs.", score:4},
          ]},
        { id:"q1-2", q:"Who organises and runs your school trips?",
          opts:[
            {label:"An international tour operator or travel agency.", score:1},
            {label:"A volunteer-tourism organisation.", score:2},
            {label:"Our school coordinates directly with local contacts.", score:3},
            {label:"A specialist organisation with long-term community partnerships and local staff.", score:4},
          ]},
        { id:"q1-3", q:"What percentage of the trip involves students actively working — not observing or touring?",
          opts:[
            {label:"Less than 20% — it's mainly sightseeing and cultural visits.", score:1},
            {label:"About 30% — some activities mixed with tourism.", score:2},
            {label:"About 50% — balanced between work and exploration.", score:3},
            {label:"Over 70% — the trip is centred on meaningful hands-on projects.", score:4},
          ]},
        { id:"q1-4", q:"How does the trip connect to your school's curriculum?",
          opts:[
            {label:"It's a separate enrichment activity — not connected to curriculum.", score:1},
            {label:"Students write reflections for English or humanities credit.", score:2},
            {label:"It loosely aligns with global-citizenship or IB themes.", score:3},
            {label:"It's integrated with specific learning outcomes, SDGs, and documented CAS hours.", score:4},
          ]},
      ],
    },
    {
      title: "Student Experience",
      description: "What are your students actually doing and learning?",
      questions: [
        { id:"q2-1", q:"When students interact with local communities, what do they typically do?",
          opts:[
            {label:"Observe, take photos, and have brief conversations.", score:1},
            {label:"Visit schools or community centres and spend time with children.", score:2},
            {label:"Participate in organised activities like teaching, sports, or basic tasks.", score:3},
            {label:"Work on skilled projects like building gardens, water systems, or sustainable infrastructure.", score:4},
          ]},
        { id:"q2-2", q:"What practical skills could a student demonstrate after returning?",
          opts:[
            {label:"Improved adaptability and gratitude for their own life.", score:1},
            {label:"Basic knowledge of local traditions or language phrases.", score:2},
            {label:"Some hands-on skills like cooking local food or crafts.", score:3},
            {label:"Technical skills: permaculture, water harvesting, or sustainable agriculture.", score:4},
          ]},
        { id:"q2-3", q:"Do students understand why poverty exists in the communities they visit?",
          opts:[
            {label:"Not really — we focus on positive cultural experiences.", score:1},
            {label:"They observe it but we don't discuss root causes.", score:2},
            {label:"We provide pre-trip briefings on local context.", score:3},
            {label:"Students learn about systemic barriers and how their work addresses specific causes.", score:4},
          ]},
        { id:"q2-4", q:"How do students reflect on the experience?",
          opts:[
            {label:"Social-media posts and informal sharing with friends.", score:1},
            {label:"Written journals or reflection essays.", score:2},
            {label:"Structured debriefs with teachers during the trip.", score:3},
            {label:"Guided reflection connecting their work to systemic change and ongoing impact.", score:4},
          ]},
      ],
    },
    {
      title: "Community Relationships",
      description: "How deep are your connections with local communities?",
      questions: [
        { id:"q3-1", q:"How long has your school been working with the same community?",
          opts:[
            {label:"We visit different destinations each year.", score:1},
            {label:"We've been to the same region once or twice.", score:2},
            {label:"We return to the same area but work with different groups.", score:3},
            {label:"We have multi-year partnerships with communities who know us by name.", score:4},
          ]},
        { id:"q3-2", q:"How much time do students spend with the same local people?",
          opts:[
            {label:"Brief interactions — an hour or less total.", score:1},
            {label:"A few hours across the entire trip.", score:2},
            {label:"One full day with a family or community group.", score:3},
            {label:"Multiple days working alongside the same people, building real relationships.", score:4},
          ]},
        { id:"q3-3", q:"Who decides what projects students work on?",
          opts:[
            {label:"The tour operator designs the itinerary.", score:1},
            {label:"Our school's trip coordinator chooses activities.", score:2},
            {label:"It's a combination of school preferences and local suggestions.", score:3},
            {label:"Community leaders identify their priorities, and we support their vision.", score:4},
          ]},
        { id:"q3-4", q:"What happens with the community relationship after students leave?",
          opts:[
            {label:"Nothing — the trip ends when we depart.", score:1},
            {label:"Occasionally a teacher stays in touch personally.", score:2},
            {label:"We send thank-you messages or follow up once.", score:3},
            {label:"Ongoing communication, updates, and continued support throughout the year.", score:4},
          ]},
      ],
    },
    {
      title: "Measurable Impact",
      description: "What evidence of change can you point to?",
      questions: [
        { id:"q4-1", q:"Six months after the trip, what physical evidence of students' work still exists?",
          opts:[
            {label:"Nothing physical — our trips focus on experiences.", score:1},
            {label:"Donated supplies like books, clothes, or school materials.", score:2},
            {label:"A small project, though we're not sure if it's still in use.", score:3},
            {label:"Permanent infrastructure the community uses daily: gardens, water systems, buildings.", score:4},
          ]},
        { id:"q4-2", q:"If a parent asked 'What did my child's trip accomplish?', what could you show them?",
          opts:[
            {label:"Photos and stories about the experience.", score:1},
            {label:"Student reflections about personal growth.", score:2},
            {label:"A general report mentioning activities and outcomes.", score:3},
            {label:"Specific data: meals provided, families supported, infrastructure built.", score:4},
          ]},
        { id:"q4-3", q:"Does the trip address a specific barrier that keeps children out of school?",
          opts:[
            {label:"No — we focus on cultural exchange, not solving problems.", score:1},
            {label:"We're aware of barriers but don't address them directly.", score:2},
            {label:"We contribute to general education support.", score:3},
            {label:"Yes — we tackle specific barriers like hunger, water access, or school infrastructure.", score:4},
          ]},
        { id:"q4-4", q:"How do you measure the success of your school trips?",
          opts:[
            {label:"Student-satisfaction surveys and photos shared.", score:1},
            {label:"Teacher observations and student reflections.", score:2},
            {label:"General feedback from partners and participants.", score:3},
            {label:"Specific metrics: number of beneficiaries, meals served, or infrastructure completed.", score:4},
          ]},
      ],
    },
    {
      title: "Ethics & Accountability",
      description: "The questions that matter most.",
      questions: [
        { id:"q5-1", q:"How do your student activities relate to local employment and leadership?",
          opts:[
            {label:"We haven't really thought about this.", score:1},
            {label:"Students do tasks like painting or cleaning that locals could be paid for.", score:2},
            {label:"We try to be helpful without taking work from locals.", score:3},
            {label:"Locals lead all projects, students assist, and communities continue the work after we leave.", score:4},
          ]},
        { id:"q5-2", q:"Who leads activities when students are 'helping' the community?",
          opts:[
            {label:"Our teachers or the tour-company staff.", score:1},
            {label:"A mix of our staff and local guides.", score:2},
            {label:"Local guides with some community involvement.", score:3},
            {label:"Community members teach students — students learn from them, not the reverse.", score:4},
          ]},
        { id:"q5-3", q:"What kind of local employment does your trip create or sustain?",
          opts:[
            {label:"Trip-day work only — guides and drivers paid per visit, with no ongoing role.", score:1},
            {label:"Some seasonal staff retained between visiting groups.", score:2},
            {label:"Project-based — donations or grants support a specific local cause.", score:3},
            {label:"Year-round paid employment continues whether or not a school group is visiting.", score:4},
          ]},
        { id:"q5-4", q:"How would the community honestly describe your school's visits?",
          opts:[
            {label:"They see us as well-meaning tourists.", score:1},
            {label:"They appreciate the donations and attention.", score:2},
            {label:"They value the interaction but it doesn't change much.", score:3},
            {label:"They consider us genuine partners solving problems they identified.", score:4},
          ]},
      ],
    },
  ],
};

// Flatten for easier indexing — but we still render section transitions in the UI
const ALL_QUESTIONS = QUIZ_DATA.sections.flatMap((s, si) =>
  s.questions.map((q, qi) => ({ ...q, sectionIndex: si, sectionTitle: s.title, qInSection: qi }))
);

function LPHero({ onStart }) {
  return (
    <section style={{position:"relative", minHeight:620, background:"var(--charcoal)", color:"#fff", overflow:"hidden"}}>
      <img className="kapes" src={IMG.farmActionShovel} alt="" style={{position:"absolute",inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:.5, objectPosition:"center 50%"}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(115deg, rgba(26,26,26,.92) 0%, rgba(26,26,26,.75) 45%, rgba(26,26,26,.3) 100%)"}}/>
      <div className="container" style={{position:"relative", paddingTop:72, paddingBottom:72, display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:48, alignItems:"center"}}>
        <div>
          <div className="eyebrow" style={{color:"#fff"}}>
            <span style={{background:"var(--orange)",width:24,height:1,display:"inline-block",marginRight:10}}/>Impact Scorecard · free · 8 min
          </div>
          <h1 className="display" style={{color:"#fff", marginTop:18, fontSize:"clamp(54px,5.6vw,96px)"}}>
            Is your school trip<br/>
            <span className="accent">building anything?</span>
          </h1>
          <p className="lead" style={{color:"rgba(255,255,255,.85)", maxWidth:560, marginTop:20}}>
            Twenty questions across five dimensions — current trip, student experience, community relationships, measurable impact, ethics. We grade your programme honestly, then send you the SLT-ready PDF report.
          </p>
          <div style={{display:"flex", gap:14, marginTop:32}}>
            <button onClick={onStart} className="btn-pill btn-action" style={{padding:"16px 28px", fontSize:14}}>Take the assessment →</button>
            <a href="#proof" className="btn-pill" style={{padding:"16px 28px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.5)", fontSize:14, textDecoration:"none"}}>What it tests for</a>
          </div>
          <div style={{marginTop:48, display:"grid", gridTemplateColumns:"repeat(3, auto)", gap:36}}>
            <Trust n="8 min" l="Average completion"/>
            <Trust n="20 questions" l="Across 5 dimensions"/>
            <Trust n="No mailing list" l="Honest report, no funnel"/>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
function Trust({n,l}){
  return <div>
    <div style={{fontFamily:"var(--display)", fontSize:26, color:"#fff"}}>{n}</div>
    <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", marginTop:4, color:"rgba(255,255,255,.55)", fontWeight:600}}>{l}</div>
  </div>;
}

function SectionIntro({ section, sectionIndex, totalSections, onContinue }) {
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container" style={{maxWidth:760, textAlign:"center"}}>
        <div style={{fontFamily:"var(--display)", fontSize:80, color:"var(--orange)", lineHeight:1, opacity:.85, marginBottom:8}}>{String(sectionIndex+1).padStart(2,"0")}</div>
        <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:24}}>Section {sectionIndex+1} of {totalSections}</div>
        <h2 className="display" style={{fontSize:"clamp(36px,4vw,56px)", lineHeight:1.05, marginBottom:18}}>{section.title}</h2>
        <p className="lead" style={{fontFamily:"var(--serif)", fontStyle:"italic", color:"var(--ink-2)", marginBottom:36, fontSize:19}}>{section.description}</p>
        <button onClick={onContinue} className="btn-pill btn-action" style={{padding:"16px 28px"}}>Begin section {sectionIndex+1} →</button>
      </div>
    </section>
  );
}

function Quiz({ state, setState, onFinish }) {
  const [showSectionIntro, setShowSectionIntro] = React.useState(true);
  const total = ALL_QUESTIONS.length;
  const step = state.step;
  const q = ALL_QUESTIONS[step];
  const section = QUIZ_DATA.sections[q.sectionIndex];
  const totalSections = QUIZ_DATA.sections.length;
  const pct = Math.round((step/total)*100);

  // Reset section-intro when entering a new section
  React.useEffect(()=>{
    if (q.qInSection === 0) setShowSectionIntro(true);
  }, [q.sectionIndex]);

  if (showSectionIntro && q.qInSection === 0) {
    return <SectionIntro section={section} sectionIndex={q.sectionIndex} totalSections={totalSections} onContinue={()=>setShowSectionIntro(false)}/>;
  }

  const answer = (i) => {
    const ans = {...state.answers, [q.id]: i};
    if (step + 1 >= total) {
      setState({ ...state, answers: ans, step: step+1 });
      onFinish(ans);
    } else {
      setState({ ...state, answers: ans, step: step+1 });
    }
  };
  const back = () => {
    if (step === 0) return;
    const prevQ = ALL_QUESTIONS[step-1];
    if (prevQ.qInSection === section.questions.length - 1 && prevQ.sectionIndex !== q.sectionIndex) {
      // If going back into a different section, re-show its intro? No — just step back
    }
    setState({...state, step: step-1});
  };

  return (
    <section id="quiz" className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container" style={{maxWidth:820}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:10}}>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>
            Section {q.sectionIndex+1} · {section.title}
          </div>
          <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>
            Question {step+1} / {total} · {pct}%
          </div>
        </div>
        <div style={{height:4, background:"var(--sand-2)", borderRadius:2, overflow:"hidden", marginBottom:44}}>
          <div style={{height:"100%", width:`${((step+1)/total)*100}%`, background:"var(--orange)", transition:"width .3s"}}/>
        </div>

        <div className="display" style={{fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1, marginBottom:36}}>{q.q}</div>

        <div style={{display:"flex", flexDirection:"column", gap:12}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answer(i)} style={{
              padding:"22px 26px", textAlign:"left", background:"var(--cream)",
              border:"1.5px solid var(--line)", borderRadius:8, cursor:"pointer",
              fontSize:16, color:"var(--charcoal)", fontFamily:"var(--body)", fontWeight:500,
              display:"flex", alignItems:"center", gap:20, transition:"all .18s"
            }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--orange)"; e.currentTarget.style.transform="translateX(4px)";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--line)"; e.currentTarget.style.transform="translateX(0)";}}
            >
              <div style={{width:36, height:36, border:"1.5px solid var(--charcoal)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--display)", fontSize:14, flexShrink:0}}>
                {String.fromCharCode(65+i)}
              </div>
              <div style={{flex:1}}>{o.label}</div>
              <div style={{color:"var(--muted)", fontSize:20}}>→</div>
            </button>
          ))}
        </div>

        {step > 0 && (
          <button onClick={back} style={{marginTop:32, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"var(--muted)", fontWeight:600}}>← Previous question</button>
        )}
      </div>
    </section>
  );
}

function Results({ answers, onRetake }) {
  // Score by section
  const sectionsScored = QUIZ_DATA.sections.map((s, si) => {
    const qs = s.questions;
    const score = qs.reduce((sum, q) => sum + (q.opts[answers[q.id]]?.score ?? 0), 0);
    const max = qs.reduce((sum, q) => sum + Math.max(...q.opts.map(o=>o.score)), 0);
    return { title: s.title, score, max, pct: Math.round((score/max)*100) };
  });
  const total = sectionsScored.reduce((s,x)=>s+x.score, 0);
  const max = sectionsScored.reduce((s,x)=>s+x.max, 0);
  const pct = Math.round((total/max)*100);

  let band, bandColor, bandVerdict;
  if (pct >= 80)      { band = "Strong programme";       bandColor="#0B7A5A"; bandVerdict="Your programme already operates along lines similar to ours. We'd love to compare notes — and probably learn from you on a couple of dimensions."; }
  else if (pct >= 60) { band = "Solid · with room to grow"; bandColor="#FF7700"; bandVerdict="A real impact programme is within reach. Three to four specific changes would move you to the top tier — see the breakdown below."; }
  else if (pct >= 40) { band = "Promising · with gaps";   bandColor="#FF7700"; bandVerdict="There are several specific changes that would move your programme to the top tier. See the per-section breakdown for what to address first."; }
  else if (pct >= 25) { band = "Several red flags";       bandColor="#C75D32"; bandVerdict="Some of your current setup may be doing more harm than good. This is fixable — and common — but it's not where you want to stay."; }
  else                { band = "Classic voluntourism";    bandColor="#8B1A1A"; bandVerdict="Your programme pattern-matches the model the sector has been moving away from. Fixable. Start with the lowest-scoring section below."; }

  // Find weakest section for "what to do next"
  const sortedWeak = [...sectionsScored].sort((a,b)=>a.pct-b.pct);
  const weakest = sortedWeak[0];

  const [emailStatus, setEmailStatus] = React.useState("idle"); // idle | sending | sent | error

  // Save scorecard to sessionStorage, open report in new tab, AND POST to SendGrid via Netlify function
  const sendReport = async (e) => {
    e.preventDefault();
    const form = e.target.closest('form') || e.target.parentElement;
    const name = form.querySelector('input[name="name"]')?.value || "";
    const email = form.querySelector('input[name="email"]')?.value || "";
    const school = form.querySelector('input[name="school"]')?.value || "";
    if (!email) { alert("Please enter your school email."); return; }
    const payload = {
      pct, total, max, band, bandColor, bandVerdict,
      name, email, school,
      date: new Date().toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'}),
      sections: sectionsScored,
    };
    try { sessionStorage.setItem('kapes.scorecard', JSON.stringify(payload)); } catch(err) {}
    // Open the report immediately — don't make the user wait for the email
    window.open('Scorecard Report.html', '_blank', 'noopener');

    // Fire-and-forget SendGrid call. Will only succeed in production (Netlify) where the function is deployed.
    setEmailStatus("sending");
    try {
      const res = await fetch('/.netlify/functions/scorecard-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, school,
          pct, band, bandColor, total, max,
          sections: sectionsScored,
          answers,  // raw question-id → option-index map for analysis
          reportUrl: window.location.origin + '/Scorecard Report.html',
        }),
      });
      if (res.ok) setEmailStatus("sent");
      else setEmailStatus("error");
    } catch (err) {
      setEmailStatus("error");
    }
  };

  return (
    <div>
      <section style={{padding:"72px 0 48px", background:"var(--charcoal)", color:"#fff"}}>
        <div className="container">
          <div className="eyebrow" style={{color:"var(--orange)"}}>Your Impact Scorecard</div>
          <h1 className="display" style={{color:"#fff", marginTop:18, fontSize:"clamp(48px,5vw,76px)"}}>
            You scored <span className="accent tnum">{pct}</span> <span style={{opacity:.5}}>/ 100</span>
          </h1>
          <div style={{marginTop:20, display:"inline-flex", alignItems:"center", gap:10, padding:"10px 18px", background:bandColor, borderRadius:999, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>
            ● {band}
          </div>
          <p style={{color:"rgba(255,255,255,.85)", maxWidth:680, marginTop:22, fontSize:17, lineHeight:1.55}}>{bandVerdict}</p>

          <div style={{marginTop:40, display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, maxWidth:680}}>
            <Meta label="Total" v={`${pct}/100`}/>
            <Meta label="Band" v={band}/>
            <Meta label="Weakest section" v={weakest.title.split(" ")[0]+(weakest.title.split(" ")[1]?" "+weakest.title.split(" ")[1]:"")}/>
          </div>
        </div>
      </section>

      <section style={{padding:"64px 0", background:"var(--sand)"}}>
        <div className="container">
          <div className="eyebrow">Per-section breakdown</div>
          <h2 className="display" style={{marginTop:14, marginBottom:28, maxWidth:800, fontSize:"clamp(32px,3.2vw,44px)"}}>Five dimensions. <span className="accent">Where you scored on each.</span></h2>
          <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, overflow:"hidden"}}>
            {sectionsScored.map((s,i)=>{
              const col = s.pct>=75 ? "#0B7A5A" : s.pct>=50 ? "#FF7700" : s.pct>=30 ? "#C75D32" : "#8B1A1A";
              return (
                <div key={s.title} style={{display:"grid", gridTemplateColumns:"38px 1.4fr 1fr 100px", gap:24, padding:"22px 26px", borderBottom: i<sectionsScored.length-1?"1px solid var(--line)":"none", alignItems:"center"}}>
                  <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--charcoal)", opacity:.3}}>{String(i+1).padStart(2,"0")}</div>
                  <div style={{fontSize:15, fontWeight:600, color:"var(--charcoal)"}}>{s.title}</div>
                  <div style={{height:10, background:"var(--sand-2)", borderRadius:5, overflow:"hidden"}}>
                    <div style={{width:`${s.pct}%`, height:"100%", background:col, transition:"width .6s"}}/>
                  </div>
                  <div className="tnum" style={{textAlign:"right", fontWeight:700}}>{s.score} / {s.max} <span style={{color:"var(--muted)", fontSize:12, marginLeft:6}}>{s.pct}%</span></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{padding:"72px 0", background:"var(--cream)"}}>
        <div className="container">
          <div className="eyebrow">Where to focus first</div>
          <h2 className="display" style={{marginTop:14, marginBottom:32, maxWidth:900, fontSize:"clamp(32px,3.2vw,48px)"}}>
            Start with <span className="accent">{weakest.title}.</span>
          </h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:18}}>
            {[
              {t:"Ask who actually leads the trip on the ground", b:"If the answer is 'our staff' — flown in from your country — you're paying for tourism with a service-learning sticker. Local trip leaders are the difference between a visit and a partnership.", tag:"Low effort · high trust"},
              {t:"Move student roles from 'build' to 'join'",     b:"Ask your operator what happens on site when no school group is visiting. If the answer is 'nothing,' your students aren't joining — they're the trigger.", tag:"Medium effort · high impact"},
              {t:"Eliminate direct one-on-one contact with vulnerable children", b:"The safeguarding bar has moved. A visit to a school is fine. A classroom takeover by visiting teenagers is not.", tag:"Critical · do this year"},
            ].map((r,i)=>(
              <div key={i} style={{padding:28, background:"var(--sand)", border:"1px solid var(--line)", borderRadius:10}}>
                <div style={{fontFamily:"var(--display)", fontSize:40, color:"var(--charcoal)", opacity:.25, marginBottom:12}}>0{i+1}</div>
                <div className="display" style={{fontSize:22, marginBottom:10}}>{r.t}</div>
                <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", marginBottom:16}}>{r.b}</div>
                <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>{r.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band-specific programme match */}
      <section style={{padding:"72px 0", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
        <div className="container">
          <div style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:48, alignItems:"center", padding:36, background:"var(--cream)", border:"2px solid var(--orange)", borderRadius:12, boxShadow:"0 20px 40px -20px rgba(255,119,0,.25)"}}>
            <div>
              <div style={{display:"inline-flex", alignItems:"center", gap:8, fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"#fff", background:"var(--orange)", padding:"6px 12px", borderRadius:3, fontWeight:700, marginBottom:14}}>★ Your match</div>
              <h3 className="display" style={{fontSize:"clamp(28px,3vw,42px)", lineHeight:1.1, marginBottom:14}}>
                Start with <span className="accent">Seeds2Education.</span>
              </h3>
              <p style={{fontSize:15, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>
                {pct >= 75
                  ? "Your programme already operates along similar lines to ours — Seeds2Education is the closest fit for what you're trying to do, and the easiest place to compare notes."
                  : pct >= 50
                  ? "Seeds2Education is the programme schools at your stage typically grow into. Year-round work, permanent farm crew, the strongest curriculum link of our three programmes."
                  : "Seeds2Education is where most schools start with us. It's our flagship — year-round in Kenya, with a permanent farm crew. The easiest first-year fit for the gaps your scorecard surfaced."}
              </p>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:14}}>
              <div style={{padding:"22px 26px", background:"var(--sand)", borderLeft:"3px solid var(--orange)", borderRadius:6}}>
                <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:8}}>Programme · 7 nights</div>
                <div className="display" style={{fontSize:28, lineHeight:1.1, marginBottom:6}}>Seeds2Education</div>
                <div style={{fontSize:13, color:"var(--ink-2)", lineHeight:1.5}}>USD 3,000 / student · excl. flights · up to 30 students</div>
              </div>
              <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
                <button className="btn-pill btn-action" style={{padding:"14px 22px"}} onClick={()=>khifiNavigate("program")}>See the programme overview →</button>
                <button className="btn-pill btn-ghost" style={{padding:"14px 22px"}} onClick={bookCall}>Book an intro call</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:"64px 0", background:"var(--charcoal)", color:"#fff"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:40, alignItems:"center"}}>
          <div>
            <div className="eyebrow" style={{color:"var(--orange)"}}>Get the SLT-ready report</div>
            <h2 className="display" style={{color:"#fff", marginTop:14}}>
              Open your personalised report.
            </h2>
            <p style={{color:"rgba(255,255,255,.75)", marginTop:14, fontSize:15, lineHeight:1.55, maxWidth:480}}>
              4-page PDF you can bring to your SLT. Cover with your score and band, per-dimension breakdown, three prioritised actions for next year, and a side-by-side of voluntourism vs an impact-led programme. Print to PDF straight from the report.
            </p>
          </div>
          <form onSubmit={sendReport} style={{background:"#141414", border:"1px solid #333", borderRadius:10, padding:22, display:"flex", flexDirection:"column", gap:12}}>
            <input name="name"   placeholder="Your name"  style={inputStyle}/>
            <input name="email"  type="email" required placeholder="School email" style={inputStyle}/>
            <input name="school" placeholder="School / organisation" style={inputStyle}/>
            <button type="submit" disabled={emailStatus==="sending"} className="btn-pill btn-action" style={{padding:"14px 24px", marginTop:6, cursor:"pointer", border:"none", opacity: emailStatus==="sending"?0.7:1}}>
              {emailStatus==="sending" ? "Sending…" : emailStatus==="sent" ? "✓ Sent · Open report again" : "Email me my report →"}
            </button>
            <div style={{fontSize:11, color: emailStatus==="error" ? "#FFB07A" : "rgba(255,255,255,.45)", marginTop:4}}>
              {emailStatus==="sent"
                ? `Report opened in a new tab. A copy is on its way to your inbox.`
                : emailStatus==="error"
                ? `Email send failed (function only runs in production). Report still opened in a new tab.`
                : `Opens in a new tab + sends a copy to your inbox via SendGrid. We never share school data.`}
            </div>
          </form>
        </div>
      </section>

      <section style={{padding:"40px 0", background:"var(--cream)", textAlign:"center", borderTop:"1px solid var(--line)"}}>
        <button onClick={onRetake} className="btn-pill btn-ghost" style={{padding:"12px 22px"}}>↻ Retake the assessment</button>
      </section>
    </div>
  );
}
function Meta({label, v}){
  return <div style={{padding:"16px 18px", background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.15)", borderRadius:8}}>
    <div style={{fontSize:10, letterSpacing:".14em", color:"rgba(255,255,255,.6)", textTransform:"uppercase", fontWeight:700}}>{label}</div>
    <div className="display tnum" style={{color:"#fff", fontSize:22, marginTop:8, lineHeight:1.15}}>{v}</div>
  </div>;
}
const inputStyle = {
  background:"#0C0C0C", border:"1px solid #333", borderRadius:8, padding:"14px 16px",
  color:"#fff", fontSize:14, fontFamily:"var(--body)", outline:"none",
};

function Proof() {
  return (
    <section id="proof" style={{padding:"80px 0", background:"var(--sand)"}}>
      <div className="container">
        <div className="eyebrow">What the scorecard tests for</div>
        <h3 className="display" style={{marginTop:14, marginBottom:24, maxWidth:820, fontSize:"clamp(28px,2.8vw,40px)"}}>
          Five dimensions. <span className="accent">Twenty questions.</span> One framework.
        </h3>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:18}}>
          {QUIZ_DATA.sections.map((s, i)=>(
            <div key={s.title} style={{padding:24, background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)"}}>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:8}}>Section {String(i+1).padStart(2,"0")} · {s.questions.length} qs</div>
              <div className="display" style={{fontSize:20, marginBottom:8, lineHeight:1.15}}>{s.title}</div>
              <div style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)"}}>{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniNav() {
  return (
    <nav className="site-nav" style={{padding:"16px 48px"}}>
      <div style={{display:"flex", alignItems:"center", gap:12, cursor:"pointer"}} onClick={()=>khifiNavigate("home")}>
        <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:32, width:"auto", display:"block"}}/>
        <span style={{fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, paddingLeft:12, borderLeft:"1px solid var(--line)"}}>Adventures</span>
      </div>
      <div style={{marginLeft:"auto", display:"flex", gap:10, alignItems:"center"}}>
        <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, marginRight:10}}>Impact Scorecard</div>
        <a href="#quiz" className="btn-pill btn-action" style={{padding:"9px 18px", fontSize:12, textDecoration:"none"}}>Start →</a>
      </div>
    </nav>
  );
}

function LPPage() {
  const isMobile = window.useIsMobile ? window.useIsMobile() : false;
  const [state, setState] = useStateLP({ step:-1, answers:{}, done:false });
  if (isMobile && window.MobileLPPage) return <window.MobileLPPage/>;
  const start    = () => setState({...state, step:0});
  const finish   = (ans) => setState({...state, step:ALL_QUESTIONS.length, answers:ans, done:true});
  const retake   = () => setState({ step:-1, answers:{}, done:false });

  return (
    <div>
      <MiniNav/>
      {!state.done && state.step === -1 && (<>
        <LPHero onStart={start}/>
        <Proof/>
        <Footer/>
      </>)}
      {!state.done && state.step >= 0 && state.step < ALL_QUESTIONS.length && (
        <Quiz state={state} setState={setState} onFinish={finish}/>
      )}
      {state.done && (<>
        <Results answers={state.answers} onRetake={retake}/>
        <Footer/>
      </>)}
    </div>
  );
}
window.LPPage = LPPage;
