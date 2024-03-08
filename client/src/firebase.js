// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e6a82.firebaseapp.com",
  projectId: "real-estate-e6a82",
  storageBucket: "real-estate-e6a82.appspot.com",
  messagingSenderId: "959991100161",
  appId: "1:959991100161:web:a8c06d6a14135af456e100"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
