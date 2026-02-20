export interface CurriculumPageData {
  slug: string;
  subject: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string;
  heroSubtitle: string;
  heroImage: string;
  eyebrow: string;
  targetAudience: string;
  stats: { label: string; value: string }[];
  curriculumTopics: {
    title: string;
    icon: string;
    description: string;
    examBoardLinks?: string[];
  }[];
  threePhasesDescription: string;
  preTrip: string;
  onGround: string;
  postTrip: string;
  examBoards?: {
    name: string;
    alignments: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaHeadline: string;
  ctaSubtext: string;
  internalLinks: { label: string; url: string }[];
}

export const curriculumPages: CurriculumPageData[] = [
  {
    slug: "biology-school-trips-to-kenya",
    subject: "Biology / Ecology",
    pageTitle: "Biology School Trips to Kenya | A-Level & GCSE Ecology Field Study",
    metaDescription:
      "Plan a GCSE or A-Level Biology field trip to Kenya. Students study savanna ecosystems, biodiversity, population ecology, and conservation — real fieldwork, not textbook diagrams.",
    h1: "Ecology in action in Kenya",
    h1Highlight: "Kenya",
    heroSubtitle:
      "A-Level and GCSE Biology field trips with real ecology fieldwork. Your students study savanna ecosystems, wildlife corridors, and conservation science — led by the researchers and communities doing the work.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
    eyebrow: "A-LEVEL & GCSE BIOLOGY FIELD STUDY",
    targetAudience: "UK GCSE & A-Level Biology Teachers",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Level", value: "GCSE + A-Level" },
      { label: "Boards", value: "AQA, OCR, Edexcel" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Ecosystem Ecology",
        icon: "TreePine",
        description:
          "Study savanna ecosystems first-hand, including trophic levels, energy flow through food webs, and nutrient cycling in one of Africa's most complex biomes.",
        examBoardLinks: ["AQA Unit 4 Populations", "OCR Module 6 Ecology"],
      },
      {
        title: "Biodiversity & Conservation",
        icon: "Leaf",
        description:
          "Explore the Kasigau wildlife corridor — a critical conservation area. Students conduct species identification, measure biodiversity indices, and evaluate conservation strategies.",
        examBoardLinks: ["Edexcel Topic 4 Biodiversity"],
      },
      {
        title: "Population Ecology",
        icon: "Users",
        description:
          "Apply population sampling techniques to real wildlife populations. Study carrying capacity, predator-prey dynamics, and population growth models in the field.",
        examBoardLinks: ["AQA Unit 4 Populations"],
      },
      {
        title: "Adaptation & Evolution",
        icon: "Dna",
        description:
          "Observe Kenyan wildlife adaptations in their natural habitat. Document natural selection in action and study how organisms have evolved to thrive in savanna conditions.",
        examBoardLinks: ["OCR Module 6 Ecology", "IB Biology Topic 4"],
      },
      {
        title: "Human Impact on Environment",
        icon: "Factory",
        description:
          "Investigate deforestation, land use change, and sustainable agriculture. See how community-led conservation balances human needs with environmental protection.",
        examBoardLinks: ["AQA Unit 5 Energy", "Edexcel Topic 4"],
      },
      {
        title: "Practical Field Skills",
        icon: "ClipboardList",
        description:
          "Master sampling techniques, data collection methods, and transect surveys. Students gain hands-on experience with quadrats, line transects, and statistical analysis.",
        examBoardLinks: ["All boards — Practical endorsement"],
      },
    ],
    threePhasesDescription:
      "This is not a safari with a biology worksheet. Every trip includes structured pre-trip preparation, on-ground fieldwork led by ecologists and local experts, and post-trip analysis designed to produce coursework-ready data.",
    preTrip:
      "Curriculum modules covering Kenyan ecosystems, species identification guides, and research question development. Students arrive field-ready.",
    onGround:
      "Daily ecology fieldwork sessions with local conservation scientists. Students collect primary data using professional sampling techniques in real ecosystems.",
    postTrip:
      "Structured data analysis connecting fieldwork to exam content. Students produce coursework-ready ecological investigations and biodiversity reports.",
    examBoards: [
      {
        name: "AQA",
        alignments: [
          "Unit 4 Populations in Ecosystems",
          "Unit 5 Energy Transfers",
          "Required Practical — Ecology",
        ],
      },
      {
        name: "OCR",
        alignments: [
          "Module 6 Ecology & Conservation",
          "Practical Skills in Biology",
          "Biodiversity Classification",
        ],
      },
      {
        name: "Edexcel",
        alignments: [
          "Topic 4 Biodiversity & Natural Resources",
          "Practical Biology Skills",
          "Ecosystems & Sustainability",
        ],
      },
      {
        name: "IB Biology",
        alignments: [
          "Topic 4 Ecology",
          "Option C Ecology & Conservation",
          "Internal Assessment Fieldwork",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this count as biology fieldwork?",
        answer:
          "Yes. The trip is designed to satisfy fieldwork and practical endorsement requirements across AQA, OCR, and Edexcel A-Level and GCSE Biology specifications. Students collect primary ecological data using professional sampling techniques — all mapped to your exam board's practical criteria.",
      },
      {
        question: "What species will students study?",
        answer:
          "Students study a wide range of species across savanna, dryland forest, and coastal ecosystems. This includes large mammals (elephants, giraffes, zebras), bird species, invertebrates, and plant communities. Species identification is integrated into biodiversity assessments and population ecology activities.",
      },
      {
        question: "What equipment do students need to bring?",
        answer:
          "We provide all specialist ecology equipment including quadrats, transect tapes, identification guides, data logging tools, and water testing kits. Students should bring a notebook, pencils, and a camera. A full kit list is provided 6 weeks before departure.",
      },
      {
        question: "Is lab work available during the trip?",
        answer:
          "Yes. We have access to basic laboratory facilities for water quality testing, soil analysis, and microscopy work. Students can process field samples and conduct controlled investigations to complement their fieldwork data.",
      },
      {
        question: "How do you ensure safety around wildlife?",
        answer:
          "All wildlife activities are led by experienced local guides with extensive knowledge of animal behaviour. We maintain safe distances, follow established protocols, and conduct thorough risk assessments for every field site. Our safety record reflects years of hosting school groups responsibly.",
      },
    ],
    ctaHeadline: "Ready to bring biology off the page?",
    ctaSubtext:
      "Your students don't need another diagram of an ecosystem. They need to stand in a savanna, count species in a quadrat, and see ecology happening in real time.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Seeds2Education", url: "/programs/seeds2education" },
      { label: "Environmental Science Trips", url: "/environmental-science-school-trips-kenya" },
      { label: "Geography Trips", url: "/geography-school-trips-to-kenya" },
      { label: "Health & Safety", url: "/health-and-safety" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "ib-cas-trips-to-kenya",
    subject: "IB CAS (Creativity, Activity, Service)",
    pageTitle: "IB CAS Trips to Kenya | CAS-Aligned Service Learning",
    metaDescription:
      "IB CAS trips to Kenya that cover all three strands — Creativity, Activity, and Service. Structured reflection, CAS project opportunities, and real community impact. Not voluntourism.",
    h1: "IB CAS trips that actually count in Kenya",
    h1Highlight: "actually count",
    heroSubtitle:
      "CAS trips designed with IB coordinators, not bolted onto a travel itinerary. Your students complete meaningful Creativity, Activity, and Service hours with structured reflection — all within year-round community programmes.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg",
    eyebrow: "IB CAS-ALIGNED SERVICE LEARNING",
    targetAudience: "IB CAS Coordinators & DP Teachers",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Coverage", value: "All 3 CAS Strands" },
      { label: "Framework", value: "IB Recognised" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Creativity",
        icon: "Palette",
        description:
          "Photography documentation of community programmes, design thinking workshops for community challenges, and storytelling projects that capture local voices and perspectives.",
      },
      {
        title: "Activity",
        icon: "Hammer",
        description:
          "Hands-on permaculture garden work, water system installation alongside local teams, and conservation treks through the Kasigau corridor with wildlife researchers.",
      },
      {
        title: "Service",
        icon: "Heart",
        description:
          "Contribute to the Seeds2Education feeding programme, support community-defined goals, and engage with projects that run year-round — not activities invented for visitors.",
      },
      {
        title: "Reflection",
        icon: "BookOpen",
        description:
          "Structured reflection journals, guided daily debriefs, and connections to Global Issues. Students develop the reflective practice that CAS demands — not just a tick-box diary.",
      },
      {
        title: "CAS Project",
        icon: "Target",
        description:
          "Multi-day sustained project meeting IB CAS project requirements. Students collaborate with community members on initiatives with measurable outcomes and ongoing impact.",
      },
      {
        title: "Global Engagement",
        icon: "Globe",
        description:
          "Direct alignment with UN Sustainable Development Goals, ethical engagement frameworks, and genuine community partnership that goes beyond surface-level voluntourism.",
      },
    ],
    threePhasesDescription:
      "CAS isn't something you bolt on after the trip. Our programme integrates Creativity, Activity, and Service into every day — with structured reflection that helps students articulate their learning for CAS portfolios.",
    preTrip:
      "CAS strand mapping workshops, ethical engagement preparation, and goal-setting. Students understand the communities they'll work with before they arrive.",
    onGround:
      "Daily activities covering all three CAS strands with guided reflection sessions. Students document experiences for their CAS portfolios in real time.",
    postTrip:
      "Portfolio completion support, final reflections connecting experiences to global issues, and verification documentation for CAS coordinators.",
    faqs: [
      {
        question: "How many CAS hours does the trip provide?",
        answer:
          "A typical 7-10 day trip provides 40-60+ documented CAS hours across all three strands. The exact breakdown depends on the itinerary, but every day includes structured Creativity, Activity, and Service components with documented hours.",
      },
      {
        question: "Does this count as a CAS project?",
        answer:
          "Yes. The trip includes a multi-day sustained project that meets IB CAS project requirements — collaborative, with a clear beginning and end, and producing measurable outcomes. Students work alongside community members on initiatives that continue after they leave.",
      },
      {
        question: "What documentation do students receive?",
        answer:
          "Students receive a comprehensive CAS documentation package including daily hour logs by strand, supervisor verification letters, photographic evidence, reflection prompts aligned to IB requirements, and a trip summary suitable for CAS portfolio submission.",
      },
      {
        question: "How does structured reflection work?",
        answer:
          "Daily guided reflection sessions use IB-aligned prompts covering the five CAS learning outcomes. Students maintain reflection journals throughout the trip, participate in group debriefs, and complete a final reflection connecting their experiences to broader global issues.",
      },
      {
        question: "Can IB coordinators verify the experience?",
        answer:
          "Absolutely. We provide direct communication with CAS coordinators before, during, and after the trip. Verification letters, activity descriptions, and hour breakdowns are provided in a format designed for CAS portfolio requirements.",
      },
    ],
    ctaHeadline: "CAS that goes beyond checking a box",
    ctaSubtext:
      "Your students deserve CAS experiences with real community impact — not manufactured activities designed for Instagram. Talk to us about building a trip that your CAS coordinator will actually be proud of.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Global Citizenship", url: "/global-citizenship-school-trips-kenya" },
      { label: "Service Learning (High School)", url: "/service-learning-programs-kenya-high-school" },
      { label: "Seeds2Education", url: "/programs/seeds2education" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "global-citizenship-school-trips-kenya",
    subject: "Global Citizenship Education",
    pageTitle: "Global Citizenship School Trips to Kenya | SDG-Aligned Education",
    metaDescription:
      "Global citizenship trips to Kenya aligned with UN SDGs. Students develop intercultural competence, systems thinking, and ethical engagement — not voluntourism with good intentions.",
    h1: "Global citizenship starts on the ground in Kenya",
    h1Highlight: "on the ground",
    heroSubtitle:
      "Global citizenship education that moves beyond classroom theory. Students engage with real communities, develop intercultural competence, and understand systemic challenges — all through an anti-voluntourism framework.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
    eyebrow: "GLOBAL CITIZENSHIP EDUCATION",
    targetAudience: "Heads of Global Citizenship & Service Learning",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Framework", value: "SDG-Aligned" },
      { label: "Includes", value: "Pre + Post Curriculum" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "SDG Alignment",
        icon: "Goal",
        description:
          "Map activities to specific UN Sustainable Development Goals — SDG 2 Zero Hunger, SDG 5 Gender Equality, SDG 6 Clean Water, SDG 13 Climate Action, and SDG 15 Life on Land.",
      },
      {
        title: "Intercultural Competence",
        icon: "Users",
        description:
          "Community-led learning, genuine cultural exchange, and perspective-taking that develops real intercultural understanding — not surface-level tourism encounters.",
      },
      {
        title: "Systems Thinking",
        icon: "Network",
        description:
          "Understand how food security, education, water access, and gender equity connect. Students see how changing one variable affects the entire system.",
      },
      {
        title: "Ethical Engagement",
        icon: "Shield",
        description:
          "Anti-voluntourism framework, analysis of power dynamics, ethical photography guidelines, and honest conversations about privilege and responsibility.",
      },
      {
        title: "Active Citizenship",
        icon: "HandHelping",
        description:
          "Community-defined participation where local people set the priorities. Students contribute to work that's already happening — not projects designed for visitors.",
      },
      {
        title: "Critical Reflection",
        icon: "Brain",
        description:
          "Move beyond 'I'm grateful for what I have' to genuine systemic understanding. Structured reflection that builds critical thinking about global inequality.",
      },
    ],
    threePhasesDescription:
      "Global citizenship is not a stamp in a passport. Our programme builds understanding before, during, and after the trip — so students return with genuine perspective, not just photographs.",
    preTrip:
      "SDG workshops, ethical engagement frameworks, and intercultural preparation. Students examine their own assumptions before they travel.",
    onGround:
      "Community-led activities, daily reflection sessions, and real engagement with systems thinking. Students learn from community leaders, not about them.",
    postTrip:
      "Critical reflection connecting experiences to systemic issues. Students develop action plans for continued engagement and demonstrate global competence.",
    faqs: [
      {
        question: "How is this different from voluntourism?",
        answer:
          "Everything about our approach is designed to avoid the voluntourism trap. Our programmes run year-round with or without visiting students. Community members lead the work and set the priorities. Students join existing programmes — they don't arrive to 'build a school' or 'save' anyone. We discuss power dynamics openly and critically.",
      },
      {
        question: "What SDGs does the trip cover?",
        answer:
          "The trip directly engages with SDG 2 (Zero Hunger) through food security programmes, SDG 5 (Gender Equality) through women's cooperatives, SDG 6 (Clean Water) through water harvesting projects, SDG 13 (Climate Action) through carbon credit work, and SDG 15 (Life on Land) through conservation corridors.",
      },
      {
        question: "How do students demonstrate global competence?",
        answer:
          "Students demonstrate global competence through structured reflection journals, systems-mapping exercises, ethical engagement analysis, and a final project connecting their experiences to systemic issues. We provide assessment frameworks aligned to global citizenship competency models.",
      },
      {
        question: "Is this aligned with PSHE/Citizenship curricula?",
        answer:
          "Yes. The programme aligns with UK PSHE and Citizenship requirements, as well as international frameworks for Global Citizenship Education. We provide curriculum mapping documents showing connections to specific learning objectives.",
      },
    ],
    ctaHeadline: "Global citizenship isn't a stamp in a passport",
    ctaSubtext:
      "Your students don't need another charity fundraiser or awareness campaign. They need to sit with communities, understand systems, and see what ethical engagement actually looks like.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "IB CAS Trips", url: "/ib-cas-trips-to-kenya" },
      { label: "Service Learning (High School)", url: "/service-learning-programs-kenya-high-school" },
      { label: "Empowering Women", url: "/programs/empowering-women" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "environmental-science-school-trips-kenya",
    subject: "Environmental Science",
    pageTitle: "Environmental Science School Trips to Kenya | AP & A-Level Field Study",
    metaDescription:
      "AP and A-Level Environmental Science trips to Kenya. Students study carbon credits, water systems, sustainable agriculture, and biodiversity threats in a living laboratory.",
    h1: "Environmental science in Kenya's living laboratory",
    h1Highlight: "living laboratory",
    heroSubtitle:
      "AP and A-Level Environmental Science field trips where students study climate science, water systems, and sustainable agriculture in real-world settings — not simulations in a classroom.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160176/Collection_5_s7opwi.jpg",
    eyebrow: "AP & A-LEVEL ENVIRONMENTAL SCIENCE",
    targetAudience: "AP Environmental Science & A-Level Teachers",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Level", value: "AP + A-Level" },
      { label: "Boards", value: "AQA, CIE" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Climate & Carbon",
        icon: "Thermometer",
        description:
          "Visit the Kasigau carbon credit project — Africa's first REDD+ project. Study carbon sequestration, meet the team running Kenya's first carbon-neutral factory, and understand carbon markets first-hand.",
        examBoardLinks: ["AP Unit 9 Global Change", "AQA Climate Change"],
      },
      {
        title: "Water Systems",
        icon: "Droplets",
        description:
          "Study water harvesting techniques, watershed management, and community water cooperatives. Collect water quality data and analyse human impacts on freshwater systems.",
        examBoardLinks: ["AP Unit 5 Land & Water Use", "CIE Water Management"],
      },
      {
        title: "Sustainable Agriculture",
        icon: "Sprout",
        description:
          "Work in Seeds2Education permaculture gardens. Study food miles, organic vs conventional farming, soil science, and sustainable food production feeding 200+ children daily.",
        examBoardLinks: ["AP Unit 5 Land & Water Use", "IB ESS Topic 5"],
      },
      {
        title: "Biodiversity Threats",
        icon: "AlertTriangle",
        description:
          "Study human-wildlife conflict, habitat fragmentation, and the conservation corridors connecting Tsavo East and West. Understand how communities and wildlife coexist.",
        examBoardLinks: ["AP Unit 2 Biodiversity", "AQA Biodiversity"],
      },
      {
        title: "Resource Management",
        icon: "Recycle",
        description:
          "Investigate renewable energy solutions, waste management systems, and circular economy examples in Kenyan communities. Compare resource use across development contexts.",
        examBoardLinks: ["AP Unit 6 Energy", "CIE Resource Management"],
      },
      {
        title: "Environmental Policy",
        icon: "Scale",
        description:
          "Study community-led conservation models, REDD+ project frameworks, and land tenure issues. Understand how environmental policy works at the local and international level.",
        examBoardLinks: ["AP Unit 9 Global Change", "IB ESS Topic 7"],
      },
    ],
    threePhasesDescription:
      "Environmental science is not something you study in a textbook. Our programme puts students in the field where climate, water, agriculture, and biodiversity intersect — with data collection and analysis built into every day.",
    preTrip:
      "Environmental context modules covering Kenyan ecosystems, climate data, and research methodology. Students develop hypotheses and data collection plans before arriving.",
    onGround:
      "Daily field investigations with environmental scientists and community experts. Students collect water quality data, soil samples, carbon measurements, and biodiversity surveys.",
    postTrip:
      "Data analysis workshops connecting field data to environmental science theory. Students produce lab reports, environmental impact assessments, and policy recommendations.",
    examBoards: [
      {
        name: "AQA Environmental Science",
        alignments: [
          "Living Environment",
          "The Physical Environment",
          "Sustainability",
        ],
      },
      {
        name: "CIE Environmental Management",
        alignments: [
          "Rocks & Weathering, Atmosphere, Water",
          "Biosphere & Ecosystems",
          "Human Population & Resource Management",
        ],
      },
      {
        name: "AP Environmental Science",
        alignments: [
          "Unit 1-2 Ecosystems & Biodiversity",
          "Unit 5 Land & Water Use",
          "Unit 8-9 Pollution & Global Change",
        ],
      },
      {
        name: "IB ESS",
        alignments: [
          "Topic 1 Foundations of ESS",
          "Topic 4 Water, Food & Soil",
          "Topic 7 Climate Change & Energy",
        ],
      },
    ],
    faqs: [
      {
        question: "What field data do students collect?",
        answer:
          "Students collect a wide range of environmental data including water quality measurements (pH, turbidity, dissolved oxygen), soil samples for analysis, biodiversity surveys using transect and quadrat methods, carbon flux estimates, and weather data. All data collection follows scientific methodology suitable for coursework.",
      },
      {
        question: "Is water testing equipment provided?",
        answer:
          "Yes. We provide all environmental monitoring equipment including water testing kits, soil testing tools, GPS devices, weather stations, and data logging equipment. Students use professional-grade tools to collect publication-quality data.",
      },
      {
        question: "How do students measure carbon?",
        answer:
          "Students visit the Kasigau REDD+ project and learn carbon measurement methodologies used in real carbon credit verification. This includes tree measurement techniques, carbon stock estimation, and understanding how carbon credits are calculated and traded.",
      },
      {
        question: "What equipment should students bring?",
        answer:
          "We provide all specialist equipment. Students should bring notebooks, pencils, a camera, and appropriate field clothing. A detailed kit list is provided 6 weeks before departure.",
      },
      {
        question: "How does this differ from a geography trip?",
        answer:
          "While there is overlap, our environmental science trips focus specifically on scientific methodology, data collection, and environmental systems. Geography trips emphasise human-physical interactions and place-based study. Many schools combine elements of both — we can customise the programme to your specification.",
      },
    ],
    ctaHeadline: "Study environmental science where it's happening",
    ctaSubtext:
      "Your students don't need another carbon cycle diagram. They need to stand in a REDD+ project, test water quality in a community well, and see environmental science in practice.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Biology Trips", url: "/biology-school-trips-to-kenya" },
      { label: "Geography Trips", url: "/geography-school-trips-to-kenya" },
      { label: "Community Conservation", url: "/programs/community-conservation" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "history-school-trips-to-kenya",
    subject: "History",
    pageTitle: "History School Trips to Kenya | Cultural Immersion & Living History",
    metaDescription:
      "History school trips to Kenya covering colonial history, independence, Swahili Coast trade, and oral history. Students walk through history instead of reading about it.",
    h1: "History you can walk through in Kenya",
    h1Highlight: "walk through",
    heroSubtitle:
      "History field trips that bring the past to life. Students explore colonial history, post-independence development, and centuries of Swahili Coast trade — through the voices of the people who lived it.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747159769/Filip-C-Agoo-Everland-Marketing-Kenya-13983_atg3tn.jpg",
    eyebrow: "HISTORY & CULTURAL IMMERSION",
    targetAudience: "GCSE & A-Level History Teachers",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Level", value: "GCSE + A-Level" },
      { label: "Approach", value: "Cross-Curricular" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Colonial History",
        icon: "Landmark",
        description:
          "Study British East Africa, the Kenya Colony, land dispossession, and the path to independence. Visit sites and hear accounts that textbooks cannot convey.",
      },
      {
        title: "Post-Independence Development",
        icon: "Building2",
        description:
          "Trace Kenya's journey from Kenyatta to modern devolution. Study the political, economic, and social transformations that shaped East Africa's largest economy.",
      },
      {
        title: "Swahili Coast Trade",
        icon: "Ship",
        description:
          "Explore centuries of Indian Ocean trade — Portuguese, Arab, and African interactions that created one of history's most diverse trading networks along the Kenyan coast.",
      },
      {
        title: "Community Oral History",
        icon: "Mic",
        description:
          "Hear first-hand accounts from community elders. Students practise oral history methodology with living sources — developing primary source skills that bring the past alive.",
      },
      {
        title: "Development & Globalisation",
        icon: "Globe",
        description:
          "Understand the historical context behind current development challenges. Students connect colonial legacies to present-day economics, land rights, and global trade patterns.",
      },
      {
        title: "Cross-Curricular Connections",
        icon: "BookOpen",
        description:
          "History meets geography, economics, and politics. Students see how historical events ripple through to contemporary issues — ideal for interdisciplinary learning.",
      },
    ],
    threePhasesDescription:
      "History is not just in textbooks. Our programme immerses students in living history — through places, people, and primary sources that make the past tangible and the present understandable.",
    preTrip:
      "Historical context modules covering Kenyan history from pre-colonial times to independence. Students develop inquiry questions and primary source analysis skills.",
    onGround:
      "Site visits, oral history sessions with community elders, and guided exploration of historical locations. Students collect primary sources and practise historical methodology.",
    postTrip:
      "Source analysis and historical writing connecting fieldwork to exam content. Students produce essays, source evaluations, and presentations using evidence gathered in Kenya.",
    faqs: [
      {
        question: "Which history specifications does this align to?",
        answer:
          "The programme aligns with GCSE and A-Level History specifications that cover empire, migration, development, and world history themes. We provide curriculum mapping documents for AQA, OCR, and Edexcel showing exact topic connections. The cross-curricular nature also supports Geography and Politics specifications.",
      },
      {
        question: "Are there museum visits included?",
        answer:
          "Yes. Depending on the itinerary, visits may include the Fort Jesus Museum in Mombasa, local heritage centres, and community museums. However, our emphasis is on living history — learning from the communities and places themselves, not just museum exhibits.",
      },
      {
        question: "Is primary source work integrated?",
        answer:
          "Absolutely. Students practise oral history methodology, analyse material culture, photograph historical sites, and collect first-hand accounts. These primary sources become the basis for post-trip historical writing and source evaluation exercises.",
      },
      {
        question: "Can we combine this with geography?",
        answer:
          "Yes. Many schools run combined history and geography trips. We can design itineraries that cover both subjects — colonial and post-colonial history alongside physical and human geography. This is especially effective for cross-curricular assessment.",
      },
    ],
    ctaHeadline: "History isn't just in textbooks",
    ctaSubtext:
      "Your students don't need another source booklet. They need to hear from community elders, walk through historical sites, and understand how the past shapes the present.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Geography Trips", url: "/geography-school-trips-to-kenya" },
      { label: "Global Citizenship", url: "/global-citizenship-school-trips-kenya" },
      { label: "Seeds2Education", url: "/programs/seeds2education" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "service-learning-programs-kenya-middle-school",
    subject: "Service Learning (Grades 6-8)",
    pageTitle: "Service Learning Programs Kenya — Middle School | Ages 11-14",
    metaDescription:
      "Age-appropriate service learning trips to Kenya for middle school students (ages 11-14). Scaffolded cultural exchange, hands-on ecology, and social-emotional learning in a safe, supervised environment.",
    h1: "Service learning trips to Kenya for middle school",
    h1Highlight: "middle school",
    heroSubtitle:
      "Service learning designed for younger students. Age-appropriate activities, higher staff ratios, and scaffolded learning that builds empathy, environmental awareness, and global understanding — safely and meaningfully.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747200052/IMG_0252_gstfij.jpg",
    eyebrow: "AGES 11-14 \u2022 SERVICE LEARNING",
    targetAudience: "US Middle School Administrators & Service Learning Coordinators",
    stats: [
      { label: "Duration", value: "5-7 Days" },
      { label: "Ages", value: "11-14" },
      { label: "Approach", value: "Scaffolded Learning" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Age-Appropriate Service",
        icon: "Flower2",
        description:
          "Garden planting in permaculture projects, animal care activities, and collaborative art projects with local students. Hands-on work designed for younger learners.",
      },
      {
        title: "Cultural Exchange",
        icon: "Users",
        description:
          "Peer-to-peer learning with Kenyan students through shared activities, games, music, and creative projects. Genuine connections built through doing things together.",
      },
      {
        title: "Environmental Awareness",
        icon: "TreePine",
        description:
          "Hands-on ecology activities, wildlife observation, and conservation basics. Students develop environmental awareness through direct experience with nature.",
      },
      {
        title: "Social-Emotional Learning",
        icon: "Heart",
        description:
          "Empathy building, teamwork challenges, and resilience development. Activities designed to support social-emotional growth in an age-appropriate context.",
      },
      {
        title: "Guided Reflection",
        icon: "PenLine",
        description:
          "Structured reflection through journals, group discussions, and creative expression. Younger students process their experiences with age-appropriate support and guidance.",
      },
      {
        title: "Safety & Supervision",
        icon: "ShieldCheck",
        description:
          "Higher staff-to-student ratios, age-appropriate activities, familiar food options, and pastoral care. Every aspect of the trip is designed with younger students in mind.",
      },
    ],
    threePhasesDescription:
      "Middle school service learning requires a different approach. Our programme scaffolds every experience — building understanding gradually, providing emotional support, and ensuring younger students feel safe, engaged, and empowered throughout.",
    preTrip:
      "Age-appropriate preparation including cultural awareness workshops, team-building activities, and goal-setting. Students and parents receive comprehensive information and support.",
    onGround:
      "Structured daily activities with higher supervision ratios. Cultural exchange, hands-on service projects, and guided reflection — all designed for ages 11-14.",
    postTrip:
      "Creative reflection projects, photo journals, and classroom presentations. Students share their experiences and demonstrate learning in age-appropriate formats.",
    faqs: [
      {
        question: "Is Kenya safe for younger students?",
        answer:
          "Yes. We have extensive experience hosting younger student groups. Middle school trips include higher staff-to-student ratios (typically 1:6), carefully vetted accommodations, 24/7 pastoral support, medical protocols, and age-appropriate risk assessments. Our local team has years of experience with this age group.",
      },
      {
        question: "What is the staff-to-student ratio?",
        answer:
          "For middle school groups, we maintain a minimum 1:6 staff-to-student ratio, compared to 1:10 for high school groups. This includes experienced trip leaders, local guides, and pastoral support staff who specialise in working with younger students.",
      },
      {
        question: "What about accommodation for younger students?",
        answer:
          "Accommodations are specifically selected for younger groups — secure, comfortable, and with familiar amenities. We provide options that include Western food choices alongside local cuisine, reliable communication with home, and supervised dormitory-style or hotel rooms.",
      },
      {
        question: "How do you handle homesickness?",
        answer:
          "Our trip leaders are trained in pastoral care for younger students. We maintain regular check-ins, provide structured downtime, facilitate communication with parents/guardians, and create a supportive group environment. Most students settle in quickly once engaged in activities.",
      },
      {
        question: "What's different from high school trips?",
        answer:
          "Middle school trips are shorter (5-7 days vs 7-10), have higher supervision ratios, feature age-appropriate service activities, include more structured social-emotional support, and offer familiar food options. The learning goals focus on empathy, cultural awareness, and environmental understanding rather than academic outcomes.",
      },
    ],
    ctaHeadline: "Their first step toward global understanding",
    ctaSubtext:
      "Middle school students are ready for meaningful experiences — they just need the right support. Talk to us about building a trip that's safe, age-appropriate, and genuinely impactful.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Service Learning (High School)", url: "/service-learning-programs-kenya-high-school" },
      { label: "Global Citizenship", url: "/global-citizenship-school-trips-kenya" },
      { label: "Health & Safety", url: "/health-and-safety" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
  {
    slug: "service-learning-programs-kenya-high-school",
    subject: "Service Learning (Grades 9-12)",
    pageTitle: "Service Learning Programs Kenya — High School | Grades 9-12",
    metaDescription:
      "High school service learning trips to Kenya with AP and IB integration. Community partnership, leadership development, and social justice frameworks — not voluntourism.",
    h1: "Service learning trips to Kenya for high school",
    h1Highlight: "high school",
    heroSubtitle:
      "Service learning that actually serves — the community, not just college applications. High school students work alongside year-round programmes, develop leadership skills, and engage with social justice frameworks that challenge their assumptions.",
    heroImage:
      "https://res.cloudinary.com/dng12bd0a/image/upload/v1747160268/WhatsApp_Image_2025-05-13_at_12.07.56_m0epad.jpg",
    eyebrow: "GRADES 9-12 \u2022 SERVICE LEARNING",
    targetAudience: "US High School Service Learning Coordinators",
    stats: [
      { label: "Duration", value: "7-10 Days" },
      { label: "Grades", value: "9-12" },
      { label: "Integration", value: "AP + IB Eligible" },
      { label: "Location", value: "Kenya" },
    ],
    curriculumTopics: [
      {
        title: "Community Partnership",
        icon: "Handshake",
        description:
          "Work alongside year-round programmes run by Kenyan communities. Students contribute to existing initiatives — not projects designed for visitors or one-week volunteers.",
      },
      {
        title: "Leadership Development",
        icon: "Crown",
        description:
          "Student-led reflection sessions, project planning with community input, and cross-cultural communication skills. Real leadership — not just wearing a 'Team Leader' badge.",
      },
      {
        title: "Academic Integration",
        icon: "GraduationCap",
        description:
          "Direct connections to AP Human Geography, AP Environmental Science, and IB CAS requirements. Service learning with academic rigour, not just good intentions.",
      },
      {
        title: "Social Justice Framework",
        icon: "Scale",
        description:
          "Equity, access, power dynamics, and ethical engagement. Students examine their own privilege and learn to engage with global inequality honestly and critically.",
      },
      {
        title: "Career Exploration",
        icon: "Briefcase",
        description:
          "Exposure to careers in conservation, sustainable agriculture, community development, and public health. Students see what meaningful work looks like in practice.",
      },
      {
        title: "College Application Impact",
        icon: "FileText",
        description:
          "Meaningful service narrative for applications, demonstrated commitment to community, and documented leadership evidence. Substance, not just a line on a CV.",
      },
    ],
    threePhasesDescription:
      "Service learning is not community service plus a flight. Our programme builds ethical understanding, challenges assumptions, and produces genuine learning — before, during, and after the trip.",
    preTrip:
      "Social justice frameworks, ethical engagement workshops, and community context preparation. Students examine power dynamics and develop meaningful learning goals.",
    onGround:
      "Community partnership activities, student-led reflection, and leadership opportunities. Daily engagement with year-round programmes alongside Kenyan community members.",
    postTrip:
      "Critical reflection connecting service to systemic issues. Students develop action plans, complete documentation for AP/IB credit, and build college application narratives.",
    faqs: [
      {
        question: "Does this count toward college applications?",
        answer:
          "Yes — and it stands out. Admissions officers see through generic service trips. Our programme provides documented, sustained engagement with a community, leadership evidence, and critical reflection that demonstrates genuine growth. Students leave with material for compelling personal essays and recommendation letters.",
      },
      {
        question: "Can students earn AP or IB credit?",
        answer:
          "The trip integrates with AP Human Geography and AP Environmental Science content, and meets IB CAS requirements across all three strands. We provide documentation and curriculum mapping for teachers. Whether it counts for formal credit depends on your school's policies, but the academic content is there.",
      },
      {
        question: "What service hours documentation is provided?",
        answer:
          "Students receive comprehensive documentation including daily service hour logs, supervisor verification letters, activity descriptions, photographic evidence, and a trip summary. This documentation is formatted for school service hour requirements, college applications, and IB CAS portfolios.",
      },
      {
        question: "How is this different from voluntourism?",
        answer:
          "Our programmes run year-round whether or not students are visiting. Community members lead the work and set priorities. Students join existing initiatives, not manufactured projects. We discuss power dynamics openly and critically. No orphanage visits, no building projects by unskilled students, no poverty tourism.",
      },
      {
        question: "Can students lead projects?",
        answer:
          "Students take on leadership roles within the framework of community-defined goals. This means leading reflection sessions, coordinating group activities, and managing logistics — but not designing projects for communities they've just met. Real leadership means listening first.",
      },
    ],
    ctaHeadline: "Service learning that actually serves",
    ctaSubtext:
      "Your students deserve service learning with integrity. Not voluntourism wrapped in good intentions. Talk to us about building a programme that serves the community and challenges your students.",
    internalLinks: [
      { label: "School Trips", url: "/school-trips" },
      { label: "Service Learning (Middle School)", url: "/service-learning-programs-kenya-middle-school" },
      { label: "IB CAS Trips", url: "/ib-cas-trips-to-kenya" },
      { label: "Global Citizenship", url: "/global-citizenship-school-trips-kenya" },
      { label: "Seeds2Education", url: "/programs/seeds2education" },
      { label: "Impact Scorecard", url: "/scorecard" },
    ],
  },
];
