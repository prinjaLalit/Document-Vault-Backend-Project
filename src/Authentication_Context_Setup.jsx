// import React, { useState } from 'react'
// // FireBase Cloud se Auth Service ko Import Karo
// import { app } from './DB_Connect';
// // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { useFirebase } from './Context/Firebase';
// import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import LoginPageUI from './Final_Real_Components/LoginPageUi';

// export default function Authentication() {
//     const redirectToLogin = useNavigate();
//     const [emailID, setEmail] = useState("");
//     const [Password, setPassword] = useState("");
//     const [username_var, setUsername] = useState("")
    
//     const firebase_hook = useFirebase();
//     const db = getFirestore(app);
//     const Register_New_User = async()=> {
//         const user_credentials_megaObject = await firebase_hook.SignUpWithEmailAndPassword(emailID, Password);
//         console.log(user_credentials_megaObject);

//         const user_actual_detailsObject = user_credentials_megaObject.user;
//         console.log(user_actual_detailsObject);
//         // Agar SignUp Successful hai, only then ye UserObject Create hoga and accessible hoga, else nahi
//         const userDocRef = doc(db, "Users", user_actual_detailsObject.uid);
//         //Ab Is Reference ka Istemaal Karke getDocs se snapshotdocs retrueve kraao
//        const userSnapshot = await getDoc(userDocRef);
//        //Agar User Pehle se us uid se Registered thaa, Only then userSnapshot will Exist, else its null
//        if(!userSnapshot.exists())
//        {//you cannot here simply check it like "if(!userSnaphot), using .exists is compulsory for checking return value of getDoc "
//          setDoc(userDocRef, 
//             {email: user_actual_detailsObject.email, Username: username_var, timeOfSignUp: new Date()})
//             .then(()=> {console.log("User Doc Added");
//                 redirectToLogin('/login');
//             })
//             .catch((error)=> {console.error("Error in Adding USer Doc" + error)});
//         }
//         else
//         {
//             alert("Account Exists, Try Logging In"); //if
//         }
//        }
//        //setDoc instead of addDoc as addDoc is for Random ID generation, setDoc is for Uniquee ID ASSIGNING

//     return (
//         // <>
//         // <form className='Sign_Up_User'>
//         //     <label htmlFor="email">Email: </label>
//         //     <input type="text" value={emailID} onChange={(event)=> setEmail(event.target.value)} />
//         //     <br></br>
//         //     <br></br>
//         //     <label htmlFor="password">Password</label>
//         //     <input type="password" value={Password} onChange={(event)=> setPassword(event.target.value)}/>
//         //     <br></br>
//         //     <br></br>
//         //     <label htmlFor="username"> Custom Username </label>
//         //     <input type="text" value={username_var} onChange={(event)=> {setUsername(event.target.value)}} className='border-1 border-black'/>
//         // </form>
//         // <button onClick={Register_New_User} className='button_div bg-slate-950 text-white border-2 border-black rounded-lg p-2'>Sign Up</button>

//         // </>

//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-4 py-12">
//       {/* Hero Section */}
//       <div className="max-w-xl text-center mb-12">
//         <div className="flex items-center justify-center mb-6">
//           <div className="p-5 rounded-full bg-gray-200 shadow-lg animate-bounce-slow">
//             <Lock className="h-12 w-12 text-gray-700" />
//           </div>
//         </div>
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
//           {isSignUp ? 'Create Your Account' : 'Log In to DocVault'}
//         </h1>
//         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//           {isSignUp
//             ? 'Join DocVault for secure document storage with industry-grade encryption.'
//             : 'Access your encrypted vault with ease and keep your important files secure.'}
//         </p>
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-md space-y-6">
//         <div className="relative">
//           <input
//             type="email"
//             className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//             placeholder="Email"
//           />
//           <div className="absolute top-3 left-3 text-gray-500">
//             <Mail className="w-6 h-6" />
//           </div>
//         </div>

//         {isSignUp && (
//           <div className="relative">
//             <input
//               type="password"
//               className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Password"
//             />
//             <div className="absolute top-3 left-3 text-gray-500">
//               <Lock className="w-6 h-6" />
//             </div>
//           </div>
//         )}

//         {isSignUp && (
//           <div className="relative">
//             <input
//               type="password"
//               className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Confirm Password"
//             />
//             <div className="absolute top-3 left-3 text-gray-500">
//               <Lock className="w-6 h-6" />
//             </div>
//           </div>
//         )}

//         <button className="w-full p-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
//           {isSignUp ? 'Sign Up' : 'Log In'}
//         </button>
//       </div>

//       {/* Switch Between Login and Signup */}
//       <div className="mt-12 text-center text-gray-600">
//         <p>
//           {isSignUp ? (
//             <>
//               Already have an account?{' '}
//               <span
//                 onClick={() => setIsSignUp(false)}
//                 className="text-blue-600 cursor-pointer font-semibold"
//               >
//                 Log In
//               </span>
//             </>
//           ) : (
//             <>
//               Don't have an account?{' '}
//               <span
//                 onClick={() => setIsSignUp(true)}
//                 className="text-blue-600 cursor-pointer font-semibold"
//               >
//                 Sign Up
//               </span>
//             </>
//           )}
//         </p>
//       </div>

//       {/* Security Emphasis */}
//       <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm">
//         <ShieldCheck className="inline-block text-green-500 w-6 h-6" />
//         <p>Your documents are protected with industry-leading encryption</p>
//       </div>
//     </div>
//     );
// }




import React, { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck } from 'lucide-react';
import { useFirebase } from './Context/Firebase';
import { app } from './DB_Connect';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useSearchParams } from 'react-router-dom';
import { zustandKeyObjectStore, zustandLoginStateStore } from './Zustand/ZustadUid';
import { sendEmailVerification, applyActionCode, getAuth } from 'firebase/auth';
 
const auth = getAuth(app);
const loginStatusForProfileNavbarContext = createContext(null);

export const UsernameLoginStatusProvider = (props) => {
  const [username_var, setUsername] = useState('');
  const [login_state, setLoginState] = useState(false);
  const [emailID, setEmail] = useState("");
  
  return(
    <loginStatusForProfileNavbarContext.Provider value={{username_var, login_state, emailID, setUsername, setLoginState, setEmail}}>
      {props.children}
    </loginStatusForProfileNavbarContext.Provider>
  );
};

export const accessUsernameAndLoginState = ()=> useContext(loginStatusForProfileNavbarContext);
//Now using this Function cum Hook we can easily access the username and login state anywhere in any function


export default function Authentication() {
  const [isSignUp, setIsSignUp] = useState(true);
  // const [emailID, setEmail] = useState('');
  const [Password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
 const [keyGenSaltFetchedStateVar, setFetchedKeyGenSalt] = useState("");
 
  const {username_var, login_state, emailID, setUsername, setLoginState, setEmail} = accessUsernameAndLoginState();
//   const [login_status, setLoginStatus] = useState(false);
//   const [signup_status, setSignUpState] = useState(false);
  
//Now there is a dire-need to make the  Username & the LoginState globally accessible 
//taaki navbar mei userprofile icon mei username show ho on successful login and secondly 
// vahi username alag alag alerts display krne mei bhi kaam aaye

/*Yani ab iss AuthSetup component mei there's 1) Username Var and Secondly 2) isSignUp state which
needs to be globally accessible....yani mai yaha createContext krunga and usecontext mei us context
ko daalke export krunga and us context ke .Provider ki value mei mai un dono vars ko dalunga that need to be exported
and us .Provider tags ke beechmei all other components need to be nested*/

  useEffect(() => {
    if(login_state == true)
    {
      GenerateSaltAndCallKeyGenFunction();
    }
  }, [login_state]);
  //UseEffect is triggered only when the Component's Local State is updated via the setLoginState() described in UseState() is Triggered...
  //Sirf zustand state update krne se useEffect aint triggered
  
  const firebase_hook = useFirebase();
  const redirectToLogin = useNavigate();
  const db = getFirestore(app);

//   if(login_status)
//   {
//     redirectToLogin('/fileUploader');
//   }
//   if(signup_status)
//   {
//     redirectToLogin('/login');
//   }

//This function aims to generate the Salt Value Unique to Individual User, and aimed at being used later on
//when on Successful Login of the User, Encryption Key needs to be generated for user to be able to 
//upload all files successfully and even retrieve older ones successfully by Decryption using Key
  const SaltGenerationForKeyFunc = () => {
      const salt_generated = window.crypto.getRandomValues(new Uint8Array(12));
      const encoded = btoa(String.fromCharCode(...salt_generated));
      return encoded;
  }

//   const actionCodeSettings = {
//   url: "http://localhost:5173/login",  // Or your actual local port
//   handleCodeInApp: true,
// };




  // const [searchParams] = useSearchParams();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (!username_var || !emailID || !Password || Password !== confirmPassword) {
        alert("Please fill all fields correctly!");
        return;
      }

      try {
        const userCredentials = await firebase_hook.SignUpWithEmailAndPassword(emailID, Password);
        const user = userCredentials.user;
        
        // sendEmailVerification(user, actionCodeSettings).then(()=> console.log("Sent Email Verification Link to the your Registered Email")).catch((error)=> console.log("Error in Sending Verification Email" + error.message)); //Sending the Verification Link to the User

        
        //Now Proceed for FireStore Doc Creation only if the email is verified
        // if(user.emailVerified)
        // {
        // const oobcode = searchParams.get('oobCode');
        // if(oobcode)
        // {
        //   applyActionCode(auth, oobcode).then(()=> console.log("Email Verified")).catch((error)=> console.log("error in verifying email" + error.message));
        // }
        // //This following remaining Code will be Executed only if the email verification status is TRUE
        // user.reload().then(()=> console.log("User E-Verification Status Reloaded")).catch((error)=> console.log("Error in Reloading the Verification Status" + error.message));

    // if(user.emailVerified)
    //   {
        
        const userDocRef = doc(db, "Users", user.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
          const base_sixtyFour_KeyGenSalt = SaltGenerationForKeyFunc();
          await setDoc(userDocRef, {
            email: user.email,
            Username: username_var,
            timeOfSignUp: new Date(),
            KeyGenerationSalt: base_sixtyFour_KeyGenSalt //this is the Salt needed for Generating Encryption Key whenn user will LogIn
          });
          console.log("User Doc Added");
        //   alert("Signed Up Successfully");
        setIsSignUp(false);
        setConfirmPassword('');
        setPassword('');
          redirectToLogin('/login');
         
        } else {
          alert("Account already exists. Try logging in.");
        }
      
      } catch (error) {
        console.error("Signup Error: ", error);
        alert("Invalid Credentials. Try again");
      }
    } else {
     firebase_hook.SignInWithEmailAndPassword(emailID, Password).then((userCredentials)=> {console.log("User Logged In with Details: ")
        console.log(userCredentials.user);
        localStorage.setItem("docvault-userid", userCredentials.user.uid);
        
        console.log("Updated Localstorage uid is: " + localStorage.getItem("docvault-userid"));

        redirectToLogin('/vaultCreation');
        setLoginState(true);
        zustandLoginStateStore.getState().setZustandLoginState(true);
     }).catch((error)=> console.log("Error signing in user" + error.message));
    }
  };

  //is to pehlaan salt has to be Generated. One Salt for Every user
  const encoderToUnitEightArray = new TextEncoder();
  const unitEightFormOfPassword = encoderToUnitEightArray.encode(Password);
  //Created Object of TextEncoder() to convert Password to a Unit8Array understandable by WebCryptoAPI
  //Now aiming to create the Key Generation function meant to be Executed on a Successful Login
  const EncryptionKeyGenerationFromPassword = async (saltForKeyGen) => {
    let cryptoKey;
    const rawMaterialKeyGeneration = await window.crypto.subtle.importKey(
      "raw",
      unitEightFormOfPassword,
      {name: 'PBKDF2'},
      false,
      ["deriveKey"]
    );

  try{
    cryptoKey = await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: saltForKeyGen,
        iterations: 100000,
        hash: 'SHA-256'
      },
      rawMaterialKeyGeneration,
      {name: "AES-GCM", length: 256},
      true,
      ["encrypt", "decrypt"]
    );
  }catch(error)
    {
      console.log("Error in the .deriveKey method is: " + error.message);
    }
    console.log(cryptoKey);

    //After generation, the Key needs to be Accessible in all Components, therefore Pass it to Zustand
   
    zustandKeyObjectStore.getState().setCryptoKey(cryptoKey);
    // console.log(zustandKeyObjectStore.getState().cryptoKey);

    //We want to Store Raw Bytes of Key in Session Storage in order to be able to Re-Import the Key to Zustand on Refreshes
    const rawBytesOfKey = await window.crypto.subtle.exportKey("raw", cryptoKey);

    //converted the raw bytes of RawKey to a Base64 String(a format accepted by Sessions Storage)
    const base64Key = btoa(String.fromCharCode(...new Uint8Array(rawBytesOfKey)));
    //Now actually Storing the RawKeyBytes in Session Storage
    sessionStorage.setItem("userDerivedKey", base64Key); //"UserDerivedKey" is the key for the value of which this base64Key will be stored in the SessionStorage
    const checkingKey = sessionStorage.getItem("userDerivedKey");
    if(checkingKey)
    {
      console.log("Key stored Successfully in the Session Storage");
    }
    //Next Seperate Step will be to Store the Entire CryptoKeyObject in Zustand Store for global, inter-component access
    return cryptoKey;
  }

 
//now I have to design the Logic ki jab LoginState True ho jaaye, i.e. User ka ab Login Successful ho jaaye
//toh 1)Fetch the KeyGenerationSalt from User's Firestore and make the function return that Salt
//    2) the value returned by this function i.e. the Salt will now be Passed to the the Encryption Key Generation function
  
  //Ki if Login is Successful, get the Salt and generate Key 

//Now Firestore Doc takes the Salt only in form of Base64 Encoded String
//therefore aapa .getRandomValues() ton aaye Buffer Array nu convert kita into Base64 String
//Now on login jab we fetch the Salt from User's Firestore Doc to be passed to the KeyGenerationFunction
//the fetched salt is in Basse64 encoding, we need to convert it back again to Buffer/Unit8Array
//Creating a Func for Base64 to Unit8 Conversion

const convertBase64ToBuffer = (input_string)=> {
  const decoded_string = atob(input_string);
  //Jitni is string ki Length hai, utne Size ka Buffer Array banaado
  const buffer_array_salt = new Uint8Array(decoded_string.length);
  for(let i = 0; i<decoded_string.length; i++)
  {
    buffer_array_salt[i] = decoded_string.charCodeAt(i);
  }
  /*Is Logic ne ek ek krke is String ke Chars uthaaye, ohna da Unicode Retrieve kita and naal naal
    Unicode values nu Buffer Array vich Paata taki side by side ready hoje SaltBufferArray*/
  return buffer_array_salt;
}

const GenerateSaltAndCallKeyGenFunction = async () => {
 
     let fetchedKeyGenSaltBase64Form;
    let fetchedKeyGenSaltBufferArrayForm;

    const actual_user_uid = localStorage.getItem('docvault-userid');
    
    //now using this user uid, create a Reference Doc usinng which u will fetch ur user's doc
    const docRefUser = doc(db, "Users", actual_user_uid);
    const docSnap = await getDoc(docRefUser);
    

    if(docSnap.exists())
    {
      fetchedKeyGenSaltBase64Form = docSnap.data().KeyGenerationSalt;
      console.log("Salt fetched from User Doc (Base64Format)" + fetchedKeyGenSaltBase64Form);
      // setFetchedKeyGenSalt(fetchedKeyGenSalt);
      fetchedKeyGenSaltBufferArrayForm = convertBase64ToBuffer(fetchedKeyGenSaltBase64Form);

      console.log(EncryptionKeyGenerationFromPassword(fetchedKeyGenSaltBufferArrayForm));
      /*Is Particular console.log wich aapa ek Async function nu Directly Console krta without 
      using await or .then on it to firstly fetch its Output/ReturnValue in a JS Variable, which means
      ki Technically, we haven't waited for the Promise to be Fulfilled before Rendering it on console

      Therefore console te initially Promise State Pending Show krda and then hardly 1-2 sec de gap te
      when we open the promise it shows Fulfilled and even shows the CryptoKeyObject*/

      //Next Step is to Store the Key in Session Storage and Zustand's Store without Persist
    }
  }




return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="max-w-xl text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="p-5 rounded-full bg-gray-200 shadow-lg animate-bounce-slow">
            <Lock className="h-12 w-12 text-gray-700" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          {isSignUp ? 'Create Your Account' : 'Log In to DocVault'}
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {isSignUp
            ? 'Join DocVault for secure document storage with industry-grade encryption.'
            : 'Access your encrypted vault and keep your important files secure.'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="relative">
          <input
            type="email"
            value={emailID}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Email"
            required
          />
          <div className="absolute top-3 left-3 text-gray-500">
            <Mail className="w-6 h-6" />
          </div>
        </div>

        {isSignUp && (
          <div className="relative">
            <input
              type="text"
              value={username_var}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Username"
              required
            />
            <div className="absolute top-3 left-3 text-gray-500">
              <Lock className="w-6 h-6" />
            </div>
          </div>
        )}

        <div className="relative">
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            placeholder="Password"
            required
          />
          <div className="absolute top-3 left-3 text-gray-500">
            <Lock className="w-6 h-6" />
          </div>
        </div>

        {isSignUp && (
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Confirm Password"
              required
            />
            <div className="absolute top-3 left-3 text-gray-500">
              <Lock className="w-6 h-6" />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full p-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      {/* Toggle Login/SignUp */}
      <div className="mt-12 text-center text-gray-600">
        <p>
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 cursor-pointer font-semibold"
              >
                Log In
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 cursor-pointer font-semibold"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <ShieldCheck className="inline-block text-green-500 w-6 h-6 mr-2" />
        Your documents are protected with industry-leading encryption.
      </div>
    </div>
  );
}
