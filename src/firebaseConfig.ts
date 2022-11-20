// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyACcGNRvHXbp9jlc_bvgC4HWWEUCTYYwLQ",
  authDomain: "meme-database-app.firebaseapp.com",
  projectId: "meme-database-app",
  storageBucket: "meme-database-app.appspot.com",
  messagingSenderId: "37137776565",
  appId: "1:37137776565:web:098932910664794042e3fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);