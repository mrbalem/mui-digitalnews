/** @format */
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFOO32EX28Uhgxd7h1YoDcQJdHkP9AMg4",
  authDomain: "ecommers-nevado.firebaseapp.com",
  databaseURL: "https://ecommers-nevado.firebaseio.com",
  projectId: "ecommers-nevado",
  storageBucket: "ecommers-nevado.appspot.com",
  messagingSenderId: "48819426094",
  appId: "1:48819426094:web:d16f675abba14e704620bf",
  measurementId: "G-TN1GL7G83Z",
};

firebase.initializeApp(firebaseConfig);

export const { auth } = firebase;
