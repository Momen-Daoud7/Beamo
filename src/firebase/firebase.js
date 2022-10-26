// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOcAMKCc_H3_axcMGMTP4jwA9vgEb5tHY",
  authDomain: "spacepark-57a11.firebaseapp.com",
  projectId: "spacepark-57a11",
  storageBucket: "spacepark-57a11.appspot.com",
  messagingSenderId: "25807354746",
  appId: "1:25807354746:web:366a79538e72b35ff674c3",
  measurementId: "G-2YJQXFRGME",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
