// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpTXpA5s6D0UCENrHM87TLXyx_UhoXdyU",
  authDomain: "react-site-29e30.firebaseapp.com",
  databaseURL: "https://react-site-29e30-default-rtdb.firebaseio.com",
  projectId: "react-site-29e30",
  storageBucket: "react-site-29e30.firebasestorage.app",
  messagingSenderId: "151296787606",
  appId: "1:151296787606:web:962ced201ee747450ceeb7",
  measurementId: "G-CEF1L71L7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default app;
