import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_CONFIG_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDERID,
    appId: import.meta.env.FIREBASE_APP_ID,
    measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
  };

  //This "firebaseconfig" object lists down the API Keys, Configuration setup needed to 
  //connect Exactly OUR vs code local

export const app = initializeApp(firebaseConfig); //This will Execute the function with our API keys, passwords and thereby start the Real-time connection
//FireBase Cloud connection ke is instance "app" ko use kr ham Client-Side pe DB Operations lgayenge
export const storage = getStorage(app);
/*This Establishes a Connection between the Firebase Cloud Storage and our Local Project and gives a Ref Variable
to us named "storage" for Using during Operations */