import './index.css';
import './app.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoUi9RLzvYxYLLs5Oxp1cwjloChMsYVxA",
    authDomain: "fitproject-9a02e.firebaseapp.com",
    databaseURL: "https://fitproject-9a02e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fitproject-9a02e",
    storageBucket: "fitproject-9a02e.appspot.com",
    messagingSenderId: "67689314574",
    appId: "1:67689314574:web:c88e9c8a3fcfa7b3c5bf5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);