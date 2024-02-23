import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIXhd8jBIw6uCOZ8c6S87TIg46VZF_UYw",
  authDomain: "coderhouse-react-js-4e087.firebaseapp.com",
  projectId: "coderhouse-react-js-4e087",
  storageBucket: "coderhouse-react-js-4e087.appspot.com",
  messagingSenderId: "193091674395",
  appId: "1:193091674395:web:8a36b34a5f43f5854673be"
};
// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
