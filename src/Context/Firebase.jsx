import {createContext, React, useContext} from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../DB_Connect';

/*Creation of a Fundamental Firebase Context jisse use krke multiple diff react components
use kar sakan instead of coppying the import commands and retyping firebase functions in every component */
const auth = getAuth(app); 
const firebaseContext = createContext(null);

/*The following Custom Hook "useFirebase" will be Imported in the React UI Page, and thus we'll be able to use and call
 the Utility functions there without having to Re-Write the Function Definitions out there */
export const useFirebase = () => useContext(firebaseContext);

export const FireBaseProvider = (props)=>
{
    /*We will be Creating Custom Utility functions that internally call/execute the fb methods
    and then these utility functions would be exported in the <FirebaseContext.Prvider></FirebaseContext.Prvider>*/
    const SignUpWithEmailAndPassword = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        return signOut(auth);
    }
    return (
        <firebaseContext.Provider value={{SignInWithEmailAndPassword, SignUpWithEmailAndPassword, LogOut}}>
            {props.children} {/*This Indicates the React Components that'll be using this firebaseContext */ }
        </firebaseContext.Provider>
    )
}

