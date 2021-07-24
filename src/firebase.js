// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";

// firebase config
const config = {
  apiKey: "AIzaSyCKtSeEDHRsoGUzTiNJVRHzqyIBRcqOMl4",
  authDomain: "ecommerce-42ef8.firebaseapp.com",
  projectId: "ecommerce-42ef8",
  storageBucket: "ecommerce-42ef8.appspot.com",
  messagingSenderId: "1031068799373",
  appId: "1:1031068799373:web:03eca2e0b40730e9b9edc4",
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
