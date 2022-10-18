// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXJl6txXvOMNEmYcRtJCE4pMBTjhsUofU",
    authDomain: "ema-john-with-auth-cd7bd.firebaseapp.com",
    projectId: "ema-john-with-auth-cd7bd",
    storageBucket: "ema-john-with-auth-cd7bd.appspot.com",
    messagingSenderId: "40331160885",
    appId: "1:40331160885:web:43f485d416105ca623307c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;