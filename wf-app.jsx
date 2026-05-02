/* App shell — tab + approach switcher, tweaks, persistence */

const { useState, useEffect } = React;

const TABS = [
  { id:"home",    label:"Homepage",       approaches: window.HomeApproaches,    meta: window.HomeMeta,    url:"/"},
  { id:"program", label:"Program detail", approaches: window.ProgramApproaches, meta: window.ProgramMeta, url:"/programs/seeds2education"},
  { id:"lp",      label:"Marketing LP",   approaches: window.LPApproaches,      meta: window.LPMeta,      url:"/lp/anti-voluntourism"},
];

const read = (k,f)=> { try { const v = localStorage.getItem(k); return v==null? f : JSON.parse(v); } catch(_){ return f; } };
const write = (k,v)=> { try { localStorage.setItem(k, JSON.stringify(v)); } catch(_){} };

function App(){
  const [tab, setTab] = useState(() => read("kw.tab","home"));
  const [approach, setApproach] = useState(() => read("kw.approach",{home:0,program:0,lp:0}));
  const current = TABS.find(t=>t.id===tab) || TABS[0];
  const idx = approach[tab] ?? 0;
  const Comp = current.approaches[idx];
  const meta = current.meta[idx];

  useEffect(()=> write("kw.tab", tab), [tab]);
  useEffect(()=> write("kw.approach", approach), [approach]);

  // Chrome wiring
  useEffect(()=>{
    const tabsEl = document.getElementById("tabs");
    tabsEl.querySelectorAll(".tab").forEach(b=>{
      b.classList.toggle("active", b.dataset.tab === tab);
      b.onclick = () => setTab(b.dataset.tab);
    });
    const urlbar = document.getElementById("urlbar");
    urlbar.textContent = "kapesadventures.com" + current.url;
  }, [tab]);

  // Approaches row
  useEffect(()=>{
    const row = document.getElementById("approaches");
    row.innerHTML = "";
    current.meta.forEach((m,i)=>{
      const b = document.createElement("button");
      b.className = "approach" + (i===idx ? " active":"");
      b.innerHTML = `<span class="num">0${i+1}</span><span>${m.label}</span>`;
      b.onclick = () => setApproach(a=>({...a, [tab]: i}));
      row.appendChild(b);
    });
    const legend = document.createElement("span");
    legend.className = "legend";
    legend.textContent = `4 approaches · switch with keys 1–4`;
    row.appendChild(legend);
  }, [tab, idx]);

  // Keyboard shortcuts
  useEffect(()=>{
    const h = (e)=>{
      if (["1","2","3","4"].includes(e.key)) {
        const i = parseInt(e.key,10)-1;
        if (i < current.approaches.length) setApproach(a=>({...a, [tab]: i}));
      }
      if (e.key === "ArrowRight") setApproach(a=>({...a, [tab]: Math.min(current.approaches.length-1, (a[tab]??0)+1)}));
      if (e.key === "ArrowLeft")  setApproach(a=>({...a, [tab]: Math.max(0, (a[tab]??0)-1)}));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [tab, current]);

  return (
    <div key={`${tab}-${idx}`}>
      <div className="apx-head">
        <div className="num">0{idx+1}</div>
        <div style={{flex:1}}>
          <h2>{meta.title}<span className="tag">approach {idx+1} of 4</span></h2>
          <div className="sub">{meta.sub}</div>
        </div>
        <div style={{fontFamily:"var(--hand)", fontSize:22, color:"var(--accent-ink)", transform:"rotate(-2deg)"}}>
          tap 1–2–3–4 ↑
        </div>
      </div>
      <Comp/>
    </div>
  );
}

// ───── Tweaks panel ────────────────────────────────────────────
(function initTweaks(){
  const btn = document.getElementById("tweaksBtn");
  const panel = document.getElementById("tweaksPanel");
  const state = Object.assign({rough:"med", annot:"on", accent:"on", density:"normal"}, read("kw.tweaks",{}));
  const apply = () => {
    document.body.classList.remove("rough-low","rough-med","rough-high");
    document.body.classList.add(`rough-${state.rough}`);
    document.body.classList.toggle("no-annot", state.annot === "off");
    document.body.classList.toggle("no-accent", state.accent === "off");
    document.body.classList.toggle("compact", state.density === "compact");
    panel.querySelectorAll(".segs").forEach(grp=>{
      const g = grp.dataset.group;
      grp.querySelectorAll("button").forEach(b=>{
        b.classList.toggle("on", b.dataset.val === state[g]);
      });
    });
    write("kw.tweaks", state);
  };
  btn.onclick = () => panel.classList.toggle("open");
  panel.querySelectorAll(".segs").forEach(grp=>{
    const g = grp.dataset.group;
    grp.querySelectorAll("button").forEach(b=>{
      b.onclick = () => { state[g] = b.dataset.val; apply(); };
    });
  });
  apply();
})();

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
