// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiRyxFiaI28h9VRjz8kcdXhWWjVQ1L1gw",
  authDomain: "productivity-app-2.firebaseapp.com",
  projectId: "productivity-app-2",
  storageBucket: "productivity-app-2.appspot.com",
  messagingSenderId: "705574377601",
  appId: "1:705574377601:web:edea0d92f7fadd1bc19580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
