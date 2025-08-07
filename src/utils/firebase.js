// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8GVJCSTTQmj96qI58LOOMPiPGVb0cyY",
  authDomain: "netflixgpt-9499e.firebaseapp.com",
  projectId: "netflixgpt-9499e",
  storageBucket: "netflixgpt-9499e.firebasestorage.app",
  messagingSenderId: "825247362564",
  appId: "1:825247362564:web:3a6c7c03b7598bd5e48f51",
  measurementId: "G-15YEJEWD0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
