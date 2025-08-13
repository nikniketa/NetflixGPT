// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAECrj7nDM_h1heKdjwbfVJVHt8DryqtX0",
  authDomain: "netflix-new-62900.firebaseapp.com",
  projectId: "netflix-new-62900",
  storageBucket: "netflix-new-62900.firebasestorage.app",
  messagingSenderId: "83620199678",
  appId: "1:83620199678:web:e5c0d0080fee262011b9af",
  measurementId: "G-9923F1BXPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
