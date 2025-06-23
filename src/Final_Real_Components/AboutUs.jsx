import React from 'react';
import {  Lock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6 py-16">
      {/* Heading Section */}
      <div className="max-w-4xl mt-8 text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-blue-100 shadow-lg animate-pulse">
            <Lock className="h-10 w-10 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          About DocVault
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Secure. Simplified. Empowered. Your documents, your control — forever protected.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-blue-200 transition">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Vision</h2>
          <p className="text-gray-600">
            To empower individuals with unmatched digital security — protecting their life's most important documents.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-blue-200 transition">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Mission</h2>
          <p className="text-gray-600">
            Creating a seamless and secure digital vault experience backed by end-to-end encryption and trusted access.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-blue-200 transition">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Values</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Privacy First</li>
            <li>Zero Compromise Security</li>
            <li>Continuous Innovation</li>
            <li>User Empowerment</li>
          </ul>
        </div>

        {/* Story */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-blue-200 transition">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded with a passion for digital freedom, DocVault started as a mission to safeguard the irreplaceable — empowering users with complete security and peace of mind.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} DocVault. Built for your digital future.
      </footer>
    </div>
  );
}

export default AboutUs;
