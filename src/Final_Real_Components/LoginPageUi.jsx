// import { useState } from 'react';
// import { ShieldCheck, Lock, Mail } from 'lucide-react';

// const LoginPageUI = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 to-indigo-900 p-8">
//       <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden p-10">
//         {/* Background Animated Elements */}
//         <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float-slow" />
//         <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-200/30 rounded-full blur-xl animate-float-fast" />

//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">
//             {isSignUp ? 'Create Your Account' : 'Welcome Back'}
//           </h2>
//           <p className="text-gray-500 mt-2">
//             {isSignUp
//               ? 'Join the DocVault community. Safe, secure, and simple document management.'
//               : 'Access your encrypted vault with ease and security.'}
//           </p>
//         </div>

//         {/* Form Section */}
//         <div className="space-y-6">
//           <div className="relative">
//             <input
//               type="email"
//               className="w-full p-4 pl-12 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Email"
//             />
//             <div className="absolute top-3 left-3 text-blue-500">
//               <Mail className="w-6 h-6" />
//             </div>
//           </div>

//           {isSignUp && (
//             <div className="relative">
//               <input
//                 type="password"
//                 className="w-full p-4 pl-12 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 placeholder="Password"
//               />
//               <div className="absolute top-3 left-3 text-blue-500">
//                 <Lock className="w-6 h-6" />
//               </div>
//             </div>
//           )}

//           {isSignUp && (
//             <div className="relative">
//               <input
//                 type="password"
//                 className="w-full p-4 pl-12 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                 placeholder="Confirm Password"
//               />
//               <div className="absolute top-3 left-3 text-blue-500">
//                 <Lock className="w-6 h-6" />
//               </div>
//             </div>
//           )}

//           <button
//             className="w-full p-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//           >
//             {isSignUp ? 'Sign Up' : 'Log In'}
//           </button>
//         </div>

//         {/* Switch Between Login and Signup */}
//         <div className="mt-6 text-center text-gray-600">
//           <p>
//             {isSignUp ? (
//               <>
//                 Already have an account?{' '}
//                 <span
//                   onClick={() => setIsSignUp(false)}
//                   className="text-blue-600 cursor-pointer font-semibold"
//                 >
//                   Log In
//                 </span>
//               </>
//             ) : (
//               <>
//                 Don't have an account?{' '}
//                 <span
//                   onClick={() => setIsSignUp(true)}
//                   className="text-blue-600 cursor-pointer font-semibold"
//                 >
//                   Sign Up
//                 </span>
//               </>
//             )}
//           </p>
//         </div>

//         {/* Security Emphasis */}
//         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
//           <ShieldCheck className="inline-block text-green-500 w-6 h-6 mb-1" />
//           <p>Your documents are encrypted with military-grade security</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPageUI;







import { useState } from 'react';
import { Lock, Mail, ShieldCheck } from 'lucide-react';

const LoginPageUI = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
   
  );
};

export default LoginPageUI;
