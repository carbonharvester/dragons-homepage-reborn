import jsPDF from 'jspdf';

const ORANGE = '#F5B82E';
const CHARCOAL = '#1a1a2e';
const GREEN = '#1A6D50';
const GRAY = '#666666';
const LIGHT_BG = '#FFF8F0';

function addHeader(pdf: jsPDF, title: string) {
  // Orange top bar
  pdf.setFillColor(245, 184, 46);
  pdf.rect(0, 0, 210, 8, 'F');

  // Brand name
  pdf.setFontSize(11);
  pdf.setTextColor(CHARCOAL);
  pdf.text('KAPES ADVENTURES', 20, 18);

  // Title
  pdf.setFontSize(22);
  pdf.setTextColor(CHARCOAL);
  const titleLines = pdf.splitTextToSize(title, 170);
  pdf.text(titleLines, 20, 32);

  // Divider
  pdf.setDrawColor(245, 184, 46);
  pdf.setLineWidth(0.8);
  const yAfterTitle = 32 + titleLines.length * 8 + 4;
  pdf.line(20, yAfterTitle, 190, yAfterTitle);

  return yAfterTitle + 8;
}

function addFooter(pdf: jsPDF, pageNum: number, totalPages: number) {
  pdf.setFontSize(8);
  pdf.setTextColor(GRAY);
  pdf.text(`kapesadventures.com | matthew@kapesadventures.com`, 20, 285);
  pdf.text(`${pageNum} / ${totalPages}`, 190, 285, { align: 'right' });
}

function addSectionHeading(pdf: jsPDF, text: string, y: number): number {
  pdf.setFontSize(14);
  pdf.setTextColor(GREEN);
  pdf.text(text, 20, y);
  return y + 8;
}

function addBodyText(pdf: jsPDF, text: string, y: number, maxWidth = 170): number {
  pdf.setFontSize(10);
  pdf.setTextColor(GRAY);
  const lines = pdf.splitTextToSize(text, maxWidth);
  pdf.text(lines, 20, y);
  return y + lines.length * 5 + 4;
}

function addBoldText(pdf: jsPDF, text: string, y: number, maxWidth = 170): number {
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(CHARCOAL);
  const lines = pdf.splitTextToSize(text, maxWidth);
  pdf.text(lines, 20, y);
  pdf.setFont('helvetica', 'normal');
  return y + lines.length * 5 + 2;
}

function checkPageBreak(pdf: jsPDF, y: number, needed: number, pageNum: { current: number }, totalPages: number): number {
  if (y + needed > 275) {
    addFooter(pdf, pageNum.current, totalPages);
    pdf.addPage();
    pageNum.current++;
    return 20;
  }
  return y;
}

// ============================================
// TRANSPARENCY CHECKLIST (2 pages)
// ============================================

export function generateTransparencyChecklist(): void {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 2;
  const pageNum = { current: 1 };

  let y = addHeader(pdf, '7 Questions to Ask Your Trip Provider\nBefore You Book');

  y = addBodyText(pdf, 'Most schools choose a trip provider without asking the questions that matter. Use this checklist in your next vendor evaluation to separate genuine community impact from polished marketing.', y);
  y += 4;

  const questions = [
    {
      q: '1. What happens to the projects when students leave?',
      why: 'The #1 test of real impact. If projects only exist when visitors are present, they\'re built for students, not communities.',
      good: 'Our programs run 365 days a year with full-time local staff. Student visits are scheduled windows into continuous work.',
      red: '"The community continues the work" with no specifics on staffing, funding, or oversight.',
    },
    {
      q: '2. Who leads the programs on the ground?',
      why: 'Community-led programs produce lasting outcomes. Foreign-led programs often create dependency.',
      good: 'Local teams design, manage, and run every program. We can introduce you to the people leading the work.',
      red: '"We work with local partners" but can\'t name them or explain their governance role.',
    },
    {
      q: '3. Where does the trip fee actually go?',
      why: 'In the typical model, 70%+ of revenue leaves the host community. Parents deserve a breakdown.',
      good: 'Here\'s a line-item budget: X% community payments, X% local staff, X% accommodation, X% transport.',
      red: '"We invest in local communities" with no numbers or willingness to share a budget breakdown.',
    },
    {
      q: '4. How do you measure community impact?',
      why: 'Student satisfaction surveys measure the experience, not the impact. Real providers track community outcomes.',
      good: 'We track meals served daily, water access points built, school enrollment data, and cooperative membership.',
      red: '"97% of students say it was life-changing." This measures sentiment, not community benefit.',
    },
    {
      q: '5. What curriculum integration do you provide?',
      why: 'A trip without curriculum is just tourism. Schools need pre-trip, on-trip, and post-trip learning structures.',
      good: 'Pre-trip modules co-designed with your learning goals, on-ground sessions with local experts, post-trip reflection frameworks aligned to IB CAS/SDGs.',
      red: '"We provide a pre-trip info pack" or "teachers handle curriculum integration."',
    },
    {
      q: '6. Can we talk to a school that\'s done this before?',
      why: 'Reference calls reveal what marketing materials hide. Ask specifically about logistics, safety, and whether the impact claims held up.',
      good: 'Here are 3 schools you can call. We\'ll connect you directly with the trip coordinator.',
      red: 'Reluctance to provide references or only offering curated testimonials.',
    },
    {
      q: '7. How do you prevent the "white savior" dynamic?',
      why: 'Research shows poorly designed trips can reinforce harmful stereotypes and damage local teacher credibility.',
      good: 'Students are positioned as learners from day one. Local teams lead. Pre-trip curriculum covers colonial history and the ethics of international travel.',
      red: 'Confusion about the question or "we\'ve never had that problem."',
    },
  ];

  questions.forEach((item, idx) => {
    y = checkPageBreak(pdf, y, 45, pageNum, totalPages);

    // Question number + text
    y = addBoldText(pdf, item.q, y);

    // Why it matters
    pdf.setFontSize(9);
    pdf.setTextColor(GRAY);
    pdf.setFont('helvetica', 'italic');
    const whyLines = pdf.splitTextToSize('Why it matters: ' + item.why, 165);
    pdf.text(whyLines, 25, y);
    pdf.setFont('helvetica', 'normal');
    y += whyLines.length * 4.5 + 3;

    // Good answer
    pdf.setFontSize(9);
    pdf.setTextColor(GREEN);
    const goodLines = pdf.splitTextToSize('Good answer: ' + item.good, 165);
    pdf.text(goodLines, 25, y);
    y += goodLines.length * 4.5 + 3;

    // Red flag
    pdf.setFontSize(9);
    pdf.setTextColor('#CC3333');
    const redLines = pdf.splitTextToSize('Red flag: ' + item.red, 165);
    pdf.text(redLines, 25, y);
    y += redLines.length * 4.5 + 6;

    if (idx < questions.length - 1) {
      pdf.setDrawColor(230, 230, 230);
      pdf.setLineWidth(0.3);
      pdf.line(20, y - 3, 190, y - 3);
    }
  });

  // Final CTA
  y = checkPageBreak(pdf, y, 30, pageNum, totalPages);
  y += 6;
  pdf.setFillColor(245, 184, 46);
  pdf.roundedRect(20, y, 170, 25, 3, 3, 'F');
  pdf.setFontSize(12);
  pdf.setTextColor(CHARCOAL);
  pdf.text('Want to see how Kapes answers all 7 questions?', 105, y + 10, { align: 'center' });
  pdf.setFontSize(10);
  pdf.text('Book a call: kapesadventures.com/scorecard', 105, y + 18, { align: 'center' });

  addFooter(pdf, pageNum.current, totalPages);
  pdf.save('Kapes-Transparency-Checklist.pdf');
}

// ============================================
// ETHICAL PLANNING GUIDE (8-12 pages)
// ============================================

export function generateEthicalPlanningGuide(): void {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 10;
  const pageNum = { current: 1 };

  // Cover page
  pdf.setFillColor(26, 26, 46);
  pdf.rect(0, 0, 210, 297, 'F');
  pdf.setFillColor(245, 184, 46);
  pdf.rect(0, 0, 210, 6, 'F');

  pdf.setFontSize(11);
  pdf.setTextColor(245, 184, 46);
  pdf.text('KAPES ADVENTURES', 20, 30);

  pdf.setFontSize(32);
  pdf.setTextColor(255, 255, 255);
  pdf.text('The Ethical\nSchool Trip\nPlanning Guide', 20, 80);

  pdf.setFontSize(14);
  pdf.setTextColor(200, 200, 200);
  pdf.text('Everything your school needs to plan trips\nthat create real impact — without the\nvoluntourism pitfalls.', 20, 140);

  pdf.setFontSize(10);
  pdf.setTextColor(150, 150, 150);
  pdf.text('kapesadventures.com | 2025', 20, 280);

  // Chapter 1
  pdf.addPage();
  pageNum.current++;
  let y = addHeader(pdf, 'Chapter 1: The Voluntourism Problem');

  y = addBodyText(pdf, 'The international school trip industry is worth an estimated $173 billion. Yet research consistently shows that most "service learning" trips fail to produce lasting community benefit — and can actively cause harm.', y);
  y = addBodyText(pdf, 'The core issue: programs designed for the student experience, not community needs. Projects built for visitors stop when the bus leaves. Revenue flows to international operators. Communities perform gratitude for audiences that never return.', y);
  y = addSectionHeading(pdf, 'What the research says', y);
  y = addBodyText(pdf, '• Solar panels installed by volunteers showed no improvement in student grades (Lough et al., 2018)', y);
  y = addBodyText(pdf, '• Short-term volunteers can undermine local teacher credibility and job markets', y);
  y = addBodyText(pdf, '• 70%+ of tourism revenue typically leaves the host community', y);
  y = addBodyText(pdf, '• Students often return with reinforced stereotypes rather than challenged assumptions', y);
  y += 4;
  y = addSectionHeading(pdf, 'How to avoid it', y);
  y = addBodyText(pdf, 'The rest of this guide provides a framework for planning trips that genuinely benefit communities. The key principle: if the program wouldn\'t exist without visiting students, it\'s built for visitors, not communities.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 2
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 2: Community-Led vs. Student-Led');

  y = addBodyText(pdf, 'The single most important distinction in ethical school travel is who leads the program. Community-led programs produce lasting outcomes. Student-led programs produce photos.', y);
  y = addSectionHeading(pdf, 'Community-led looks like:', y);
  y = addBodyText(pdf, '• Local teams design program priorities based on community needs', y);
  y = addBodyText(pdf, '• Programs operate year-round with full-time local staff', y);
  y = addBodyText(pdf, '• Students join existing work as learners and contributors', y);
  y = addBodyText(pdf, '• Community members have governance power over how programs run', y);
  y = addBodyText(pdf, '• Revenue stays in the community through local employment and procurement', y);
  y += 4;
  y = addSectionHeading(pdf, 'Student-led looks like:', y);
  y = addBodyText(pdf, '• Programs designed around student itineraries and learning goals', y);
  y = addBodyText(pdf, '• Projects created specifically for visiting groups', y);
  y = addBodyText(pdf, '• Work stops or pauses between student visits', y);
  y = addBodyText(pdf, '• Local people positioned as beneficiaries, not partners', y);
  y = addBodyText(pdf, '• Most revenue leaves the community through international operators', y);
  y += 4;
  y = addSectionHeading(pdf, 'The test', y);
  y = addBodyText(pdf, 'Ask your trip provider: "What happens to the project when our students aren\'t there?" If the answer involves pausing, waiting, or "the community takes over," the program is student-led regardless of how it\'s marketed.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 3
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 3: Pre-Trip Curriculum Framework');

  y = addBodyText(pdf, 'A trip without curriculum is tourism. Effective pre-trip preparation transforms the on-ground experience from observation into genuine learning.', y);
  y = addSectionHeading(pdf, 'Essential pre-trip modules', y);
  y = addBoldText(pdf, 'Module 1: Context and History (2-3 sessions)', y);
  y = addBodyText(pdf, 'Colonial history of the destination, post-independence development, current economic and social landscape. Students must understand why conditions exist before witnessing them.', y);
  y = addBoldText(pdf, 'Module 2: Ethics of International Travel (1-2 sessions)', y);
  y = addBodyText(pdf, 'Power dynamics, the savior complex, representation ethics, photography consent. What does it mean to be a learner in someone else\'s community?', y);
  y = addBoldText(pdf, 'Module 3: Program-Specific Preparation (2-3 sessions)', y);
  y = addBodyText(pdf, 'Technical knowledge relevant to the work: food security, water access, permaculture principles, gender equity. Students should arrive with enough context to contribute meaningfully.', y);
  y = addBoldText(pdf, 'Module 4: Practical and Safety Preparation (1 session)', y);
  y = addBodyText(pdf, 'Health protocols, cultural norms, communication expectations, emergency procedures. Include parent information in this module.', y);
  y += 4;
  y = addSectionHeading(pdf, 'Alignment frameworks', y);
  y = addBodyText(pdf, 'Map all modules to relevant UN Sustainable Development Goals (SDGs) and IB CAS strands (Creativity, Activity, Service). This creates documentation for accreditation and demonstrates curricular rigour to parents and administration.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 4
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 4: Choosing the Right Partner');

  y = addBodyText(pdf, 'Your trip provider is either part of the solution or part of the problem. Here\'s how to tell the difference.', y);
  y = addSectionHeading(pdf, 'Due diligence checklist', y);

  const dueDiligence = [
    'Year-round operations: Does the provider run programs continuously, not just during student visits?',
    'Local leadership: Are programs designed and led by community members, not foreign staff?',
    'Financial transparency: Can the provider show you a line-item budget breakdown?',
    'Community governance: Do local partners have decision-making power over program priorities?',
    'Impact measurement: Does the provider track community outcomes (not just student satisfaction)?',
    'Reference schools: Can you speak directly with schools that have used the provider?',
    'Safety documentation: Are risk assessments and emergency protocols shared proactively?',
    'Curriculum support: Does the provider offer pre-trip, on-trip, and post-trip learning materials?',
    'Ethical positioning: Are students framed as learners, not helpers or saviors?',
    'Long-term vision: Does the provider offer multi-year partnerships, not just one-off trips?',
  ];

  dueDiligence.forEach((item, idx) => {
    y = checkPageBreak(pdf, y, 12, pageNum, totalPages);
    pdf.setFontSize(10);
    pdf.setTextColor(CHARCOAL);
    const lines = pdf.splitTextToSize(`☐  ${item}`, 165);
    pdf.text(lines, 25, y);
    y += lines.length * 5 + 3;
  });

  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 5
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 5: Budgeting for Real Impact');

  y = addBodyText(pdf, 'Where your money goes matters as much as how much you spend. Here\'s how to evaluate whether your trip budget is creating community value or operator profit.', y);
  y = addSectionHeading(pdf, 'Typical cost breakdown: voluntourism model', y);
  y = addBodyText(pdf, '• International operator fees: 35-45%\n• Accommodation: 15-20%\n• Transport: 10-15%\n• Community benefit: 5-15%\n• Admin/overhead: 10-15%', y);
  y += 4;
  y = addSectionHeading(pdf, 'Ethical cost breakdown: community partnership model', y);
  y = addBodyText(pdf, '• Community payments (staff, materials, programs): 35-45%\n• Local accommodation: 20-25%\n• Transport: 10-15%\n• Program operations: 10-15%\n• Coordination/safety: 10-15%', y);
  y += 4;
  y = addSectionHeading(pdf, 'Questions to ask about pricing', y);
  y = addBodyText(pdf, '1. Can you provide a line-item budget for our trip?\n2. What percentage of the fee stays in the host community?\n3. Are local staff paid year-round or only during student visits?\n4. Who owns the accommodation and transport — local or international companies?\n5. Is there a transparency report we can share with parents?', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 6
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 6: On-Ground Best Practices');

  y = addBodyText(pdf, 'How students behave on the ground determines whether the trip reinforces or challenges harmful dynamics. These practices should be non-negotiable.', y);
  y = addSectionHeading(pdf, 'Student positioning', y);
  y = addBodyText(pdf, '• Students are introduced as learners, not helpers\n• Local experts lead all sessions — students observe and participate\n• No student-led projects unless genuinely useful and community-requested\n• Reflection sessions every evening to process experiences', y);
  y += 4;
  y = addSectionHeading(pdf, 'Photography and social media', y);
  y = addBodyText(pdf, '• All photography of local people requires informed consent\n• No "poverty tourism" imagery — no photos of students "helping" children\n• Social media guidelines established before departure\n• Community members should have agency over how they are represented', y);
  y += 4;
  y = addSectionHeading(pdf, 'Engagement protocols', y);
  y = addBodyText(pdf, '• Students work alongside community members, not in front of them\n• Gift-giving follows community-approved protocols (no individual gifts to children)\n• Language barriers are respected — translators provided, not assumed\n• Free time spent engaging with local culture, not in tourist enclaves', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 7
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 7: Post-Trip Reflection & Measurement');

  y = addBodyText(pdf, 'What happens after the trip determines whether learning sticks. Structure post-trip reflection to convert experience into understanding.', y);
  y = addSectionHeading(pdf, 'Post-trip reflection framework', y);
  y = addBoldText(pdf, 'Week 1: Processing (group debrief)', y);
  y = addBodyText(pdf, 'Facilitated discussion: What surprised you? What challenged your assumptions? What questions do you still have? Focus on discomfort and confusion — that\'s where learning lives.', y);
  y = addBoldText(pdf, 'Week 2-3: Analysis (individual reflection)', y);
  y = addBodyText(pdf, 'Written or creative reflection connecting experiences to SDGs, course content, and personal growth. Avoid hero narratives — focus on systemic understanding.', y);
  y = addBoldText(pdf, 'Week 4+: Action (community presentation)', y);
  y = addBodyText(pdf, 'Students present findings to school community. Focus on what they learned, not what they "did." Include next steps for continued engagement.', y);
  y += 4;
  y = addSectionHeading(pdf, 'Measuring real impact', y);
  y = addBodyText(pdf, 'Track both student outcomes and community outcomes:\n\nStudent: Pre/post knowledge assessments, reflection quality, CAS hours documentation\n\nCommunity: Meals served, infrastructure built, enrollment data, cooperative membership — provided by your trip partner, not self-reported by students.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Chapter 8
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Chapter 8: Making the Case to Parents & Admin');

  y = addBodyText(pdf, 'The biggest barrier to ethical school travel is often internal — convincing parents and administration that this approach is worth the investment.', y);
  y = addSectionHeading(pdf, 'For parents', y);
  y = addBodyText(pdf, '• Lead with transparency: "Here\'s exactly where your money goes"\n• Share the provider\'s safety documentation proactively\n• Explain the curriculum integration: this is education, not tourism\n• Address the voluntourism concern directly — parents are reading the articles\n• Offer a parent information evening with the provider present', y);
  y += 4;
  y = addSectionHeading(pdf, 'For administration and boards', y);
  y = addBodyText(pdf, '• Frame as risk mitigation: ethical travel protects school reputation\n• Show curriculum alignment: SDG mapping, CAS documentation, accreditation support\n• Demonstrate ROI: student outcomes, community impact metrics, parent satisfaction\n• Provide competitor analysis: how does this compare to what other schools are doing?\n• Propose a multi-year partnership model — builds institutional knowledge', y);
  y += 4;
  y = addSectionHeading(pdf, 'Common objections', y);
  y = addBodyText(pdf, '"It\'s too expensive" — Break down the cost comparison. Ethical trips often cost the same; the money just goes to different places.\n\n"Parents want a safari" — Ethical trips can include wildlife experiences. The question is whether that\'s the whole trip or part of a deeper program.\n\n"We\'ve always used [provider]" — Ask the 7 questions from Chapter 4. Let the answers speak for themselves.', y);

  // Final CTA page
  y = checkPageBreak(pdf, y, 40, pageNum, totalPages);
  y += 8;
  pdf.setFillColor(245, 184, 46);
  pdf.roundedRect(20, y, 170, 30, 3, 3, 'F');
  pdf.setFontSize(14);
  pdf.setTextColor(CHARCOAL);
  pdf.text('Ready to put this guide into practice?', 105, y + 12, { align: 'center' });
  pdf.setFontSize(10);
  pdf.text('Take the 5-minute Impact Scorecard: kapesadventures.com/scorecard', 105, y + 20, { align: 'center' });
  pdf.text('Or talk to our Kenya team: kapesadventures.com', 105, y + 26, { align: 'center' });

  addFooter(pdf, pageNum.current, totalPages);
  pdf.save('Kapes-Ethical-School-Trip-Planning-Guide.pdf');
}

// ============================================
// ANNUAL IMPACT REPORT (6-8 pages)
// ============================================

export function generateImpactReport(): void {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const totalPages = 7;
  const pageNum = { current: 1 };

  // Cover page
  pdf.setFillColor(26, 109, 80);
  pdf.rect(0, 0, 210, 297, 'F');
  pdf.setFillColor(245, 184, 46);
  pdf.rect(0, 0, 210, 6, 'F');

  pdf.setFontSize(11);
  pdf.setTextColor(245, 184, 46);
  pdf.text('KAPES ADVENTURES', 20, 30);

  pdf.setFontSize(36);
  pdf.setTextColor(255, 255, 255);
  pdf.text('2025\nCommunity\nImpact Report', 20, 80);

  pdf.setFontSize(14);
  pdf.setTextColor(200, 230, 215);
  pdf.text('Where your partnership goes.\nEvery meal served. Every garden planted.\nEvery woman empowered.', 20, 150);

  pdf.setFontSize(10);
  pdf.setTextColor(180, 210, 195);
  pdf.text('kapesadventures.com', 20, 280);

  // Executive Summary
  pdf.addPage();
  pageNum.current++;
  let y = addHeader(pdf, 'Executive Summary');

  y = addBodyText(pdf, '2025 was a year of growth — not just in the number of schools we partnered with, but in the depth of community impact our programs delivered. This report covers what happened on the ground in Kenya this year, with and without visiting students.', y);
  y += 4;

  y = addSectionHeading(pdf, 'Year at a glance', y);

  const stats = [
    { label: 'Children fed daily through Seeds2Education', value: '200+' },
    { label: 'School gardens established', value: '8' },
    { label: 'Days programs operated', value: '365' },
    { label: 'Women in water cooperatives', value: '50+' },
    { label: 'Water cooperatives operational', value: '3' },
    { label: 'Partner schools internationally', value: '15+' },
    { label: 'Students hosted', value: '350+' },
    { label: 'Local staff employed year-round', value: '20+' },
  ];

  stats.forEach((stat) => {
    y = checkPageBreak(pdf, y, 10, pageNum, totalPages);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(GREEN);
    pdf.text(stat.value, 25, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.setTextColor(GRAY);
    pdf.text(stat.label, 55, y);
    y += 8;
  });

  y += 4;
  y = addBodyText(pdf, 'The most important number: 365. Our programs ran every single day of the year. Student visits happened during scheduled windows. The work never stopped.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Seeds2Education Update
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Seeds2Education Program Update');

  y = addBodyText(pdf, 'Seeds2Education is our year-round permaculture program providing daily meals to children across partner schools in the Kasigau Corridor. Local permaculture educators tend and harvest gardens every school day.', y);
  y = addSectionHeading(pdf, 'Key outcomes', y);
  y = addBodyText(pdf, '• 200+ children received daily meals from school gardens\n• 8 permaculture gardens operational across partner schools\n• Locally sourced, organic produce feeding students year-round\n• Student attendance improved at schools with feeding programs\n• Local permaculture staff employed full-time throughout the year', y);
  y += 4;
  y = addSectionHeading(pdf, 'With students vs. without students', y);
  y = addBodyText(pdf, 'During student visits: International students worked alongside local permaculture educators expanding garden beds, learning regenerative farming techniques, and understanding the connection between food security and education access.', y);
  y = addBodyText(pdf, 'Without student visits (majority of the year): Local staff continued daily garden maintenance, harvesting, and school meal preparation. New garden beds were established at additional partner schools. Community training sessions continued on sustainable agriculture practices.', y);
  y += 4;
  y = addBodyText(pdf, 'The takeaway: student visits amplify the work. They do not define it.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Water Program Update
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Water Empowering Women Program Update');

  y = addBodyText(pdf, 'Our water program supports women-led cooperatives managing water collection, purification, and distribution for surrounding communities. When women have water, girls stay in school.', y);
  y = addSectionHeading(pdf, 'Key outcomes', y);
  y = addBodyText(pdf, '• 50+ women actively participating in water cooperatives\n• 3 cooperatives operational and self-sustaining\n• 100% women-led governance and operations\n• Water infrastructure serving multiple communities daily\n• Income generation through cooperative model', y);
  y += 4;
  y = addSectionHeading(pdf, 'Impact on girls\' education', y);
  y = addBodyText(pdf, 'In communities served by water cooperatives, girls spend less time on water collection — the primary reason girls miss school in rural Kenya. Early data shows increased attendance at partner schools in cooperative service areas.', y);
  y += 4;
  y = addSectionHeading(pdf, 'With students vs. without students', y);
  y = addBodyText(pdf, 'During student visits: Students worked alongside cooperative members, learning about water management, women\'s economic empowerment, and the connection between water access and gender equity.', y);
  y = addBodyText(pdf, 'Without student visits: Cooperatives continued daily operations, expanded service areas, and conducted community training. New members were onboarded and existing infrastructure was maintained.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Financial Transparency
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Financial Transparency');

  y = addBodyText(pdf, 'We believe trip providers should show their work. Here is a high-level breakdown of how funds were allocated in 2025.', y);
  y += 4;

  y = addSectionHeading(pdf, 'Revenue allocation', y);

  const financials = [
    { category: 'Community program operations', pct: '35%', desc: 'Seeds2Education, water programs, local staff wages' },
    { category: 'Local accommodation & meals', pct: '22%', desc: 'Kenyan-owned lodges and local food procurement' },
    { category: 'Transport & logistics', pct: '15%', desc: 'In-country transport, safety vehicles, fuel' },
    { category: 'Program coordination & safety', pct: '13%', desc: 'Trip leaders, risk management, insurance, medical' },
    { category: 'Curriculum & learning materials', pct: '8%', desc: 'Pre-trip modules, reflection frameworks, documentation' },
    { category: 'Administration & operations', pct: '7%', desc: 'Business operations, communications, technology' },
  ];

  financials.forEach((item) => {
    y = checkPageBreak(pdf, y, 15, pageNum, totalPages);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(GREEN);
    pdf.text(item.pct, 25, y);
    pdf.setTextColor(CHARCOAL);
    pdf.text(item.category, 45, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(GRAY);
    pdf.text(item.desc, 45, y + 5);
    y += 14;
  });

  y += 4;
  y = addBodyText(pdf, 'Total community and local spending: 72% of all revenue stayed in Kenya. We are working toward detailed line-item reporting available to every partner school by 2026.', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Partner Highlights
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Partner School Highlights');

  y = addBodyText(pdf, '2025 saw partnerships with international schools across the Middle East, East Asia, and Europe. Here are some highlights from our school partners.', y);
  y += 4;

  y = addSectionHeading(pdf, 'What educators told us', y);
  y = addBodyText(pdf, '"Experiential learning helps bring to life the things we can only do in theory. Seeing these enterprises firsthand, understanding how they contribute to a better world — the children can only do that firsthand, and it will change them as much as it\'s changed me."\n— Brett Girven, Former Principal, The Arbor School', y);
  y += 8;

  y = addSectionHeading(pdf, 'Partnership growth', y);
  y = addBodyText(pdf, '• 15+ international schools partnered with Kapes Adventures\n• Multiple schools returned for second-year partnerships\n• Educator reconnaissance trips introduced for new partners\n• Cross-school collaboration opportunities piloted\n• Student ambassador programs launched at 3 partner schools', y);
  y += 4;
  y = addSectionHeading(pdf, 'Student feedback themes', y);
  y = addBodyText(pdf, 'The most common student reflections centered on:\n1. The difference between "helping" and "learning alongside"\n2. Understanding systemic causes of food insecurity\n3. The strength and agency of women in cooperative leadership\n4. How year-round programs differ from one-off volunteer projects\n5. What it means to show up, listen, and contribute to existing work', y);
  addFooter(pdf, pageNum.current, totalPages);

  // Looking Ahead
  pdf.addPage();
  pageNum.current++;
  y = addHeader(pdf, 'Looking Ahead: 2026 Goals');

  y = addBodyText(pdf, 'Our commitment for 2026 is simple: deepen what works, expand carefully, and maintain the year-round operational integrity that makes our model different.', y);
  y = addSectionHeading(pdf, 'Program goals', y);
  y = addBodyText(pdf, '• Expand Seeds2Education to 12+ partner schools\n• Increase daily meal capacity to 300+ children\n• Launch 2 additional water cooperatives\n• Develop conservation education program with local rangers\n• Achieve full line-item financial transparency for all partners', y);
  y += 4;
  y = addSectionHeading(pdf, 'Partnership goals', y);
  y = addBodyText(pdf, '• Grow to 25+ international school partnerships\n• Launch multi-year curriculum framework for returning schools\n• Expand educator trip offerings (dedicated teacher reconnaissance visits)\n• Develop cross-school student ambassador network\n• Publish quarterly impact updates (not just annual)', y);
  y += 4;
  y = addSectionHeading(pdf, 'Accountability', y);
  y = addBodyText(pdf, 'This report is our accountability to you — to the schools that trust us, to the communities that host us, and to the students who join our work. We publish it because we believe transparency is not optional for organizations that claim to create impact.', y);

  y += 10;
  pdf.setFillColor(245, 184, 46);
  pdf.roundedRect(20, y, 170, 30, 3, 3, 'F');
  pdf.setFontSize(14);
  pdf.setTextColor(CHARCOAL);
  pdf.text('Want to be part of the 2026 story?', 105, y + 12, { align: 'center' });
  pdf.setFontSize(10);
  pdf.text('Talk to our Kenya team: kapesadventures.com/scorecard', 105, y + 20, { align: 'center' });

  addFooter(pdf, pageNum.current, totalPages);
  pdf.save('Kapes-2025-Impact-Report.pdf');
}
