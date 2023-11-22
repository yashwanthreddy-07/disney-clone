import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUOmC-yCXtLuOwisxv1sIc7DOFmUMTA_0",
    authDomain: "disneyplus-clone-b3f65.firebaseapp.com",
    projectId: "disneyplus-clone-b3f65",
    storageBucket: "disneyplus-clone-b3f65.appspot.com",
    messagingSenderId: "777356075771",
    appId: "1:777356075771:web:512914497f21e0fd4b865e",
    measurementId: "G-0WT20BJ3YV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;