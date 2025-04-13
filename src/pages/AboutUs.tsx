import React from 'react';
import { Users, Code, Heart, Github } from 'lucide-react';

function AboutUs() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">About Snapit.INC</h1>
          <p className="text-xl text-gray-300">Building the future of mindful photo sharing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2025, Snapit.INC emerged from a simple yet powerful idea: what if we could create a photo-sharing platform that enhances human connection without contributing to digital addiction? Our journey began with a small team of passionate developers who believed in the power of mindful technology.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We're on a mission to revolutionize how people share and preserve their most precious moments. By creating a platform that prioritizes meaningful connections over endless scrolling, we're helping users stay present while staying connected.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-gray-400">Built by the community, for the community. Open source at our core.</p>
          </div>

          <div className="text-center p-6">
            <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-400">Leveraging cutting-edge AI technology to create innovative solutions.</p>
          </div>

          <div className="text-center p-6">
            <Heart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">User-Focused</h3>
            <p className="text-gray-400">Every feature is designed with our users' wellbeing in mind.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Join Our Journey</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We're always looking for passionate individuals who share our vision of creating technology that enhances rather than detracts from human connection. Whether you're a developer, designer, or simply someone who believes in our mission, there are many ways to contribute to Snapit.
          </p>
          <div className="flex justify-center">
            <a href="https://github.com/verrmo12" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition duration-300 flex items-center">
              <Github className="w-5 h-5 mr-2" />
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;