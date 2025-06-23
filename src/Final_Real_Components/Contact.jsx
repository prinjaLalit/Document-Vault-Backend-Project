import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Lock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl mt-12 w-full bg-white backdrop-blur-md bg-opacity-80 rounded-3xl shadow-2xl p-8 md:p-16 border border-blue-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-10 tracking-wide">Contact Us </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-700" />
              <span className="text-gray-700">support@docvault.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-700" />
              <span className="text-gray-700">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-700" />
              <span className="text-gray-700">123 Vault Street, Secure City, USA</span>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <ShieldCheck className="h-6 w-6 text-green-600 animate-pulse" />
              <span className="text-green-700">End-to-End Encrypted Communication</span>
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="h-6 w-6 text-green-600 animate-pulse" />
              <span className="text-green-700">Your privacy is our priority</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} DocVault. All communication is secured.
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
