
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9rVbpvS6Mv2grr__4AiXPkMKvduPRCW4",
  authDomain: "myprojectreact-432ae.firebaseapp.com",
  databaseURL:
    "https://myprojectreact-432ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myprojectreact-432ae",
  storageBucket: "myprojectreact-432ae.appspot.com",
  messagingSenderId: "971856546009",
  appId: "1:971856546009:web:e12547da63e5c630d3d6c8",
  measurementId: "G-0Y02WKDHJT",
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
