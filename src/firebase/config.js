import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZc5U8CS4i2qfm9OlcGZf5HkHQ28_8fXA",
  authDomain: "rj-19760.firebaseapp.com",
  projectId: "rj-19760",
  storageBucket: "rj-19760.appspot.com",
  messagingSenderId: "609428480593",
  appId: "1:609428480593:web:899e42b42963a154df4e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)