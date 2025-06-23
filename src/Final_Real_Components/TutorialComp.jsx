
import { Upload, Lock, Cloud, LockKeyhole, ShieldCheck } from 'lucide-react';

const TutorialComp = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 relative overflow-hidden">
      {/* Security pattern background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="pattern-dots pattern-blue-500 pattern-bg-white 
          pattern-size-4 pattern-opacity-20 w-full h-full" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 relative">
        <ShieldCheck className="inline-block mr-3 w-8 h-8 text-blue-600" />
        DocVault Security Flow
        <ShieldCheck className="inline-block ml-3 w-8 h-8 text-blue-600" />
      </h2>

      <div className="flex flex-col items-center space-y-12 relative z-10">
        {/* Step 1 - Upload */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 border-2 border-blue-100 
            shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(59,130,246,0.4)]
            transition-all duration-300 group">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-blue-100/40 rounded-full 
                animate-pulse-slow" />
              <div className="relative w-16 h-16 bg-blue-600 rounded-full 
                flex items-center justify-center text-white border-4 border-blue-100">
                <Upload className="w-8 h-8 stroke-[1.5]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">1. Secure Upload</h3>
              <p className="text-gray-600 mt-1">Document selection through encrypted channel</p>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="h-16 w-1 bg-gradient-to-b from-blue-200 to-blue-100 
          rounded-full relative">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 
            text-blue-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Step 2 - Encryption */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 border-2 border-emerald-100 
            shadow-[0_10px_40px_-15px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(16,185,129,0.4)]
            transition-all duration-300 group">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-100/40 rounded-full 
                animate-pulse-slow" />
              <div className="relative w-16 h-16 bg-emerald-600 rounded-full 
                flex items-center justify-center text-white border-4 border-emerald-100">
                <Lock className="w-8 h-8 stroke-[1.5]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">2. Military-Grade Encryption</h3>
              <p className="text-gray-600 mt-1">
                AES-256 encryption + bcrypt hashing
                <span className="block text-sm text-emerald-600 mt-1">
                  Zero-knowledge protocol
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="h-16 w-1 bg-gradient-to-b from-emerald-200 to-emerald-100 
          rounded-full relative">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 
            text-emerald-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Step 3 - Cloud Storage */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 border-2 border-indigo-100 
            shadow-[0_10px_40px_-15px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(79,70,229,0.4)]
            transition-all duration-300 group">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-indigo-100/40 rounded-full 
                animate-pulse-slow" />
              <div className="relative w-16 h-16 bg-indigo-600 rounded-full 
                flex items-center justify-center text-white border-4 border-indigo-100">
                <Cloud className="w-8 h-8 stroke-[1.5]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">3. Fortified Cloud Storage</h3>
              <p className="text-gray-600 mt-1">Bank-grade security in Firebase infrastructure</p>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="h-16 w-1 bg-gradient-to-b from-indigo-200 to-indigo-100 
          rounded-full relative">
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 
            text-indigo-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Step 4 - Decryption */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 border-2 border-amber-100 
            shadow-[0_10px_40px_-15px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_50px_-10px_rgba(245,158,11,0.4)]
            transition-all duration-300 group">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-100/40 rounded-full 
                animate-pulse-slow" />
              <div className="relative w-16 h-16 bg-amber-600 rounded-full 
                flex items-center justify-center text-white border-4 border-amber-100">
                <LockKeyhole className="w-8 h-8 stroke-[1.5]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">4. Protected Access</h3>
              <p className="text-gray-600 mt-1">
                On-device decryption only
                {/* <span className="block text-sm text-amber-600 mt-1">
                  Biometric verification available
                </span> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-20 w-24 h-24 bg-blue-100/30 rounded-full 
        blur-xl animate-float" />
      <div className="absolute top-1/3 right-32 w-32 h-32 bg-emerald-100/30 rounded-full 
        blur-xl animate-float-delayed" />
    </div>
  );
};

export default TutorialComp;







