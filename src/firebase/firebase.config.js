// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCijqhqe_12difIthSbrnp15MHEhI9Gu6Y",
  authDomain: "brand-shop-6a8b1.firebaseapp.com",
  projectId: "brand-shop-6a8b1",
  storageBucket: "brand-shop-6a8b1.appspot.com",
  messagingSenderId: "765546470854",
  appId: "1:765546470854:web:cd8cf05d6402a64b9aa6c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;