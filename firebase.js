// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Qvv5i9FKliLj8yUknwZqWipxYQumhRY",
  authDomain: "cvm-demo-3de58.firebaseapp.com",
  projectId: "cvm-demo-3de58",
  storageBucket: "cvm-demo-3de58.appspot.com",
  messagingSenderId: "732657737032",
  appId: "1:732657737032:web:ae879ac387d83bf513a77d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
