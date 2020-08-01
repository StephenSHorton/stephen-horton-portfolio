import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV3R9cdDgixCEB00t0P3MAnEYawdojrbg",
  authDomain: "stephen-horton-portfolio.firebaseapp.com",
  databaseURL: "https://stephen-horton-portfolio.firebaseio.com",
  projectId: "stephen-horton-portfolio",
  storageBucket: "stephen-horton-portfolio.appspot.com",
  messagingSenderId: "403876616069",
  appId: "1:403876616069:web:c6d640ecb53dcd632d96ec",
  measurementId: "G-VBSSGSRZK2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
