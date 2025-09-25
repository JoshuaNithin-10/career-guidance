import React from 'react';
import { Calendar, Clock, ExternalLink, Bell } from 'lucide-react';

const ExamUpdates = () => {
  const upcomingExams = [
    {
      name: "JEE Main 2025",
      date: "April 15-20, 2025",
      registrationDeadline: "March 10, 2025",
      category: "Engineering",
      eligibility: "12th with PCM",
      link: "https://jeemain.nta.nic.in",
      status: "Registration Open"
    },
    {
      name: "NEET UG 2025",
      date: "May 5, 2025",
      registrationDeadline: "March 25, 2025",
      category: "Medical",
      eligibility: "12th with PCB",
      link: "https://neet.nta.nic.in",
      status: "Registration Open"
    },
    {
      name: "CLAT 2025",
      date: "May 18, 2025",
      registrationDeadline: "April 5, 2025",
      category: "Law",
      eligibility: "12th any stream",
      link: "https://consortiumofnlus.ac.in",
      status: "Registration Open"
    },
    {
      name: "CUET 2025",
      date: "June 10-25, 2025",
      registrationDeadline: "May 1, 2025",
      category: "General",
      eligibility: "12th any stream",
      link: "https://cuet.samarth.ac.in",
      status: "Registration Soon"
    },
    {
      name: "GATE 2025",
      date: "February 1-16, 2025",
      registrationDeadline: "Closed",
      category: "Engineering/Sciences",
      eligibility: "B.Tech/B.Sc",
      link: "https://gate.iitkgp.ac.in",
      status: "Completed"
    },
    {
      name: "CAT 2025",
      date: "November 24, 2025",
      registrationDeadline: "September 15, 2025",
      category: "Management",
      eligibility: "Graduate",
      link: "https://iimcat.ac.in",
      status: "Registration Soon"
    },
    {
      name: "BITSAT 2025",
      date: "June 15-30, 2025",
      registrationDeadline: "May 10, 2025",
      category: "Engineering",
      eligibility: "12th with PCM",
      link: "https://bitsadmission.com",
      status: "Registration Soon"
    },
    {
      name: "AIIMS MBBS 2025",
      date: "May 20, 2025",
      registrationDeadline: "April 15, 2025",
      category: "Medical",
      eligibility: "12th with PCB",
      link: "https://aiimsexams.ac.in",
      status: "Registration Open"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-100 text-green-800';
      case 'Registration Soon':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Engineering':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Medical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Management':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Law':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'General':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Entrance Exam Updates</h1>
          <p className="text-gray-600">Stay updated with the latest entrance exam schedules and deadlines</p>
        </div>

        {/* Alert Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-blue-600 mr-3" />
            <p className="text-blue-800">
              <strong>Important:</strong> Always verify exam dates and registration deadlines on official websites. 
              Dates may change due to unforeseen circumstances.
            </p>
          </div>
        </div>

        {/* Exam Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingExams.map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{exam.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                  {exam.status}
                </span>
              </div>

              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border mb-4 ${getCategoryColor(exam.category)}`}>
                {exam.category}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">Exam Date: {exam.date}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Registration: {exam.registrationDeadline}</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  <strong>Eligibility:</strong> {exam.eligibility}
                </div>
              </div>

              <a
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center w-full justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Official Website
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exam Preparation Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">General Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Start preparation at least 6-12 months before the exam</li>
                <li>• Create a structured study schedule</li>
                <li>• Take regular mock tests</li>
                <li>• Analyze your performance and improve weak areas</li>
                <li>• Stay updated with exam pattern changes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Reminders</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keep all required documents ready</li>
                <li>• Register before the deadline</li>
                <li>• Check eligibility criteria carefully</li>
                <li>• Practice time management</li>
                <li>• Stay calm and confident during exams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamUpdates;