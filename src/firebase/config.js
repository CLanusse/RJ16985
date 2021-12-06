// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA06mV9tbSrB337tVJW3Fny56e3uOlazIo",
  authDomain: "rj-16985.firebaseapp.com",
  projectId: "rj-16985",
  storageBucket: "rj-16985.appspot.com",
  messagingSenderId: "908560659225",
  appId: "1:908560659225:web:1e979ab36a3a421875cb88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)