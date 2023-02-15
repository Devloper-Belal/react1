// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLcvessPtyOP409RkSy4el3PNh-LWKGT4",
  authDomain: "lesson8-1eb15.firebaseapp.com",
  projectId: "lesson8-1eb15",
  storageBucket: "lesson8-1eb15.appspot.com",
  messagingSenderId: "520589222013",
  appId: "1:520589222013:web:93e4600201606ccfb75114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);