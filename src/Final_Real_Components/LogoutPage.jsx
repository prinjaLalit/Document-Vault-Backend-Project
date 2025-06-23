import { useState } from 'react';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../DB_Connect'; // adjust your firebase import path accordingly
import { zustandKeyObjectStore } from '../Zustand/ZustadUid';

export default function LogoutPage() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

//   const auth = getAuth(app);
const auth = getAuth(app);

  const handleLogoutClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmModal(false);
    setShowAuthForm(true);
  };

  const handleAuthAndLogout = async () => {
    // try {
      await signInWithEmailAndPassword(auth, email, password); //To Verify their Credentials just
      signOut(auth).then(()=> {localStorage.removeItem("docvault-userid")
        localStorage.setItem("login_state", false);
        zustandKeyObjectStore.getState().setCryptoKey(null);
        sessionStorage.removeItem("userDerivedKey");
        console.log(sessionStorage.getItem("userDerivedKey"));
    //SignOut hone pe localstorage se uid bhi remove karo and login_state false karo local storage mei
      //SignOut pe Zustand Store mei CryptoKeyObject ko bhi NULL krdo 
      //SignOut pe Sessions Storage mei se RawBytes of CryptoKey ko bhi DELETE krdo
      //Next Login pe UserFireStoreDoc se hi fetch hoga same salt, therefore same key aayegi
      }).catch((error)=> console.log(error.message)); //Main Logging Out
      
      alert("Successfully Logged Out");
      window.location.href = '/login'; // redirect to login page
    // } catch (error) {
    //   setErrorMsg("Invalid credentials. Please try again.");
    // }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-white to-blue-100 p-4'>
      <div className='bg-white rounded-2xl shadow-xl border border-blue-300 w-full max-w-md p-8 text-center'>
        <h2 className='text-2xl font-bold text-blue-700 mb-6'> Log Out </h2>
        <button
          onClick={handleLogoutClick}
          className='bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition duration-300'
        >
          Logout
        </button>

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10'>
            <div className='bg-white rounded-xl shadow-lg p-6 w-[90vw] max-w-sm text-center'>
              <p className='text-lg font-medium text-gray-800 mb-4'>
                Are you sure you want to logout?
              </p>
              <div className='flex justify-center gap-4'>
                <button
                  onClick={handleConfirmLogout}
                  className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Auth Form After Confirm */}
        {showAuthForm && (
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-blue-700 mb-4'>Re-enter your credentials</h3>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='w-full mb-3 px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='w-full mb-3 px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            {errorMsg && <p className='text-red-600 mb-2 text-sm'>{errorMsg}</p>}
            <button
              onClick={handleAuthAndLogout}
              className='w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 rounded hover:opacity-90 transition duration-300'
            >
              Confirm & Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
