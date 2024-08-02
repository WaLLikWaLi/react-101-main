// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9rVbpvS6Mv2grr__4AiXPkMKvduPRCW4",
  authDomain: "myprojectreact-432ae.firebaseapp.com",
  projectId: "myprojectreact-432ae",
  storageBucket: "myprojectreact-432ae.appspot.com",
  messagingSenderId: "971856546009",
  appId: "1:971856546009:web:e12547da63e5c630d3d6c8",
  measurementId: "G-0Y02WKDHJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
