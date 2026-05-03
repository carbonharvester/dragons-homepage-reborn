/* HOMEPAGE — mobile-first redesign
   Renders when viewport < 768px.
   Different hero, different section order, mobile-specific cards, swipe carousels. */

function MobileHomeHero() {
  return (
    <section style={{position:"relative", minHeight:"calc(100vh - 64px)", color:"#fff", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
      <img src={IMG.hero} alt=""
        style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%"}}/>
      <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.92) 100%)"}}/>

      <div style={{position:"relative", padding:"0 22px 56px"}}>
        <div style={{
          display:"inline-flex", alignItems:"center", gap:10,
          padding:"7px 13px", borderRadius:50,
          background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.25)",
          backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)",
          fontSize:11, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700,
          color:"rgba(255,255,255,.95)", marginBottom:24,
        }}>
          <span style={{width:6, height:6, borderRadius:50, background:"var(--orange)"}}/>
          A different kind of impact programme
        </div>

        <h1 className="display" style={{
          color:"#fff",
          fontSize:"clamp(46px, 13vw, 64px)",
          lineHeight:.96, letterSpacing:"-.02em", margin:0,
        }}>
          Your cohort<br/>doesn't need <span className="accent">to save Africa.</span>
        </h1>

        <p style={{
          color:"rgba(255,255,255,.85)", fontSize:17, lineHeight:1.5,
          marginTop:22, maxWidth:340,
        }}>
          A week inside real work in Kenya. The work runs whether you visit or not.
        </p>

        <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:32}}>
          <button
            onClick={()=>khifiNavigate("programs")}
            style={{
              padding:"17px 22px", borderRadius:50, border:"none",
              background:"var(--orange)", color:"#fff",
              fontSize:15, fontWeight:700, letterSpacing:".02em",
              display:"flex", alignItems:"center", justifyContent:"space-between",
              cursor:"pointer",
            }}>
            <span>See the programmes</span><span>→</span>
          </button>
          <button
            onClick={()=>khifiNavigate("lp")}
            style={{
              padding:"17px 22px", borderRadius:50,
              background:"transparent", color:"#fff",
              border:"1.5px solid rgba(255,255,255,.45)",
              fontSize:15, fontWeight:600,
              display:"flex", alignItems:"center", justifyContent:"space-between",
              cursor:"pointer",
            }}>
            <span>Take the 5-min Scorecard</span><span>→</span>
          </button>
        </div>

        <div style={{
          marginTop:36, paddingTop:20, borderTop:"1px solid rgba(255,255,255,.18)",
          display:"flex", justifyContent:"space-between", gap:18,
          fontSize:11, letterSpacing:".08em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:600,
        }}>
          <div>Kenyan-led</div>
          <div>3 programmes</div>
          <div>1:10 ratio</div>
        </div>
      </div>
    </section>
  );
}

/* The essence — a one-line manifesto + portrait card */
function MobileEssence() {
  return (
    <section style={{padding:"64px 22px", background:"var(--cream)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>A manifesto · not a brochure</div>
      <h2 className="display" style={{fontSize:34, lineHeight:1.05, letterSpacing:"-.01em", margin:"0 0 20px"}}>
        Five commitments<br/>we'll <span className="accent">never quietly drop.</span>
      </h2>
      <p style={{fontSize:16, lineHeight:1.55, color:"var(--ink-2)", margin:0}}>
        Our flagship programme runs year-round in Kenya, with a permanent crew. Your students join their work for a week. The crew keeps going for the other 51.
      </p>

      <div style={{
        marginTop:32, position:"relative",
        borderRadius:6, overflow:"hidden", aspectRatio:"4/5",
      }}>
        <img src={IMG.wewCelebration} alt="Hope School + visiting cohort, finished water tank"
          style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 35%", display:"block"}}/>
        <div style={{
          position:"absolute", left:14, right:14, bottom:14,
          background:"var(--charcoal)", color:"#fff",
          padding:"14px 16px", borderRadius:4,
        }}>
          <div style={{color:"var(--orange)", fontSize:9.5, letterSpacing:".16em", textTransform:"uppercase", fontWeight:700, marginBottom:6}}>
            Hope School · Water Empowering Women
          </div>
          <div style={{fontSize:12.5, lineHeight:1.5}}>
            Tank installed, classroom rebuilt, mural painted. Enrolment rose 40% in the weeks after.
          </div>
        </div>
      </div>
    </section>
  );
}

/* Manifesto — five points as a vertical list */
function MobileManifestoList() {
  const points = [
    { n:"01", t:"Our flagship runs all year.",
      b:"Seeds2Education operates continuously in Kenya. A permanent crew works the land week in, week out. Trips visit. They never start the work, and they never end it." },
    { n:"02", t:"Students plant the seed — or join it mid-stream.",
      b:"Sometimes they help start a project. Sometimes they join one already running. In every case the work is chosen and led by Kenyan partners." },
    { n:"03", t:"No orphanages. No classrooms with strangers.",
      b:"A six-day visit from unfamiliar adults is not education — it's disruption. We never place students in direct contact with vulnerable children." },
    { n:"04", t:"The community is the client. You are the guest.",
      b:"Every programme is shaped by Kenyan partners against their own priorities. If a project isn't useful to the community, we don't run it." },
    { n:"05", t:"Designed in Dubai. Delivered by Kenyans.",
      b:"Every trip is led on the ground by Kenyan trip leaders we contract directly. 1:10 leader-to-student ratio, minimum two leaders per trip." },
  ];
  return (
    <section style={{padding:"56px 22px 40px", background:"var(--cream)"}}>
      <div style={{borderTop:"2px solid var(--charcoal)"}}>
        {points.map(p=>(
          <div key={p.n} style={{padding:"24px 0", borderBottom:"1px solid var(--line)"}}>
            <div style={{display:"flex", gap:14, alignItems:"baseline", marginBottom:10}}>
              <div style={{fontFamily:"var(--display)", fontSize:24, color:"var(--orange)", fontWeight:700, lineHeight:1}}>{p.n}</div>
              <h3 className="display" style={{fontSize:22, lineHeight:1.15, margin:0, letterSpacing:"-.005em"}}>{p.t}</h3>
            </div>
            <p style={{fontSize:14.5, lineHeight:1.6, color:"var(--ink-2)", margin:0, paddingLeft:38}}>{p.b}</p>
          </div>
        ))}
      </div>
      <button
        onClick={()=>khifiNavigate("approach")}
        style={{
          marginTop:28, width:"100%", padding:"15px 22px", borderRadius:50,
          background:"transparent", color:"var(--charcoal)",
          border:"1.5px solid var(--charcoal)",
          fontSize:14, fontWeight:700, cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"space-between",
        }}>
        <span>Read the full approach</span><span>→</span>
      </button>
    </section>
  );
}

/* Three programme cards — vertical stack with photo on top */
function MobileProgrammes() {
  const programmes = [
    {
      code:"S2E", color:"#22C55E",
      headline:"Turning unused school land into farms that feed students.",
      img: IMG.farmKenyanKid,
      cadence:"Year-round, 365 days",
      sub:"Seeds2Education · Kenya",
    },
    {
      code:"WEW", color:"#F43F5E",
      headline:"Bringing clean water to schools so girls can stay in class.",
      img: IMG.wewPaintingTank,
      cadence:"Multi-year build cycles",
      sub:"Water Empowering Women · Kenya",
    },
    {
      code:"CC", color:"#3B82F6",
      headline:"Linking conservation, livelihoods, and education on one site.",
      img: IMG.ccFactory,
      cadence:"Running since 2022",
      sub:"Community Conservation · Kenya",
    },
  ];
  return (
    <section style={{padding:"64px 22px", background:"var(--sand)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>What each programme delivers</div>
      <h2 className="display" style={{fontSize:32, lineHeight:1.05, margin:"0 0 18px", letterSpacing:"-.01em"}}>
        The trip is a chapter. <span className="accent">The work runs whether you visit or not.</span>
      </h2>
      <p style={{fontSize:15.5, lineHeight:1.55, color:"var(--ink-2)", margin:"0 0 32px"}}>
        Three different shapes of outcome — none of them depend on a school visit.
      </p>

      <div style={{display:"flex", flexDirection:"column", gap:14}}>
        {programmes.map(p=>(
          <div key={p.code}
            onClick={()=>khifiNavigate("programs")}
            style={{
              background:"#fff",
              border:"1px solid var(--line)", borderRadius:6,
              overflow:"hidden", cursor:"pointer",
              boxShadow:"0 1px 3px rgba(0,0,0,.04)",
            }}>
            <div style={{position:"relative", aspectRatio:"16/10"}}>
              <img src={p.img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{
                position:"absolute", top:12, left:12,
                background:p.color, color:"#fff", fontSize:10, fontWeight:700,
                letterSpacing:".14em", textTransform:"uppercase", padding:"5px 10px", borderRadius:3,
              }}>{p.code}</div>
            </div>
            <div style={{padding:"18px 18px 20px"}}>
              <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:8}}>
                {p.sub}
              </div>
              <h3 className="display" style={{fontSize:20, lineHeight:1.2, margin:"0 0 12px", letterSpacing:"-.005em"}}>
                {p.headline}
              </h3>
              <div style={{
                display:"flex", justifyContent:"space-between", alignItems:"center",
                paddingTop:12, borderTop:"1px solid var(--line)",
              }}>
                <span style={{fontSize:12, color:"var(--muted)", letterSpacing:".06em"}}>{p.cadence}</span>
                <span style={{fontSize:18, color:p.color}}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Voluntourism comparison — vertical stack with toggle */
function MobileVsVoluntourism() {
  const rows = [
    ["Who decides what gets done",  "The trip operator",          "The Kenyan community partner"],
    ["What happens between visits", "Often, very little",         "Year-round work continues"],
    ["The work output",             "Built for the visit",        "Built for the community"],
    ["Money to community",          "Marketing claim",            "Audited & published"],
  ];
  return (
    <section style={{padding:"64px 22px", background:"var(--cream)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>An honest comparison</div>
      <h2 className="display" style={{fontSize:32, lineHeight:1.05, margin:"0 0 28px", letterSpacing:"-.01em"}}>
        What makes us <span className="accent">different —</span><br/>in plain language.
      </h2>

      <div style={{border:"1px solid var(--line)", borderRadius:6, overflow:"hidden", background:"#fff"}}>
        {rows.map(([q,v,k], i)=>(
          <div key={i} style={{borderBottom: i===rows.length-1?"none":"1px solid var(--line)", padding:"18px 18px"}}>
            <div style={{fontSize:13, fontWeight:700, color:"var(--charcoal)", marginBottom:14, letterSpacing:".005em"}}>
              {q}
            </div>
            <div style={{display:"grid", gridTemplateColumns:"1fr", gap:12}}>
              <div style={{padding:"10px 12px", background:"var(--sand)", borderRadius:4, borderLeft:"3px solid #c5b9a6"}}>
                <div style={{fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:4}}>Typical voluntourism</div>
                <div style={{fontSize:14, color:"var(--ink-2)", lineHeight:1.4}}>{v}</div>
              </div>
              <div style={{padding:"10px 12px", background:"var(--sand)", borderRadius:4, borderLeft:"3px solid var(--orange)"}}>
                <div style={{fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:4}}>The Kapes way</div>
                <div style={{fontSize:14, color:"var(--charcoal)", lineHeight:1.4, fontWeight:500}}>{k}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Pull quote — student voice */
function MobilePullQuote() {
  return (
    <section style={{padding:"72px 22px", background:"var(--charcoal)", color:"#fff"}}>
      <div className="eyebrow" style={{color:"rgba(255,255,255,.55)", marginBottom:24}}>
        Student voice · BIS Jeddah
      </div>
      <div style={{
        fontFamily:"var(--display)", fontSize:36, lineHeight:1.05, letterSpacing:"-.01em", color:"#fff",
      }}>
        "I expected the cultures wouldn't fit.<br/><span className="accent">I was wrong.</span>"
      </div>
      <p style={{
        fontFamily:"var(--serif)", fontStyle:"italic",
        fontSize:15, lineHeight:1.7, color:"rgba(255,255,255,.78)",
        marginTop:24, marginBottom:24,
      }}>
        "I expected to find a country I wasn't really used to seeing — that the culture and traditions wouldn't fit with mine back home. I was wrong. They're more respectful than the people I have around me back home."
      </p>
      <div style={{fontSize:12, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", fontWeight:600}}>
        Year 11 student · Water Empowering Women · Nov 2025
      </div>
    </section>
  );
}

/* CTA — two clear paths */
function MobileCTA() {
  return (
    <section style={{padding:"64px 22px 80px", background:"var(--charcoal)", color:"#fff", borderTop:"1px solid #262626"}}>
      <div className="eyebrow" style={{color:"var(--orange)", marginBottom:14}}>Two ways to start</div>
      <h2 className="display" style={{fontSize:36, lineHeight:1.02, color:"#fff", margin:"0 0 16px", letterSpacing:"-.015em"}}>
        A conversation,<br/>not a brochure.
      </h2>
      <p style={{fontSize:15.5, lineHeight:1.55, color:"rgba(255,255,255,.75)", margin:"0 0 32px"}}>
        Take our 5-minute Impact Scorecard, or book a 30-minute call with our Head of Schools.
      </p>

      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        <button
          onClick={()=>khifiNavigate("lp")}
          style={{
            padding:"17px 22px", borderRadius:50, border:"none",
            background:"var(--orange)", color:"#fff",
            fontSize:15, fontWeight:700,
            display:"flex", alignItems:"center", justifyContent:"space-between",
            cursor:"pointer",
          }}>
          <span>Take the Impact Scorecard</span><span>→</span>
        </button>
        <button
          onClick={bookCall}
          style={{
            padding:"17px 22px", borderRadius:50,
            background:"transparent", color:"#fff",
            border:"1.5px solid rgba(255,255,255,.4)",
            fontSize:15, fontWeight:600,
            display:"flex", alignItems:"center", justifyContent:"space-between",
            cursor:"pointer",
          }}>
          <span>Book a 30-min call</span><span>→</span>
        </button>
      </div>
    </section>
  );
}

/* Trusted-by — horizontal scroll strip of school logos */
function MobileSocialProof() {
  const schools = [
    {name:"Fairgreen International School", logo:"photos/logos/fairgreen-logo.png"},
    {name:"BIS Jeddah",                     logo:"photos/logos/bisj-logo.png"},
    {name:"NLCS Dubai",                     logo:"photos/logos/nlcs-logo.png"},
    {name:"Arbor School",                   logo:"photos/logos/arbor-logo.png"},
    {name:"Cranleigh Abu Dhabi",            logo:"photos/logos/cac-logo.png"},
    {name:"American School of Dubai",       logo:"photos/logos/asd-logo.png"},
    {name:"ACS Hillingdon",                 logo:"photos/logos/acs-logo.png"},
  ];
  // Duplicate the array so the marquee loop seamlessly (translateX 0 → -50%).
  const marqueeSet = [...schools, ...schools];
  return (
    <section style={{padding:"40px 0", background:"var(--cream)", borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)", overflow:"hidden"}}>
      <style>{`
        @keyframes kapes-logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .kapes-logo-marquee { animation: kapes-logo-marquee 14s linear infinite; will-change: transform; }
        .kapes-logo-fade-l, .kapes-logo-fade-r { position:absolute; top:0; bottom:0; width:32px; pointer-events:none; z-index:2; }
        .kapes-logo-fade-l { left:0; background: linear-gradient(to right, var(--cream), transparent); }
        .kapes-logo-fade-r { right:0; background: linear-gradient(to left, var(--cream), transparent); }
      `}</style>
      <div style={{padding:"0 22px", marginBottom:18}}>
        <div className="eyebrow">Schools whose Kenya trips we've designed</div>
      </div>
      <div style={{position:"relative", overflow:"hidden"}}>
        <div className="kapes-logo-fade-l"/>
        <div className="kapes-logo-fade-r"/>
        <div className="kapes-logo-marquee" style={{display:"flex", gap:42, width:"max-content", alignItems:"center", padding:"4px 0"}}>
          {marqueeSet.map((s, i) => (
            <img key={i} src={s.logo} alt={s.name} aria-hidden={i >= schools.length}
              style={{height:50, width:"auto", objectFit:"contain", flexShrink:0}}/>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile: Watch the trip (full-bleed video) ───────────────── */
function MobileWatchVideo() {
  const v = (typeof window !== "undefined" && window.VIDEO) || {};
  if (!v.s2eFull) return null;
  return (
    <section style={{padding:"56px 0 0", background:"var(--charcoal)", color:"#fff"}}>
      <div style={{padding:"0 22px 24px"}}>
        <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>● Watch · 90 seconds</div>
        <h2 className="display" style={{fontSize:32, lineHeight:1.05, color:"#fff", margin:0}}>
          What a Kapes<br/>week looks like.
        </h2>
        <p style={{fontSize:14.5, lineHeight:1.6, color:"rgba(255,255,255,.78)", marginTop:14, marginBottom:0}}>
          Edited from the November pilot. Same staff, same partner schools, same week your students would join.
        </p>
      </div>
      <div style={{position:"relative", aspectRatio:"16/9", background:"#000", overflow:"hidden"}}>
        <video
          src={v.s2eFull}
          poster={v.s2eFullPoster}
          controls
          preload="metadata"
          playsInline
          style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
        />
      </div>
    </section>
  );
}

/* ─── Mobile: Principal video quote (Brett Girvin) ───────────── */
function MobilePrincipalQuote() {
  const v = (typeof window !== "undefined" && window.VIDEO) || {};
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  if (!v.brett) return null;
  const start = () => {
    setPlaying(true);
    requestAnimationFrame(()=> { if (videoRef.current) videoRef.current.play().catch(()=>{}); });
  };
  return (
    <section style={{padding:"56px 22px", background:"var(--sand)", borderTop:"1px solid var(--line)"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:16}}>
        <div className="eyebrow">From a head of school</div>
        <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>● Watch · 2 min</div>
      </div>
      <h2 className="display" style={{fontSize:28, lineHeight:1.1, marginBottom:18}}>
        The full circle,<br/>in his own words.
      </h2>

      <div style={{background:"var(--cream)", border:"1px solid var(--line)", borderTop:"3px solid var(--orange)", overflow:"hidden", marginTop:8}}>
        {/* Video block */}
        <div style={{position:"relative", aspectRatio:"16/9", background:"#000", cursor: playing ? "default" : "pointer"}} onClick={!playing ? start : undefined}>
          {playing ? (
            <video
              ref={videoRef}
              src={v.brett}
              poster={v.brettPoster}
              controls
              preload="metadata"
              playsInline
              style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
            />
          ) : (
            <>
              <img src={v.brettPoster} alt="Brett Girvin on a Kapes Adventures trip — Tsavo lookout" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
              <div style={{position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.5) 100%)"}}/>
              <button aria-label="Play Brett Girvin video" style={{position:"absolute", left:"50%", top:"50%", transform:"translate(-50%,-50%)", width:64, height:64, borderRadius:"50%", background:"var(--orange)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 10px 28px rgba(0,0,0,.4)"}}>
                <svg width="22" height="24" viewBox="0 0 28 32" fill="none" style={{marginLeft:3}}>
                  <path d="M2 2L26 16L2 30V2Z" fill="#fff"/>
                </svg>
              </button>
              <div style={{position:"absolute", top:12, left:12, display:"flex", gap:6, alignItems:"center"}}>
                <span style={{display:"inline-block", width:6, height:6, borderRadius:"50%", background:"var(--orange)"}}/>
                <span style={{fontSize:9.5, letterSpacing:".14em", textTransform:"uppercase", fontWeight:700, color:"#fff", textShadow:"0 1px 4px rgba(0,0,0,.6)"}}>Brett Girvin · CC</span>
              </div>
            </>
          )}
        </div>

        {/* Attribution + quote */}
        <div style={{padding:"22px 22px 26px"}}>
          <div className="display" style={{fontSize:20, lineHeight:1.15, marginBottom:4}}>Brett Girvin</div>
          <div style={{fontSize:12.5, color:"var(--ink-2)", lineHeight:1.5}}>Ex-principal · The Arbor School, Dubai</div>
          <div style={{fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginTop:10}}>Community Conservation · 2023 + 2024</div>

          <div style={{fontFamily:"var(--display)", fontSize:21, lineHeight:1.25, color:"var(--charcoal)", borderLeft:"3px solid var(--orange)", paddingLeft:16, margin:"22px 0 18px"}}>
            "Mind-blowing to see those children in their uniforms — in school, happy, confident, ready to learn."
          </div>
          <p style={{fontFamily:"var(--serif)", fontStyle:"italic", fontSize:13.5, lineHeight:1.7, color:"var(--ink-2)", margin:0}}>
            "We're here in Kenya with our partners from Kapes, who produce the sustainable uniforms for The Arbor School. For every student we dress, a child in need somewhere else receives a free uniform. Experiential learning brings to life what we can only do in theory in the classroom. It will change them as much as it's changed me on this short trip."
          </p>

          <div style={{marginTop:20, paddingTop:14, borderTop:"1px dashed var(--line)", fontSize:11.5, color:"var(--muted)", lineHeight:1.55}}>
            Brett joined the first-ever Kapes Adventures trip in 2022 — which sponsored 15 local Kenyan children's school places. Arbor School was a Kapes Uniforms partner from 2022 to 2025; Brett, then principal, brought two Arbor cohorts back on Community Conservation trips in 2023 and 2024.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile: Featured-in media reel (radio, press, podcast) ──── */
function MobileMediaReel() {
  const [playing, setPlaying] = React.useState(null);
  const items = [
    {kind:"Radio interview", outlet:"Dubai Eye 103.8", note:"Founder interview on UAE's leading talk-radio station — the Fairgreen International School trip and the Kapes Adventures model.", media:"https://res.cloudinary.com/dng12bd0a/video/upload/f_auto,q_auto/v1777703190/dubai_eye_fairgreen_trip_full_radio_interview_gcvo31.mp4"},
    {kind:"Feature", outlet:"Education UAE", note:"Profile on Kapes Adventures and the Kenya programmes.", url:"https://portfolio.quantummedia.me/view/815469704/200/"},
    {kind:"Feature", outlet:"Education Saudi", note:"Coverage of the BIS Jeddah Water Empowering Women cohort.", url:"https://portfolio.quantummedia.me/view/210698821/118/"},
    {kind:"Podcast", outlet:"QTheVoices", note:"Founder interview — educational travel and ethical school trips.", embed:"https://www.youtube.com/embed/LOYMYkjvLEc"},
  ];
  React.useEffect(() => {
    document.body.style.overflow = playing ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [playing]);
  return (
    <section style={{padding:"56px 22px", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:18, paddingBottom:14, borderBottom:"1px solid var(--line)"}}>
        <div>
          <div style={{fontSize:11, letterSpacing:".18em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700, marginBottom:6}}>Press · Media</div>
          <h2 className="display" style={{fontSize:28, lineHeight:1.1, margin:0}}>Featured in.</h2>
        </div>
        <div style={{fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>● 4 mentions</div>
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
        {items.map((m, i) => {
          const interactive = m.media || m.embed || m.url;
          const onClick = () => {
            if (m.media || m.embed) setPlaying(m);
            else if (m.url) window.open(m.url, "_blank", "noopener");
          };
          const ctaLabel = m.media ? "Listen" : m.embed ? "Watch" : "Read article";
          const isPlay = !!(m.media || m.embed);
          return (
            <div key={i} onClick={interactive ? onClick : undefined} style={{
              padding:"20px 0", borderBottom: i===items.length-1 ? "none" : "1px solid var(--line)",
              cursor: interactive ? "pointer" : "default", display:"flex", flexDirection:"column", gap:6,
            }}>
              <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{m.kind}</div>
              <div className="display" style={{fontSize:20, lineHeight:1.2}}>{m.outlet}</div>
              <div style={{fontSize:13.5, color:"var(--ink-2)", lineHeight:1.55}}>{m.note}</div>
              {interactive && (
                <div style={{display:"inline-flex", alignItems:"center", gap:8, marginTop:6, fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>
                  <span>{ctaLabel}</span>
                  {isPlay ? (
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" style={{display:"block"}}>
                      <path d="M1 1L9 6L1 11V1Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{display:"block"}}>
                      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {playing && (
        <div onClick={()=>setPlaying(null)} style={{position:"fixed", inset:0, background:"rgba(0,0,0,.85)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:14, cursor:"pointer"}}>
          <div onClick={(e)=>e.stopPropagation()} style={{background:"var(--charcoal)", borderRadius:8, overflow:"hidden", width:"100%", maxWidth:560, boxShadow:"0 40px 100px rgba(0,0,0,.6)", cursor:"default"}}>
            <div style={{padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #262626"}}>
              <div>
                <div style={{fontSize:10, letterSpacing:".18em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{playing.kind}</div>
                <div style={{fontFamily:"var(--display)", fontSize:15, color:"#fff", marginTop:4}}>{playing.outlet}</div>
              </div>
              <button onClick={()=>setPlaying(null)} style={{background:"transparent", border:"1px solid rgba(255,255,255,.3)", color:"#fff", padding:"7px 12px", borderRadius:999, fontSize:10, letterSpacing:".1em", textTransform:"uppercase", fontWeight:700, cursor:"pointer"}}>Close ✕</button>
            </div>
            {playing.embed ? (
              <div style={{position:"relative", aspectRatio:"16/9", background:"#000"}}>
                <iframe src={`${playing.embed}?autoplay=1`} title={playing.outlet} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{position:"absolute", inset:0, width:"100%", height:"100%", border:"none"}}/>
              </div>
            ) : (
              <video src={playing.media} controls autoPlay style={{width:"100%", height:"auto", maxHeight:"70vh", display:"block", background:"#000"}}/>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function MobileAudiences() {
  const groups = [
    { tag:"For schools", title:"Student cohorts.", body:"Y10–12 cohorts visit one of three programmes for a week. CAS / EE / DofE-eligible.", meta:"7-day · Y10–12 · 1:10", route:"schools", color:"#22C55E" },
    { tag:"For teachers", title:"A CPD trip across all three.", body:"One trip, all three programmes — see how the work runs, take pedagogy + curriculum links back home.", meta:"5-day CPD · S2E + WEW + CC", route:"teachers", color:"#F43F5E" },
  ];
  return (
    <section style={{padding:"64px 22px", background:"var(--cream)", borderTop:"1px solid var(--line)"}}>
      <div className="eyebrow" style={{marginBottom:14}}>Two ways to come to Kenya</div>
      <h2 className="display" style={{fontSize:32, lineHeight:1.05, margin:"0 0 18px", letterSpacing:"-.01em"}}>
        Bring a cohort. <span className="accent">Or come first.</span>
      </h2>
      <p style={{fontSize:15.5, lineHeight:1.55, color:"var(--ink-2)", margin:"0 0 28px"}}>
        Most schools send a student cohort. Some heads and coordinators come first — a 5-day CPD trip across all three programmes — to see the work in person before they design what their students will do.
      </p>
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {groups.map(g=>(
          <div key={g.tag} onClick={()=>khifiNavigate(g.route)} style={{
            background:"var(--sand)", border:"1px solid var(--line)", borderTop:`4px solid ${g.color}`,
            padding:"20px 18px", borderRadius:6, cursor:"pointer",
          }}>
            <div style={{display:"flex", alignItems:"center", gap:8, marginBottom:8}}>
              <span style={{width:8, height:8, borderRadius:50, background:g.color}}/>
              <span style={{fontFamily:"SF Mono,ui-monospace,monospace", fontSize:10, letterSpacing:".14em", color:"var(--muted)", fontWeight:700, textTransform:"uppercase"}}>{g.tag}</span>
            </div>
            <h3 className="display" style={{fontSize:22, lineHeight:1.15, margin:"0 0 10px", letterSpacing:"-.005em"}}>{g.title}</h3>
            <p style={{fontSize:14.5, lineHeight:1.55, color:"var(--ink-2)", margin:"0 0 12px"}}>{g.body}</p>
            <div style={{fontSize:10.5, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>{g.meta} →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileHomePage() {
  return (
    <div>
      <SiteNav/>
      <MobileHomeHero/>
      <MobileSocialProof/>
      <MobileEssence/>
      <MobileWatchVideo/>
      <MobileManifestoList/>
      <MobileAudiences/>
      <MobileProgrammes/>
      <MobileVsVoluntourism/>
      <MobilePrincipalQuote/>
      <MobilePullQuote/>
      <MobileMediaReel/>
      <MobileCTA/>
      <Footer/>
    </div>
  );
}
window.MobileHomePage = MobileHomePage;
