/* App shell — tab switcher + tweaks panel */

const { useState, useEffect } = React;

const read = (k,f)=> { try { const v = localStorage.getItem(k); return v==null? f : JSON.parse(v); } catch(_){ return f; } };
const write = (k,v)=> { try { localStorage.setItem(k, JSON.stringify(v)); } catch(_){} };

const URLS = {
  home:          "/",
  approach:      "/our-approach",
  programs:      "/programs",
  impact:        "/impact",
  stories:       "/stories",
  about:         "/about",
  contact:       "/contact",
  schools:       "/for-schools",
  organisations: "/for-organisations",
  teachers:      "/for-teachers",
  program:       "/programs/seeds2education", // updated dynamically by programme
  lp:            "/scorecard",
};
const PROGRAM_URLS = {
  s2e: "/programs/seeds2education",
  wew: "/programs/water-empowering-women",
  cc:  "/programs/community-conservation",
};

// Reverse-lookup: pathname → {tab, programme}
function tabFromPath(pathname){
  const path = (pathname || "/").replace(/\/+$/,"") || "/";
  for (const [slug, p] of Object.entries(PROGRAM_URLS)) {
    if (path === p) return { tab: "program", programme: slug };
  }
  for (const [tab, p] of Object.entries(URLS)) {
    if (tab === "program") continue;
    if (path === (p === "/" ? "/" : p.replace(/\/+$/,""))) return { tab, programme: null };
  }
  return { tab: "home", programme: null };
}
const LABELS = {
  home:"01 Home", approach:"02 Our Approach", programs:"03 Programs",
  impact:"04 Impact", stories:"05 Stories", about:"06 About", contact:"07 Contact",
  schools:"08 For Schools", organisations:"09 For Organisations", teachers:"10 For Teachers",
  program:"11 Programme overview", lp:"12 Scorecard LP"
};

function App(){
  // In production (no ?prototype=1), seed state from the URL.
  // In prototype mode, fall back to the previous tab in localStorage.
  const isPrototype = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("prototype");
  const initial = (typeof window !== "undefined" && !isPrototype)
    ? tabFromPath(window.location.pathname)
    : { tab: read("khifi.tab","home"), programme: null };

  const [tab, setTab] = useState(initial.tab);
  const [programme, setProgramme] = useState(initial.programme || (typeof window !== "undefined" && window.kapesProgramme) || "s2e");
  const [navEpoch, setNavEpoch] = useState(0);
  const [tweaks, setTweaks] = useState(()=> read("khifi.tweaks",{
    accent:"orange", density:"normal", hero:"manifesto"
  }));

  useEffect(()=> write("khifi.tab",tab), [tab]);
  useEffect(()=> write("khifi.tweaks",tweaks), [tweaks]);

  // Sync browser URL <-> tab/programme state (production only).
  useEffect(()=>{
    if (isPrototype || typeof window === "undefined") return;
    const target = tab === "program" ? PROGRAM_URLS[programme] : URLS[tab];
    if (!target) return;
    if (window.location.pathname !== target) {
      window.history.pushState({tab, programme}, "", target);
    }
  }, [tab, programme, isPrototype]);

  // Browser back/forward → update tab/programme.
  useEffect(()=>{
    if (isPrototype || typeof window === "undefined") return;
    const onPop = () => {
      const next = tabFromPath(window.location.pathname);
      setTab(next.tab);
      if (next.programme) setProgramme(next.programme);
      setNavEpoch(n => n + 1);
      window.scrollTo({top:0, behavior:"auto"});
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [isPrototype]);

  // Listen for in-page nav clicks (SiteNav / Footer / programme cards)
  useEffect(()=>{
    const h = (e) => {
      if (e.detail && e.detail.tab) {
        if (e.detail.tab === "program") {
          const newProg = e.detail.programme || (typeof window !== "undefined" && window.kapesProgramme) || "s2e";
          setProgramme(newProg);
        }
        setTab(e.detail.tab);
        setNavEpoch(n => n + 1); // force remount even when state is unchanged
        window.scrollTo({top:0, behavior:"auto"});
      }
    };
    window.addEventListener("khifi:navigate", h);
    return ()=> window.removeEventListener("khifi:navigate", h);
  },[]);

  useEffect(()=>{
    document.body.classList.remove("acc-orange","acc-emerald","acc-rust","acc-navy");
    document.body.classList.add("acc-"+tweaks.accent);
    document.body.classList.toggle("compact", tweaks.density==="compact");
  },[tweaks]);

  // top-chrome tab wiring
  useEffect(()=>{
    document.querySelectorAll("#tabs .tab").forEach(b=>{
      b.classList.toggle("active", b.dataset.tab===tab);
      b.onclick = () => { setTab(b.dataset.tab); window.scrollTo({top:0, behavior:"auto"}); };
    });
    const urlPath = tab === "program" ? PROGRAM_URLS[programme] : URLS[tab];
    const urlbar = document.getElementById("urlbar");
    if (urlbar) urlbar.textContent = "kapesadventures.com"+urlPath;
  }, [tab, programme]);

  const PAGES = {
    home:          { Comp: window.HomePage,          props: { heroVariant: tweaks.hero } },
    approach:      { Comp: window.ApproachPage,      props: {} },
    programs:      { Comp: window.ProgramsPage,      props: {} },
    impact:        { Comp: window.ImpactPage,        props: {} },
    stories:       { Comp: window.StoriesPage,       props: {} },
    about:         { Comp: window.AboutPage,         props: {} },
    contact:       { Comp: window.ContactPage,       props: {} },
    schools:       { Comp: window.SchoolsPage,       props: {} },
    organisations: { Comp: window.OrganisationsPage, props: {} },
    teachers:      { Comp: window.TeachersPage,      props: {} },
    program:       { Comp: window.ProgramPage,       props: { slug: programme } },
    lp:            { Comp: window.LPPage,            props: {} },
  };
  const entry = PAGES[tab] || PAGES.home;
  const Page = entry.Comp || (()=> <div style={{padding:80, textAlign:"center"}}>Loading {tab}…</div>);

  const isMobile = typeof window !== "undefined" && window.useIsMobile ? window.useIsMobile() : false;
  const showBottomCTA = isMobile && tab !== "lp" && tab !== "contact";

  return (
    <div data-screen-label={LABELS[tab] || tab}>
      <Page key={tab === "program" ? `program-${programme}-${navEpoch}` : `${tab}-${navEpoch}`} {...entry.props}/>
      {showBottomCTA && window.MobileBottomCTA && <window.MobileBottomCTA/>}
    </div>
  );
}

/* Tweaks panel */
(function initTweaks(){
  const btn = document.getElementById("tweaksBtn");
  const panel = document.getElementById("tweaksPanel");
  if (!btn || !panel) return;

  const apply = (state) => {
    panel.querySelectorAll("[data-group]").forEach(grp=>{
      const g = grp.dataset.group;
      grp.querySelectorAll("button").forEach(b=>{
        b.classList.toggle("on", b.dataset.val === state[g]);
      });
    });
    write("khifi.tweaks", state);
    document.body.classList.remove("acc-orange","acc-emerald","acc-rust","acc-navy");
    document.body.classList.add("acc-"+state.accent);
    document.body.classList.toggle("compact", state.density==="compact");
  };

  let state = Object.assign({accent:"orange", density:"normal", hero:"manifesto"}, read("khifi.tweaks",{}));

  btn.onclick = () => panel.classList.toggle("open");

  panel.querySelectorAll("[data-group]").forEach(grp=>{
    const g = grp.dataset.group;
    grp.querySelectorAll("button").forEach(b=>{
      b.onclick = () => {
        state = {...state, [g]: b.dataset.val};
        apply(state);
        // force re-render by updating localStorage tweaks key — but our React app also reads on mount; simplest: reload root
        window.dispatchEvent(new Event("khifi:tweaks-changed"));
      };
    });
  });

  apply(state);
})();

/* Root render + re-render on tweaks change */
function renderRoot(){
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const Wrapped = () => {
    const [,force] = useState(0);
    useEffect(()=>{
      const h = ()=> force(n=>n+1);
      window.addEventListener("khifi:tweaks-changed", h);
      return ()=> window.removeEventListener("khifi:tweaks-changed", h);
    },[]);
    return <App/>;
  };
  root.render(<Wrapped/>);
}
renderRoot();
