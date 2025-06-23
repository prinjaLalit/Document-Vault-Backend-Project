import React, { useState} from 'react'
import { useFirebase } from './Context/Firebase';
// import { doc, getDoc } from 'firebase/firestore';
import { zustandUserIDStore } from './Zustand/ZustadUid';
import { useNavigate } from 'react-router-dom';
 

export default function Login_Page() {
    const [emailID, setEmailID] = useState("");
    const [password_value, setPassword_Value] = useState("");
    const [username_value, setUsername] = useState("");

    const firebase_hook = useFirebase();

    const {userID, setUserID, logout } = zustandUserIDStore(); //The Brackets indicate we are using it like a Hook;
    //Basically here we are PARSING the contents of the Hook into JS variables to use them in this component

    const navigateAfterLogin = useNavigate();

    const Login_User = async () => {
    try{
      const loggedIn_UserMegaObject = await firebase_hook.SignInWithEmailAndPassword(emailID, password_value);
       //this megaobject will exist only if the user has signedup before and is now logging in
       if(loggedIn_UserMegaObject) //this is the condition for a successful login
       {
       console.log(loggedIn_UserMegaObject);
       alert("Sign In Successful");
       console.log(loggedIn_UserMegaObject.user);
       setUserID(loggedIn_UserMegaObject.user.uid);
       console.log(localStorage.getItem('docvault-userid'));
      navigateAfterLogin('/fileUpload');
      //  main_userObject = loggedIn_UserMegaObject.user;
      //  userDocGlobalId= main_userObject.uid;
       }
    }
    catch(error) {
      console.log("Error is: " + error.message)
     if(error.code === "auth/user-not-found")
     {
      alert("User Not Found");
     }
     else if(error.code === "auth/wrong-password")
     {
      alert("Incorrect Password");
     }
     else if(error.code === "auth/invalid-credential")
     {
      alert("Invalid");
     }
     else{
        console.log(error.message + "Eh ri Error");
        alert("Error Logging In");
     }
    }
      
      //  const loggedInUser_mainObj = loggedIn_UserMegaObject.user;
      //  console.log(loggedInUser_mainObj);

    }
    
    
  return (
   <>
     <form className='Login_User'>
            <label htmlFor="email">Email: </label>
            <input type="text" value={emailID} onChange={(event)=> setEmailID(event.target.value)} />
            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input type="password" value={password_value} onChange={(event)=> setPassword_Value(event.target.value)}/>
            <br></br>
            <br></br>
            <label htmlFor="username"> Custom Username </label>
            <input type="text" value={username_value} onChange={(event)=> {setUsername(event.target.value)}} className='border-1 border-black'/>
        </form>
        <button onClick={Login_User} className='button_div bg-slate-950 text-white border-2 border-black rounded-lg p-2'>
          Login
        </button>
   </>
  )
}
