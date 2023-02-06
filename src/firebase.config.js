// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 // addd your key and configuration details
  apiKey: "AIzaSyCKJQe-_uG_TF-3uKeT8GG6RdFOxAWvYgM",
    authDomain: "react-firebase-auth-38725.firebaseapp.com",
    projectId: "react-firebase-auth-38725",
    storageBucket: "react-firebase-auth-38725.appspot.com",
    messagingSenderId: "432054835000",
    appId: "1:432054835000:web:0ccd90a3ff289b073bd3cd",
    measurementId: "G-BM0Z55B7HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
