import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Target, Brain } from 'lucide-react';

const AptitudeTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<any>(null);

  const questions = [
    {
      question: "What type of problems do you enjoy solving most?",
      options: [
        "Mathematical equations and logical puzzles",
        "Understanding how things work in nature",
        "Managing budgets and financial calculations",
        "Creative writing and artistic expression"
      ]
    },
    {
      question: "In a group project, what role do you naturally take?",
      options: [
        "The technical expert who handles complex tasks",
        "The researcher who gathers and analyzes information",
        "The organizer who manages timelines and resources",
        "The creative visionary who comes up with ideas"
      ]
    },
    {
      question: "Which subject have you always found most interesting?",
      options: [
        "Mathematics and Physics",
        "Biology and Chemistry",
        "Economics and Business Studies",
        "Literature and History"
      ]
    },
    {
      question: "What motivates you most in your studies?",
      options: [
        "Building and creating new technologies",
        "Understanding life and helping others",
        "Achieving financial success and growth",
        "Expressing creativity and influencing society"
      ]
    },
    {
      question: "How do you prefer to spend your free time?",
      options: [
        "Programming, gaming, or exploring new apps",
        "Reading about science or watching documentaries",
        "Following market trends or planning investments",
        "Writing, drawing, or engaging in cultural activities"
      ]
    },
    {
      question: "What type of work environment appeals to you?",
      options: [
        "Tech companies and innovation labs",
        "Hospitals, research centers, or laboratories",
        "Corporate offices and business centers",
        "Studios, agencies, or community organizations"
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: number[]) => {
    const scores = [0, 0, 0, 0]; // [CS/Engineering, Biology/Medical, Commerce/Business, Arts/Humanities]
    
    userAnswers.forEach(answer => {
      scores[answer]++;
    });

    const maxScore = Math.max(...scores);
    const dominantIndex = scores.indexOf(maxScore);

    const results = [
      {
        type: "Analytical & Technical Thinking",
        stream: "Computer Science/Engineering",
        description: "You have a strong logical mind and enjoy solving complex problems. You're naturally drawn to technology and innovation.",
        careers: ["Software Engineer", "Data Scientist", "Cybersecurity Specialist", "AI/ML Engineer", "Robotics Engineer"],
        nextSteps: "Consider B.Tech in Computer Science, IT, or related engineering fields. Focus on programming and mathematics skills."
      },
      {
        type: "Scientific & Research Oriented",
        stream: "Biology/Medical Sciences",
        description: "You have a natural curiosity about life and sciences. You enjoy research and have a desire to help others through scientific discovery.",
        careers: ["Doctor", "Researcher", "Biotechnologist", "Pharmacist", "Environmental Scientist"],
        nextSteps: "Prepare for NEET or pursue B.Sc in Biology, Biotechnology, or related fields. Focus on PCB subjects."
      },
      {
        type: "Business & Strategic Thinking",
        stream: "Commerce/Business",
        description: "You have strong organizational skills and are interested in finance, management, and entrepreneurship.",
        careers: ["Business Analyst", "Financial Advisor", "Marketing Manager", "Entrepreneur", "Investment Banker"],
        nextSteps: "Consider B.Com, BBA, or Economics. Develop skills in finance, economics, and business management."
      },
      {
        type: "Creative & Communication Skills",
        stream: "Arts/Humanities",
        description: "You have strong creative abilities and excellent communication skills. You're drawn to culture, society, and human expression.",
        careers: ["Writer", "Journalist", "Designer", "Teacher", "Social Worker", "Psychologist"],
        nextSteps: "Explore BA in Literature, Psychology, Mass Communication, or Fine Arts. Develop your creative and communication skills."
      }
    ];

    setResult(results[dominantIndex]);
    setShowResult(true);
  };

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Aptitude Test Results</h1>
              <p className="text-gray-600">Based on your responses, here's what we discovered about you</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">You are strong in {result.type}</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4">{result.description}</p>
              <div className="bg-blue-100 rounded-lg p-4">
                <p className="text-blue-800 font-semibold">
                  Suggested Stream: {result.stream}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Opportunities</h3>
                <ul className="space-y-2">
                  {result.careers.map((career: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
                <p className="text-gray-700">{result.nextSteps}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recommendations"
                className="flex items-center justify-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Recommendations
              </Link>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                  setResult(null);
                }}
                className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">Aptitude Test</h1>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </button>
            
            <p className="text-sm text-gray-500">
              Select an option to continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;