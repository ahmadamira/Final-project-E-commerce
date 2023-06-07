// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1Q79IWhoxIpl_LXpjzw83odQefGAo5Rk",
    authDomain: "e-commerce-final-da38d.firebaseapp.com",
    projectId: "e-commerce-final-da38d",
    storageBucket: "e-commerce-final-da38d.appspot.com",
    messagingSenderId: "308531093183",
    appId: "1:308531093183:web:a9a8636258c85fd503700a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };