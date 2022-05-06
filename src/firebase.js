import firebase from 'firebase/app';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYkXuEP7vG0hEKPs8SW5yuUyC-uw2IQyw",
    authDomain: "demo1-40e45.firebaseapp.com",
    projectId: "demo1-40e45",
    storageBucket: "demo1-40e45.appspot.com",
    messagingSenderId: "721847724464",
    appId: "1:721847724464:web:48e2cfaa5eedc473f78e75",
    measurementId: "G-T9VGVN4TP4"
  };

  firebase.initializeApp(firebaseConfig);


  export const  auth = firebase.auth();
  export const  provider = new firebase.auth.GoogleAuthProvider();
  