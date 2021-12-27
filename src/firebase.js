import firebase from "firebase";
// Authondication
import "firebase/auth";
// fire store database
import "firebase/firestore";
// realtime database
import "firebase/database";
// storage
import "firebase/storage";
// function
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDusTZSM-nbwQQ0T4shp7CLTodIIXxxy0M",
  authDomain: "spotify-clone-f75ee.firebaseapp.com",
  databaseURL: "https://spotify-clone-f75ee-default-rtdb.firebaseio.com",
  projectId: "spotify-clone-f75ee",
  storageBucket: "spotify-clone-f75ee.appspot.com",
  messagingSenderId: "852972893017",
  appId: "1:852972893017:web:4c0e1a40db633d5fd19248",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// Hosting
