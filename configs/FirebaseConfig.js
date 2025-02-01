// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBakJXO3UAWNmnSlNFjVmY5MGGSWcwEWSw",
  authDomain: "nativetester-d9924.firebaseapp.com",
  databaseURL: "https://nativetester-d9924-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nativetester-d9924",
  storageBucket: "nativetester-d9924.firebasestorage.app",
  messagingSenderId: "1091686919148",
  appId: "1:1091686919148:web:9dc33af9fb4ded22d9aec9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);