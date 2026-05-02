/* STORIES — blog index (imported from kapesadventures.com) + founder note */

const FOUNDER_NOTE = {
  slug:"how-kapes-adventures-started",
  cat:"Founder note", date:"2025", readMin:6, img:IMG.mattWithKid,
  title:"How Kapes Adventures started — and why it began with a uniform.",
  dek:"The trip that started the company began as a factory tour. By the end of the night, it was something else.",
  author:"Matthew Benjamin",
  initials:"MB",
  body:[
    {type:"p", text:"In 2020 I read a study, conducted in 2003, that showed something simple. Giving a child in Kenya a free school uniform measurably reduced their absenteeism. The idea behind Kapes Uniforms was to build a uniform business in a country where uniforms were the difference between attending school and not."},
    {type:"p", text:"I'd never been to Kenya. A friend from my MBA was Kenyan and put me in touch with Food for Education — a Kenyan organisation that subsidises school meals for children who can't afford them. They introduced me to Karigu Primary School, the first school we worked with. We made uniforms, and we donated them."},
    {type:"p", text:"To produce the uniforms I needed a Kenyan manufacturer. I went looking and found a factory inside a wildlife conservancy between Nairobi and Mombasa — the world's first carbon-neutral garment factory. Around it: basket weavers, a soap-making workshop, an entire ecosystem of community livelihoods that intersected with conservation. After the factory tour they asked if I wanted to go on a game drive."},
    {type:"h3", text:"The night the company started."},
    {type:"p", text:"Within minutes we'd seen giraffes. Minutes after that, elephants. We spent the night at the camp on the conservancy. Sitting there, it was obvious: this was where international students should come. Not as tourists. As students learning, in person, where their uniforms come from — and what conservation, manufacturing, and community livelihoods actually look like when they're sitting on the same site."},
    {type:"quote", text:"A school in Dubai could close the loop with a school in Kenya. Their uniform, the people who made it, the children who received it — all in one trip."},
    {type:"p", text:"The first Kapes Adventures trip ran in 2022 with Arbor School — a Community Conservation programme based at the same conservancy where the uniforms are made. We delivered it in partnership with Mountain Quests (UAE). Over the next two years we ran seven trips that way, learning the model, the on-the-ground relationships, and the safeguarding posture before going direct. Then came the second realisation: many of the children who couldn't afford a uniform also couldn't afford to eat. That's where Seeds2Education began — turning unused school land into productive onion farms, with the harvest exchanged through Food for Education to feed students at the same schools we were donating uniforms to."},
    {type:"h3", text:"What the trip is for."},
    {type:"p", text:"In 2025 we began designing and delivering trips directly. We work with Kenyan trip leaders, a Kenyan farm manager, and Kenyan community partners. We don't fly people in to lead — every trip on the ground is run by the people who live in the communities we visit."},
    {type:"p", text:"Six years on from that first uniform, what's clearest is that the trip isn't really about Kenya — at least not in the way that phrase is usually meant. The work in Kenya is real, and the impact is ongoing. Sometimes students help start a project — a water tank, a refurbished classroom. Sometimes they join one already running. Either way, what they help build or plant keeps running long after they leave. The trip is about giving them that week inside it: meaningful exposure, honest contribution, and the kind of perspective that's hard to teach any other way."},
    {type:"p", text:"That's what we sell. That's what we deliver. That's what we're trying to do well."},
  ],
};

// Imported from src/content/blog on kapesadventures.com — 18 posts
const BLOG_POSTS = [
  {slug:"best-service-learning-trips", title:"Best Service Learning Trips for Schools: What to Look For (And What to Avoid)", date:"2026-02-19", category:"Planning", readTime:"10 min", author:"Matthew Benjamin", excerpt:"Not all service learning trips are created equal. Here's how to evaluate providers, compare models, and choose a program that actually serves communities.", img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"},
  {slug:"ethical-school-trips-guide", title:"How to Plan an Ethical School Trip (Without the Voluntourism Baggage)", date:"2026-02-19", category:"Ethical Travel", readTime:"12 min", author:"Matthew Benjamin", excerpt:"What separates a school trip that contributes from one that performs. The questions to ask, the structures to insist on, and how to read between the lines on a brochure.", img:"https://images.unsplash.com/photo-1509099836639-18ba1795216d"},
  {slug:"global-citizenship-school-travel", title:"Global Citizenship Through School Travel: Beyond the Buzzword", date:"2026-02-19", category:"Education", readTime:"11 min", author:"Matthew Benjamin", excerpt:"Every school claims to build 'global citizens.' But what does that actually mean — and can a school trip deliver it? The research says yes, with conditions.", img:"https://images.unsplash.com/photo-1529390079861-591de354faf5"},
  {slug:"ib-cas-trip-ideas", title:"IB CAS Trip Ideas: How to Design Service Experiences That Actually Meet the Requirements", date:"2026-02-19", category:"IB Education", readTime:"10 min", author:"Matthew Benjamin", excerpt:"Most CAS trips are voluntourism with a reflection form. Here's how to design international service experiences that genuinely meet IB requirements — and actually benefit communities.", img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1"},
  {slug:"kenya-school-trip-safety", title:"Is Kenya Safe for School Trips? What Decision-Makers Need to Know", date:"2026-02-19", category:"Planning", readTime:"10 min", author:"Matthew Benjamin", excerpt:"Parents will ask. Governors will ask. Here's the honest, data-backed answer — from a team that operates year-round in Kenya.", img:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"},
  {slug:"service-learning-curriculum-integration", title:"How to Connect Your School Trip to the Classroom (Before, During, and After)", date:"2026-02-19", category:"Curriculum", readTime:"11 min", author:"Matthew Benjamin", excerpt:"A school trip without curriculum integration is a field trip with a longer bus ride. Here's how to make international travel count as real learning.", img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b"},
  {slug:"voluntourism-vs-service-learning", title:"Voluntourism vs Service Learning: How to Tell the Difference", date:"2026-02-12", category:"Ethical Travel", readTime:"10 min", author:"Matthew Benjamin", excerpt:"Your school trip might be voluntourism with better branding. Here's how to tell the difference — and what to do about it.", img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"},
  {slug:"questions-to-ask-school-trip-provider", title:"7 Questions to Ask Before Booking Your Next School Trip", date:"2026-02-05", category:"Planning", readTime:"8 min", author:"Matthew Benjamin", excerpt:"You're about to spend $60,000+ of parent money on a school trip. These 7 questions will tell you more than any brochure.", img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173"},
  {slug:"school-trip-to-kenya", title:"What Actually Happens on a School Trip to Kenya", date:"2026-01-29", category:"Trips", readTime:"10 min", author:"Matthew Benjamin", excerpt:"Not the brochure version. The real day-by-day experience of a Kapes school trip, from permaculture gardens to Maasai Mara.", img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"},
  {slug:"school-trip-transparency", title:"Where Does Your $5,000 Per Student Actually Go?", date:"2026-01-22", category:"Impact", readTime:"8 min", author:"Matthew Benjamin", excerpt:"Most school trip providers won't tell you where the money goes. Here's why that matters and how to demand transparency.", img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f"},
  {slug:"beyond-textbooks-why-educational-trips-create-tomorrow-s-changemakers", title:"Beyond Textbooks: Why Educational Trips Create Tomorrow's Changemakers", date:"2025-06-02", category:"Educational Trips", readTime:"5 min", author:"Matthew Benjamin", excerpt:"Ever wonder what truly prepares students for real-world challenges? It's not just what happens within classroom walls.", img:"https://images.ctfassets.net/qz62f406e9mz/1Una5NZl9gAzEy1bK0zAzz/13b57ba9ded5058a66d2d529213df0e2/A7405653_llao0s.jpg"},
  {slug:"the-surprising-mental-health-benefits-of-nature-based-educational-trips", title:"The Surprising Mental Health Benefits of Nature-Based Educational Trips", date:"2025-05-28", category:"Mental Health", readTime:"5 min", author:"Matthew Benjamin", excerpt:"How seven days outdoors in Kenya measurably changed sleep, focus, and anxiety in a struggling student — and why nature-based trips work where classrooms don't.", img:"https://images.ctfassets.net/qz62f406e9mz/3OtbEUYOX1RrkXNH96dpku/abaaec22d5053c424476c32093af74a0/A7405579_d2t8vq.jpg"},
  {slug:"how-school-trips-develop-global-citizens", title:"How School Trips Develop Global Citizens in an Interconnected World", date:"2025-05-26", category:"Global Citizenship", readTime:"5 min", author:"Matthew Benjamin", excerpt:"Today's students will navigate complex global challenges. Here's how thoughtfully designed international experiences build the cross-cultural awareness those challenges demand.", img:"https://images.ctfassets.net/qz62f406e9mz/7deyxxNLAJPsmB57ybR4Qz/f035ef7cb4f59753b18a17940ae9d74b/A7405562_urfbf7.jpg"},
  {slug:"beyond-giving-creating-social-impact-without-fueling-the-false-african-narrative", title:"Beyond Giving: Creating Social Impact Without Fueling the False African Narrative", date:"2025-05-20", category:"Charity", readTime:"5 min", author:"Matthew Benjamin", excerpt:"Why charity-led narratives flatten Africa into a single story — and how to build school trips that contribute without reinforcing stereotypes.", img:"https://images.ctfassets.net/qz62f406e9mz/786GouEsGclk9YAvdiGOa1/96f12a534f8d841b8773179cdcd5aba6/IMG_0243_qsa6t1.jpg"},
  {slug:"the-transformative-power-of-educational-travel-with-social-impact", title:"The Transformative Power of Educational Travel with Social Impact", date:"2025-05-19", category:"Social Impact", readTime:"5 min", author:"Matthew Benjamin", excerpt:"Why immersive trips with a social mission cut through where traditional teaching plateaus — and what to look for in a programme that actually delivers it.", img:"https://images.ctfassets.net/qz62f406e9mz/3sQaCrLbAZX8Sncephg0Sz/ad0b91eb2887ef1720189c3750ec9503/IMG_2878_nkkymi_uvn1pi.jpg"},
  {slug:"empowering-children-and-building-sustainable-communities-through-free-uniforms", title:"Empowering Children and Building Sustainable Communities through Free Uniforms", date:"2025-05-15", category:"Education", readTime:"5 min", author:"Matthew Benjamin", excerpt:"How a 2003 Kenyan study became the structural insight behind Kapes — and why a school uniform can be the smallest unit of opportunity.", img:"https://images.ctfassets.net/qz62f406e9mz/73oNSs7iw2aA24dBddkJ9P/9b73b449ac954bdf4139a784f18fa56e/1680117964464.png"},
  {slug:"proof-and-practice-in-kenya", title:"Proof and Practice in Kenya — from Survival to Abundance", date:"2025-05-10", category:"Guest Article", readTime:"5 min", author:"Brett Girven", excerpt:"A school principal's reflection on the trip he never expected to take — and what Rukinga Ranch teaches about sustainability, enterprise, and community-led conservation.", img:"https://images.ctfassets.net/qz62f406e9mz/6ScxovBqPke2N1AUqDSZr1/4ae5df1116df74b15d03fabdb73e37ef/1653279581579.jpeg"},
  {slug:"tacklingfoodsecuritythrougheducationinkenya", title:"Tackling Food Security Through Education", date:"2025-05-07", category:"Education", readTime:"5 min", author:"Matthew Benjamin", excerpt:"How Kapes Adventures has turned unused school land into thriving gardens since 2023 — and what daily meals do for hundreds of students who weren't eating before.", img:"https://images.ctfassets.net/qz62f406e9mz/1sFw3iYEB4ufDcmAqZoXi1/a4afa51208ec5fa73d513d03d64b230e/WhatsApp_Image_2025-05-13_at_12.12.32__1_.jpeg"},
];

// Use the auto-generated full-content blog posts loaded from blog-data.js
// (window.BLOG_POSTS is set by that file at <head> time, before JSX loads.)
const FULL_BLOG_POSTS = (typeof window !== "undefined" && window.BLOG_POSTS) ? window.BLOG_POSTS : BLOG_POSTS;

function StoriesHero(){
  return (
    <section style={{background:"var(--cream)", padding:"88px 0 40px", borderBottom:"1px solid var(--line)"}}>
      <div className="container">
        <div style={{maxWidth:780}}>
          <div className="eyebrow">Blog · Field notes & long reads</div>
          <h1 className="display" style={{marginTop:18}}>Things we've <span className="accent">written down.</span></h1>
          <p className="lead" style={{marginTop:22, color:"var(--ink-2)"}}>
            Long reads on ethical travel, IB CAS, service learning, voluntourism vs. real impact, and what actually happens on a school trip to Kenya. Plus a founder note on how the company started.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedFounderCard({ s, onOpen }){
  return (
    <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:40, cursor:"pointer", background:"var(--sand)", padding:28, borderTop:"3px solid var(--orange)", marginBottom:48}} onClick={onOpen}>
      <div style={{aspectRatio:"16/10", overflow:"hidden", borderRadius:4}}>
        <img className="kapes" src={s.img}/>
      </div>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:10}}>Featured · {s.cat}</div>
        <h2 className="display" style={{fontSize:"clamp(28px,3vw,44px)", lineHeight:1.1, marginBottom:16}}>{s.title}</h2>
        <p style={{fontSize:16, lineHeight:1.6, color:"var(--ink-2)", margin:0}}>{s.dek}</p>
        <div style={{marginTop:20, fontSize:12, color:"var(--muted)", letterSpacing:".08em", textTransform:"uppercase", fontWeight:600}}>
          {s.date} · {s.readMin} min read · <span style={{color:"var(--charcoal)"}}>Read →</span>
        </div>
      </div>
    </div>
  );
}

function fmtDate(s){
  // "2026-02-19" → "19 Feb 2026"
  const d = new Date(s.length > 10 ? s : s + "T00:00:00Z");
  if (isNaN(d)) return s;
  return d.toLocaleDateString("en-GB", {day:"numeric", month:"short", year:"numeric"});
}

function BlogCard({ p, onOpen }){
  const img = p.featuredImage || p.img;
  return (
    <div onClick={onOpen} style={{background:"var(--cream)", border:"1px solid var(--line)", display:"flex", flexDirection:"column", cursor:"pointer", transition:"transform .2s, box-shadow .2s"}}
         onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 24px -16px rgba(0,0,0,.18)";}}
         onMouseLeave={(e)=>{e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none";}}>
      <div style={{aspectRatio:"4/3", overflow:"hidden", background:"var(--charcoal)"}}>
        {img ? <img className="kapes" src={img} alt="" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/> : null}
      </div>
      <div style={{padding:22, display:"flex", flexDirection:"column", gap:10, flex:1}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:10}}>
          <span style={{fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700}}>{p.category}</span>
          <span style={{fontSize:10, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>{p.readTime}</span>
        </div>
        <h3 className="display" style={{fontSize:20, lineHeight:1.2, margin:0}}>{p.title}</h3>
        <p style={{fontSize:13, lineHeight:1.55, color:"var(--ink-2)", margin:0, flex:1}}>{p.excerpt}</p>
        <div style={{marginTop:8, paddingTop:12, borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:11, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase", fontWeight:600}}>
          <span>{fmtDate(p.date)}</span>
          <span style={{color:"var(--charcoal)"}}>Read →</span>
        </div>
      </div>
    </div>
  );
}

function BlogIndex({ onOpenFounder, onOpenPost }){
  return (
    <section className="section" style={{padding:"64px 0 96px", background:"var(--cream)"}}>
      <div className="container">
        <FeaturedFounderCard s={FOUNDER_NOTE} onOpen={onOpenFounder}/>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:24, flexWrap:"wrap", gap:12}}>
          <h2 className="display" style={{fontSize:"clamp(24px,2.4vw,34px)", margin:0}}>From the blog</h2>
          <div style={{fontSize:12, letterSpacing:".08em", textTransform:"uppercase", color:"var(--muted)", fontWeight:600}}>{FULL_BLOG_POSTS.length} posts</div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:20}}>
          {FULL_BLOG_POSTS.map(p=> <BlogCard key={p.slug} p={p} onOpen={()=>onOpenPost(p)}/>)}
        </div>
      </div>
    </section>
  );
}

function BlogPost({ p, onBack }){
  // Render the markdown body via marked.js (loaded in index.html)
  const html = React.useMemo(()=>{
    if (!p.body) return "";
    if (typeof window !== "undefined" && window.marked) {
      window.marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });
      return window.marked.parse(p.body);
    }
    return `<pre style="white-space:pre-wrap;">${(p.body||"").replace(/[<>&]/g, c=>({"<":"&lt;",">":"&gt;","&":"&amp;"}[c]))}</pre>`;
  }, [p.body]);
  return (
    <div>
      <section style={{padding:"24px 0", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
        <div className="container" style={{fontSize:12, color:"var(--muted)", letterSpacing:".06em"}}>
          <span style={{cursor:"pointer"}} onClick={onBack}>Blog</span> / <span style={{color:"var(--charcoal)"}}>{p.category}</span>
        </div>
      </section>
      <article style={{padding:"64px 0 40px", background:"var(--cream)"}}>
        <div className="container" style={{maxWidth:760, margin:"0 auto"}}>
          <div style={{fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:14}}>{p.category} · {fmtDate(p.date)}</div>
          <h1 className="display" style={{fontSize:"clamp(36px,4vw,56px)", lineHeight:1.05, marginBottom:24}}>{p.title}</h1>
          {p.excerpt && <p style={{fontSize:20, lineHeight:1.5, color:"var(--ink-2)", fontFamily:"var(--serif)", fontStyle:"italic", borderLeft:"3px solid var(--orange)", paddingLeft:20, margin:"0 0 36px"}}>{p.excerpt}</p>}
          <div style={{display:"flex", gap:16, alignItems:"center", paddingBottom:28, borderBottom:"1px solid var(--line)", marginBottom:36}}>
            <div style={{width:42, height:42, borderRadius:50, background:"var(--charcoal)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--display)", fontSize:13}}>{(p.author||"KA").split(" ").map(x=>x[0]).slice(0,2).join("")}</div>
            <div>
              <div style={{fontSize:13, fontWeight:700}}>{p.author || "Kapes Adventures"}</div>
              <div style={{fontSize:11, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase"}}>{p.authorTitle || "Founder"} · {p.readTime}</div>
            </div>
          </div>
        </div>
        {p.featuredImage && (
          <div className="container" style={{maxWidth:920, margin:"0 auto 40px"}}>
            <div style={{aspectRatio:"16/9", overflow:"hidden", borderRadius:4}}>
              <img className="kapes" src={p.featuredImage}/>
            </div>
          </div>
        )}
        <div className="container" style={{maxWidth:760, margin:"0 auto"}}>
          <div className="blog-body" style={{fontFamily:"var(--serif)", fontSize:17, lineHeight:1.75, color:"#1a1a1a"}} dangerouslySetInnerHTML={{__html: html}}/>
          <div style={{marginTop:40, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap"}}>
            <button className="btn-pill btn-ghost" style={{padding:"12px 20px"}} onClick={onBack}>← Back to blog</button>
            <button className="btn-pill btn-action" style={{padding:"12px 20px"}} onClick={()=>khifiNavigate("contact")}>Talk to Matthew</button>
          </div>
        </div>
      </article>
    </div>
  );
}

function Article({ s, onBack }){
  return (
    <div>
      <section style={{padding:"24px 0", background:"var(--cream)", borderBottom:"1px solid var(--line)"}}>
        <div className="container" style={{fontSize:12, color:"var(--muted)", letterSpacing:".06em"}}>
          <span style={{cursor:"pointer"}} onClick={onBack}>Blog</span> / <span style={{color:"var(--charcoal)"}}>{s.cat}</span>
        </div>
      </section>

      <article style={{padding:"64px 0 40px", background:"var(--cream)"}}>
        <div className="container" style={{maxWidth:760, margin:"0 auto"}}>
          <div style={{fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"var(--orange)", fontWeight:700, marginBottom:14}}>{s.cat} · {s.date}</div>
          <h1 className="display" style={{fontSize:"clamp(40px,4.4vw,64px)", lineHeight:1.05, marginBottom:24}}>{s.title}</h1>
          <p style={{fontSize:22, lineHeight:1.5, color:"var(--ink-2)", fontFamily:"var(--serif)", fontStyle:"italic", borderLeft:"3px solid var(--orange)", paddingLeft:20, margin:"0 0 36px"}}>{s.dek}</p>
          <div style={{display:"flex", gap:16, alignItems:"center", paddingBottom:28, borderBottom:"1px solid var(--line)", marginBottom:36}}>
            <div style={{width:42, height:42, borderRadius:50, background:"var(--charcoal)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"var(--display)", fontSize:13}}>{s.initials || "KA"}</div>
            <div>
              <div style={{fontSize:13, fontWeight:700}}>{s.author || "Kapes Adventures"}</div>
              <div style={{fontSize:11, color:"var(--muted)", letterSpacing:".06em", textTransform:"uppercase"}}>Founder · {s.readMin} min read</div>
            </div>
          </div>
        </div>

        <div className="container" style={{maxWidth:920, margin:"0 auto 40px"}}>
          <div style={{aspectRatio:"16/9", overflow:"hidden", borderRadius:4}}>
            <img className="kapes" src={s.img}/>
          </div>
        </div>

        <div className="container" style={{maxWidth:760, margin:"0 auto"}}>
          <div style={{fontFamily:"var(--serif)", fontSize:18, lineHeight:1.75, color:"#1a1a1a"}}>
            {(s.body || []).map((block, i) => {
              if (block.type === "h3") return <h3 key={i} style={{fontFamily:"var(--display)", fontSize:28, marginTop:36, marginBottom:14, lineHeight:1.15}}>{block.text}</h3>;
              if (block.type === "quote") return <blockquote key={i} style={{fontFamily:"var(--display)", fontSize:30, lineHeight:1.2, color:"var(--charcoal)", borderLeft:"4px solid var(--orange)", paddingLeft:24, margin:"36px 0"}}>"{block.text}"</blockquote>;
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div style={{marginTop:40, display:"flex", gap:16, alignItems:"center", flexWrap:"wrap"}}>
            <button className="btn-pill btn-ghost" style={{padding:"12px 20px"}} onClick={onBack}>← Back to blog</button>
            <button className="btn-pill btn-action" style={{padding:"12px 20px"}} onClick={()=>khifiNavigate("contact")}>Talk to Matthew</button>
          </div>
        </div>
      </article>
    </div>
  );
}

function StoriesPage(){
  const [open, setOpen] = React.useState(null); // {kind:"founder"|"post", data}
  React.useEffect(()=> window.scrollTo(0,0), [open]);
  return (
    <div>
      <SiteNav sticky/>
      {open?.kind === "founder" ? (
        <Article s={open.data} onBack={()=>setOpen(null)}/>
      ) : open?.kind === "post" ? (
        <BlogPost p={open.data} onBack={()=>setOpen(null)}/>
      ) : (
        <>
          <StoriesHero/>
          <BlogIndex
            onOpenFounder={()=>setOpen({kind:"founder", data:FOUNDER_NOTE})}
            onOpenPost={(p)=>setOpen({kind:"post", data:p})}
          />
        </>
      )}
      <Footer/>
    </div>
  );
}
window.StoriesPage = StoriesPage;
