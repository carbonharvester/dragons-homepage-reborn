import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import SEO from "@/components/SEO";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const quizData = {
  sections: [
    {
      title: "Vision & Differentiation",
      questions: [
        {
          question: "How does your school currently differentiate itself to parents through global learning or social impact experiences?",
          options: [
            { text: "We don't actively promote this yet.", points: 1 },
            { text: "We mention service learning in marketing but lack a clear programme.", points: 2 },
            { text: "We run overseas trips but not fully tied to our brand or values.", points: 3 },
            { text: "Our trips are core to our identity and attract new enrolments.", points: 4 }
          ]
        },
        {
          question: "How often do your leadership team discuss global education as part of strategic planning?",
          options: [
            { text: "Rarely — trips are seen as optional extras.", points: 1 },
            { text: "Occasionally, mainly during trip planning season.", points: 2 },
            { text: "It's on the agenda, but not clearly measured or benchmarked.", points: 3 },
            { text: "It's embedded in our five-year vision and KPIs.", points: 4 }
          ]
        },
        {
          question: "How confident are you that your current trips demonstrate measurable social or environmental impact?",
          options: [
            { text: "We don't measure impact.", points: 1 },
            { text: "We collect feedback but not structured data.", points: 2 },
            { text: "We have some impact reporting, but not verified.", points: 3 },
            { text: "We publish impact data and align it with our school values or ESG.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Educational Impact",
      questions: [
        {
          question: "How well are your trips integrated with your curriculum or IB CAS/SDG frameworks?",
          options: [
            { text: "Not connected.", points: 1 },
            { text: "Linked loosely to service or global citizenship.", points: 2 },
            { text: "Mapped to specific learning outcomes.", points: 3 },
            { text: "Fully embedded, with pre- and post-trip assessments.", points: 4 }
          ]
        },
        {
          question: "What percentage of students participate in global or service trips?",
          options: [
            { text: "<10%", points: 1 },
            { text: "10–30%", points: 2 },
            { text: "30–60%", points: 3 },
            { text: ">60%", points: 4 }
          ]
        },
        {
          question: "How do students typically reflect on or share their experience afterwards?",
          options: [
            { text: "Informally, through class discussions.", points: 1 },
            { text: "Written reflections only.", points: 2 },
            { text: "School assemblies or online posts.", points: 3 },
            { text: "Documented reflections tied to academic or service goals.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Community & Global Partnerships",
      questions: [
        {
          question: "Who designs or delivers your trips?",
          options: [
            { text: "Generic tour company with little local involvement.", points: 1 },
            { text: "We use a provider with some community visits.", points: 2 },
            { text: "Our trips include NGO or school partnerships.", points: 3 },
            { text: "We co-create with local partners for measurable community benefit.", points: 4 }
          ]
        },
        {
          question: "How do you ensure long-term benefit for host communities?",
          options: [
            { text: "Not something we monitor.", points: 1 },
            { text: "We donate or visit once a year.", points: 2 },
            { text: "We revisit the same communities to track progress.", points: 3 },
            { text: "We maintain ongoing projects with measurable results.", points: 4 }
          ]
        },
        {
          question: "How do you communicate this impact to parents and stakeholders?",
          options: [
            { text: "It's not something we share publicly.", points: 1 },
            { text: "Occasionally in newsletters or photos.", points: 2 },
            { text: "Through trip reports or presentations.", points: 3 },
            { text: "Through verified reports, media coverage, or CSR reports.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Sustainability & ESG Alignment",
      questions: [
        {
          question: "How do you manage the environmental impact of your school trips?",
          options: [
            { text: "We don't currently address it.", points: 1 },
            { text: "We offset flight emissions.", points: 2 },
            { text: "We work with sustainable providers.", points: 3 },
            { text: "We integrate sustainability metrics and offset through verified projects.", points: 4 }
          ]
        },
        {
          question: "How well do your trips align with your school's ESG or sustainability commitments?",
          options: [
            { text: "We don't have any commitments.", points: 1 },
            { text: "Some alignment, but informal.", points: 2 },
            { text: "Trips are chosen to support ESG goals.", points: 3 },
            { text: "They are designed around ESG metrics and SDGs.", points: 4 }
          ]
        },
        {
          question: "How transparent is your trip provider about impact and ethics?",
          options: [
            { text: "We don't know much about them.", points: 1 },
            { text: "They provide basic safety info.", points: 2 },
            { text: "They share some ethical details.", points: 3 },
            { text: "They're transparent about sustainability, community partnerships, and impact data.", points: 4 }
          ]
        }
      ]
    },
    {
      title: "Student & Parent Engagement",
      questions: [
        {
          question: "How are students involved in planning or shaping trips?",
          options: [
            { text: "They just sign up.", points: 1 },
            { text: "We take suggestions but manage internally.", points: 2 },
            { text: "Students co-create aspects of the experience.", points: 3 },
            { text: "Student-led planning and ambassador roles are built-in.", points: 4 }
          ]
        },
        {
          question: "How do parents perceive your trips?",
          options: [
            { text: "As expensive holidays.", points: 1 },
            { text: "As optional extracurriculars.", points: 2 },
            { text: "As valuable learning experiences.", points: 3 },
            { text: "As integral to the school's mission and reputation.", points: 4 }
          ]
        },
        {
          question: "Do you have a communications or storytelling strategy post-trip?",
          options: [
            { text: "None.", points: 1 },
            { text: "Ad-hoc social media.", points: 2 },
            { text: "Student videos and parent updates.", points: 3 },
            { text: "Full post-trip storytelling and PR integration to boost admissions.", points: 4 }
          ]
        }
      ]
    }
  ]
};

const ScorecardQuiz = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const totalQuestions = quizData.sections.reduce((acc, section) => acc + section.questions.length, 0);
  const currentQuestionIndex = quizData.sections
    .slice(0, currentSection)
    .reduce((acc, section) => acc + section.questions.length, 0) + currentQuestion;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const currentSectionData = quizData.sections[currentSection];
  const currentQuestionData = currentSectionData.questions[currentQuestion];
  const questionKey = `${currentSection}-${currentQuestion}`;
  const selectedAnswer = answers[questionKey];

  const handleAnswer = (points: number) => {
    setAnswers({ ...answers, [questionKey]: points });
  };

  const handleNext = () => {
    if (currentQuestion < currentSectionData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < quizData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      // Quiz complete - navigate to lead capture
      const totalScore = Object.values(answers).reduce((sum, points) => sum + points, 0);
      navigate('/scorecard/lead-capture', { state: { answers, totalScore } });
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(quizData.sections[currentSection - 1].questions.length - 1);
    }
  };

  return (
    <>
      <SEO 
        title="Global Education Scorecard Assessment | Kapes Adventures"
        description="Complete your school's global education programme assessment in just 5 minutes."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Header */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Section Title */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-primary mb-2">
                Section {currentSection + 1} of {quizData.sections.length}
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold">
                {currentSectionData.title}
              </h3>
            </div>

            {/* Question Card */}
            <Card className="p-6 md:p-8 mb-6">
              <h4 className="text-lg md:text-xl font-semibold mb-6">
                {currentQuestionData.question}
              </h4>

              <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
                <div className="space-y-4">
                  {currentQuestionData.options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value={option.points.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentSection === 0 && currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
              >
                {currentSection === quizData.sections.length - 1 && 
                 currentQuestion === currentSectionData.questions.length - 1
                  ? "Complete Assessment"
                  : "Next Question"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorecardQuiz;
