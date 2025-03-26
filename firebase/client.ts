// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU0aPUdh_BOyve2MpjUiDPkmyLLsUA4cM",
  authDomain: "preppal-d5e3f.firebaseapp.com", 
  projectId: "preppal-d5e3f",
  storageBucket: "preppal-d5e3f.firebasestorage.app",
  messagingSenderId: "343785624856",
  appId: "1:343785624856:web:ceed3e6c427807c5b6fa6d",
  measurementId: "G-YH15C026HC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);