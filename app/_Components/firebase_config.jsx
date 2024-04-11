// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCwkIj3lAy50D2yxEJiLpqPhnlA-_kTi8Y",
  authDomain: "myapp-bb8f9.firebaseapp.com",
  projectId: "myapp-bb8f9",
  storageBucket: "myapp-bb8f9.appspot.com",
  messagingSenderId: "764168958915",
  appId: "1:764168958915:web:7f091b26ee81e83a414376",
  measurementId: "G-7QGSNZQ6WS"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export {auth,provider}