/* ABOUT — founder, story, Kenyan partners */

function AboutHero(){
  return (
    <section style={{background:"var(--cream)", padding:"96px 0 88px", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:64, alignItems:"end"}}>
        <div>
          <div className="eyebrow">Who we are</div>
          <h1 className="display" style={{marginTop:20}}>
            A school-trip company<br/>
            born from a <span className="accent">uniform factory</span><br/>
            inside a Kenyan conservancy.
          </h1>
          <p className="lead" style={{marginTop:24, maxWidth:560, color:"var(--ink-2)"}}>
            Kapes Adventures grew directly out of Kapes Uniforms — the same founder, the same Kenyan relationships, the same idea that runs through both businesses: <b>identify the barrier keeping a child out of school, then remove it.</b> A uniform. A meal. Clean water. The barrier changes; the mission doesn't.
          </p>
        </div>
        <div style={{position:"relative", aspectRatio:"4/5", maxHeight:480}}>
          <img className="kapes" src={IMG.mattVista} alt="Matthew Benjamin, founder of Kapes, on site at a Kenyan partner school — fresh-tilled earth in the foreground" style={{borderRadius:6, objectPosition:"center 30%"}}/>
          <div style={{position:"absolute", bottom:-16, left:-16, background:"var(--charcoal)", color:"#fff", padding:"14px 18px", maxWidth:300, fontSize:12, lineHeight:1.5}}>
            <div style={{color:"var(--orange)", fontSize:10, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, marginBottom:6}}>Matthew Benjamin · founder · Kenya</div>
            The trip that started Kapes Adventures began as a uniform factory tour. By the end of the night, it was something else.
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryImageStrip(){
  const shots = [
    {src:IMG.uniformsTogoPortrait, cap:"2020 · Kapes Uniforms · free uniforms in Kenya and Togo",       pos:"center 30%"},
    {src:IMG.farmKenyanLed,        cap:"2025 · Seeds2Education · Kenyan partner leading the planting",  pos:"center 40%"},
    {src:IMG.npGiraffeSkyline,     cap:"Nairobi NP · Kenya's wildlife meets the Nairobi skyline",pos:"center 50%"},
  ];
  return (
    <section style={{padding:"0", background:"var(--cream)"}}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0}}>
        {shots.map((s,i)=>(
          <div key={i} style={{position:"relative", aspectRatio:"4/3", overflow:"hidden", borderRight: i<2?"1px solid var(--cream)":"none"}}>
            <img src={s.src} alt={s.cap} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:s.pos, display:"block"}}/>
            <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.65) 100%)"}}/>
            <div style={{position:"absolute", bottom:16, left:18, right:18, color:"#fff", fontSize:11, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700}}>{s.cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FounderStory(){
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:64, alignItems:"start"}}>
        <div style={{position:"sticky", top:96}}>
          <div className="eyebrow">Founder's story</div>
          <h2 className="display" style={{marginTop:12, fontSize:"clamp(32px,3.4vw,52px)"}}>
            The trip that <span className="accent">started the company.</span>
          </h2>
          <div style={{marginTop:32, background:"var(--cream)", borderTop:"3px solid var(--orange)", overflow:"hidden"}}>
            <div style={{aspectRatio:"4/5", overflow:"hidden", background:"var(--charcoal)"}}>
              <img src={IMG.mattPortrait} alt="Matthew Benjamin, founder of Kapes" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%", display:"block"}}/>
            </div>
            <div style={{padding:24}}>
              <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:8}}>Founder</div>
              <div className="display" style={{fontSize:24, marginBottom:4}}>Matthew Benjamin</div>
              <div style={{fontSize:13, color:"var(--ink-2)"}}>Founder &amp; CEO · also founded Kapes Uniforms (2020)</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:22, fontSize:16, lineHeight:1.7, color:"var(--ink-2)"}}>
          <p>I started Kapes Uniforms in 2020, after reading a study showing that giving a child in Kenya a free uniform measurably reduced their absenteeism. The model was per-student: for every student a partner school dresses, we donate a free uniform to a child in need. A school with 1,000 students triggers 1,000 free uniforms going to children who couldn't otherwise afford to attend school. Sustainable manufacturing in Kenya, donations into Kenya and Togo, sales into international schools that wanted both quality and structural impact.</p>
          <p>I'd never been to Kenya. A friend from my MBA put me in touch with <strong>Food for Education</strong>, a Kenyan organisation that subsidises school meals for children who can't afford them. They introduced me to <strong>Karigu Primary School</strong>, the first school we worked with.</p>
          <p>To make the uniforms, I went looking for a Kenyan manufacturer. I found one inside a wildlife conservancy between Nairobi and Mombasa — the world's first carbon-neutral garment factory, surrounded by basket weavers and a soap workshop. After the factory tour they offered me a game drive. Within minutes we'd seen giraffes; minutes later, elephants. We spent the night at the camp.</p>
          <figure style={{margin:"18px 0 6px"}}>
            <div style={{aspectRatio:"3/2", overflow:"hidden", borderRadius:4}}>
              <img src={IMG.wildlifeWorksFactory} alt="The Wildlife Works carbon-neutral garment factory floor — Kenyan tailors at sewing machines, bunting overhead" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
            </div>
            <figcaption style={{marginTop:10, fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600}}>The Wildlife Works factory · Voi · Tsavo region, Kenya · where Kapes Uniforms are made — and where the idea for Kapes Adventures was sparked.</figcaption>
          </figure>
          <p style={{padding:"18px 22px", background:"var(--cream)", borderLeft:"3px solid var(--orange)", fontStyle:"italic", color:"var(--charcoal)"}}>That night made it obvious. This was where international students should come — to learn about sustainability and conservation, and to see, in person, where their uniforms come from. A school in Dubai could close the loop with a school in Kenya.</p>
          <p>Then came the second realisation. Many of the children I met couldn't afford a uniform; many of the same children couldn't afford to eat. That's where <strong>Seeds2Education</strong> began — turning unused school land into productive farmland that feeds the students on it.</p>
          <p>Kapes Adventures took its first trip in 2022, with Arbor School. In 2025 we began designing and delivering programmes directly, partnering closely with Kenyan-led organisations on the ground. Every trip is built and led by the people who live in the communities we visit.</p>
        </div>
      </div>
    </section>
  );
}

function Timeline(){
  const events = [
    { y:"2020", t:"Kapes Uniforms founded", d:"After reading research showing that free uniforms reduce absenteeism in Kenyan primary schools, Matthew founds Kapes Uniforms — manufacturing in Kenya, donating uniforms to children in need."},
    { y:"2022", t:"First Kapes Adventures trip", d:"First school trip runs with Arbor School — a Community Conservation programme based at the Kenyan conservancy where Kapes uniforms are made. Delivered through Mountain Quests (UAE-based trip operator)."},
    { y:"2022–24", t:"7 trips through Mountain Quests", d:"In total, seven school trips run through the partnership — building the programme model, on-the-ground relationships, and safeguarding posture before going direct."},
    { y:"2025", t:"Direct delivery begins", d:"Kapes Adventures begins designing and delivering trips end-to-end with Kenyan trip leaders, contracted directly. Three programmes live: Seeds2Education, Water Empowering Women, Community Conservation."},
    { y:"25/26", t:"Seeds2Education pilot", d:"1.5 acres of unused school land transformed into farmland. 2 water tanks installed (1 at Hope School · 1 at S2E). 1 classroom rebuilt. 40+ Kenyans employed across the programmes."},
    { y:"Next", t:"Where you come in", d:"There aren't many trips like this on offer. We're working with international schools whose students step inside year-round work in Kenya — joining a permanent farm crew, helping install water that a community will use long after, seeing where their own uniforms are made. The kind of week that's hard to teach any other way."},
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)"}}>
      <div className="container">
        <div className="eyebrow">How we got here</div>
        <h2 className="display" style={{marginTop:14, marginBottom:48, maxWidth:900}}>
          Six years. One <span className="accent">through-line.</span>
        </h2>
        <div style={{display:"grid", gridTemplateColumns:`repeat(${events.length},1fr)`, gap:0, borderTop:"2px solid var(--charcoal)"}}>
          {events.map((e,i)=>(
            <div key={e.y} style={{
              paddingTop:28,
              paddingBottom:32,
              paddingLeft: i===0 ? 0 : 24,
              paddingRight: i===events.length-1 ? 0 : 24,
              borderRight: i===events.length-1 ? "none" : "1px solid var(--line)",
              display:"flex", flexDirection:"column", position:"relative",
            }}>
              <div style={{width:10, height:10, borderRadius:50, background: i===events.length-1?"var(--orange)":"var(--charcoal)", marginTop:-35, marginBottom:22}}/>
              <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--charcoal)", lineHeight:1, marginBottom:14}}>{e.y}</div>
              <div style={{fontSize:15, fontWeight:700, color:"var(--charcoal)", lineHeight:1.25, marginBottom:14}}>{e.t}</div>
              <div style={{fontSize:12.5, lineHeight:1.6, color:"var(--ink-2)"}}>{e.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection(){
  const people = [
    {
      name:"Matthew Benjamin",
      role:"Founder & CEO",
      loc:"Dubai, UAE",
      img: IMG.mattPortrait,
      imgPos:"center 25%",
      bio:"Founder of both Kapes Uniforms (2020) and Kapes Adventures. Designs trip programmes, builds school relationships, and works with our Kenyan partners to bring each trip to life."
    },
    {
      name:"Elijah \"Elly\" Oenga",
      role:"Kenyan Programme Partner · Seeds2Education",
      loc:"Rongai, Nairobi",
      img: IMG.ellyPortrait,
      imgPos:"center 25%",
      bio:"Kenyan entrepreneur who left a career in the UK to transform arid land in Rongai into a thriving farm and eco-lodge. Hosts and co-runs the Seeds2Education programme. Philosophy: \"I am because we are.\""
    },
    {
      name:"Monica Makori",
      role:"Kenyan Programme Partner · Water Empowering Women",
      loc:"Mwachabo, Taita-Taveta County",
      img: IMG.monicaPortrait,
      imgPos:"center 25%",
      bio:"Kenyan entrepreneur and coordinator of the Neema Women's Group Mwachabo. Since 2010 she has championed reforestation and water conservation in semi-arid areas, and works on human-wildlife coexistence through projects like turning elephant dung into paper. Hosts visiting cohorts for cultural exchanges — basket weaving, paper beading, jewellery, traditional dance — and runs the partner-side of every Water Empowering Women build. \"Parents are seeing a school with potential.\""
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--sand)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:40, gap:40, flexWrap:"wrap"}}>
          <div>
            <div className="eyebrow">The people behind the trips</div>
            <h2 className="display" style={{marginTop:12, maxWidth:820}}>Built in Dubai. <span className="accent">Run in Kenya.</span></h2>
          </div>
          <div style={{fontSize:13, color:"var(--muted)", maxWidth:320, textAlign:"right"}}>
            On-trip delivery is led by Kenyan trip leaders (1:10 ratio, minimum two per trip), a farm manager, a community lead, and 40+ local employees across our programmes.
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:24}}>
          {people.map(p=>(
            <div key={p.name} style={{background:"var(--cream)", border:"1px solid var(--line)", padding:32, display:"flex", flexDirection:"column", gap:14, borderTop:"3px solid var(--orange)"}}>
              {p.img ? (
                <div style={{width:84, height:84, borderRadius:50, overflow:"hidden", background:"var(--charcoal)"}}>
                  <img src={p.img} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition: p.imgPos || "center"}}/>
                </div>
              ) : (
                <div style={{width:84, height:84, borderRadius:50, background:"var(--charcoal)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--display)", fontSize:26, fontWeight:700}}>
                  {p.name.split(" ").map(x=>x[0]).slice(0,2).join("")}
                </div>
              )}
              <h3 className="display" style={{fontSize:24, lineHeight:1.15, marginTop:4}}>{p.name}</h3>
              <div style={{fontSize:12, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{p.role}</div>
              <div style={{fontSize:11, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>Based · {p.loc}</div>
              <p style={{fontSize:14, lineHeight:1.65, color:"var(--ink-2)", margin:0, marginTop:6}}>{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork(){
  return (
    <section className="section" style={{padding:"88px 0", background:"var(--charcoal)", color:"#fff"}}>
      <div className="container">
        <div className="eyebrow" style={{color:"var(--orange)"}}>How we work</div>
        <h2 className="display" style={{marginTop:12, color:"#fff", maxWidth:900}}>Designed in Dubai. <span className="accent">Delivered by Kenyans.</span></h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:28, marginTop:44}}>
          {[
            {h:"Designed by us", s:"Trip concept, itinerary, school partnership, learning outcomes, safeguarding posture and logistics are designed and managed by Kapes Adventures."},
            {h:"Delivered in Kenya", s:"Every trip is led on the ground by Kenyan trip leaders we contract directly. 1:10 leader-to-student ratio, minimum two leaders per trip — regardless of group size."},
            {h:"Built on real partnerships", s:"We work with Kenyan-led organisations like Food for Education on the work that runs all year. The school trip joins that work — it doesn't create it."},
          ].map(b=>(
            <div key={b.h} style={{background:"#161616", padding:28, borderTop:"3px solid var(--orange)"}}>
              <h3 className="display" style={{color:"#fff", fontSize:22, marginBottom:12}}>{b.h}</h3>
              <p style={{fontSize:14, color:"rgba(255,255,255,.75)", lineHeight:1.65, margin:0}}>{b.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners(){
  const partners = [
    {
      logo: IMG.f4eLogo,
      name:"Food for Education",
      tag:"Kenyan NGO · School-meals partner",
      note:"Kenyan NGO subsidising school meals at scale. The harvest from Seeds2Education is exchanged through their kitchen at $0.85/kg — equal to three school meals. The exchange is the engine of the programme.",
      url:"https://food4education.org/",
    },
    {
      logo: IMG.wildlifeWorksFactory,
      name:"Wildlife Works",
      tag:"Kenyan conservancy · CC site + Kapes Uniforms factory",
      note:"World's first carbon-neutral garment factory, sitting inside a working wildlife conservation operation. Manufactures Kapes Uniforms; hosts Community Conservation cohorts. The intersection at the heart of the company.",
      url:"https://wildlifeworks.com/",
      isPhoto:true,
    },
    {
      logo: IMG.edsideraLogo,
      name:"Edsidera",
      tag:"Digital partner · life-skills awards · launching 25/26",
      note:"UAE-based life-skills awards platform recognised by FOBISIA, BSME and COBIS. Students log evidence from their trip work directly through the Edsidera app and earn formally credentialled awards on top of the trip itself.",
      url:"https://edsidera.com/",
    },
  ];
  return (
    <section className="section" style={{padding:"96px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{display:"flex", alignItems:"end", justifyContent:"space-between", marginBottom:36, gap:40, flexWrap:"wrap"}}>
          <div>
            <div className="eyebrow">Partners</div>
            <h2 className="display" style={{marginTop:14, maxWidth:820, fontSize:"clamp(34px,3.4vw,52px)"}}>The organisations behind <span className="accent">the work.</span></h2>
          </div>
          <div style={{fontSize:13, color:"var(--muted)", maxWidth:320, textAlign:"right"}}>
            Three partners do the year-round work that the trips join. None are subcontractors of Kapes Adventures — they have their own missions; we route into them.
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:18}}>
          {partners.map(p=>(
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{background:"var(--sand)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", padding:28, display:"flex", flexDirection:"column", gap:14, textDecoration:"none", color:"inherit", transition:"transform .18s, box-shadow .18s"}}
               onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 14px 28px -16px rgba(0,0,0,.18)";}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none";}}
            >
              <div style={{height:80, display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
                {p.isPhoto ? (
                  <div style={{width:80, height:80, borderRadius:50, overflow:"hidden", background:"var(--charcoal)"}}>
                    <img src={p.logo} alt={p.name} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%", display:"block"}}/>
                  </div>
                ) : (
                  <img src={p.logo} alt={p.name} style={{maxHeight:60, maxWidth:200, width:"auto", height:"auto", objectFit:"contain", display:"block"}}/>
                )}
              </div>
              <div className="display" style={{fontSize:24, lineHeight:1.15, marginTop:4}}>{p.name}</div>
              <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{p.tag}</div>
              <p style={{fontSize:14, lineHeight:1.6, color:"var(--ink-2)", margin:0, flex:1}}>{p.note}</p>
              <div style={{fontSize:11, letterSpacing:".12em", textTransform:"uppercase", color:"var(--charcoal)", fontWeight:700, marginTop:6}}>Visit {p.name} ↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage(){
  return (
    <div>
      <SiteNav sticky/>
      <AboutHero/>
      <FounderStory/>
      <StoryImageStrip/>
      <Timeline/>
      <TeamSection/>
      <Partners/>
      <HowWeWork/>
      <section style={{padding:"72px 0", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"auto 1fr", gap:32, alignItems:"center", maxWidth:920}}>
          <div style={{width:72, height:72, borderRadius:50, overflow:"hidden", background:"var(--charcoal)", flexShrink:0}}>
            <img src={IMG.mattPortrait} alt="Matthew Benjamin" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 25%", display:"block"}}/>
          </div>
          <div>
            <p style={{fontFamily:"var(--serif)", fontSize:22, lineHeight:1.5, color:"var(--charcoal)", margin:0, fontStyle:"italic"}}>
              "If your school is thinking about this kind of trip — even just thinking — I'd rather have a 30-minute conversation than send a brochure. We'll work out together whether we're a fit."
            </p>
            <div style={{marginTop:14, fontSize:13, color:"var(--muted)", display:"flex", gap:14, alignItems:"center", flexWrap:"wrap"}}>
              <span><b style={{color:"var(--charcoal)"}}>Matthew Benjamin</b> · Founder &amp; CEO</span>
              <span style={{color:"var(--orange)", cursor:"pointer", fontWeight:700}} onClick={bookCall}>Book a call →</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
window.AboutPage = AboutPage;
