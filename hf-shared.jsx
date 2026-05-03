/* Shared: imagery, nav, footer, reusable bits */

const CALENDLY_URL = "https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone";
window.CALENDLY_URL = CALENDLY_URL;
function bookCall() { window.open(CALENDLY_URL, "_blank", "noopener"); }
window.bookCall = bookCall;

// Open a specific programme overview
function navigateToProgram(slug) {
  window.kapesProgramme = slug;
  window.dispatchEvent(new CustomEvent("khifi:navigate", { detail: { tab: "program" }}));
}
window.navigateToProgram = navigateToProgram;


const VIDEO = {
  brett:        "https://res.cloudinary.com/dng12bd0a/video/upload/f_auto,q_auto/v1777698336/kapes_eco-trip_v1_1080p_gtopa1.mp4",
  brettPoster:  "poster-brett.jpg",
  // Full-trip highlight films (transcoded locally — 720p H.264, replace with Cloudinary URLs once uploaded)
  s2eFull:        "photos/v-s2e-full.mp4",
  s2eFullPoster:  "photos/v-s2e-full-poster.jpg",
  wewFull:        "photos/v-wew-full.mp4",
  wewFullPoster:  "photos/v-wew-full-poster.jpg",
  // Legacy field kept for back-compat (FFE day clip used in S2E_REELS below)
  s2eTrip:      "https://res.cloudinary.com/dng12bd0a/video/upload/v1777621239/food_for_education_reel__1_d7xnlm.mp4",
  s2ePoster:    "poster-s2e-trip.jpg",
};

// S2E trip — full reel set + matched posters extracted via ffmpeg
const S2E_REELS = [
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777621239/food_for_education_reel__1_d7xnlm.mp4",
    poster: "photos/v-food-for-education.jpg",
    day:    "Day 4",
    title:  "Food for Education kitchen",
    sub:    "Inside the partner kitchen where the harvest is exchanged for school meals.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777621422/farm_with_students_t4yvqr.mp4",
    poster: "photos/v-farm-with-students.jpg",
    day:    "Day 5–7",
    title:  "Farm with students",
    sub:    "Students working alongside the Kenyan farm crew during the planting build.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777625083/Nairobi_NP_School_safari_trip_1_b2qfi7.mp4",
    poster: "photos/np-truck-giraffe.jpg",
    day:    "Day 2",
    title:  "Nairobi National Park + Sheldrick",
    sub:    "Early game drive · students stand up through the safari-truck roof to meet a giraffe at eye level.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777624583/ngong_hills_hike_kapes_trip_irjcrm.mp4",
    poster: "photos/ngong-ridge-turbines.jpg",
    day:    "Day 3",
    title:  "Ngong Hills hike",
    sub:    "Hiking the ridge under the Ngong wind farm — physical reset before the work-intensive farm days.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777624832/textile_workshop_school_trip__1_zhxajg.mp4",
    poster: "photos/v-textile-workshop.jpg",
    day:    "Day 4",
    title:  "ACT textile workshop",
    sub:    "Africa Collect Textiles — upcycling and weaving with the artisans.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777624805/School_tank_day_paintworks_1_oh33lx.mp4",
    poster: "photos/tank-finished-mural.jpg",
    day:    "Tank day",
    title:  "I Love Kenya — the mural",
    sub:    "Designed and painted by visiting students with the partner-school children. Stays at the school after the trip ends.",
  },
  {
    src:    "https://res.cloudinary.com/dng12bd0a/video/upload/v1777624948/maasai_meetup_kapes_1_nmjsrv.mp4",
    poster: "photos/maasai-jump.jpg",
    day:    "Evening",
    title:  "Maasai meetup",
    sub:    "Cultural exchange — the warmest moment of the trip for many cohorts.",
  },
];
window.S2E_REELS = S2E_REELS;
window.VIDEO = VIDEO;

const IMG = {
  hero:       "https://res.cloudinary.com/dng12bd0a/image/upload/v1768976012/KAPESVoifriday_klein-124_mayzid.jpg",
  garden:     "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg",
  group:      "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404093_2.jpg?v=1746502728",
  water:      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
  community:  "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
  educator:   "https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg",
  learning:   "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160296/WhatsApp_Image_2025-05-13_at_12.12.32_2_qbmzae.jpg",
  // S2E trip — Africa Collect Textiles workshop (Day 4)
  actWide:        "photos/act-workshop-wide.jpg",
  actTeaching:    "photos/act-teaching.jpg",
  actSculpture:   "photos/act-denim-sculpture.jpg",
  // S2E trip — partner-school community day
  schoolGroup:    "photos/school-group-photo.jpg",
  communityFace:  "photos/community-portrait.jpg",
  soccer:         "photos/community-soccer.jpg",
  // S2E trip — farmland transformation (Wed prep + Thu planting/watering)
  farmGroupWide:    "photos/farm-group-wide.jpg",
  farmPrepRake:     "photos/farm-prep-rake.jpg",
  farmActionShovel: "photos/farm-action-shovel.jpg",
  farmWalking:      "photos/farm-walking.jpg",
  farmPlantingClose:"photos/farm-planting-close.jpg",
  farmWatering:     "photos/farm-watering.jpg",
  farmKenyanKid:    "photos/farm-kenyan-kid.jpg",
  farmKenyanLed:    "photos/farm-kenyan-led.jpg",
  // S2E trip — Food for Education partner visit (Day 4)
  ffePresentation:  "photos/ffe-presentation.jpg",
  ffeVat:           "photos/ffe-vat.jpg",
  ffeKitchenTour:   "photos/ffe-kitchen-tour.jpg",
  ffeStaffPortrait: "photos/ffe-staff-portrait.jpg",
  // S2E trip — Maasai cultural visit (evening)
  maasaiJump:    "photos/maasai-jump.jpg",
  maasaiFlag:    "photos/maasai-flag.jpg",
  maasaiDetail:  "photos/maasai-detail.jpg",
  // S2E trip — School tank-painting / mural day
  tankFinished:    "photos/tank-finished-mural.jpg",
  tankBoyPaint:    "photos/tank-kenyan-boy-paint.jpg",
  tankGirlElephant:"photos/tank-girl-elephant.jpg",
  tankDesignSketch:"photos/tank-design-sketch.jpg",
  // S2E trip — Nairobi National Park + Sheldrick Wildlife Trust (Day 2)
  npTruckGiraffe:  "photos/np-truck-giraffe.jpg",
  npGiraffeSkyline:"photos/np-giraffe-skyline.jpg",
  npRhino:         "photos/np-rhino.jpg",
  npSheldrick:     "photos/np-sheldrick-keeper.jpg",
  // S2E trip — Ngong Hills hike (Day 3)
  ngongRidgeTurbines: "photos/ngong-ridge-turbines.jpg",
  ngongArcheryStudent:"photos/ngong-archery-student.jpg",
  ngongArcheryKenyan: "photos/ngong-archery-kenyan.jpg",
  // S2E trip — Pizza-making evening (Day 2 evening)
  pizzaBaskets:    "photos/pizza-baskets.jpg",
  pizzaKenyanChef: "photos/pizza-kenyan-chef.jpg",
  pizzaFinished:   "photos/pizza-finished.jpg",
  // Community Conservation trip (1st CC trip — 2022, Arbor School)
  ccLookout:      "photos/cc-lookout.jpg",
  ccBuffalo:      "photos/cc-buffalo.jpg",
  ccReddSign:     "photos/cc-redd-sign.jpg",
  ccSchoolGirls:  "photos/cc-school-girls.jpg",
  ccFactory:      "photos/cc-factory.jpg",
  ccArborGroup:   "photos/cc-arbor-group.jpg",
  // Kapes Uniforms — Togo free-uniforms drive (Sept 2025)
  uniformsTogoSmile:    "photos/uniforms-togo-smile.jpg",
  uniformsTogoPortrait: "photos/uniforms-togo-portrait.jpg",
  uniformsTogoShe:      "photos/uniforms-togo-she.jpg",
  // Togo One For All 2025 — frames extracted from the trip videos
  togo25Production:     "photos/togo25-production.jpg",   // hands cutting fabric · SHE Cooperative
  togo25SheCoop:        "photos/togo25-she-portrait.jpg", // SHE Coop member portrait
  togo25Distribution:   "photos/togo25-distribution.jpg", // children in pink uniforms · distribution day
  togo25Recipient:      "photos/togo25-recipient.jpg",    // SHE Coop workshop interior
  // Matt (founder) in Kenya
  mattPortrait:         "photos/matt-portrait.jpg",       // close-up founder portrait
  mattVista:            "photos/matt-vista.jpg",          // on a rocky outcrop · landscape behind
  mattWithKid:          "photos/matt-with-kid.jpg",       // kneeling, helping a child with a notebook
  mattWithCrowd:        "photos/matt-with-crowd.jpg",     // aerial · with the cohort of children in uniform
  mattCohortAerial:     "photos/matt-cohort-wide.jpg",    // drone-style · Matt in a crowd of kids in maroon uniforms (high-res)
  // Wildlife Works · the carbon-neutral garment factory where Kapes Uniforms are made
  wildlifeWorksFactory: "photos/wildlife-works-factory.jpg", // 4 Kenyan tailors at Juki machines · the factory floor
  // Kenyan team portraits
  ellyPortrait:         "photos/elly-portrait.jpg",          // Elijah "Elly" Oenga · S2E host · hilltop overlooking the Rift Valley
  monicaPortrait:       "photos/monica-portrait.jpg",        // Monica Makori · WEW Kenyan partner · Neema Women's Group · Taita-Taveta
  // Partner logos — non-school
  edsideraLogo:         "photos/edsidera-logo.png", // Edsidera life-skills awards platform partner
  f4eLogo:              "photos/f4e-logo.png",      // Food for Education · Kenyan school-meals NGO
  // Water Empowering Women — 1st day at the partner school (tank install + classroom + mural)
  wewFinishedTank:    "photos/wew-finished-tank.jpg",
  wewPaintingTank:    "photos/wew-painting-tank.jpg",
  wewClassroomPaint:  "photos/wew-classroom-paint.jpg",
  wewGroundwork:      "photos/wew-groundwork.jpg",
  wewKenyanLed:       "photos/wew-kenyan-led.jpg",
  // WEW Day 2 — completion + handover
  wewCelebration:      "photos/wewd2-celebration.jpg",
  wewClassroomMural:   "photos/wewd2-classroom-mural.jpg",
  wewHandover:         "photos/wewd2-handover.jpg",
  wewClassroomInside:  "photos/wewd2-classroom-inside.jpg",
  // WEW · making chapatis with local women (cultural exchange)
  wewChapatiPortrait:  "photos/wew-chapati-portrait.jpg",
  wewChapatiOutdoor:   "photos/wew-chapati-outdoor.jpg",
  wewChapatiWomen:     "photos/wew-chapati-women.jpg",
  wewChapatiHands:     "photos/wew-chapati-hands.jpg",
  // WEW · Tsavo East safari day (the land, the wildlife, the cohort)
  wewTsavoTusker:      "photos/wew-tsavo-tusker.jpg",
  wewTsavoLion:        "photos/wew-tsavo-lion.jpg",
  wewTsavoWatering:    "photos/wew-tsavo-watering.jpg",
  wewTsavoCohort:      "photos/wew-tsavo-cohort.jpg",
  // WEW · Marugu Hills hike with Kenyan scouts (Kenyan-led)
  wewMaruguVista:      "photos/wew-marugu-vista.jpg",
  wewMaruguHike:       "photos/wew-marugu-hike.jpg",
  wewMaruguStudents:   "photos/wew-marugu-students.jpg",
  wewMaruguScout:      "photos/wew-marugu-scout.jpg",
  // WEW · Meeting the Maasai (cultural exchange — evening event)
  wewMaasaiGreeting:   "photos/wew-maasai-greeting.jpg",
  wewMaasaiHeaddress:  "photos/wew-maasai-headdress.jpg",
  wewMaasaiDance:      "photos/wew-maasai-dance.jpg",
  wewMaasaiEvening:    "photos/wew-maasai-evening.jpg",
  // WEW · talk from local medical professional (the human side of the system)
  wewMedicalTalk:      "photos/wew-medical-talk.jpg",
  // WEW · the water walk (cohort walks the daily water route)
  wewWalkSource:       "photos/wew-walk-source.jpg",
  wewWalkLift:         "photos/wew-walk-lift.jpg",
  wewWalkTrail:        "photos/wew-walk-trail.jpg",
  wewWalkLine:         "photos/wew-walk-line.jpg",
  // WEW · workshops with Neema Women's Group (women's enterprise)
  wewNeemaPortrait:    "photos/wew-neema-portrait.jpg",
  wewNeemaTeaching:    "photos/wew-neema-teaching.jpg",
  wewNeemaWorkshop:    "photos/wew-neema-workshop.jpg",
  wewNeemaCraft:       "photos/wew-neema-craft.jpg",
};
window.IMG = IMG;

// Navigate between tabs from in-page links
function navigate(tab){
  window.dispatchEvent(new CustomEvent("khifi:navigate", { detail: { tab }}));
}
window.khifiNavigate = navigate;

/* ─── Mobile detection hook ─────────────────────────────────── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}
window.useIsMobile = useIsMobile;

/* ─── Mobile drawer nav ─────────────────────────────────────── */
function MobileNav({ dark = false }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const items = [
    { label: "Home",         tab: "home"     },
    { label: "For Schools",  tab: "schools"  },
    { label: "Programs",     tab: "programs" },
    { label: "Our Approach", tab: "approach" },
    { label: "Impact",       tab: "impact"   },
    { label: "Stories",      tab: "stories"  },
    { label: "About",        tab: "about"    },
    { label: "Contact",      tab: "contact"  },
  ];
  const go = (t) => { setOpen(false); setTimeout(() => navigate(t), 80); };
  return (
    <>
      <nav className="mobile-nav" style={{
        position:"sticky", top:0, zIndex:50,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"14px 18px",
        background: dark ? "rgba(15,15,15,.94)" : "rgba(250,250,248,.94)",
        backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)",
        borderBottom:`1px solid ${dark ? "#1f1f1f" : "var(--line)"}`,
      }}>
        <div onClick={() => navigate("home")} style={{display:"flex", alignItems:"center", gap:10, cursor:"pointer"}}>
          <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:28, width:"auto", display:"block", filter: dark ? "brightness(0) invert(1)" : "none"}}/>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          style={{
            display:"flex", flexDirection:"column", justifyContent:"center", gap:5,
            width:44, height:44, padding:0, border:"none", background:"transparent", cursor:"pointer",
          }}>
          <span style={{display:"block", width:22, height:2, background: dark ? "#fff" : "var(--charcoal)", borderRadius:2}}/>
          <span style={{display:"block", width:22, height:2, background: dark ? "#fff" : "var(--charcoal)", borderRadius:2}}/>
          <span style={{display:"block", width:22, height:2, background: dark ? "#fff" : "var(--charcoal)", borderRadius:2}}/>
        </button>
      </nav>

      {/* Drawer */}
      <div style={{
        position:"fixed", inset:0, zIndex:100,
        background:"var(--charcoal)", color:"#fff",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition:"transform .32s cubic-bezier(.65,0,.35,1)",
        display:"flex", flexDirection:"column", overflowY:"auto",
      }}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 18px", borderBottom:"1px solid #262626"}}>
          <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:28, width:"auto", filter:"brightness(0) invert(1)"}}/>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              display:"flex", alignItems:"center", justifyContent:"center",
              width:44, height:44, border:"none", background:"transparent", color:"#fff",
              fontSize:28, cursor:"pointer", lineHeight:1,
            }}>×</button>
        </div>

        <ul style={{listStyle:"none", padding:"24px 22px 0", margin:0, display:"flex", flexDirection:"column"}}>
          {items.map(it => (
            <li key={it.tab}
              onClick={() => go(it.tab)}
              style={{
                fontFamily:"var(--display)", fontSize:30, lineHeight:1.1,
                padding:"18px 0", borderBottom:"1px solid #262626", cursor:"pointer",
                color:"#fff", letterSpacing:"-.01em",
              }}>
              {it.label}
            </li>
          ))}
        </ul>

        <div style={{padding:"32px 22px 24px", display:"flex", flexDirection:"column", gap:12}}>
          <button
            className="btn-pill btn-action"
            style={{padding:"16px 20px", fontSize:14, width:"100%"}}
            onClick={() => { setOpen(false); setTimeout(bookCall, 100); }}>
            Book a 30-min call →
          </button>
          <button
            className="btn-pill"
            style={{padding:"16px 20px", fontSize:14, width:"100%", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}}
            onClick={() => go("lp")}>
            Take the Impact Scorecard
          </button>
        </div>

        <div style={{marginTop:"auto", padding:"24px 22px 32px", borderTop:"1px solid #262626", color:"rgba(255,255,255,.55)", fontSize:12, letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>
          Dubai · UAE · Kapes Adventures
        </div>
      </div>
    </>
  );
}
window.MobileNav = MobileNav;

/* ─── Sticky bottom CTA bar (mobile only) ───────────────────── */
function MobileBottomCTA({ primaryLabel = "Book a call", primaryAction, secondaryLabel = "Scorecard", secondaryTab = "lp" }) {
  return (
    <div className="mobile-cta-bar" style={{
      position:"fixed", left:0, right:0, bottom:0, zIndex:40,
      background:"rgba(15,15,15,.96)",
      backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)",
      borderTop:"1px solid #262626",
      padding:"10px 14px env(safe-area-inset-bottom, 12px)",
      display:"flex", gap:8,
    }}>
      <button
        onClick={() => navigate(secondaryTab)}
        style={{
          flex:1, padding:"14px 12px", borderRadius:50,
          background:"transparent", color:"#fff",
          border:"1.5px solid rgba(255,255,255,.35)",
          fontSize:13, fontWeight:600, letterSpacing:".04em", cursor:"pointer",
        }}>
        {secondaryLabel}
      </button>
      <button
        onClick={primaryAction || bookCall}
        style={{
          flex:1.3, padding:"14px 12px", borderRadius:50,
          background:"var(--orange)", color:"#fff", border:"none",
          fontSize:13, fontWeight:700, letterSpacing:".04em", cursor:"pointer",
        }}>
        {primaryLabel} →
      </button>
    </div>
  );
}
window.MobileBottomCTA = MobileBottomCTA;

/* ─── Mobile footer (compact, accordion-style) ──────────────── */
function MobileFooter() {
  const [open, setOpen] = React.useState(null);
  const sections = [
    { title:"Programmes", items:[
      ["Seeds2Education","programs"], ["Water Empowering Women","programs"],
      ["Community Conservation","programs"], ["Compare programmes","programs"]
    ]},
    { title:"Resources", items:[
      ["Impact Scorecard","lp"], ["Our Approach","approach"],
      ["Programme overview","program"], ["Safety & Safeguarding","approach"]
    ]},
    { title:"Company", items:[
      ["Annual Impact","impact"], ["About / Team","about"],
      ["Stories","stories"], ["Contact","contact"]
    ]},
  ];
  return (
    <footer className="mobile-foot" style={{background:"var(--charcoal)", color:"rgba(255,255,255,.75)", padding:"56px 22px 110px"}}>
      <div onClick={()=>navigate("home")} style={{display:"flex", alignItems:"center", gap:12, marginBottom:20, cursor:"pointer"}}>
        <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:32, filter:"brightness(0) invert(1)"}}/>
        <span style={{fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:700, paddingLeft:12, borderLeft:"1px solid rgba(255,255,255,.2)"}}>Adventures</span>
      </div>
      <p style={{maxWidth:340, lineHeight:1.6, fontSize:14, marginBottom:32}}>
        Educational travel in Kenya, anchored on year-round work and Kenyan-led partnerships.
      </p>

      <div style={{borderTop:"1px solid #262626"}}>
        {sections.map((s, i)=>(
          <div key={s.title} style={{borderBottom:"1px solid #262626"}}>
            <button
              onClick={()=>setOpen(open===i?null:i)}
              style={{
                width:"100%", padding:"18px 0", display:"flex", alignItems:"center", justifyContent:"space-between",
                background:"transparent", border:"none", color:"#fff", cursor:"pointer",
                fontFamily:"var(--display)", fontSize:18, letterSpacing:"-.005em",
              }}>
              <span>{s.title}</span>
              <span style={{fontSize:22, lineHeight:1, color:"var(--orange)", transition:"transform .2s", transform: open===i?"rotate(45deg)":"rotate(0)"}}>+</span>
            </button>
            {open===i && (
              <ul style={{listStyle:"none", margin:0, padding:"0 0 18px", display:"flex", flexDirection:"column", gap:14}}>
                {s.items.map(([label,tab])=>(
                  <li key={label} onClick={()=>navigate(tab)} style={{cursor:"pointer", fontSize:15, color:"rgba(255,255,255,.75)"}}>{label}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div style={{marginTop:32, display:"flex", gap:10}}>
        {[
          {label:"Instagram", path:<><rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>},
          {label:"LinkedIn",  path:<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><line x1="8" y1="11" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="8" cy="7.5" r="1" fill="currentColor"/><path d="M12 17v-3.5a2.5 2.5 0 015 0V17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>},
          {label:"YouTube",   path:<><path d="M2.5 8a3 3 0 013-3h13a3 3 0 013 3v8a3 3 0 01-3 3h-13a3 3 0 01-3-3V8z" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M10 9.5L15 12l-5 2.5v-5z" fill="currentColor"/></>},
        ].map(s=>(
          <a key={s.label} aria-label={s.label} title={s.label} style={{width:40, height:40, borderRadius:50, border:"1px solid #333", display:"flex", alignItems:"center", justifyContent:"center", color:"#aaa"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">{s.path}</svg>
          </a>
        ))}
      </div>

      <div style={{marginTop:36, paddingTop:24, borderTop:"1px solid #262626", display:"flex", flexDirection:"column", gap:14, fontSize:12, color:"rgba(255,255,255,.5)"}}>
        <span>© 2026 Kapes Adventures FZ-LLC · Dubai, UAE</span>
        <span style={{display:"flex", gap:14, flexWrap:"wrap"}}>
          <a href="Privacy.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Privacy</a>
          <span style={{opacity:.4}}>·</span>
          <a href="Child Protection.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Child Protection</a>
          <span style={{opacity:.4}}>·</span>
          <a href="Supplier Code.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Supplier Code</a>
        </span>
      </div>
    </footer>
  );
}
window.MobileFooter = MobileFooter;

function SiteNav({ sticky = false, dark = false }) {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileNav dark={dark}/>;
  const style = sticky ? {position:"sticky", top:0, zIndex:5, backdropFilter:"blur(8px)", background: dark ? "rgba(15,15,15,.92)" : "rgba(250,250,248,.92)"} : null;
  const linkColor = dark ? "#ddd" : "var(--ink-2)";
  const logoColor = dark ? "#fff" : "var(--charcoal)";

  const items = [
    { label:"For Schools",  tab:"schools"  },
    { label:"Programs",     tab:"programs" },
    { label:"Our Approach", tab:"approach" },
    { label:"Impact",       tab:"impact"   },
    { label:"Stories",      tab:"stories"  },
    { label:"About",        tab:"about"    },
  ];

  return (
    <nav className="site-nav" style={Object.assign({background: dark ? "#0F0F0F":"var(--cream)", borderBottomColor: dark ? "#1f1f1f":"var(--line)"}, style||{})}>
      <div className="logo" style={{cursor:"pointer", display:"flex", alignItems:"center", gap:12}} onClick={()=>navigate("home")}>
        <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:34, width:"auto", display:"block", filter: dark ? "brightness(0) invert(1)" : "none"}}/>
        <span style={{fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color: dark?"rgba(255,255,255,.7)":"var(--muted)", fontWeight:700, paddingLeft:12, borderLeft:`1px solid ${dark?"rgba(255,255,255,.2)":"var(--line)"}`}}>Adventures</span>
      </div>
      <ul>
        {items.map(it=>(
          <li key={it.tab} onClick={()=>navigate(it.tab)} style={{color:linkColor}}>{it.label}</li>
        ))}
      </ul>
      <div className="right">
        <button className="btn-pill" style={{padding:"10px 18px", background:"transparent", color: dark ? "#fff":"var(--charcoal)", border: `1.5px solid ${dark?"rgba(255,255,255,.35)":"var(--charcoal)"}`}} onClick={()=>navigate("lp")}>Assessment</button>
        <button className="btn-pill btn-action" style={{padding:"10px 18px"}} onClick={bookCall}>Book a call →</button>
      </div>
    </nav>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileFooter/>;
  const L = (label, tab) => <li style={{cursor:"pointer"}} onClick={()=>navigate(tab)}>{label}</li>;
  return (
    <footer className="foot">
      <div className="cols">
        <div>
          <div style={{display:"flex", alignItems:"center", gap:14, marginBottom:18, cursor:"pointer"}} onClick={()=>navigate("home")}>
            <img src="kapes-logo.png" alt="Kapes Adventures" style={{height:36, width:"auto", display:"block", filter:"brightness(0) invert(1)"}}/>
            <span style={{fontSize:11, letterSpacing:".22em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", fontWeight:700, paddingLeft:12, borderLeft:"1px solid rgba(255,255,255,.2)"}}>Adventures</span>
          </div>
          <p style={{maxWidth:320, lineHeight:1.6, fontSize:13}}>
            Educational travel in Kenya, anchored on year-round work and Kenyan-led partnerships. Students contribute alongside the community — they aren't the trigger.
          </p>
          <div style={{marginTop:20, display:"flex",gap:12, fontSize:12, letterSpacing:".08em", textTransform:"uppercase", color:"#888"}}>
            <span>Dubai · UAE</span>
          </div>
          <div style={{marginTop:24, display:"flex", gap:10}}>
            {[
              {label:"Instagram", path:<><rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>},
              {label:"LinkedIn",  path:<><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6"/><line x1="8" y1="11" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="8" cy="7.5" r="1" fill="currentColor"/><path d="M12 17v-3.5a2.5 2.5 0 015 0V17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><line x1="12" y1="11" x2="12" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>},
              {label:"YouTube",   path:<><path d="M2.5 8a3 3 0 013-3h13a3 3 0 013 3v8a3 3 0 01-3 3h-13a3 3 0 01-3-3V8z" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M10 9.5L15 12l-5 2.5v-5z" fill="currentColor"/></>},
              {label:"TikTok",    path:<path d="M14 4v9.5a2.5 2.5 0 11-2.5-2.5h.5V8.5a5.5 5.5 0 105.5 5.5V9.2a6.4 6.4 0 003.5 1V7.7A4 4 0 0117 4h-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>},
            ].map(s=>(
              <a key={s.label} aria-label={s.label} title={s.label} style={{width:34, height:34, borderRadius:50, border:"1px solid #333", display:"flex", alignItems:"center", justifyContent:"center", color:"#aaa", cursor:"pointer", transition:"all .15s"}} onMouseEnter={e=>{e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#555";}} onMouseLeave={e=>{e.currentTarget.style.color="#aaa"; e.currentTarget.style.borderColor="#333";}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{s.path}</svg>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5>Programmes</h5>
          <ul>
            {L("Seeds2Education","programs")}
            {L("Water Empowering Women","programs")}
            {L("Community Conservation","programs")}
            {L("Compare programmes","programs")}
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            {L("Impact Scorecard","lp")}
            {L("Our Approach","approach")}
            {L("Programme overview","program")}
            {L("Safety & Safeguarding","approach")}
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            {L("Our Approach","approach")}
            {L("Annual Impact","impact")}
            {L("About / Team","about")}
            {L("Stories","stories")}
            {L("Contact","contact")}
          </ul>
        </div>
      </div>
      <div className="fine">
        <span>© 2026 Kapes Adventures FZ-LLC · Dubai, UAE</span>
        <span style={{display:"flex", gap:14}}>
          <a href="Privacy.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Privacy</a>
          <span style={{opacity:.4}}>·</span>
          <a href="Child Protection.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Child Protection</a>
          <span style={{opacity:.4}}>·</span>
          <a href="Supplier Code.html" target="_blank" rel="noopener" style={{color:"inherit", textDecoration:"none"}}>Supplier Code</a>
        </span>
      </div>
    </footer>
  );
}

/* ─── Reusable bits for new pages ───────────────────────────── */

function Rule({ label }) {
  return (
    <div style={{display:"flex", alignItems:"center", gap:18, margin:"8px 0 24px"}}>
      <div style={{height:1, flex:1, background:"var(--charcoal)", opacity:.18}}/>
      {label && <div style={{fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600}}>{label}</div>}
      <div style={{height:1, flex:1, background:"var(--charcoal)", opacity:.18}}/>
    </div>
  );
}

// Big numbered section header: "02 — Our Approach" style
function SectionHead({ num, eyebrow, title, sub, dark=false }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"auto 1fr auto", gap:24, alignItems:"end", marginBottom:40, color: dark?"#fff":"inherit"}}>
      {num && <div style={{fontFamily:"var(--display)", fontSize:60, color:"var(--orange)", lineHeight:.9}}>{num}</div>}
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="display" style={{marginTop:10, color: dark?"#fff":"var(--charcoal)"}}>{title}</h2>
        {sub && <p className="lead" style={{marginTop:16, color: dark?"rgba(255,255,255,.75)":"var(--ink-2)", maxWidth:640}}>{sub}</p>}
      </div>
      <div/>
    </div>
  );
}

// Small caption under hero-ish images
function PhotoCaption({ children }) {
  return (
    <div style={{fontSize:11, letterSpacing:".1em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600, marginTop:10}}>
      {children}
    </div>
  );
}

// Orange-bar section header ("In this section →")
function BarHead({ kicker, title }) {
  return (
    <div style={{display:"flex", gap:16, alignItems:"center", marginBottom:20}}>
      <div style={{width:36, height:4, background:"var(--orange)"}}/>
      <div style={{fontSize:11, letterSpacing:".14em", textTransform:"uppercase", color:"var(--muted)", fontWeight:700}}>{kicker}</div>
      <h3 className="display" style={{fontSize:"clamp(20px,2vw,28px)", marginLeft:"auto"}}>{title}</h3>
    </div>
  );
}

// Big stat card
function BigStat({ n, unit, label, note, dark=false }) {
  return (
    <div style={{
      background: dark?"#161616":"var(--cream)",
      borderTop:`2px solid ${dark?"var(--orange)":"var(--charcoal)"}`,
      padding:"24px 20px 22px",
      color: dark?"#fff":"var(--charcoal)",
    }}>
      <div style={{display:"flex", alignItems:"baseline", gap:6}}>
        <div className="display tnum" style={{fontSize:"clamp(44px,4vw,60px)", color:dark?"#fff":"var(--charcoal)", lineHeight:.9}}>{n}</div>
        {unit && <div style={{fontSize:14, color:"var(--orange)", fontWeight:700, letterSpacing:".06em", textTransform:"uppercase"}}>{unit}</div>}
      </div>
      <div style={{fontSize:13, color: dark?"rgba(255,255,255,.7)":"var(--ink-2)", marginTop:10, lineHeight:1.4, fontWeight:500}}>{label}</div>
      {note && <div style={{fontSize:11, color:"var(--muted)", marginTop:8, letterSpacing:".04em"}}>{note}</div>}
    </div>
  );
}

// Signposting CTA block ("Want more? →")
function CTABar({ kicker, title, primary, secondary, onPrimary, onSecondary }) {
  return (
    <section style={{background:"var(--charcoal)", color:"#fff", padding:"64px 0"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1.4fr auto", gap:40, alignItems:"center"}}>
        <div>
          {kicker && <div className="eyebrow" style={{color:"var(--orange)"}}>{kicker}</div>}
          <h2 className="display" style={{color:"#fff", marginTop:10, fontSize:"clamp(32px,3.4vw,52px)"}}>{title}</h2>
        </div>
        <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          {primary && <button className="btn-pill btn-action" style={{padding:"14px 24px"}} onClick={onPrimary}>{primary} →</button>}
          {secondary && <button className="btn-pill" style={{padding:"14px 24px", background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,.4)"}} onClick={onSecondary}>{secondary}</button>}
        </div>
      </div>
    </section>
  );
}

// Breadcrumb + page-title strip (used on secondary pages instead of a full photo hero)
function PageHero({ eyebrow, title, sub, art, bg="sand" }) {
  const backgrounds = { sand:"var(--sand)", cream:"var(--cream)", charcoal:"var(--charcoal)" };
  const isDark = bg==="charcoal";
  return (
    <section style={{background: backgrounds[bg] || bg, padding:"80px 0 72px", borderBottom:"1px solid var(--line)", color: isDark?"#fff":"inherit"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns: art?"1.4fr 1fr":"1fr", gap:56, alignItems:"end"}}>
        <div>
          {eyebrow && <div className="eyebrow" style={{color: isDark?"#fff":"var(--orange)"}}>{eyebrow}</div>}
          <h1 className="display" style={{marginTop:18, color: isDark?"#fff":"var(--charcoal)"}}>{title}</h1>
          {sub && <p className="lead" style={{marginTop:22, color: isDark?"rgba(255,255,255,.8)":"var(--ink-2)", maxWidth:640}}>{sub}</p>}
        </div>
        {art}
      </div>
    </section>
  );
}

Object.assign(window, { SiteNav, Footer, Rule, SectionHead, BarHead, BigStat, CTABar, PageHero, PhotoCaption, navigate, useIsMobile, MobileNav, MobileBottomCTA, MobileFooter });
