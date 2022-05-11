// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdYYph4IGVpCNGDMUeemFHh_a0mXrhkfM",
  authDomain: "msa2-85ec4.firebaseapp.com",
  projectId: "msa2-85ec4",
  storageBucket: "msa2-85ec4.appspot.com",
  messagingSenderId: "721773633350",
  appId: "1:721773633350:web:a0b852d315fc2f8657cf47",
  measurementId: "G-WFZGVG8R0B",
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);
console.log(fireDb, "ankitha");
export default fireDb.database().ref();
