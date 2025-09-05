import React, { useState, useRef, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  section: string;
  weight: number; // section weight
  maxScore: number; // per-question max score for normalization
}

interface UserData {
  firstName: string;
  lastName: string;
  school: string;
  students: string;
  country: string;
  email: string;
}

const GlobalImpactTripScorecard: React.FC = () => {
  const [showEntryForm, setShowEntryForm] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [entryError, setEntryError] = useState(false);
  const [sent, setSent] = useState(false);
  const [scorecardText, setScorecardText] = useState('');
  const [bandLabel, setBandLabel] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    school: '',
    students: '',
    country: '',
    email: ''
  });
  const [userAnswers, setUserAnswers] = useState<Record<string, number | null>>({});

  const formRef = useRef<HTMLDivElement>(null);

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria',
    'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Ghana', 'Greece',
    'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania', 'Luxembourg',
    'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway',
    'Oman', 'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Saudi Arabia', 'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland',
    'Thailand', 'Turkey', 'UAE', 'Ukraine', 'United Kingdom', 'United States', 'Vietnam'
  ];

  const questions: Question[] = [
    { id: 'learningGoals1', text: 'Do your trips have 3 to 5 clear learning goals shared with students before travel? Goals help students know what they’ll learn.', section: 'Learning goals and purpose', weight: 20, maxScore: 6 },
    { id: 'learningGoals2', text: 'Do activities match those goals, not just sightseeing? This keeps the trip focused on learning.', section: 'Learning goals and purpose', weight: 20, maxScore: 6 },
    { id: 'learningGoals3', text: 'Do students know how they will show what they learn? This could be a project or test.', section: 'Learning goals and purpose', weight: 20, maxScore: 6 },
    { id: 'studentVoice1', text: 'Do students have real planning roles with decisions that stick? This means they help decide things that matter.', section: 'Student voice and leadership', weight: 15, maxScore: 6 },
    { id: 'studentVoice2', text: 'Do students run any part of the daily brief or debrief? Briefs are morning plans, debriefs are end-of-day chats.', section: 'Student voice and leadership', weight: 15, maxScore: 6 },
    { id: 'studentVoice3', text: 'Do students choose or design at least one learning task? This lets them pick what to learn about.', section: 'Student voice and leadership', weight: 15, maxScore: 6 },
    { id: 'communityPartnership1', text: 'Does a local organisation help choose the project or focus? Locals know what’s best for their area.', section: 'Community partnership and reciprocity', weight: 15, maxScore: 6 },
    { id: 'communityPartnership2', text: 'Do local staff guide or supervise the student tasks? This ensures safety and learning.', section: 'Community partnership and reciprocity', weight: 15, maxScore: 6 },
    { id: 'communityPartnership3', text: 'Does any part of the work continue after the trip ends? This helps the community long-term.', section: 'Community partnership and reciprocity', weight: 15, maxScore: 6 },
    { id: 'evidenceLearning1', text: 'Do you run a short check of knowledge or skills before and after each trip? Checks show what students learn.', section: 'Evidence of learning', weight: 15, maxScore: 6 },
    { id: 'evidenceLearning2', text: 'Do students produce at least two assessed pieces of work, for example a field report or presentation? Assessed work proves learning.', section: 'Evidence of learning', weight: 15, maxScore: 6 },
    { id: 'evidenceLearning3', text: 'Do you collect feedback from the local partner on the usefulness of student work? Feedback helps improve trips.', section: 'Evidence of learning', weight: 15, maxScore: 6 },
    { id: 'cultureRespect1', text: 'Do students get a short session on culture, power and respectful behaviour before travel? This teaches how to respect other places.', section: 'Culture, respect and inclusion', weight: 10, maxScore: 6 },
    { id: 'cultureRespect2', text: 'Are tasks and materials adapted for SEND or EAL where needed? SEND is for special needs, EAL for English learners.', section: 'Culture, respect and inclusion', weight: 10, maxScore: 6 },
    { id: 'cultureRespect3', text: 'Are photo, story and data consent rules clear and followed? Consent means asking permission to share things.', section: 'Culture, respect and inclusion', weight: 10, maxScore: 6 },
    { id: 'equityAccess1', text: 'Is there a clear bursary or fee support offer published at the start? Bursaries help students who can’t afford trips.', section: 'Equity and access for international trips', weight: 10, maxScore: 6 },
    { id: 'equityAccess2', text: 'Do you track who goes by disadvantage, SEND, gender and ethnicity? Tracking ensures fairness.', section: 'Equity and access for international trips', weight: 10, maxScore: 6 },
    { id: 'equityAccess3', text: 'Do you take steps to lower total cost without cutting learning, for example shorter stays, off-peak travel, shared rooms with consent? Lower costs help more join.', section: 'Equity and access for international trips', weight: 10, maxScore: 6 },
    { id: 'planetEthics1', text: 'Do you reduce flights or segments where possible and plan efficient routing? Fewer flights help the planet.', section: 'Planet and ethics', weight: 10, maxScore: 6 },
    { id: 'planetEthics2', text: 'Do you use hotels or operators with a known sustainability standard, for example GSTC aligned? Sustainability means eco-friendly choices.', section: 'Planet and ethics', weight: 10, maxScore: 6 },
    { id: 'planetEthics3', text: 'Do you avoid activities that harm animals or children, for example captive wildlife shows or orphanage visits? Avoiding harm protects nature and people.', section: 'Planet and ethics', weight: 10, maxScore: 6 },
    { id: 'safetyCare1', text: 'Do all providers share written safeguarding and incident steps that you check? Safeguarding keeps everyone safe.', section: 'Safety and care', weight: 5, maxScore: 2 },
    { id: 'safetyCare2', text: 'Is there a trained first aider and a medical plan for each group? This ensures health support during trips.', section: 'Safety and care', weight: 5, maxScore: 2 }
  ];

  type SectionAggregate = {
    weight: number;
    total: number; // sum of scaled answers
    possible: number; // sum of maxScores for answered questions
  };

  const calculateScore = () => {
    const aggregates: Record<string, SectionAggregate> = {};

    questions.forEach((q) => {
      if (!aggregates[q.section]) {
        aggregates[q.section] = { weight: q.weight, total: 0, possible: 0 };
      }
      const ans = userAnswers[q.id];
      if (ans !== null && ans !== undefined) {
        // Scale 0-2 answers to the question's maxScore
        const scaled = (ans / 2) * q.maxScore;
        aggregates[q.section].total += scaled;
        aggregates[q.section].possible += q.maxScore;
      }
    });

    const sectionScores: Record<string, number> = {};
    let totalScore = 0;

    Object.entries(aggregates).forEach(([section, agg]) => {
      const sectionScore = agg.possible > 0 ? (agg.total / agg.possible) * agg.weight : 0;
      sectionScores[section] = sectionScore;
      totalScore += sectionScore;
    });

    return { sectionScores, totalScore };
  };

  useEffect(() => {
    if (showResults && !sent) {
      const { totalScore } = calculateScore();
      generateScorecard();
      const sheetURL = 'https://script.google.com/macros/s/AKfycbw_WM228IyN2NQde40VL_vl0Ue5d5fwJ8-2Mv9dc-RFdyWCa6ojzphDtnQN4WoME3UgVw/exec';
      const payload = {
        'First Name': userData.firstName,
        'Last Name': userData.lastName,
        'Email': userData.email,
        'School': userData.school,
        'Students': userData.students,
        'Country': userData.country,
        'Score': totalScore.toFixed(2),
        'Timestamp': new Date().toISOString(),
        // Individual question responses with full question text
        ...Object.fromEntries(
          questions.map(q => [q.text, userAnswers[q.id] !== null && userAnswers[q.id] !== undefined ? userAnswers[q.id] : 'N/A'])
        )
      };

      fetch(sheetURL, {
        method: 'POST',
        body: 'data=' + encodeURIComponent(JSON.stringify(payload)),
        mode: 'no-cors',
      }).then(() => {
        console.log('✅ Data sent to Google Sheet');
      }).catch(error => {
        console.error('❌ Error sending data to Google Sheet:', error);
      });

      setSent(true);
    }
  }, [showResults, sent, userData, userAnswers]);

  const handleStart = () => {
    if (!userData.firstName || !userData.lastName || !userData.school || !userData.students || !userData.country || !userData.email) {
      setEntryError(true);
      return;
    }
    setEntryError(false);
    setShowEntryForm(false);
    setShowQuiz(true);
  };

  const handleAnswerChange = (questionId: string, value: number | null) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setShowQuiz(false);
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const generateScorecard = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const { sectionScores, totalScore } = calculateScore();
    let band = '';
    if (totalScore <= 49) band = 'Red: Mostly tourism. Learning and ethics need work.';
    else if (totalScore <= 69) band = 'Amber: Basics in place. Fix the biggest three gaps before the next cohort.';
    else band = 'Green: Strong base. Tidy weak spots and publish your framework.';

    let recommendations = '';
    if (totalScore <= 49) {
      recommendations = `### **Recommendations**\n\nYour score indicates that your trips are currently more like tourism than educational experiences. To improve, start by setting clear learning goals for each trip and share them with students beforehand. Next, involve students in planning or running parts of the trip to make it more meaningful. Finally, partner with a local organization to ensure your trip benefits the community, not just your students. Begin with one change and build from there within the next trip cycle.`;
    } else if (totalScore <= 69) {
      recommendations = `### **Recommendations**\n\nYour trips have a solid foundation but need refinement. Identify the three lowest-scoring areas—likely learning goals, student voice, or community partnership—and prioritize them. For example, add a pre- and post-trip knowledge check or involve students in designing a task. Work with your team to address these gaps before the next cohort departs, ensuring a balanced approach to learning and ethics.`;
    } else {
      recommendations = `### **Recommendations**\n\nYour trips are on a strong path with a solid educational and ethical base. Focus on fine-tuning weak spots, such as enhancing cultural respect sessions or optimizing travel routes for lower carbon impact. Consider publishing your framework as a model for other schools, sharing your success story to inspire broader change. Continue monitoring feedback to maintain this high standard.`;
    }

    let scorecard = `## **Global Impact Trip Scorecard**\n\n**School: ${userData.school}**\n**Date: ${currentDate}**\n**Total Score: ${totalScore.toFixed(1)}%**\n**Band: ${band}\n\n---\n\n`;

    scorecard += recommendations + '\n\n';

    setBandLabel(band);
    setRecommendations(recommendations);
    setScorecardText(scorecard);
  };


  const renderQuestion = (q: Question) => (
    <div className="space-y-4">
      <p className="text-lg font-medium">{q.text}</p>
      <div className="space-y-2">
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
          <input
            type="radio"
            name={q.id}
            className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
            checked={userAnswers[q.id] === 2}
            onChange={() => handleAnswerChange(q.id, 2)}
          />
          <span className="text-sm">Yes, always</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
          <input
            type="radio"
            name={q.id}
            className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
            checked={userAnswers[q.id] === 1}
            onChange={() => handleAnswerChange(q.id, 1)}
          />
          <span className="text-sm">Sometimes</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
          <input
            type="radio"
            name={q.id}
            className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
            checked={userAnswers[q.id] === 0}
            onChange={() => handleAnswerChange(q.id, 0)}
          />
          <span className="text-sm">No or not sure</span>
        </label>
        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
          <input
            type="radio"
            name={q.id}
            className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
            checked={userAnswers[q.id] === null}
            onChange={() => handleAnswerChange(q.id, null)}
          />
          <span className="text-sm">N/A (not applicable)</span>
        </label>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-white">
      <div className="w-full max-w-4xl mx-auto p-3 md:p-6" ref={formRef}>
        {showEntryForm && (
          <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-xl">
            <CardHeader className="text-center pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Global Impact Trip Scorecard
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="First Name"
                value={userData.firstName}
                onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                required
              />
              <input
                type="text"
                placeholder="School Name"
                value={userData.school}
                onChange={(e) => setUserData({ ...userData, school: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                required
              />
              <input
                type="number"
                placeholder="Number of Students"
                value={userData.students}
                onChange={(e) => setUserData({ ...userData, students: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                min={1}
                required
              />
              <select
                value={userData.country}
                onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <input
                type="email"
                placeholder="Your Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                required
              />
              {entryError && (
                <div className="text-red-600 mb-4 text-center font-medium">
                  Please fill all fields to start.
                </div>
              )}
              <Button
                onClick={handleStart}
                className="w-full py-3 md:py-4 text-base md:text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Start Audit
              </Button>
            </CardContent>
          </Card>
        )}

        {showQuiz && (
          <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 shadow-xl">
            <CardHeader className="pb-4 md:pb-6">
              <div className="mb-4 md:mb-6">
                <Progress
                  value={((currentSlide + 1) / questions.length) * 100}
                  className="h-2 md:h-3 mb-4 md:mb-6 bg-gray-200"
                />
                <div className="text-sm md:text-base text-gray-600 text-center font-medium">
                  {Math.round(((currentSlide + 1) / questions.length) * 100)}% Complete
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6 md:mb-8">
                {renderQuestion(questions[currentSlide])}
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className={`flex items-center justify-center space-x-2 w-full sm:w-auto py-2.5 md:py-3 text-sm md:text-base ${
                    currentSlide === 0 ? 'hidden' : 'inline-flex'
                  }`}
                >
                  <ArrowLeft className="mr-2 h-4 w-4 text-gray-600" /> Previous
                </Button>
                <Button
                  onClick={handleNext}
                  className="w-full sm:w-auto py-3 md:py-4 text-base md:text-lg font-semibold bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-[1.02] ml-auto"
                >
                  {currentSlide === questions.length - 1 ? 'Get Score' : 'Next'} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {showResults && (
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">Your Trip Scorecard</CardTitle>
              <div className={`mx-auto mt-3 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
                bandLabel.startsWith('Red') ? 'bg-red-100 text-red-800' :
                bandLabel.startsWith('Amber') ? 'bg-amber-100 text-amber-800' :
                'bg-green-100 text-green-800'
              }`}>
                {bandLabel || 'Score ready'}
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-left">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-800 mb-2">
                  {(() => {
                    const { totalScore } = calculateScore();
                    return `${totalScore.toFixed(1)}%`;
                  })()}
                </div>
                <p className="text-lg text-gray-600">Your Total Score</p>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-2"><strong>School:</strong> {userData.school}</p>
                <p className="mb-4">{recommendations.replace(/^### \*\*Recommendations\*\*\s*/, '')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90">
                  <a href="https://calendly.com/kapes-adventures/30min" target="_blank" rel="noopener noreferrer">
                    Book a free consultation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default GlobalImpactTripScorecard;
