import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBv2tZ8Ti5NuHUASyn0jwRV0CPC24nSDC0",
    authDomain: "inventory-management-sys-34294.firebaseapp.com",
    projectId: "inventory-management-sys-34294",
    storageBucket: "inventory-management-sys-34294.appspot.com",
    messagingSenderId: "842857605195",
    appId: "1:842857605195:web:cc939679d2f67865c945ce",
    measurementId: "G-63Q951DP3Q",
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;