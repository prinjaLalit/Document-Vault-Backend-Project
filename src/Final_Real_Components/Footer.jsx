import React from 'react';
import { ShieldCheck, Lock, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-50 border-t border-blue-200 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-white shadow-md">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
          </div>
          <span className="text-gray-700 font-semibold text-lg">DocVault</span>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
          <a href="/about" className="hover:text-blue-700 transition">Support </a>
          <a href="/contact" className="hover:text-blue-700 transition"> FAQs </a>
          <a href="/privacy" className="hover:text-blue-700 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-700 transition">Terms of Service</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Lock className="h-5 w-5 text-blue-600" />
          <p className="text-gray-500 text-xs">Secured & Encrypted Platform</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} DocVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
