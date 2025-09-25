import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import CareerForm from './pages/CareerForm';
import Recommendations from './pages/Recommendations';
import AptitudeTest from './pages/AptitudeTest';
import ExamUpdates from './pages/ExamUpdates';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career-form" element={<CareerForm />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/aptitude-test" element={<AptitudeTest />} />
            <Route path="/exams" element={<ExamUpdates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;