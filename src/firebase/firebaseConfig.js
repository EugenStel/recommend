// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgXgoNrcE_h9c-nwNpchApx2znIXlaJWg",
    authDomain: "recommend-app-49f60.firebaseapp.com",
    projectId: "recommend-app-49f60",
    storageBucket: "recommend-app-49f60.appspot.com",
    messagingSenderId: "769706067008",
    appId: "1:769706067008:web:343aaf1b6f5d9068710ba5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();