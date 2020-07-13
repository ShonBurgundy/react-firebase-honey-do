import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCLTL9l2W58TrzzbjkmG7uL4SD84-PmM-Q",
  authDomain: "honey-do-e0378.firebaseapp.com",
  databaseURL: "https://honey-do-e0378.firebaseio.com",
  projectId: "honey-do-e0378",
  storageBucket: "honey-do-e0378.appspot.com",
  messagingSenderId: "911033232949",
  appId: "1:911033232949:web:332e299a07fe5152820b7c"
});

export {firebaseConfig as firebase };