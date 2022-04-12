// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGps0pI_3oCv4sM-BUR_9Vmh4GK88L74Y",
    authDomain: "ema-jhon-authintication-2.firebaseapp.com",
    projectId: "ema-jhon-authintication-2",
    storageBucket: "ema-jhon-authintication-2.appspot.com",
    messagingSenderId: "568297778208",
    appId: "1:568297778208:web:9fe2745f730564b93a2045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;