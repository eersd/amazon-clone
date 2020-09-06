import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXiCd5QtWR266jJVP7Vl6clp5SBkUgidE",
    authDomain: "clone-43e4b.firebaseapp.com",
    databaseURL: "https://clone-43e4b.firebaseio.com",
    projectId: "clone-43e4b",
    storageBucket: "clone-43e4b.appspot.com",
    messagingSenderId: "1047794425445",
    appId: "1:1047794425445:web:286234578ba12e03f4708c",
    measurementId: "G-9T9TZQB2PH"
  }
);

const auth = firebaseApp.auth();

export { auth };

  //export default db;