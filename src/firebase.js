// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAObXkKIkUv3UPRXCACwr7f2QialMdbc6Y",
  authDomain: "luminal-systems.firebaseapp.com",
  projectId: "luminal-systems",
  storageBucket: "luminal-systems.firebasestorage.app",
  messagingSenderId: "56104293854",
  appId: "1:56104293854:web:13d80dcc56de1d663ff94f",
  measurementId: "G-LBFQ1H3VE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };