// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUpR7xp7bBTlb0J6L9mUBuj2_wAUn_ejI",
  authDomain: "boulderbud-demo.firebaseapp.com",
  projectId: "boulderbud-demo",
  storageBucket: "boulderbud-demo.appspot.com",
  messagingSenderId: "696456691280",
  appId: "1:696456691280:web:7f4a8f6042c0d96afc9b55",
  measurementId: "G-HPYWK71WKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase API services:
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db};