export interface ComparisonPageData {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string;
  heroSubtitle: string;
  eyebrow: string;
  sections: {
    title: string;
    content: string;
    highlight?: string;
  }[];
  comparisonTable?: {
    headers: string[];
    rows: { cells: string[] }[];
  };
  checklist?: {
    title: string;
    items: { text: string; good: string; bad: string }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaHeadline: string;
  ctaSubtext: string;
  primaryCTA: { label: string; url: string };
  secondaryCTA: { label: string; url: string };
}

export const comparisonPages: ComparisonPageData[] = [
  // 1. Ethical School Trips vs Voluntourism
  {
    slug: "ethical-school-trips-vs-voluntourism",
    pageTitle: "Ethical School Trips vs Voluntourism — Know the Difference",
    metaDescription: "Understand the real difference between ethical school trips and voluntourism. Learn how to evaluate your trip program and ensure it benefits communities, not just students.",
    h1: "Ethical school trips vs voluntourism",
    h1Highlight: "voluntourism",
    heroSubtitle: "The label on the brochure doesn't tell you much. The structure of the program tells you everything. Here's how to tell which category your trip falls into.",
    eyebrow: "KNOW THE DIFFERENCE",
    sections: [
      {
        title: "The Quick Test",
        content: "Before you evaluate any trip provider, run through these six questions. The answers will tell you more than any brochure or website ever could.\n\nWho designed the program — the community or the operator? What happens when the students leave — does the project continue? Who leads on the ground — local staff or Western volunteers? What's being measured — student satisfaction or community outcomes? Could locals do this work without outside help? Is the budget shared transparently?",
        highlight: "If you can't answer these questions from the provider's website, that's your first red flag."
      },
      {
        title: "What Voluntourism Looks Like",
        content: "Voluntourism isn't always obvious. It often comes wrapped in good intentions and glossy marketing. Here are five patterns to watch for:\n\n1. The \"service day\" add-on — a single day of painting or building tacked onto what is essentially a safari or sightseeing tour. No preparation, no follow-up, no community input.\n\n2. The rotating project — a different group of students every week working on the same unfinished project. The project never ends because finishing it would mean there's nothing for the next group to do.\n\n3. The orphanage visit — children performing for visiting groups, emotional interactions with strangers, no safeguarding protocols. This has been widely condemned by child welfare organisations.\n\n4. Unskilled tasks given to students — building walls, digging wells, or doing agricultural work that local tradespeople could do better and faster. The work exists for the student experience, not for community benefit.\n\n5. Emotional extraction — the trip is designed to make students feel good about helping. Photos of students surrounded by local children. Tearful departure posts on social media. The community becomes a backdrop for personal growth narratives."
      },
      {
        title: "What Ethical Trips Look Like",
        content: "Ethical school trips share six characteristics that set them apart from voluntourism:\n\n1. Year-round operations — the programs run every day, not just when visitors arrive. Students join ongoing work rather than creating temporary projects.\n\n2. Community-defined priorities — the community decides what it needs. The program responds to those priorities, not to what looks good in a brochure.\n\n3. Local leadership — Kenyan staff lead the programs, make decisions, and hold authority. Western facilitators support rather than direct.\n\n4. Curriculum integration — the trip is embedded in a broader educational framework. Pre-trip learning, on-ground reflection, and post-trip action are all structured.\n\n5. Financial transparency — the provider shares exactly where your money goes. Line-item budgets, community investment percentages, and staff salary information are available before you book.\n\n6. Measured outcomes — the provider tracks and publishes community outcomes, not just student satisfaction scores. Impact is defined by the community, not the operator."
      },
      {
        title: "Why This Matters Now",
        content: "The conversation around voluntourism has shifted dramatically in recent years, and schools that don't adapt risk reputational damage and ethical scrutiny.\n\nStudents are informed — Gen Z students have grown up with social media critiques of voluntourism. They can spot performative charity. They will ask hard questions.\n\nParents are asking questions — parents are increasingly scrutinising school trip providers. They want to know where the money goes and whether the trip genuinely benefits communities.\n\nAccreditation is tightening — school accreditation bodies are beginning to include ethical travel standards in their frameworks. Schools that partner with voluntourism operators may face questions during reviews.",
        highlight: "72% of Gen Z say they want to make a positive impact — but they don't want to be performative about it."
      },
      {
        title: "How Kapes Is Different",
        content: "Kapes Adventures was built specifically to address the problems with voluntourism. Here's what that looks like in practice:\n\nYear-round programs — our community projects operate 365 days a year. When students visit, they join work that's already underway and will continue long after they leave.\n\n72% stays in Kenya — we publish exactly where your money goes. 72% of every programme fee stays in Kenya, funding local salaries, community projects, and infrastructure.\n\nCommunity-led design — our programs are designed with and by the communities we work in. The Kithoka community in Meru County defines priorities, and we build programs around them.\n\nWe don't just avoid voluntourism — we actively work against it. Our Transparency Checklist and Impact Scorecard are designed to help schools evaluate any provider, including us."
      }
    ],
    comparisonTable: {
      headers: ["Question", "Voluntourism", "Ethical Trip"],
      rows: [
        { cells: ["Who designed it?", "Tour operator", "Community + operator together"] },
        { cells: ["What happens when students leave?", "Project pauses", "Work continues year-round"] },
        { cells: ["Who leads on the ground?", "Western staff/volunteers", "Local staff in leadership"] },
        { cells: ["What's measured?", "Student satisfaction", "Community outcomes"] },
        { cells: ["Could locals do this work?", "Yes — students displace skilled workers", "Students support, not replace"] },
        { cells: ["Is the budget shared?", "Rarely", "Line-item budget shared before booking"] }
      ]
    },
    faqs: [
      {
        question: "Is all voluntourism bad?",
        answer: "Not necessarily, but the structural problems with voluntourism are well-documented. The issue isn't individual intentions — it's program design. When trips are built around student experience rather than community benefit, harm follows regardless of good intentions. The key is evaluating the structure, not the marketing."
      },
      {
        question: "How do I verify that a trip is genuinely ethical?",
        answer: "Ask for a line-item budget. Ask who designed the program. Ask what happens when students aren't there. Ask for community references — not testimonials from past students, but feedback from the communities themselves. If a provider can't answer these questions transparently, that tells you something."
      },
      {
        question: "Can voluntourism be reformed?",
        answer: "Some providers are making genuine efforts to shift toward community-led models. The question is whether the fundamental structure has changed — not just the language. A voluntourism program that rebrands as 'service learning' without changing its operations hasn't actually reformed."
      },
      {
        question: "What questions should I ask my current trip provider?",
        answer: "Start with these: Do your programs operate year-round? Can you share a line-item budget? Who leads on the ground? What community outcomes do you measure? Can I speak with community members directly? Our Transparency Checklist provides a full evaluation framework."
      }
    ],
    ctaHeadline: "Not sure where your trip falls?",
    ctaSubtext: "Take the Impact Scorecard to evaluate your current or planned school trip against ethical benchmarks. It takes 3 minutes and gives you a clear picture.",
    primaryCTA: { label: "Score My Trip Program", url: "/scorecard" },
    secondaryCTA: { label: "Download the Transparency Checklist", url: "/resources/transparency-checklist" }
  },

  // 2. School Trip to Kenya Cost Breakdown
  {
    slug: "school-trip-to-kenya-cost-breakdown",
    pageTitle: "School Trip to Kenya Cost Breakdown — Transparent Pricing",
    metaDescription: "How much does a school trip to Kenya actually cost? See a full cost breakdown, where the money goes, and how to compare providers on price and transparency.",
    h1: "How much does a school trip to Kenya actually cost?",
    h1Highlight: "actually cost",
    heroSubtitle: "Most trip providers won't share where your money goes. We will. Here's what a school trip to Kenya actually costs — and where every pound and dollar ends up.",
    eyebrow: "TRANSPARENT PRICING",
    sections: [
      {
        title: "Typical Cost Range",
        content: "A school trip to Kenya typically costs between $3,000 and $5,500 per student for a 7-10 day program. Here's where that money usually goes:\n\nInternational flights: 30-35% of total cost\nAccommodation: 15-20%\nIn-country transport: 10-15%\nMeals: 8-12%\nProgram fees (activities, guides, materials): 15-20%\nOperator margin: 5-10%\n\nThe exact cost depends on your departure city, group size, trip duration, and what's included. Larger groups typically get better per-student rates because fixed costs (transport, guides) are spread across more participants.",
        highlight: "$3,000–$5,500 per student for 7-10 days is the typical range."
      },
      {
        title: "Where the Money Goes (Industry Average)",
        content: "In the typical school trip model, more than 70% of the money leaves the community it claims to serve.\n\nWestern operators take 15-25% as margin. International hotels and lodge chains capture accommodation revenue. Marketing, sales, and administration overhead absorb another significant chunk. Ground transport may use international fleet companies.\n\nThe community itself — the people your students will meet and work alongside — often receives less than 20% of the total program cost. In some cases, it's less than 10%.\n\nThis isn't a criticism of every operator. It's a structural reality of how most international school trips are priced and delivered."
      },
      {
        title: "Where the Money Goes (Kapes)",
        content: "At Kapes Adventures, 72% of every program fee stays in Kenya. Here's what that means in practice:\n\nLocal staff salaries — our year-round Kenyan team is paid competitive wages, not seasonal contract rates.\n\nCommunity project funding — permaculture gardens, water systems, educational infrastructure are funded directly from program fees.\n\nLocal accommodation and transport — we use community-owned and locally-operated accommodation and transport wherever possible.\n\nWe share a line-item budget with every school before booking. You'll see exactly where every pound and dollar goes. No hidden fees, no opaque margins.\n\nWe believe that if a provider won't share their budget, you should ask why.",
        highlight: "72% of every Kapes program fee stays in Kenya."
      },
      {
        title: "What's Included vs Not Included",
        content: "Included in the Kapes program fee:\n— All accommodation during the program\n— All meals (breakfast, lunch, dinner)\n— All in-country transport\n— All program activities and excursions\n— Local guides and community facilitators\n— Comprehensive travel insurance coverage\n— Pre-trip and post-trip curriculum materials\n— 24/7 on-ground support team\n— Emergency protocols and medical support\n\nNot included:\n— International flights (we help you find the best routes and prices)\n— Personal travel insurance (required — we provide guidance on coverage)\n— Kenya eVisa ($51 USD per person)\n— Personal spending money\n— Optional add-on excursions (safari extension, etc.)"
      },
      {
        title: "How to Compare Providers on Price",
        content: "Price alone doesn't tell you much. Here are five questions to ask when comparing provider quotes:\n\n1. What's included in the headline price? Some providers advertise a low per-student fee but exclude meals, activities, or transport.\n\n2. Can you share a line-item budget? If the answer is no, you're being asked to trust without verification.\n\n3. What percentage stays in the destination community? This is the single most important question. Push for a specific number.\n\n4. Are there hidden costs that will emerge later? Ask about supplementary charges, tipping expectations, or mandatory add-ons.\n\n5. How does group size affect pricing? A provider quoting for 15 students and one quoting for 30 students aren't comparable without understanding the per-student economics."
      },
      {
        title: "Payment Plans & Financial Aid",
        content: "We understand that school trip costs are significant for families. Here's how we make it more manageable:\n\nFlexible payment plans — we work with schools to set up monthly payment schedules, typically starting 9-12 months before departure.\n\nGroup fundraising support — we provide fundraising guides and templates that schools can use to offset costs. Many schools successfully fundraise 20-40% of the total trip cost.\n\nBursary guidance — we help schools identify external funding sources and bursary programmes that can support students from lower-income families.\n\nEarly booking discounts — schools that confirm 12+ months in advance receive preferential pricing.\n\nWe believe cost should never be the reason a student misses out on a genuinely transformative experience."
      }
    ],
    faqs: [
      {
        question: "What does the program fee include?",
        answer: "The program fee covers all accommodation, meals, in-country transport, activities, guides, curriculum materials, and on-ground support. International flights, personal travel insurance, Kenya eVisa, and personal spending money are not included. We provide a detailed breakdown before booking."
      },
      {
        question: "Can we see a line-item budget before booking?",
        answer: "Yes — this is standard practice at Kapes. We share a complete line-item budget with every school before they commit. You'll see exactly how much goes to accommodation, staff, community projects, transport, meals, and our operational margin. We believe this should be an industry standard."
      },
      {
        question: "How does Kapes compare on price to other providers?",
        answer: "Our pricing is competitive with other quality providers — typically in the $3,500-4,500 range per student for a 7-10 day program. The difference isn't the total cost; it's where the money goes. 72% stays in Kenya, compared to an industry average where less than 30% reaches the community."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No. The price we quote is the price you pay. We don't add supplementary charges, mandatory tipping, or surprise add-ons. The only costs outside the program fee are international flights, eVisa, personal travel insurance, and personal spending money — all of which are clearly communicated upfront."
      },
      {
        question: "What about international flights?",
        answer: "International flights are not included in the program fee because prices vary significantly depending on departure city and booking time. We provide guidance on the best routes, airlines, and booking strategies for your specific departure city. For UK schools, return flights to Nairobi typically cost £400-700 per person."
      }
    ],
    ctaHeadline: "Ready to see exactly where your money goes?",
    ctaSubtext: "Get a custom quote with a full line-item budget for your school group. No obligation, complete transparency.",
    primaryCTA: { label: "Get a Custom Quote", url: "calendly" },
    secondaryCTA: { label: "Download the Transparency Checklist", url: "/resources/transparency-checklist" }
  },

  // 3. How to Plan an Ethical School Trip to Kenya
  {
    slug: "how-to-plan-an-ethical-school-trip-to-kenya",
    pageTitle: "How to Plan an Ethical School Trip to Kenya — Step-by-Step Guide",
    metaDescription: "A practical step-by-step guide to planning an ethical school trip to Kenya. From defining goals to post-trip reflection, with timeline and checklist included.",
    h1: "How to plan an ethical school trip to Kenya",
    h1Highlight: "ethical",
    heroSubtitle: "Planning a school trip to Kenya that benefits communities — not just students — takes more than good intentions. Here's the practical guide.",
    eyebrow: "STEP-BY-STEP GUIDE",
    sections: [
      {
        title: "Step 1: Define Your Goals",
        content: "Before you contact any provider, get clear on what your school wants to achieve.\n\nCurriculum integration — which subjects and learning outcomes will this trip support? Geography, biology, social studies, and global citizenship are common links, but the best trips connect to your specific syllabus.\n\nCommunity benefit — what genuine value will this trip create for the host community? If the answer is 'our students will help,' push deeper. Help how? Defined by whom?\n\nStudent outcomes — beyond 'life-changing experience,' what specific skills, knowledge, or perspectives should students gain? Define these before you start shopping for providers.",
        highlight: "The best school trips start with curriculum goals, not destination brochures."
      },
      {
        title: "Step 2: Evaluate Providers",
        content: "Use these seven questions to evaluate any school trip provider:\n\n1. Do your programs operate year-round, or only when visitors arrive?\n2. Can you share a line-item budget showing where the money goes?\n3. Who leads on the ground — local staff or Western facilitators?\n4. What community outcomes do you measure and publish?\n5. How was the program designed — by the community or the operator?\n6. Can we speak with community members directly?\n7. What pre-trip and post-trip curriculum do you provide?\n\nAny provider that can't answer all seven of these clearly and confidently should raise concerns. Don't accept vague answers about 'working with local partners' — ask for specifics."
      },
      {
        title: "Step 3: Plan the Curriculum",
        content: "An ethical school trip isn't a standalone event — it's embedded in a broader learning journey.\n\nPre-trip modules (4-6 weeks before departure):\n— Introduction to Kenyan history, geography, and culture\n— Understanding ethical travel and the voluntourism debate\n— Community context and the specific projects they'll engage with\n— Language basics (Swahili greetings and essential phrases)\n— Photography ethics and media consent\n\nOn-ground learning:\n— Daily structured reflection sessions\n— Guided observation and journaling\n— Direct engagement with community members as teachers\n— Skill-specific workshops (permaculture, conservation, etc.)\n\nPost-trip reflection (2-4 weeks after return):\n— Structured debrief sessions\n— Impact assessment and data analysis\n— Action planning for continued engagement\n— Presentation to school community"
      },
      {
        title: "Step 4: Prepare Parents",
        content: "Parent communication is one of the most important — and most overlooked — parts of trip planning.\n\nInformation evening — hold a dedicated parent information session at least 4 months before departure. Cover logistics, safety, costs, curriculum, and the ethical framework.\n\nSafety documentation — share your full risk assessment, insurance details, emergency protocols, and health preparation requirements. Parents deserve complete transparency.\n\nFinancial transparency — share the budget breakdown. Show parents where their money goes. If your provider won't give you this information, that's a problem.\n\nCommunication plan — establish how you'll communicate during the trip. Daily photo updates, emergency contact chains, and scheduled check-ins reduce parent anxiety significantly.\n\nWe provide schools with parent communication templates, FAQ documents, and presentation materials as part of our pre-trip package."
      },
      {
        title: "Step 5: Prepare Students",
        content: "Student preparation goes beyond packing lists. Here's what ethical trip preparation looks like:\n\nContext building — students should understand the community they're visiting, the history of development aid, and the specific challenges and strengths of the region. This isn't poverty tourism — it's mutual learning.\n\nEthical frameworks — discuss the difference between charity and solidarity, voluntourism and ethical engagement. Students who understand these concepts are better travellers.\n\nPhotography guidelines — establish clear rules about photographing local people, especially children. Always ask permission. Never share images that reduce people to their circumstances.\n\nExpectation setting — be honest about what the trip will and won't be. It won't be a holiday. It won't be a charity mission. It will be challenging, uncomfortable at times, and deeply rewarding."
      },
      {
        title: "Step 6: On the Ground",
        content: "The on-ground experience should balance structured learning with genuine community engagement.\n\nDaily structure — each day should include program activities, reflection time, and free time. Overscheduling prevents deep learning.\n\nReflection practice — daily guided reflection sessions help students process what they're experiencing. Use journals, group discussions, and creative expression.\n\nCommunity protocols — follow the lead of community hosts. Dress modestly. Ask before photographing. Accept hospitality graciously. Remember that you are guests.\n\nFlexibility — the best moments often aren't planned. Build in space for unexpected conversations, spontaneous learning, and genuine human connection."
      },
      {
        title: "Step 7: After the Trip",
        content: "What happens after the trip matters as much as the trip itself.\n\nStructured reflection — hold formal debrief sessions within 2 weeks of return. Students need space to process, question, and integrate their experiences.\n\nImpact reporting — share the community impact data with students. How did their visit contribute? What outcomes resulted? This closes the loop between experience and evidence.\n\nReturn visits and ongoing engagement — the most powerful trips are the beginning of a relationship, not a one-off experience. Multi-year programs create deeper impact for both students and communities.\n\nSchool community sharing — students should present their experiences and learnings to the wider school community, modelling ethical storytelling and avoiding saviour narratives."
      },
      {
        title: "Planning Timeline",
        content: "Here's a recommended timeline for planning an ethical school trip to Kenya:\n\n12 months before departure — begin research. Define goals, review providers, consult stakeholders.\n\n9 months — select your provider. Begin formal school approval process.\n\n6 months — book the trip. Secure dates, begin payment plans, confirm logistics.\n\n4 months — start pre-trip curriculum. Hold parent information evening.\n\n2 months — final parent briefing. Complete health preparations (vaccinations, malaria prophylaxis). Apply for eVisas.\n\n1 month — final preparations. Packing lists, travel documents, communication plan confirmed.\n\nStarting earlier is always better. Popular periods (October half-term, Easter, June-July) book up quickly.",
        highlight: "Start planning 12 months ahead for the best dates and preparation time."
      }
    ],
    faqs: [
      {
        question: "How far in advance should we start planning?",
        answer: "We recommend starting 12 months before your intended travel date. This gives time for provider evaluation, school board approval, parent communication, curriculum development, and practical preparations. Popular travel periods book up 9-12 months ahead."
      },
      {
        question: "What approvals do I need from my school?",
        answer: "This varies by school, but typically you'll need approval from your head of department, senior leadership team, and governing body. Many schools also require approval from their educational visits coordinator and compliance with their own risk assessment frameworks. We provide documentation to support each of these approval stages."
      },
      {
        question: "How do I get school board approval?",
        answer: "Present a clear proposal covering educational objectives, curriculum links, ethical framework, risk management, costs, provider credentials, and community impact. Include the provider's line-item budget and impact data. Schools that frame the trip as a curriculum extension rather than an 'experience' tend to gain approval more easily."
      },
      {
        question: "How do I handle parent concerns?",
        answer: "Transparency is the best strategy. Share everything: budget breakdowns, risk assessments, safety protocols, daily schedules, communication plans. Hold an in-person information evening. Provide written materials they can review. Most parent concerns dissolve when they see the level of preparation and transparency involved."
      }
    ],
    ctaHeadline: "Ready to start planning?",
    ctaSubtext: "Download our comprehensive ethical planning guide with checklists, templates, and timelines — or schedule a call to discuss your school's specific needs.",
    primaryCTA: { label: "Download the Ethical Planning Guide", url: "/resources/ethical-planning-guide" },
    secondaryCTA: { label: "Schedule a Planning Call", url: "calendly" }
  },

  // 4. School Trip Kenya Safety Guide
  {
    slug: "school-trip-kenya-safety-guide",
    pageTitle: "Is Kenya Safe for School Trips? — Health & Safety Guide",
    metaDescription: "Everything you need to know about safety, health, and risk management for school trips to Kenya. Vaccinations, insurance, emergency protocols, and parent communication.",
    h1: "Is Kenya safe for school trips?",
    h1Highlight: "safe",
    heroSubtitle: "Yes — with the right preparation and local expertise. Here's everything you need to know about safety, health, and risk management for school trips to Kenya.",
    eyebrow: "HEALTH & SAFETY",
    sections: [
      {
        title: "Safety Overview",
        content: "Kenya hosts thousands of school groups from around the world every year. The key to a safe and successful school trip is experienced local partners, thorough preparation, and proper risk management.\n\nThe areas where Kapes operates — Meru County and the surrounding region — are safe, stable, and welcoming to international visitors. We've been running programs in these communities for years with an excellent safety record.\n\nLike any international travel, a school trip to Kenya requires preparation. But with the right provider, the right protocols, and the right information, it's no more risky than any other international educational trip.",
        highlight: "Kenya hosts thousands of international school groups every year."
      },
      {
        title: "Health Precautions",
        content: "Health preparation is straightforward but must be started early.\n\nVaccinations — consult a travel health clinic at least 8 weeks before departure. Commonly recommended vaccinations include:\n— Yellow Fever (required for entry from some countries)\n— Hepatitis A and B\n— Typhoid\n— Routine boosters (MMR, tetanus, polio)\n\nMalaria prophylaxis — Kenya is a malaria-risk country. Anti-malarial medication is strongly recommended. Your travel clinic will advise on the best option (commonly Malarone or Doxycycline). We also implement mosquito prevention measures including repellent, bed nets, and appropriate clothing.\n\nTravel clinic visit — we recommend all participants visit a travel health clinic 8 weeks before departure. We provide a health preparation guide with specific recommendations for your trip dates and locations."
      },
      {
        title: "On-Ground Safety",
        content: "Safety on the ground is our top priority. Here's how we manage it:\n\n24/7 local staff — our Kenyan team is present at all times. They know the area, the people, and the protocols intimately.\n\nTrained rangers on excursions — any wildlife or nature excursions include trained and certified rangers. Students are never in uncontrolled wildlife situations.\n\nVetted accommodation — all accommodation is personally vetted by our team for safety, hygiene, and appropriateness. We conduct regular reviews and inspections.\n\nEmergency protocols — we maintain comprehensive emergency response procedures covering medical emergencies, natural events, security situations, and evacuation scenarios.\n\nNearest hospitals mapped — every program location has pre-identified medical facilities. We maintain relationships with local hospitals and clinics and have evacuation protocols for serious medical situations."
      },
      {
        title: "Travel Insurance",
        content: "Comprehensive travel insurance is required for all participants. Insurance must cover:\n\n— Medical treatment abroad\n— Medical evacuation and repatriation\n— Trip cancellation and curtailment\n— Personal belongings and documents\n— Personal liability\n\nWe recommend policies specifically designed for educational or adventure travel, which typically provide higher medical and evacuation coverage. We can recommend specific insurers who understand school trip requirements.\n\nSchools should ensure their own institutional insurance covers educational visits abroad. We provide documentation to support insurance applications."
      },
      {
        title: "Food & Water",
        content: "Food and water safety is managed carefully throughout the program.\n\nWater — all drinking water is bottled or filtered. We provide refillable water bottles and ensure clean water access at all locations. Students should not drink tap water.\n\nFood safety — all meals are prepared at vetted facilities with proper hygiene standards. We work with experienced local cooks who understand international dietary needs and food safety requirements.\n\nDietary accommodations — we accommodate vegetarian, vegan, gluten-free, halal, kosher, and allergy-specific requirements. We collect dietary information during registration and communicate with all food providers in advance.\n\nFresh fruit should be washed or peeled. We brief students on food safety on arrival."
      },
      {
        title: "Communication",
        content: "Staying connected is important for safety and parent peace of mind.\n\nWiFi availability — WiFi is available at accommodation. It may be limited or unavailable at some program sites and during excursions.\n\nLocal SIM cards — we can arrange local SIM cards for teachers/group leaders. Kenyan mobile coverage is generally good in our operating areas.\n\nParent communication schedule — we establish a regular communication schedule before departure. Daily photo updates and brief status messages keep parents informed without overwhelming them.\n\nEmergency contact chain — a clear emergency contact chain is established before departure. Parents receive a 24/7 emergency number that connects directly to our team on the ground and UK support."
      },
      {
        title: "Risk Assessment",
        content: "We take risk management seriously and follow international best practice.\n\nFull risk assessment shared — we share our complete risk assessment documentation with schools before booking. This covers all activities, transport, accommodation, health, and emergency scenarios.\n\nBS8848 aligned — our safety management system is aligned with BS8848, the British Standard for organising and managing visits, fieldwork, expeditions, and adventurous activities outside the United Kingdom.\n\nUpdated quarterly — our risk assessments are living documents, updated quarterly and reviewed after every program. Any incidents or near-misses trigger immediate review and protocol updates.\n\nSchools are welcome to conduct their own risk assessments using our documentation, and we support educational visits coordinators through the approval process."
      },
      {
        title: "What Parents Need to Know",
        content: "We provide comprehensive information for parents at every stage.\n\nPre-departure information pack — every family receives a detailed information pack covering health preparation, packing lists, safety protocols, daily schedule, and communication plans.\n\nDaily photo updates — parents receive daily photos and brief updates from the trip, giving them visibility into what their children are experiencing.\n\nEmergency protocol shared in advance — parents receive the full emergency contact chain, including the 24/7 Kenya number and UK support contacts, before departure.\n\nParent information evening — we support schools in running parent information evenings, either in person or via video call. We're happy to join these sessions to answer questions directly."
      }
    ],
    faqs: [
      {
        question: "What vaccinations are required for Kenya?",
        answer: "Yellow Fever vaccination may be required depending on your country of origin. Hepatitis A, Hepatitis B, and Typhoid are strongly recommended. Your travel health clinic will provide specific advice based on your medical history and the trip details. Visit a clinic at least 8 weeks before departure."
      },
      {
        question: "Is malaria a risk in Kenya?",
        answer: "Yes, Kenya is a malaria-risk country. Anti-malarial medication is strongly recommended for all travellers. We also implement preventive measures including insect repellent, bed nets, and appropriate clothing (long sleeves and trousers in the evening). Your travel clinic will recommend the most appropriate medication."
      },
      {
        question: "What about wildlife safety?",
        answer: "All wildlife excursions are led by trained, certified rangers. Students receive a safety briefing before any wildlife activity. We operate in controlled environments and follow strict protocols for vehicle-based and walking safari experiences. Students are never in uncontrolled wildlife situations."
      },
      {
        question: "What if someone gets sick during the trip?",
        answer: "Our team includes first aid trained staff, and we have pre-identified medical facilities near every program location. For minor illnesses, we have on-site first aid capabilities. For anything more serious, we have evacuation protocols to get participants to the nearest appropriate medical facility. Travel insurance covers medical treatment and evacuation."
      },
      {
        question: "Is the water safe to drink?",
        answer: "Tap water should not be consumed. We provide bottled and filtered water at all times. Students are given refillable water bottles and we ensure clean water access at every location. Ice in drinks at vetted restaurants is generally safe, but we advise caution."
      },
      {
        question: "How do we communicate with parents during the trip?",
        answer: "We establish a parent communication plan before departure. This typically includes daily photo updates via a secure platform, a regular text/email update from the group leader, and a 24/7 emergency phone number that connects to our team on the ground. WiFi is available at accommodation for students to message home."
      }
    ],
    ctaHeadline: "Want to see our full safety protocols?",
    ctaSubtext: "Review our comprehensive health and safety documentation, or schedule a call with our team to discuss your specific concerns.",
    primaryCTA: { label: "See Our Full Safety Protocols", url: "/health-and-safety" },
    secondaryCTA: { label: "Book a Call", url: "calendly" }
  },

  // 5. Kenya School Trip Visa Requirements
  {
    slug: "kenya-school-trip-visa-requirements",
    pageTitle: "Kenya Visa Requirements for School Trips — Complete Guide",
    metaDescription: "Everything you need to know about Kenya visa requirements for school groups. eVisa process, passport requirements, group application tips, and student-specific documentation.",
    h1: "Kenya visa requirements for school trips",
    h1Highlight: "visa requirements",
    heroSubtitle: "Everything you need to know about visas, entry requirements, and travel documents for school groups visiting Kenya.",
    eyebrow: "TRAVEL LOGISTICS",
    sections: [
      {
        title: "eVisa System",
        content: "Kenya uses an electronic visa (eVisa) system for most international visitors. Here's what you need to know:\n\nApplication website: evisa.go.ke\nCost: $51 USD per person\nProcessing time: 2-3 business days (apply at least 4 weeks before travel to allow for any delays)\nValidity: Single entry, valid for 90 days from date of issue\nStay duration: Up to 90 days\n\nThe eVisa replaced the previous visa-on-arrival system in 2024. All visitors must have an approved eVisa before arriving in Kenya. Do not plan to obtain a visa at the airport.\n\nThe application process is straightforward but requires careful attention to detail. We provide step-by-step guidance for every school group."
      },
      {
        title: "Requirements by Nationality",
        content: "Here's a quick overview of visa requirements by common nationalities for school trips:\n\nUnited Kingdom — eVisa required. Apply at evisa.go.ke. $51 USD. British passport holders have a straightforward application process.\n\nUnited States — eVisa required. Apply at evisa.go.ke. $51 USD. US passport holders follow the standard application process.\n\nUnited Arab Emirates — eVisa required for most nationalities. Some UAE passport holders may qualify for visa-free entry. Check current regulations based on nationality, not residency.\n\nAustralia — eVisa required. Apply at evisa.go.ke. $51 USD. Standard application process.\n\nCanada — eVisa required. Apply at evisa.go.ke. $51 USD. Standard application process.\n\nEU countries — eVisa required for all EU nationalities. Apply at evisa.go.ke. $51 USD.\n\nFor international schools with students of multiple nationalities, we provide nationality-specific guidance for each student."
      },
      {
        title: "Group Application Tips",
        content: "Managing visas for a school group takes coordination. Here's how to make it efficient:\n\nDesignate one coordinator — one teacher or administrator should manage the entire group's visa applications. This ensures consistency and avoids duplicate applications.\n\nCollect all passport scans early — at least 8 weeks before travel, collect clear scans of every passport's data page. Check validity dates immediately.\n\nApply as a batch — submit all applications in a 2-3 day window so they process together. This makes it easier to track and follow up.\n\nKeep confirmation PDFs backed up — save all eVisa confirmations in multiple locations: email, cloud storage, and a USB drive.\n\nCarry printed copies — every traveller should carry a printed copy of their eVisa approval, even though it's linked electronically to their passport. Immigration officers occasionally ask for the printed confirmation.\n\nSet calendar reminders — set reminders for the application deadline (4 weeks before travel) and for the follow-up check (1 week after submission)."
      },
      {
        title: "Passport Requirements",
        content: "Every participant's passport must meet these requirements:\n\nValidity — passport must be valid for at least 6 months beyond your intended travel dates. If a student's passport expires within 6 months of the trip, they need to renew before applying for the eVisa.\n\nBlank pages — at least 2 blank pages are required for entry stamps.\n\nMachine-readable — the passport must be machine-readable (the vast majority of current passports are, but check older passports).\n\nImportant: check all passports early. Passport renewals can take 4-10 weeks depending on the country. A last-minute passport renewal can derail the entire group's travel plans."
      },
      {
        title: "Student-Specific Requirements",
        content: "Travelling with minors requires additional documentation:\n\nParent/guardian consent letter — every student under 18 must carry a signed consent letter from their parent or legal guardian authorising international travel. This should be notarised where possible.\n\nSchool letter — a letter on school letterhead confirming the trip purpose, dates, and the responsible teacher's details. This should list all participating students.\n\nEmergency contacts — each student must have documented emergency contacts accessible to trip leaders at all times.\n\nMedical information — carry copies of any relevant medical information, prescriptions, and allergy documentation for each student.\n\nWe provide templates for all of these documents as part of our pre-trip preparation package."
      },
      {
        title: "What Kapes Handles",
        content: "We don't process visas on your behalf, but we make the process as smooth as possible:\n\nStep-by-step visa guides — we provide detailed, nationality-specific guides with screenshots and instructions for the eVisa application.\n\nReminder timeline — we build visa application deadlines into your trip preparation timeline so nothing gets missed.\n\nTemplate letters — we provide templates for parent consent letters, school letters, and all supporting documentation required for minors.\n\nSupport throughout the process — if anyone in your group encounters issues with their application, our team is available to help troubleshoot.\n\nMulti-nationality support — for international schools with students from many countries, we provide individual guidance for each nationality's specific requirements."
      }
    ],
    faqs: [
      {
        question: "How long does the eVisa take to process?",
        answer: "The official processing time is 2-3 business days, but it can occasionally take longer. We recommend applying at least 4 weeks before travel to allow for any delays. In rare cases, additional documentation may be requested, which can extend processing by 1-2 weeks."
      },
      {
        question: "What if a student has dual nationality?",
        answer: "Students with dual nationality should apply using the passport they intend to travel with. If one of their nationalities has visa-free access to Kenya, they may wish to use that passport. The key is consistency — the passport used for the eVisa application must be the same passport used at immigration."
      },
      {
        question: "Can we apply as a group?",
        answer: "The eVisa system processes individual applications, but you can submit them as a batch through one coordinator. Each applicant needs their own application with their own passport details. We recommend one person managing all applications for consistency and tracking."
      },
      {
        question: "What documents do minors need?",
        answer: "In addition to the eVisa and valid passport, minors need: a signed and notarised parent/guardian consent letter authorising travel, a school letter confirming the trip purpose and responsible teacher, emergency contact details, and copies of any relevant medical information. We provide templates for all documents."
      },
      {
        question: "What if a visa is denied?",
        answer: "eVisa denials are rare for standard school trip applications. If denied, the applicant can reapply after addressing the reason for denial. Common issues include passport validity problems, incomplete applications, or poor quality passport scans. If this happens, contact us immediately and we'll help troubleshoot."
      }
    ],
    ctaHeadline: "Ready to start planning your trip?",
    ctaSubtext: "Schedule a call to discuss logistics, timelines, and preparation for your school group's trip to Kenya.",
    primaryCTA: { label: "Start Planning Your Trip", url: "calendly" },
    secondaryCTA: { label: "Download the Ethical Planning Guide", url: "/resources/ethical-planning-guide" }
  },

  // 6. Best Time to Visit Kenya for School Trips
  {
    slug: "best-time-to-visit-kenya-for-school-trips",
    pageTitle: "Best Time to Visit Kenya for School Trips — Seasonal Guide",
    metaDescription: "When is the best time to visit Kenya for a school trip? Seasonal guide covering weather, wildlife, school calendar alignment, and booking timelines.",
    h1: "Best time to visit Kenya for school trips",
    h1Highlight: "best time",
    heroSubtitle: "Kenya works year-round for school trips — but some months are better for specific activities. Here's the practical guide to timing your trip.",
    eyebrow: "TRIP PLANNING",
    sections: [
      {
        title: "Kenya's Seasons",
        content: "Kenya has four distinct seasons that affect trip planning:\n\nLong rains (March–May) — the heaviest rainfall period. Roads can become difficult, some outdoor activities are limited. Generally best to avoid for school trips, although the landscape is at its greenest.\n\nShort rains (October–November) — brief afternoon showers that rarely disrupt activities. The landscape is green and lush. This is actually a great period for school trips — fewer tourists, lower prices, and the rain usually falls in short bursts.\n\nDry season 1 (June–September) — cool and dry. This is peak season for wildlife viewing as animals congregate around water sources. Temperatures are comfortable (18-25°C). The Great Migration is in the Masai Mara during July-October.\n\nDry season 2 (December–February) — hot and dry. Excellent weather with clear skies. Good wildlife viewing. Temperatures range from 22-30°C.",
        highlight: "Kenya's equatorial location means temperatures are consistent year-round: 20-30°C at most program locations."
      },
      {
        title: "Best Months by Activity",
        content: "Different activities peak at different times:\n\nWildlife viewing — July to October is prime time. Animals are easier to spot near water sources, and the Great Migration passes through the Masai Mara.\n\nPermaculture and garden projects — year-round. The gardens operate continuously, and different seasons offer different learning opportunities (planting, growing, harvesting).\n\nWater projects — dry season (June-September, December-February) is best for construction and installation work. The impact of water access is also most visible during dry periods.\n\nConservation projects — year-round. Wildlife conservation work happens every day regardless of season.\n\nCultural immersion — year-round. Community life continues through all seasons. Different times of year offer different cultural experiences and celebrations."
      },
      {
        title: "School Calendar Alignment",
        content: "The best time for your trip depends on when your school calendar allows:\n\nUK schools:\n— October half-term (late Oct): great weather, end of short rains, fewer tourists\n— Easter break (Mar-Apr): end of long rains, green landscapes, shoulder season pricing\n— End of summer term (Jun-Jul): peak wildlife season, warm and dry\n\nUS schools:\n— Spring break (Mar-Apr): moderate weather, some rain possible, good pricing\n— Summer (Jun-Aug): peak season, best wildlife, warm and dry\n\nUAE and Singapore international schools:\n— Winter break (Dec-Jan): hot and dry, excellent weather, good wildlife\n— Spring break (Mar-Apr): moderate, some rain possible\n\nAustralian schools:\n— Term 2 break (Jul): peak wildlife, cool and dry\n— Term 3 break (Sep-Oct): excellent conditions, migration season\n— Summer holidays (Dec-Jan): hot and dry, great weather"
      },
      {
        title: "Our Programs Run Year-Round",
        content: "Unlike safari companies that depend on seasonal wildlife patterns, our community programs operate every single day of the year.\n\nThe permaculture gardens are always growing. The water systems need maintenance year-round. Conservation work never stops. Community life continues regardless of season.\n\nThis means the best time for your school trip is when your school calendar allows. We don't have an 'off season' because our programs aren't built around tourist seasons — they're built around community needs.\n\nThat said, we're happy to advise on optimal dates based on your specific curriculum goals and activity preferences. If wildlife is a priority, we'll steer you toward June-October. If you want the greenest landscapes and best pricing, October-November might be ideal."
      },
      {
        title: "Weather & What to Pack",
        content: "Kenya's equatorial location means relatively consistent temperatures year-round. Here's what to expect:\n\nDaytime temperatures: typically 22-28°C at our program locations\nMorning/evening temperatures: can drop to 15-18°C, especially June-August\nRainfall: varies by season (see above), but rain is usually brief and warm\n\nPacking essentials for any season:\n— Layers for morning and evening (a fleece or light jacket)\n— Rain jacket or lightweight waterproof\n— Sun protection (hat, sunscreen SPF50, sunglasses)\n— Closed-toe shoes for fieldwork and walking\n— Lightweight, breathable clothing for daytime\n— Long sleeves and trousers for evenings (mosquito protection)\n\nSee our full packing list for detailed guidance."
      },
      {
        title: "Booking Timeline",
        content: "Timing your booking is almost as important as timing your trip.\n\n9-12 months ahead — ideal booking window. You get the best date selection, time for thorough preparation, and often the best pricing.\n\n6-9 months ahead — still good availability for most periods. Some popular dates (October half-term, Easter) may have limited availability.\n\n3-6 months ahead — possible but tight. Less date flexibility and compressed preparation time.\n\nLess than 3 months — we can sometimes accommodate last-minute groups, but preparation quality suffers and availability is limited.\n\nPopular periods that book earliest:\n— UK October half-term\n— Easter break\n— June-July (end of UK summer term)\n— July-August (US summer)\n\nIf you're considering a trip, the best time to reach out is now — even if the trip is a year away.",
        highlight: "Book 9-12 months ahead for the best dates and preparation time."
      }
    ],
    faqs: [
      {
        question: "Can we visit during the rainy season?",
        answer: "Yes, with some caveats. The short rains (October-November) are perfectly fine for school trips — rain falls in brief afternoon showers and rarely disrupts activities. The long rains (March-May) are heavier and can affect some outdoor activities and travel, so we generally don't recommend this period for school groups."
      },
      {
        question: "What's the weather like in [specific month]?",
        answer: "Contact us with your preferred month and we'll give you specific weather expectations, activity recommendations, and any considerations. Generally, June-September is cool and dry, December-February is hot and dry, March-May has the heaviest rain, and October-November has brief afternoon showers."
      },
      {
        question: "How far in advance should we book?",
        answer: "We recommend booking 9-12 months ahead for the best date selection and preparation time. Popular periods (UK October half-term, Easter, June-July) can fill up 12 months in advance. Even if your trip is a year away, reaching out now helps secure your preferred dates."
      },
      {
        question: "Is it too hot for students?",
        answer: "Our program locations in Meru County sit at moderate altitude, keeping temperatures comfortable year-round (typically 22-28°C during the day). The hottest period is December-February, but it's a dry heat and manageable with proper sun protection and hydration. We schedule outdoor activities for cooler parts of the day."
      }
    ],
    ctaHeadline: "Ready to choose your dates?",
    ctaSubtext: "Check availability for your preferred travel period and get personalised recommendations for your school group.",
    primaryCTA: { label: "Check Available Dates", url: "calendly" },
    secondaryCTA: { label: "Download the Ethical Planning Guide", url: "/resources/ethical-planning-guide" }
  },

  // 7. School Trip Kenya Packing List
  {
    slug: "school-trip-kenya-packing-list",
    pageTitle: "What to Pack for a School Trip to Kenya — Packing List & Guidelines",
    metaDescription: "The essential packing list for students and teachers heading to Kenya. Includes clothing, health items, tech, ethical photography guidelines, and cultural awareness tips.",
    h1: "What to pack for a school trip to Kenya",
    h1Highlight: "pack",
    heroSubtitle: "The essential packing list for students and teachers heading to Kenya — plus ethical photography and cultural awareness guidelines.",
    eyebrow: "TRIP PREPARATION",
    sections: [
      {
        title: "Essentials",
        content: "These are your non-negotiable items. Check them first:\n\n— Passport (must be valid for at least 6 months beyond travel dates)\n— Printed eVisa confirmation\n— Travel insurance documents (printed and digital copies)\n— Emergency contact information\n— Copies of all documents (one set in your carry-on, one set digital in cloud storage)\n— Consent letters for minors (notarised)\n— Medical information and prescription documentation\n— School letter confirming trip purpose\n\nPro tip: take photos of all documents on your phone and email them to yourself. If anything gets lost, you have instant access to copies."
      },
      {
        title: "Clothing",
        content: "Pack for warm days, cooler evenings, fieldwork, and community visits:\n\n— Lightweight long-sleeved shirts (3-4) — sun protection and mosquito protection in evenings\n— Long trousers for fieldwork (2-3 pairs) — lightweight but durable\n— Shorts for downtime (1-2 pairs)\n— Closed-toe shoes or boots — essential for fieldwork, walking, and garden work\n— Comfortable walking sandals — for accommodation and casual time\n— Warm layer — a fleece or lightweight jacket for mornings and evenings (temperatures drop to 15-18°C)\n— Rain jacket — lightweight and packable\n— Wide-brimmed hat — essential for sun protection\n— Swimwear — some accommodations have pools\n— Modest clothing for community visits — shoulders and knees covered. This is a sign of respect, not a restriction.\n— Sleepwear\n— Enough underwear and socks for the trip (laundry may not always be available)\n\nAvoid: all-white clothing (gets dirty quickly), camouflage patterns (associated with military in Kenya), and overly branded or expensive clothing."
      },
      {
        title: "Health & Safety",
        content: "Health preparation items you'll need:\n\n— Prescribed malaria tablets (start before departure as directed)\n— Insect repellent containing DEET 50%+ (essential — apply every evening)\n— Sunscreen SPF50 (apply generously and reapply throughout the day)\n— Basic personal first aid kit (plasters, antiseptic wipes, blister pads, pain relief)\n— Hand sanitiser (small bottles — useful throughout the day)\n— Refillable water bottle (at least 1 litre capacity)\n— Any personal medication (with doctor's letter if prescription)\n— Lip balm with SPF\n— Rehydration sachets (useful in hot weather)\n\nThe school group will also carry a comprehensive group first aid kit. Students should carry their personal medication on them at all times."
      },
      {
        title: "Tech & Learning",
        content: "Pack smart, not heavy:\n\n— Camera or smartphone (for documenting the experience — see ethical photography guidelines below)\n— Notebook and pen/pencil (for journaling and reflection)\n— Portable charger/power bank (essential — charge it fully before departure)\n— UK-to-Kenya power adapter — Kenya uses Type G sockets, the same as the UK. US, EU, and other nationalities will need an adapter.\n— Small torch or headlamp (useful for evenings and early mornings)\n— Headphones (for travel days)\n— E-reader or book (for downtime)\n\nOptional but useful:\n— Binoculars (for wildlife viewing)\n— Reusable bag (for daily excursions)\n\nLeave behind: laptops (not needed), gaming devices (you won't miss them), expensive cameras with extensive gear."
      },
      {
        title: "What NOT to Pack",
        content: "Some items are best left at home — and here's why:\n\nExcessive electronics — this trip is about being present, not being online. One phone or camera is enough.\n\nFlashy jewellery or expensive accessories — unnecessary and creates an unhelpful visual contrast in community settings.\n\nWhite saviour t-shirts — this includes any clothing with 'charity mission,' 'saving the world,' or similar messaging. You're visiting as learners, not saviours.\n\nItems to 'give away' to children — this is a well-intentioned but harmful practice. Giving gifts to children you don't know reinforces dependency, creates inequality between children who receive gifts and those who don't, and encourages begging. If you want to contribute, we channel all donations through community-defined priorities.\n\nExcessive amounts of cash — you won't need much spending money. We'll advise on an appropriate amount.\n\nPlastic bags — Kenya has one of the strictest plastic bag bans in the world. Plastic bags are illegal to import, and you can be fined at customs."
      },
      {
        title: "Ethical Photography Guidelines",
        content: "Photography is a powerful tool for learning and documentation — but it requires ethical awareness:\n\nAlways ask permission — before photographing any person, ask their permission. A smile and a gesture toward your camera works if there's a language barrier. Respect a 'no.'\n\nDon't photograph children without guardian consent — this is a safeguarding issue. Our team will facilitate appropriate photography opportunities with proper consent.\n\nAvoid poverty porn — don't seek out images that emphasise hardship, deprivation, or suffering. These images reduce complex people to their circumstances.\n\nFocus on agency, not helplessness — photograph people doing things, making things, building things. Show strength, skill, and dignity.\n\nAsk before sharing on social media — before posting any images online, consider how the people in the photos would feel about it. When in doubt, don't share.\n\nWe provide a comprehensive ethical photography guide as part of our pre-trip curriculum. We'll discuss this in detail before you arrive."
      },
      {
        title: "Cultural Awareness",
        content: "A few cultural guidelines that will enrich your experience:\n\nDress modestly in communities — shoulders and knees covered is the standard for community visits. This shows respect for local customs.\n\nAsk before photographing — this bears repeating because it's important. Always ask.\n\nLearn basic Swahili greetings:\n— Jambo — Hello\n— Habari — How are you?\n— Asante — Thank you\n— Asante sana — Thank you very much\n— Karibu — Welcome / You're welcome\n— Pole pole — Slowly slowly (a Kenyan life philosophy)\n\nRemove shoes when asked — at some homes and community buildings, it's customary to remove shoes before entering. Follow your host's lead.\n\nFollow community guides' lead — your community hosts know the protocols. Follow their guidance on behaviour, dress, and interaction. When in doubt, ask.\n\nAccept hospitality graciously — if offered food or drink, accept with both hands (a sign of respect in many Kenyan cultures). Even a small taste shows appreciation."
      }
    ],
    faqs: [
      {
        question: "What plug adapters do I need?",
        answer: "Kenya uses Type G sockets — the same as the United Kingdom. If you're travelling from the UK, you don't need an adapter. US, European, Australian, and other nationalities will need a Type G adapter. We recommend a universal travel adapter to cover all bases."
      },
      {
        question: "Can I do laundry during the trip?",
        answer: "Laundry facilities may be available at some accommodation, but we don't guarantee it for every location. For a 7-10 day trip, we recommend packing enough clothing for the full duration. Some students hand-wash lightweight items. We'll confirm laundry availability for your specific itinerary."
      },
      {
        question: "What about dietary restrictions?",
        answer: "We accommodate all common dietary requirements including vegetarian, vegan, gluten-free, halal, kosher, and specific allergies. We collect this information during registration and communicate with all food providers. Kenyan cuisine naturally includes many vegetarian and vegan options."
      },
      {
        question: "Will I have phone and WiFi access?",
        answer: "WiFi is available at accommodation. Coverage varies at program sites — some locations have mobile signal, some don't. We can arrange local SIM cards for teachers. We recommend students use this as an opportunity to disconnect and be present. They'll have WiFi each evening to message home."
      },
      {
        question: "How much spending money should I bring?",
        answer: "Most expenses are covered by the program fee. We typically recommend $50-100 USD equivalent for personal purchases (souvenirs, extra drinks, etc.) for a 7-10 day trip. Local ATMs are available in larger towns, and some craft markets accept cards. We'll provide specific guidance before your trip."
      }
    ],
    ctaHeadline: "Get the full preparation pack",
    ctaSubtext: "Our comprehensive preparation guide includes detailed packing lists, cultural guidelines, health preparation checklists, and pre-trip curriculum materials.",
    primaryCTA: { label: "Get the Full Preparation Pack", url: "/resources/ethical-planning-guide" },
    secondaryCTA: { label: "Schedule a Preparation Call", url: "calendly" }
  },

  // 8. School Trip Provider Comparison Kenya
  {
    slug: "school-trip-provider-comparison-kenya",
    pageTitle: "How to Choose a School Trip Provider for Kenya — Comparison Guide",
    metaDescription: "How to evaluate and compare school trip providers for Kenya. Comparison framework, red flags, green flags, and a practical evaluation process.",
    h1: "How to choose a school trip provider for Kenya",
    h1Highlight: "choose",
    heroSubtitle: "Not all school trip companies are built the same. Here's how to evaluate providers and find one that matches your school's values.",
    eyebrow: "PROVIDER COMPARISON",
    sections: [
      {
        title: "The 5 Questions That Matter",
        content: "You can evaluate any school trip provider with five questions. If they can answer all five clearly and transparently, they're worth considering.\n\n1. Do your programs operate year-round? — Programs that only exist when visitors arrive are built for tourists, not communities.\n\n2. Can you share a line-item budget? — If a provider won't show you where the money goes, ask yourself why.\n\n3. Who leads on the ground? — Look for local staff in leadership positions, not Western volunteers managing local helpers.\n\n4. What community outcomes do you measure? — Student satisfaction is easy to measure. Community impact requires actual commitment to tracking.\n\n5. Do you provide pre-trip and post-trip curriculum? — A trip without educational scaffolding is just travel. The learning should start weeks before departure and continue after return.",
        highlight: "These five questions will tell you more than any marketing brochure."
      },
      {
        title: "Comparison Framework",
        content: "Here's how three common types of school trip providers typically compare across eight key dimensions. Use this as a starting framework for your evaluation.\n\nProgram design — Traditional tour operators design around destinations and experiences. Voluntourism providers design around volunteer projects. Community-led partners design around community priorities.\n\nWho leads on the ground — Tour operators use international guides. Voluntourism providers mix Western and local staff. Community-led partners put local staff in leadership.\n\nWhat's measured — Tour operators measure satisfaction and logistics. Voluntourism providers measure volunteer hours and student feedback. Community-led partners measure community outcomes and long-term impact.\n\nPricing transparency — Tour operators provide package prices. Voluntourism providers may share some costs. Community-led partners share full line-item budgets.\n\nContinuity — Tour operators run seasonal trips. Voluntourism providers run project-based programs. Community-led partners operate year-round.\n\nCurriculum integration — Tour operators rarely provide curriculum. Voluntourism providers offer basic orientation. Community-led partners deliver structured pre/post curriculum.\n\nCommunity role — Tour operators use communities as destinations. Voluntourism providers use communities as project sites. Community-led partners treat communities as equal partners and decision-makers.\n\nTransparency — Tour operators have standard commercial opacity. Voluntourism providers vary widely. Community-led partners publish impact data and budgets openly."
      },
      {
        title: "Red Flags to Watch For",
        content: "These warning signs should make you pause and ask more questions:\n\nProjects that only exist during visits — if the school garden, building project, or community activity only happens when student groups are present, it exists for the students, not the community.\n\nNo budget transparency — any provider that won't share where your money goes is hiding something. This isn't proprietary business information — it's basic accountability.\n\nWestern staff leading in-country — if the people making decisions and leading programs on the ground are all from the provider's home country, that's a power dynamic problem.\n\n\"Voluntourism\" with a rebrand — some providers have simply replaced the word 'voluntourism' with 'service learning' or 'global citizenship' without changing the underlying model. Look at the structure, not the language.\n\nOrphanage visits — this practice has been widely condemned by UNICEF, Save the Children, and other child welfare organisations. Any provider that includes orphanage visits in their program is not keeping up with ethical standards.\n\nNo community outcome data — if a provider can't tell you what measurable impact their programs have had on the community, they're probably not measuring it."
      },
      {
        title: "Green Flags",
        content: "These are positive indicators that a provider takes ethical engagement seriously:\n\nYear-round operations — programs that run every day, not just during visit season, demonstrate genuine community commitment.\n\nLine-item budgets shared before booking — complete financial transparency is the gold standard. You should know exactly where every dollar goes.\n\nLocal staff in leadership — Kenyan (or host-country) staff holding decision-making authority, not just implementation roles.\n\nPublished impact data — providers who publicly share their community impact reports with specific metrics and outcomes.\n\nPre-trip curriculum — structured learning that begins weeks before departure, covering context, ethics, and preparation.\n\nCommunity references available — willingness to connect you with community members who can speak about the partnership from their perspective, not just past student testimonials.\n\nClear media and safeguarding policies — documented policies on photography, social media, and interactions with minors."
      },
      {
        title: "What Makes Kapes Different",
        content: "We built Kapes Adventures specifically to address the gaps we saw in the school trip industry. Here's what that looks like:\n\nYear-round programs — our community projects in Kithoka, Meru County operate 365 days a year. Permaculture gardens grow daily. Water systems need year-round maintenance. Conservation work never stops.\n\n72% stays in Kenya — we publish our budget breakdown. 72% of every program fee stays in Kenya, funding local salaries, community infrastructure, and ongoing programs.\n\nKenyan-led — our on-ground team is Kenyan. They lead programs, make decisions, and hold authority. Western staff support but don't direct.\n\nPublished impact reports — we share our impact data publicly. Community outcomes, not just student satisfaction, define our success.\n\nPre/post curriculum — every school receives structured curriculum materials for before, during, and after the trip.\n\nCommunity-defined priorities — the Kithoka community defines what they need. We design programs around those priorities. They have veto power. We don't."
      },
      {
        title: "How to Run a Provider Evaluation",
        content: "Here's a practical process for evaluating providers:\n\n1. Use the Transparency Checklist — our free checklist provides a structured framework for evaluating any provider (including us) against ethical benchmarks.\n\n2. Schedule calls with 2-3 providers — don't just read websites. Talk to the team. Ask the hard questions. Listen to how they respond when challenged.\n\n3. Ask for community references — not student testimonials, not school leader quotes. Ask to speak with someone from the community itself.\n\n4. Compare budgets side by side — if a provider won't share a budget, they can't be compared. That tells you something.\n\n5. Check for year-round evidence — look at social media, blogs, impact reports. Is there evidence of activity between student visit seasons?\n\n6. Present options to your school board — once you've narrowed to 2-3 providers, present a comparison using the criteria above. Let the data drive the decision."
      }
    ],
    comparisonTable: {
      headers: ["Dimension", "Traditional Tour Operator", "Voluntourism Provider", "Community-Led Partner"],
      rows: [
        { cells: ["Program design", "Destination-focused", "Project-focused", "Community-priority focused"] },
        { cells: ["Who leads", "International guides", "Mix of Western + local", "Local staff in leadership"] },
        { cells: ["What's measured", "Satisfaction + logistics", "Volunteer hours + feedback", "Community outcomes + impact"] },
        { cells: ["Pricing", "Package price", "Some cost sharing", "Full line-item budget"] },
        { cells: ["Continuity", "Seasonal trips", "Project-based", "Year-round operations"] },
        { cells: ["Curriculum", "Rarely provided", "Basic orientation", "Structured pre/post curriculum"] },
        { cells: ["Community role", "Destination", "Project site", "Equal partner"] },
        { cells: ["Transparency", "Standard commercial", "Varies widely", "Open data + budgets"] }
      ]
    },
    checklist: {
      title: "Provider Evaluation Quick Reference",
      items: [
        { text: "Program operations", good: "Runs year-round", bad: "Only during student visits" },
        { text: "Budget transparency", good: "Full line-item shared", bad: "Package price only" },
        { text: "Ground leadership", good: "Local staff lead", bad: "Western staff lead" },
        { text: "Impact measurement", good: "Published community outcomes", bad: "Student satisfaction only" },
        { text: "Curriculum support", good: "Pre/post trip materials", bad: "No educational scaffolding" },
        { text: "Community voice", good: "References available", bad: "No community input visible" },
        { text: "Safeguarding", good: "Clear documented policies", bad: "No visible policies" },
        { text: "Financial flow", good: "Majority stays in-country", bad: "Majority leaves community" }
      ]
    },
    faqs: [
      {
        question: "How many providers should I evaluate?",
        answer: "We recommend evaluating 2-3 providers in depth. More than that becomes overwhelming without adding much clarity. Use the Transparency Checklist to do an initial screening, then shortlist for detailed conversations."
      },
      {
        question: "What's a reasonable budget for a school trip to Kenya?",
        answer: "Expect $3,000-5,500 per student for a 7-10 day program, excluding international flights. The exact cost depends on group size, trip duration, and what's included. Be wary of prices that seem too low — that usually means corners are being cut on community investment or safety."
      },
      {
        question: "How do I present options to my school board?",
        answer: "Create a comparison document using the five key questions and eight comparison dimensions. Include budget breakdowns (if providers will share them), ethical credentials, curriculum alignment, and community impact data. Frame the decision around educational value and ethical alignment, not just cost."
      },
      {
        question: "Can I switch providers mid-planning cycle?",
        answer: "Yes, though it's easier the earlier you make the switch. If you're more than 6 months from departure, switching is usually straightforward. If you're closer to departure, it depends on availability and the specifics of your existing booking. Talk to us — we've helped schools transition from other providers before."
      }
    ],
    ctaHeadline: "Evaluate your provider — or find the right one",
    ctaSubtext: "Use our free tools to evaluate any school trip provider against ethical benchmarks, or score your current trip program.",
    primaryCTA: { label: "Download the Transparency Checklist", url: "/resources/transparency-checklist" },
    secondaryCTA: { label: "Score Your Current Provider", url: "/scorecard" }
  }
];
