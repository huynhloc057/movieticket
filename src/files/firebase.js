import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAuby9Bp0wLsCVGP6V-FAOgh_WA1BfQwD8",
  authDomain: "movie-ticket-45a7e.firebaseapp.com",
  projectId: "movie-ticket-45a7e",
  storageBucket: "movie-ticket-45a7e.appspot.com",
  messagingSenderId: "265550346375",
  appId: "1:265550346375:web:61dbcfd6ec91c9e772e022",
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
