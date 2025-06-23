import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

// ActionCodeSettings object
const actionCodeSettings = {
  url: 'https://localhost:5173/login',
  handleCodeInApp: true
};

const auth = getAuth();
const email = 'user@example.com';

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch((error) => {
    console.error('Error sending email link:', error);
  });
