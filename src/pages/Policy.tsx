import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

function Policy() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Privacy Policy & Terms</h1>
          <p className="text-xl text-gray-300">Your privacy and security are our top priorities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-400">Your data is encrypted and stored securely using industry-standard protocols.</p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-400">We never share or sell your personal information to third parties.</p>
          </div>

          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-400">Clear and honest communication about how we handle your data.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Data Collection</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We collect only the minimum amount of data necessary to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Account information (email, username)</li>
              <li>Photos you choose to upload</li>
              <li>Basic usage statistics to improve our service</li>
              <li>Friend connections you create</li>
            </ul>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a Snapit user, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Export your data</li>
              <li>Opt-out of non-essential data collection</li>
            </ul>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Terms of Service</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                By using Snapit, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Not use the platform for illegal activities</li>
                <li>Respect other users' privacy and rights</li>
                <li>Not attempt to circumvent our security measures</li>
                <li>Not distribute harmful content or malware</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>
            </div>
          </section>

          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about our privacy policy or terms of service, please don't hesitate to reach out to our team at privacy@snapit.inc
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Policy;