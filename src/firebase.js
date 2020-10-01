import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCL8qlgMwwR3A-EXDd161K8I5l0qAvMgRM",
  authDomain: "whatapp-ab6bd.firebaseapp.com",
  databaseURL: "https://whatapp-ab6bd.firebaseio.com",
  projectId: "whatapp-ab6bd",
  storageBucket: "whatapp-ab6bd.appspot.com",
  messagingSenderId: "813381260351",
  appId: "1:813381260351:web:25c5b7ab844e6f819d948a",
  measurementId: "G-BT9E0L1WNS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
