import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import SEO from "@/components/SEO";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Google Apps Script Web App URL - replace with your deployed URL
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

// Kapes differentiators for the multi-select question
const kapesDifferentiators = [
  { id: "measurable-impact", label: "Measurable impact (specific metrics like meals served, gardens built)" },
  { id: "community-led", label: "Community-led projects (locals lead, students assist)" },
  { id: "long-term-partnerships", label: "Long-term community partnerships (multi-year relationships)" },
  { id: "hands-on-skills", label: "Students learn practical skills (permaculture, water systems)" },
  { id: "local-employment", label: "Local employment and economic benefit" },
  { id: "curriculum-integration", label: "Integration with curriculum (SDGs, CAS hours, documented outcomes)" },
  { id: "women-empowerment", label: "Women's empowerment and leadership" },
  { id: "sustainable-infrastructure", label: "Building sustainable infrastructure (school gardens, water systems)" },
  { id: "ongoing-updates", label: "Ongoing updates and communication after the trip" },
  { id: "transparent-spending", label: "Transparent spending (know where your money goes)" }
];

// Interstitial questions shown after main quiz question 10
interface InterstitialAnswer {
  selfRating?: number;
  willingnessToImprove?: string;
  priorities?: string[];
}

const quizData = {
  sections: [
    {
      title: "Your Current Trip",
      description: "Let's start with what your trips look like today.",
      questions: [
        {
          question: "How would you describe your school's international trips?",
          options: [
            { text: "Primarily cultural immersion and sightseeing.", points: 1 },
            { text: "Adventure travel with some community visits.", points: 2 },
            { text: "Service-learning trips with volunteer activities.", points: 3 },
            { text: "Social impact programs designed around community-identified needs.", points: 4 }
          ]
        },
        {
          question: "Who organizes and runs your school trips?",
          options: [
            { text: "An international tour operator or travel agency.", points: 1 },
            { text: "A volunteer tourism organization.", points: 2 },
            { text: "Our school coordinates directly with local contacts.", points: 3 },
            { text: "A specialist organization with long-term community partnerships and local staff.", points: 4 }
          ]
        },
        {
          question: "What percentage of your trip involves students actively working (not observing or touring)?",
          options: [
            { text: "Less than 20%—it's mainly sightseeing and cultural visits.", points: 1 },
            { text: "About 30%—some activities mixed with tourism.", points: 2 },
            { text: "About 50%—balanced between work and exploration.", points: 3 },
            { text: "Over 70%—the trip is centered on meaningful hands-on projects.", points: 4 }
          ]
        },
        {
          question: "How does your trip connect to your school's curriculum?",
          options: [
            { text: "It's a separate enrichment activity—not connected to curriculum.", points: 1 },
            { text: "Students write reflections for English or humanities credit.", points: 2 },
            { text: "It loosely aligns with global citizenship or IB themes.", points: 3 },
            { text: "It's integrated with specific learning outcomes, SDGs, and documented CAS hours.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Student Experience",
      description: "What are your students actually doing and learning?",
      questions: [
        {
          question: "When students interact with local communities, what do they typically do?",
          options: [
            { text: "Observe, take photos, and have brief conversations.", points: 1 },
            { text: "Visit schools or community centers and spend time with children.", points: 2 },
            { text: "Participate in organized activities like teaching, sports, or basic tasks.", points: 3 },
            { text: "Work on skilled projects like building gardens, water systems, or sustainable infrastructure.", points: 4 }
          ]
        },
        {
          question: "What practical skills could a student demonstrate after returning?",
          options: [
            { text: "Improved adaptability and gratitude for their own life.", points: 1 },
            { text: "Basic knowledge of local traditions or language phrases.", points: 2 },
            { text: "Some hands-on skills like cooking local food or crafts.", points: 3 },
            { text: "Technical skills: permaculture, water harvesting, or sustainable agriculture.", points: 4 }
          ]
        },
        {
          question: "Do students understand why poverty exists in the communities they visit?",
          options: [
            { text: "Not really—we focus on positive cultural experiences.", points: 1 },
            { text: "They observe poverty but we don't discuss root causes.", points: 2 },
            { text: "We provide pre-trip briefings on local context.", points: 3 },
            { text: "Students learn about systemic barriers and how their work addresses specific causes.", points: 4 }
          ]
        },
        {
          question: "How do students reflect on their experience?",
          options: [
            { text: "Social media posts and informal sharing with friends.", points: 1 },
            { text: "Written journals or reflection essays.", points: 2 },
            { text: "Structured debriefs with teachers during the trip.", points: 3 },
            { text: "Guided reflection connecting their work to systemic change and ongoing impact.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Community Relationships",
      description: "How deep are your connections with local communities?",
      questions: [
        {
          question: "How long has your school been working with the same community?",
          options: [
            { text: "We visit different destinations each year.", points: 1 },
            { text: "We've been to the same region once or twice.", points: 2 },
            { text: "We return to the same area but work with different groups.", points: 3 },
            { text: "We have multi-year partnerships with communities who know us by name.", points: 4 }
          ]
        },
        {
          question: "How much time do students spend with the same local people?",
          options: [
            { text: "Brief interactions—an hour or less total.", points: 1 },
            { text: "A few hours across the entire trip.", points: 2 },
            { text: "One full day with a family or community group.", points: 3 },
            { text: "Multiple days working alongside the same people, building real relationships.", points: 4 }
          ]
        },
        {
          question: "Who decides what projects students work on?",
          options: [
            { text: "The tour operator designs the itinerary.", points: 1 },
            { text: "Our school's trip coordinator chooses activities.", points: 2 },
            { text: "It's a combination of school preferences and local suggestions.", points: 3 },
            { text: "Community leaders identify their priorities, and we support their vision.", points: 4 }
          ]
        },
        {
          question: "What happens with the community relationship after students leave?",
          options: [
            { text: "Nothing—the trip ends when we depart.", points: 1 },
            { text: "Occasionally a teacher stays in touch personally.", points: 2 },
            { text: "We send thank-you messages or follow up once.", points: 3 },
            { text: "Ongoing communication, updates, and continued support throughout the year.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Measurable Impact",
      description: "What evidence of change can you point to?",
      questions: [
        {
          question: "Six months after your trip, what physical evidence of students' work still exists?",
          options: [
            { text: "Nothing physical—our trips focus on experiences.", points: 1 },
            { text: "Donated supplies like books, clothes, or school materials.", points: 2 },
            { text: "A small project, though we're not sure if it's still used.", points: 3 },
            { text: "Permanent infrastructure the community uses daily: gardens, water systems, buildings.", points: 4 }
          ]
        },
        {
          question: "If a parent asked 'What did my child's trip accomplish?', what could you show them?",
          options: [
            { text: "Photos and stories about the experience.", points: 1 },
            { text: "Student reflections about personal growth.", points: 2 },
            { text: "A general report mentioning activities and outcomes.", points: 3 },
            { text: "Specific data: meals provided, families supported, infrastructure built.", points: 4 }
          ]
        },
        {
          question: "Does your trip address a specific barrier that keeps children out of school?",
          options: [
            { text: "No—we focus on cultural exchange, not solving problems.", points: 1 },
            { text: "We're aware of barriers but don't address them directly.", points: 2 },
            { text: "We contribute to general education support.", points: 3 },
            { text: "Yes—we tackle specific barriers like hunger, water access, or school infrastructure.", points: 4 }
          ]
        },
        {
          question: "How do you measure the success of your school trips?",
          options: [
            { text: "Student satisfaction surveys and photos shared.", points: 1 },
            { text: "Teacher observations and student reflections.", points: 2 },
            { text: "General feedback from partners and participants.", points: 3 },
            { text: "Specific metrics: number of beneficiaries, meals served, or infrastructure completed.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Ethics & Accountability",
      description: "The questions that matter most.",
      questions: [
        {
          question: "How do your student activities relate to local employment and leadership?",
          options: [
            { text: "We haven't really thought about this.", points: 1 },
            { text: "Students do tasks like painting or cleaning that locals could be paid for.", points: 2 },
            { text: "We try to be helpful without taking work from locals.", points: 3 },
            { text: "Locals lead all projects, students assist, and communities continue the work after we leave.", points: 4 }
          ]
        },
        {
          question: "Who leads activities when students are 'helping' the community?",
          options: [
            { text: "Our teachers or the tour company staff.", points: 1 },
            { text: "A mix of our staff and local guides.", points: 2 },
            { text: "Local guides with some community involvement.", points: 3 },
            { text: "Community members teach students—students learn from them, not the reverse.", points: 4 }
          ]
        },
        {
          question: "Where does the money from your trip actually go?",
          options: [
            { text: "Mostly to international operators, hotels, and transport companies.", points: 1 },
            { text: "Some goes to local guides and service providers.", points: 2 },
            { text: "We make donations to local organizations or causes.", points: 3 },
            { text: "A significant portion directly funds community projects and local employment year-round.", points: 4 }
          ]
        },
        {
          question: "How would the community honestly describe your school's visits?",
          options: [
            { text: "They see us as well-meaning tourists.", points: 1 },
            { text: "They appreciate the donations and attention.", points: 2 },
            { text: "They value the interaction but it doesn't change much.", points: 3 },
            { text: "They consider us genuine partners solving problems they identified.", points: 4 }
          ]
        }
      ]
    }
  ]
};

// Answer structure that stores question text, answer text, and points
interface QuizAnswer {
  question: string;
  answer: string;
  points: number;
}

const ScorecardQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const userData = location.state?.userData;

  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, QuizAnswer>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Interstitial questions state
  const [showInterstitial, setShowInterstitial] = useState<'none' | 'self-rating' | 'willingness' | 'priorities'>('none');
  const [interstitialAnswers, setInterstitialAnswers] = useState<InterstitialAnswer>({
    selfRating: 5,
    willingnessToImprove: undefined,
    priorities: []
  });

  // Redirect if no user data
  useEffect(() => {
    if (!userData) {
      navigate('/scorecard/start');
    }
  }, [userData, navigate]);

  // Don't render quiz until we have user data
  if (!userData) {
    return null;
  }

  const totalQuestions = quizData.sections.reduce((acc, section) => acc + section.questions.length, 0);
  const currentQuestionIndex = quizData.sections
    .slice(0, currentSection)
    .reduce((acc, section) => acc + section.questions.length, 0) + currentQuestion;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const currentSectionData = quizData.sections[currentSection];
  const currentQuestionData = currentSectionData.questions[currentQuestion];
  const questionKey = `${currentSection}-${currentQuestion}`;
  const selectedAnswer = answers[questionKey];

  const handleAnswer = (points: number, answerText: string) => {
    setAnswers({
      ...answers,
      [questionKey]: {
        question: currentQuestionData.question,
        answer: answerText,
        points: points
      }
    });
  };

  // Check if we're at the last question (section 4, question 3 = question 20)
  const isLastQuestion = currentSection === quizData.sections.length - 1 &&
                          currentQuestion === currentSectionData.questions.length - 1;

  const handleNext = async () => {
    // Handle interstitial question flow (shown after question 20)
    if (showInterstitial === 'self-rating') {
      setShowInterstitial('willingness');
      return;
    }
    if (showInterstitial === 'willingness') {
      setShowInterstitial('priorities');
      return;
    }
    if (showInterstitial === 'priorities') {
      // Done with interstitials, now submit and show results
      await submitAndNavigate();
      return;
    }

    // Regular quiz flow
    if (currentQuestion < currentSectionData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < quizData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      // This is question 20 - show interstitial questions before results
      setShowInterstitial('self-rating');
      return;
    }
  };

  const submitAndNavigate = async () => {
      // Quiz complete - submit data and navigate to results
      const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
      const maxScore = 80;
      const percentage = Math.round((totalScore / maxScore) * 100);

      // Determine category
      let category = "Wake-Up Call";
      if (totalScore >= 64) category = "Impact Leader";
      else if (totalScore >= 48) category = "Room to Grow";

      setIsSubmitting(true);

      // Format answers for Google Sheets - create flat structure with Q1, A1, Q2, A2, etc.
      const formattedAnswers: Record<string, string> = {};
      let questionNum = 1;
      for (let s = 0; s < quizData.sections.length; s++) {
        for (let q = 0; q < quizData.sections[s].questions.length; q++) {
          const key = `${s}-${q}`;
          if (answers[key]) {
            formattedAnswers[`Q${questionNum}`] = answers[key].question;
            formattedAnswers[`A${questionNum}`] = answers[key].answer;
            formattedAnswers[`P${questionNum}`] = answers[key].points.toString();
          }
          questionNum++;
        }
      }

      // Submit directly to Google Sheets
      if (GOOGLE_SCRIPT_URL) {
        try {
          const payload = {
            timestamp: new Date().toISOString(),
            name: userData.name,
            role: userData.title,
            school: userData.school,
            country: userData.country || '',
            email: userData.email,
            phone: userData.phone || '',
            score: totalScore,
            maxScore: maxScore,
            percentage: percentage,
            category: category,
            selfRating: interstitialAnswers.selfRating,
            willingnessToImprove: interstitialAnswers.willingnessToImprove,
            priorities: interstitialAnswers.priorities
              ?.map(id => kapesDifferentiators.find(d => d.id === id)?.label)
              .filter(Boolean)
              .join('; '),
            ...formattedAnswers
          };

          // Use fetch with no-cors mode for Google Apps Script
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
          });
        } catch (error) {
          console.error('Error submitting to Google Sheets:', error);
          // Continue to results even if submission fails
        }
      }

    // Navigate to results
    navigate('/scorecard/results', {
      state: {
        totalScore,
        answers,
        name: userData.name,
        school: userData.school
      }
    });
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(quizData.sections[currentSection - 1].questions.length - 1);
    }
  };

  // Render Self-Rating Question
  const renderSelfRating = () => (
    <Card className="p-6 md:p-8 mb-6 border-2">
      <h4 className="text-lg md:text-xl font-semibold text-kapes-charcoal mb-2">
        Based on your answers, how would you rate your school trip program?
      </h4>
      <p className="text-dragon-gray mb-6">
        On a scale of 1-10, where 1 is "No real impact" and 10 is "Truly transformational"
      </p>

      <div className="space-y-6">
        <div className="flex justify-between text-sm text-dragon-gray mb-2">
          <span>1 - No impact</span>
          <span>10 - Transformational</span>
        </div>
        <Slider
          value={[interstitialAnswers.selfRating || 5]}
          onValueChange={(value) => setInterstitialAnswers({
            ...interstitialAnswers,
            selfRating: value[0]
          })}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
        <div className="text-center">
          <span className="text-4xl font-gothic text-kapes-orange">
            {interstitialAnswers.selfRating || 5}
          </span>
          <span className="text-lg text-dragon-gray"> / 10</span>
        </div>
      </div>
    </Card>
  );

  // Render Willingness Question
  const renderWillingness = () => (
    <Card className="p-6 md:p-8 mb-6 border-2">
      <h4 className="text-lg md:text-xl font-semibold text-kapes-charcoal mb-6">
        Would you be open to improving your school trip program?
      </h4>

      <RadioGroup
        value={interstitialAnswers.willingnessToImprove}
        onValueChange={(value) => setInterstitialAnswers({
          ...interstitialAnswers,
          willingnessToImprove: value
        })}
      >
        <div className="space-y-3">
          {[
            { value: "this-year", label: "Yes, I'd like to make changes this academic year" },
            { value: "next-year", label: "Yes, but probably next academic year" },
            { value: "exploring", label: "I'm just exploring options for now" },
            { value: "satisfied", label: "No, I'm satisfied with our current program" }
          ].map((option) => (
            <div
              key={option.value}
              className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                interstitialAnswers.willingnessToImprove === option.value
                  ? 'border-kapes-orange bg-kapes-orange/5'
                  : 'border-gray-200 hover:border-kapes-orange/50 hover:bg-kapes-cream/50'
              }`}
            >
              <RadioGroupItem value={option.value} id={`willingness-${option.value}`} className="mt-0.5" />
              <Label htmlFor={`willingness-${option.value}`} className="flex-1 cursor-pointer text-kapes-charcoal">
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </Card>
  );

  // Render Priorities Question
  const renderPriorities = () => (
    <Card className="p-6 md:p-8 mb-6 border-2">
      <h4 className="text-lg md:text-xl font-semibold text-kapes-charcoal mb-2">
        What matters most to you in a school trip program?
      </h4>
      <p className="text-dragon-gray mb-6">
        Select all that apply
      </p>

      <div className="space-y-3">
        {kapesDifferentiators.map((item) => (
          <div
            key={item.id}
            className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
              interstitialAnswers.priorities?.includes(item.id)
                ? 'border-kapes-orange bg-kapes-orange/5'
                : 'border-gray-200 hover:border-kapes-orange/50 hover:bg-kapes-cream/50'
            }`}
            onClick={() => {
              const currentPriorities = interstitialAnswers.priorities || [];
              const newPriorities = currentPriorities.includes(item.id)
                ? currentPriorities.filter(p => p !== item.id)
                : [...currentPriorities, item.id];
              setInterstitialAnswers({
                ...interstitialAnswers,
                priorities: newPriorities
              });
            }}
          >
            <Checkbox
              id={item.id}
              checked={interstitialAnswers.priorities?.includes(item.id)}
              onCheckedChange={(checked) => {
                const currentPriorities = interstitialAnswers.priorities || [];
                const newPriorities = checked
                  ? [...currentPriorities, item.id]
                  : currentPriorities.filter(p => p !== item.id);
                setInterstitialAnswers({
                  ...interstitialAnswers,
                  priorities: newPriorities
                });
              }}
              className="mt-0.5"
            />
            <Label htmlFor={item.id} className="flex-1 cursor-pointer text-kapes-charcoal">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </Card>
  );

  // Determine if the Next button should be disabled for interstitials
  const isInterstitialNextDisabled = () => {
    if (showInterstitial === 'willingness' && !interstitialAnswers.willingnessToImprove) return true;
    if (showInterstitial === 'priorities' && (!interstitialAnswers.priorities || interstitialAnswers.priorities.length === 0)) return true;
    return false;
  };

  // Get the interstitial step label
  const getInterstitialLabel = () => {
    if (showInterstitial === 'self-rating') return "Almost Done: Question 1 of 3";
    if (showInterstitial === 'willingness') return "Almost Done: Question 2 of 3";
    if (showInterstitial === 'priorities') return "Almost Done: Question 3 of 3";
    return "";
  };

  return (
    <>
      <SEO
        title="School Trip Impact Scorecard | Kapes Adventures"
        description="Discover how your school trips compare to true social impact experiences. Take our 5-minute assessment."
      />

      <div className="min-h-screen bg-gradient-to-b from-kapes-cream to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Header */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-between text-sm text-dragon-gray">
                {showInterstitial !== 'none' ? (
                  <>
                    <span>{getInterstitialLabel()}</span>
                    <span>Final Questions</span>
                  </>
                ) : (
                  <>
                    <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                    <span>{Math.round(progress)}% Complete</span>
                  </>
                )}
              </div>
              <Progress value={showInterstitial !== 'none' ? 100 : progress} className="h-2" />
            </div>

            {/* Section Title - only show for regular questions */}
            {showInterstitial === 'none' && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-kapes-orange uppercase tracking-wider mb-2">
                  Section {currentSection + 1}: {currentSectionData.title}
                </h2>
                <p className="text-dragon-gray italic">
                  {currentSectionData.description}
                </p>
              </div>
            )}

            {/* Interstitial section header */}
            {showInterstitial !== 'none' && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-kapes-orange uppercase tracking-wider mb-2">
                  Final Questions
                </h2>
                <p className="text-dragon-gray italic">
                  Help us understand your goals so we can provide better recommendations.
                </p>
              </div>
            )}

            {/* Question Card - Regular or Interstitial */}
            {showInterstitial === 'none' ? (
              <Card className="p-6 md:p-8 mb-6 border-2">
                <h4 className="text-lg md:text-xl font-semibold text-kapes-charcoal mb-6">
                  {currentQuestionData.question}
                </h4>

                <RadioGroup
                  value={selectedAnswer?.points.toString()}
                  onValueChange={(value) => {
                    const option = currentQuestionData.options.find(o => o.points.toString() === value);
                    if (option) handleAnswer(parseInt(value), option.text);
                  }}
                >
                  <div className="space-y-3">
                    {currentQuestionData.options.map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                          selectedAnswer?.points === option.points
                            ? 'border-kapes-orange bg-kapes-orange/5'
                            : 'border-gray-200 hover:border-kapes-orange/50 hover:bg-kapes-cream/50'
                        }`}
                      >
                        <RadioGroupItem value={option.points.toString()} id={`option-${index}`} className="mt-0.5" />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-kapes-charcoal">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </Card>
            ) : showInterstitial === 'self-rating' ? (
              renderSelfRating()
            ) : showInterstitial === 'willingness' ? (
              renderWillingness()
            ) : showInterstitial === 'priorities' ? (
              renderPriorities()
            ) : null}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={(currentSection === 0 && currentQuestion === 0) || showInterstitial !== 'none'}
                className="border-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={
                  isSubmitting ||
                  (showInterstitial === 'none' && !selectedAnswer) ||
                  isInterstitialNextDisabled()
                }
                className="btn-action"
              >
                {isSubmitting ? (
                  "Calculating..."
                ) : showInterstitial === 'priorities' ? (
                  "See My Results"
                ) : showInterstitial !== 'none' ? (
                  "Continue"
                ) : isLastQuestion ? (
                  "Continue"
                ) : (
                  "Next Question"
                )}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardQuiz;
