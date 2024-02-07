import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCphBN6FVBdSzxmabhIjVLWmn0-pZi9xh0",
  authDomain: "web-app-auth-48e46.firebaseapp.com",
  projectId: "web-app-auth-48e46",
  storageBucket: "web-app-auth-48e46.appspot.com",
  messagingSenderId: "1005420683442",
  appId: "1:1005420683442:web:34adf6457bfd52a67ce9ab",
  measurementId: "G-J5RJ2TQ5ES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);