import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Camera, Share2, Shield, Heart, Github, Coffee } from 'lucide-react';
import AboutUs from './pages/AboutUs';
import Policy from './pages/Policy';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-purple-400">Snapit.INC</Link>
              <div className="flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition duration-300">Home</Link>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition duration-300">About Us</Link>
                <Link to="/support" className="text-gray-300 hover:text-purple-400 transition duration-300">Support Us</Link>
                <Link to="/policy" className="text-gray-300 hover:text-purple-400 transition duration-300">Policy</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/verrmo12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                <Coffee className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Heart className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-8 text-center text-gray-400">
              © 2025 Snapit.INC. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Snapit.INC
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Capture moments that matter, without the distractions
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#features" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition duration-300">
                Learn More
              </a>
              <a href="https://github.com/verrmo12" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition duration-300 flex items-center">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-400">Why Snapit?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="flex justify-center mb-4">
                <Camera className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Quality Captures</h3>
              <p className="text-gray-400">Take stunning photos without compression, preserving your precious moments in their full glory.</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="flex justify-center mb-4">
                <Share2 className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share with Friends</h3>
              <p className="text-gray-400">Connect with loved ones through meaningful photo sharing, without the noise of messaging.</p>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-xl">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Distraction-Free</h3>
              <p className="text-gray-400">Focus on what matters - capturing and sharing beautiful moments without endless scrolling.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-400">Our Vision</h2>
            <p className="mt-4 text-xl text-gray-300">
              An open-source project built with AI, for the community
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              Snapit is more than just another photo app - it's a movement towards mindful digital interaction. 
              Built entirely using AI tools, we're creating a platform that helps people stay connected through 
              meaningful moments while avoiding the pitfalls of social media addiction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;