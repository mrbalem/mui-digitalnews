/** @format */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
// const { messaging } = nevado;

// firebase.messaging().useServiceWorker()

/**
 * configuracion notificaciones push use apikey publick notificatión
 */
firebase
  .messaging()
  .usePublicVapidKey(
    "BKO0MdQr4fFrDiWInv9Z9mZGh1w6Ysu0aItHnVGRtWv4Z3JGwiVIymnBUYIsLbHhMfzLHjf8fEu3VO5DgaXuMAg"
  );

export const { auth } = firebase;
export const { messaging } = firebase;
