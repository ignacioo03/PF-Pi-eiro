// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Npvu6IkBdWTKYyMushBQOsNM1x87Twc",
  authDomain: "pastas-la-hilda-coder.firebaseapp.com",
  projectId: "pastas-la-hilda-coder",
  storageBucket: "pastas-la-hilda-coder.appspot.com",
  messagingSenderId: "912929677851",
  appId: "1:912929677851:web:c59fe7d86677849cc44ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
