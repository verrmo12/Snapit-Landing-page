import React from 'react';
import { Coffee, Github, Star, MessageSquare, Code, Gift } from 'lucide-react';

function Support() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Support Snapit</h1>
          <p className="text-xl text-gray-300">Help us build the future of mindful photo sharing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Coffee className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold text-purple-400">Buy Us a Coffee</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your donations help us maintain and improve Snapit. Every contribution, no matter how small, makes a difference in keeping this project alive and growing.
            </p>
            <a
              href="https://ko-fi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Support on Ko-fi
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Github className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold text-purple-400">Contribute Code</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Are you a developer? Help us improve Snapit by contributing to our open-source codebase. Whether it's fixing bugs or adding new features, we welcome all contributions.
            </p>
            <a
              href="https://github.com/verrmo12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              <Code className="w-5 h-5 mr-2" />
              View Repository
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Star Our Repository</h3>
            <p className="text-gray-400">Show your support by starring our GitHub repository and helping us reach more developers.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
            <p className="text-gray-400">Share Snapit with your network and help us grow our community of mindful photographers.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <Gift className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monthly Supporter</h3>
            <p className="text-gray-400">Become a monthly supporter and help ensure the long-term sustainability of Snapit.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Where Your Support Goes</h2>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">Your support helps us:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Maintain and improve our infrastructure</li>
              <li>Develop new features and improvements</li>
              <li>Keep Snapit free and accessible for everyone</li>
              <li>Support our community and documentation</li>
              <li>Fund security audits and improvements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;