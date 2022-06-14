// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqugCNpZVyA_fDSo7mUFzvDC6iRvzNZQk",
  authDomain: "e-commerce-4856e.firebaseapp.com",
  projectId: "e-commerce-4856e",
  storageBucket: "e-commerce-4856e.appspot.com",
  messagingSenderId: "395340281519",
  appId: "1:395340281519:web:cae2ad5431c552909c865a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initializa Firestore
const db = getFirestore(app);

export default db;