// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfFbp-hkX4f8amihUbl7Bn-y4WC13tgXo",
  authDomain: "ai-travel-planner-eacce.firebaseapp.com",
  projectId: "ai-travel-planner-eacce",
  storageBucket: "ai-travel-planner-eacce.firebasestorage.app",
  messagingSenderId: "37107665180",
  appId: "1:37107665180:web:bf90849b6b4a55bc7392d9",
  measurementId: "G-K0164KLQS4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
//const analytics = getAnalytics(app);