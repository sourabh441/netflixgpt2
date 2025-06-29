// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNYMVc9IYZcWtGQMALxp32oSWEsRan3OQ",
  authDomain: "netflixgpt-2-d9f08.firebaseapp.com",
  projectId: "netflixgpt-2-d9f08",
  storageBucket: "netflixgpt-2-d9f08.firebasestorage.app",
  messagingSenderId: "933755841132",
  appId: "1:933755841132:web:52b4718c2167184ce00649",
  measurementId: "G-MMG45FGTVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();