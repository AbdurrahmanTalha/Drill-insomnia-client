// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpmQX6uc1jG4FnJmtVY-7L1Uh437fCgQw",
    authDomain: "drill-insomnia.firebaseapp.com",
    projectId: "drill-insomnia",
    storageBucket: "drill-insomnia.appspot.com",
    messagingSenderId: "281277815758",
    appId: "1:281277815758:web:f102452adfe4879a97e99f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;