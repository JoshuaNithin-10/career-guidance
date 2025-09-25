import React, { useState } from 'react';
import { MessageCircle, X, ChevronDown, ChevronRight } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What course should I choose for AI?",
      answer: "For AI careers, consider Computer Science, Data Science, or Electronics Engineering. These provide strong foundations in programming, mathematics, and machine learning."
    },
    {
      question: "Which scholarships are available in Tamil Nadu?",
      answer: "Tamil Nadu offers various scholarships like Chief Minister's Scholarship, Post Matric Scholarship, and Merit-cum-Means scholarships. Check our recommendations page for more details."
    },
    {
      question: "How do I prepare for JEE Main?",
      answer: "Focus on NCERT textbooks, solve previous year papers, take mock tests regularly, and maintain a consistent study schedule. Consider joining coaching or online courses for additional support."
    },
    {
      question: "What are the best colleges for Commerce?",
      answer: "Top commerce colleges include St. Xavier's, LSR, SRCC, and Christ University. Look for colleges with good placement records and industry connections."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50">
      <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg">
        <h3 className="font-semibold">Career Assistant</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 max-h-96 overflow-y-auto">
        <p className="text-sm text-gray-600 mb-4">
          Hi! I'm here to help with your career questions. Check out these frequently asked questions:
        </p>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-3 pb-3">
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;