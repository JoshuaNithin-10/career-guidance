import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, MapPin, Heart } from 'lucide-react';

const CareerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    stream: '',
    interests: '',
    state: '',
    district: ''
  });

  const states = [
    'Tamil Nadu',
    'Karnataka',
    'Kerala',
    'Andhra Pradesh',
    'Maharashtra',
    'Gujarat',
    'Delhi',
    'West Bengal'
  ];

  const districts = {
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    'Karnataka': ['Bengaluru', 'Mysuru', 'Hubli', 'Mangaluru', 'Belagavi'],
    'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam'],
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Kakinada'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
    'Delhi': ['Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri']
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data in localStorage for use in recommendations
    localStorage.setItem('careerFormData', JSON.stringify(formData));
    navigate('/recommendations');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'state' && { district: '' }) // Reset district when state changes
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Form</h1>
            <p className="text-gray-600">Tell us about yourself to get personalized recommendations</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2 text-blue-600" />
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                Class
              </label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select your class</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                Stream
              </label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select your stream</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Biology">Biology</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Heart className="h-4 w-4 mr-2 text-blue-600" />
                Interests
              </label>
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Tell us about your interests, hobbies, and career aspirations..."
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                Preferred College Location
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select state</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  disabled={!formData.state}
                >
                  <option value="">Select district</option>
                  {formData.state && districts[formData.state as keyof typeof districts]?.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get My Recommendations
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;