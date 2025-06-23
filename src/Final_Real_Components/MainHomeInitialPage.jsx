import { Lock, ShieldCheck, FolderLock, SearchCheck } from "lucide-react";
import TutorialComp from "./TutorialComp";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mt-10 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="p-5 rounded-full bg-blue-200 shadow-lg animate-bounce-slow">
            <Lock className="h-12 w-12 text-blue-700" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          DocVault — Your Safe and Secure Digital Vault
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Lock down your important documents with next-gen security, encrypted cloud storage, and smart organization — all in one trusted space.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* <Button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg">
            Get Started
          </Button> */}
          <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg"> <Link to='/login'> Get Started </Link></button>
          {/* <Button variant="outline" className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl shadow">
            Learn More
          </Button> */}
          <button className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl shadow"> Learn More </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-blue-200 transition">
          <ShieldCheck className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End Encryption</h3>
          <p className="text-gray-600">Every file is protected with industry-grade encryption so only you can access it.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-blue-200 transition">
          <FolderLock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Organized & Secured</h3>
          <p className="text-gray-600">Easily sort files into protected folders like Certificates, IDs, and Licenses.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-blue-200 transition">
          <SearchCheck className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Intelligent Search</h3>
          <p className="text-gray-600">Quickly locate what you need using smart search and instant preview capabilities.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} DocVault. All rights reserved.
      </footer>
    </div>
    
    <TutorialComp />
    </>
  );
}
