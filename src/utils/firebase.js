// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmRTu3_9EwjdPXVu5kevHJvAuJF6TxyeI",
  authDomain: "netflixgpt-13b47.firebaseapp.com",
  projectId: "netflixgpt-13b47",
  storageBucket: "netflixgpt-13b47.firebasestorage.app",
  messagingSenderId: "272569578600",
  appId: "1:272569578600:web:e8c0cc874a47df43d937dd",
  measurementId: "G-R12S3CQL98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
