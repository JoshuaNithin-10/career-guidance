import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Building, DollarSign, ChevronDown, ChevronUp, ExternalLink, Target } from 'lucide-react';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('careerFormData');
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const mockCourses = {
    'Computer Science': [
      { name: 'B.Tech Computer Science Engineering', duration: '4 years', eligibility: '12th with PCM' },
      { name: 'B.Sc Computer Science', duration: '3 years', eligibility: '12th with Mathematics' },
      { name: 'BCA (Bachelor of Computer Applications)', duration: '3 years', eligibility: '12th any stream' },
      { name: 'B.Tech Information Technology', duration: '4 years', eligibility: '12th with PCM' },
      { name: 'B.Tech Software Engineering', duration: '4 years', eligibility: '12th with PCM' }
    ],
    'Biology': [
      { name: 'MBBS (Bachelor of Medicine)', duration: '5.5 years', eligibility: '12th with PCB, NEET' },
      { name: 'B.Sc Biology', duration: '3 years', eligibility: '12th with PCB' },
      { name: 'B.Tech Biotechnology', duration: '4 years', eligibility: '12th with PCB/PCM' },
      { name: 'B.Pharma', duration: '4 years', eligibility: '12th with PCB' },
      { name: 'BDS (Bachelor of Dental Surgery)', duration: '5 years', eligibility: '12th with PCB, NEET' }
    ],
    'Commerce': [
      { name: 'B.Com (Bachelor of Commerce)', duration: '3 years', eligibility: '12th Commerce' },
      { name: 'BBA (Bachelor of Business Administration)', duration: '3 years', eligibility: '12th any stream' },
      { name: 'CA (Chartered Accountancy)', duration: '3-4 years', eligibility: '12th Commerce' },
      { name: 'B.Com Honors', duration: '3 years', eligibility: '12th Commerce with high marks' },
      { name: 'Bachelor of Economics', duration: '3 years', eligibility: '12th any stream' }
    ],
    'Arts': [
      { name: 'BA English Literature', duration: '3 years', eligibility: '12th any stream' },
      { name: 'BA Psychology', duration: '3 years', eligibility: '12th any stream' },
      { name: 'BA Journalism & Mass Communication', duration: '3 years', eligibility: '12th any stream' },
      { name: 'BFA (Bachelor of Fine Arts)', duration: '3-4 years', eligibility: '12th any stream' },
      { name: 'BA History', duration: '3 years', eligibility: '12th any stream' }
    ]
  };

  const mockColleges = [
    { name: 'Indian Institute of Technology - Chennai', district: 'Chennai', nirf: 1, type: 'Engineering' },
    { name: 'Anna University', district: 'Chennai', nirf: 15, type: 'Engineering' },
    { name: 'PSG College of Technology', district: 'Coimbatore', nirf: 28, type: 'Engineering' },
    { name: 'Loyola College', district: 'Chennai', nirf: 3, type: 'Arts & Science' },
    { name: 'Madras Christian College', district: 'Chennai', nirf: 12, type: 'Arts & Science' },
    { name: 'Presidency College', district: 'Chennai', nirf: 8, type: 'Arts & Science' },
    { name: 'Coimbatore Institute of Technology', district: 'Coimbatore', nirf: 42, type: 'Engineering' },
    { name: 'Government Medical College', district: 'Chennai', nirf: 5, type: 'Medical' }
  ];

  const mockScholarships = [
    { name: 'Chief Minister\'s Scholarship', amount: '₹50,000/year', eligibility: 'Merit-based, Tamil Nadu residents' },
    { name: 'Post Matric Scholarship', amount: '₹25,000/year', eligibility: 'SC/ST students' },
    { name: 'Merit-cum-Means Scholarship', amount: '₹30,000/year', eligibility: 'Income < ₹6 LPA' },
    { name: 'INSPIRE Scholarship', amount: '₹80,000/year', eligibility: 'Science stream, top 1% in 12th' },
    { name: 'Kishore Vaigyanik Protsahan Yojana', amount: '₹7,000/month', eligibility: 'Science aptitude' },
    { name: 'National Scholarship Portal', amount: 'Varies', eligibility: 'Multiple criteria' }
  ];

  const pgOptions = {
    'B.Tech Computer Science Engineering': [
      { name: 'M.Tech in AI/ML', abroad: 'MS in Computer Science (USA, Canada)', scholarships: 'Google PhD Fellowship, Microsoft Research Fellowship' },
      { name: 'MBA in IT', abroad: 'MBA from top B-schools globally', scholarships: 'Merit scholarships from universities' }
    ],
    'MBBS (Bachelor of Medicine)': [
      { name: 'MD/MS Specialization', abroad: 'USMLE for USA, PLAB for UK', scholarships: 'WHO Scholarships, Commonwealth Scholarships' }
    ],
    'B.Com (Bachelor of Commerce)': [
      { name: 'MBA Finance/Marketing', abroad: 'MBA from international universities', scholarships: 'GMAT fee waivers, University scholarships' },
      { name: 'M.Com', abroad: 'Masters in Finance/Economics', scholarships: 'Merit-based scholarships' }
    ]
  };

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Form Data Found</h2>
          <p className="text-gray-600 mb-6">Please fill out the career form first to see recommendations.</p>
          <Link
            to="/career-form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Career Form
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hello, {formData.name}! Here are your personalized recommendations
          </h1>
          <p className="text-gray-600">
            Based on your {formData.stream} stream and interests in {formData.interests}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Suggested Courses
          </button>
          <button
            onClick={() => setActiveTab('colleges')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'colleges'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Building className="h-5 w-5 mr-2" />
            Suggested Colleges
          </button>
          <button
            onClick={() => setActiveTab('scholarships')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'scholarships'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <DollarSign className="h-5 w-5 mr-2" />
            Suggested Scholarships
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Top Suggested Courses based on your {formData.stream} Stream & Interests
              </h2>
              <div className="grid gap-4">
                {mockCourses[formData.stream as keyof typeof mockCourses]?.slice(0, 3).map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-900">{course.name}</h3>
                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                      <span>Duration: {course.duration}</span>
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                All Available Courses in {formData.district}, {formData.state}
              </h3>
              <div className="grid gap-3">
                {mockCourses[formData.stream as keyof typeof mockCourses]?.map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">{course.name}</h4>
                    <div className="flex gap-4 text-sm text-gray-600 mt-1">
                      <span>Duration: {course.duration}</span>
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* PG Options Expandable Section */}
              <div className="mt-6">
                <button
                  onClick={() => setExpandedSection(expandedSection === 'pg' ? null : 'pg')}
                  className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold text-blue-900">PG Options & Abroad Opportunities</span>
                  {expandedSection === 'pg' ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {expandedSection === 'pg' && (
                  <div className="mt-4 space-y-4">
                    {Object.entries(pgOptions).map(([course, options]) => (
                      <div key={course} className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">After {course}:</h5>
                        {options.map((option, idx) => (
                          <div key={idx} className="ml-4 mb-3">
                            <p className="font-medium text-gray-800">{option.name}</p>
                            <p className="text-sm text-blue-600">Abroad: {option.abroad}</p>
                            <p className="text-sm text-green-600">Scholarships: {option.scholarships}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'colleges' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Recommended Colleges</h2>
              <div className="grid gap-4">
                {mockColleges.slice(0, 3).map((college, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{college.name}</h3>
                        <p className="text-gray-600">{college.district}, {formData.state}</p>
                        <p className="text-sm text-blue-600">{college.type}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        NIRF #{college.nirf}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                All Colleges in {formData.state}
              </h3>
              <div className="grid gap-3">
                {mockColleges.map((college, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">{college.name}</h4>
                      <p className="text-gray-600">{college.district}</p>
                      <p className="text-sm text-blue-600">{college.type}</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      NIRF #{college.nirf}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scholarships' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Top Scholarships for {formData.stream} in {formData.state}
              </h2>
              <div className="grid gap-4">
                {mockScholarships.slice(0, 3).map((scholarship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{scholarship.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{scholarship.eligibility}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {scholarship.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">More Scholarship Opportunities</h3>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  View More Scholarships
                  <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="grid gap-3">
                {mockScholarships.map((scholarship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{scholarship.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{scholarship.eligibility}</p>
                      </div>
                      <span className="text-green-600 font-medium text-sm">{scholarship.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Aptitude Test CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center">
          <Target className="h-12 w-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Want more personalized guidance?</h3>
          <p className="text-blue-100 mb-6">
            Take our comprehensive aptitude test to discover your hidden strengths and get even better recommendations
          </p>
          <Link
            to="/aptitude-test"
            className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Take Aptitude Test
            <Target className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;