
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK_NtHiOVJ4ntpVOn2S1DKREuAWp-rgBk",
    authDomain: "blogproject-f7cc7.firebaseapp.com",
    projectId: "blogproject-f7cc7",
    storageBucket: "blogproject-f7cc7.appspot.com",
    messagingSenderId: "822909135738",
    appId: "1:822909135738:web:e86e945ae00e90b8acc4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
