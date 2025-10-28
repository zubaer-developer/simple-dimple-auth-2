// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6bqhuzyx7OgLhr-ogxLCfovAbZ9BNGM",
  authDomain: "simple-dimple-auth-2-681e1.firebaseapp.com",
  projectId: "simple-dimple-auth-2-681e1",
  storageBucket: "simple-dimple-auth-2-681e1.firebasestorage.app",
  messagingSenderId: "185354387303",
  appId: "1:185354387303:web:794bad00c68dbd9bc9f9c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase authentication
export const auth = getAuth(app);
