// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5RDKfkw_F7fWtDYIBfJwkgTu34f-Q1c",
  authDomain: "assignment-9-da9d1.firebaseapp.com",
  projectId: "assignment-9-da9d1",
  storageBucket: "assignment-9-da9d1.appspot.com",
  messagingSenderId: "405020056990",
  appId: "1:405020056990:web:127fa461115d8f234f0a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;