// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL3zR4nV-q4c6c936OfBN7HET37dfN6hA",
  authDomain: "staartfrontendproject.firebaseapp.com",
  projectId: "staartfrontendproject",
  storageBucket: "staartfrontendproject.appspot.com",
  messagingSenderId: "645502718445",
  appId: "1:645502718445:web:2cf086f062d713d62e17e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);