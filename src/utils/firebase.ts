// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "lio-blog-8b829.firebaseapp.com",
  projectId: "lio-blog-8b829",
  storageBucket: "lio-blog-8b829.appspot.com",
  messagingSenderId: "1036117956111",
  appId: "1:1036117956111:web:ab42284de8a174e31f357a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
