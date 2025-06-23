import React, { useState } from 'react'
import { app } from './DB_Connect';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from 'firebase/auth';

export default function Google_Authentication() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const google_signin = () => {
        signInWithPopup(auth, provider).then((result)=> console.log(result.user.displayName)).catch((error)=> alert(error.message));
    }
//This "user" object is given by this signinwithpopup method that contains user details in an Object form
//displayName, email are the Keys present in the Object

//Next assignment is to Render the User details on UI
  return (
    <div>
        <button onClick={google_signin}> Google Sign-In </button>
        
    </div>
  )
}









