// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXDO0UvoTV-EETtw8xIt6RHOP_Z1EBNWQ",
    authDomain: "e-commerce-2e607.firebaseapp.com",
    projectId: "e-commerce-2e607",
    storageBucket: "e-commerce-2e607.appspot.com",
    messagingSenderId: "402740141019",
    appId: "1:402740141019:web:7ed9f696f74fb568b465fe",
    measurementId: "G-56J2L7ZXEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);