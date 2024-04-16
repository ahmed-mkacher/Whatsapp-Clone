// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB-VYJOj86IngFaSTlzqnuOVWfPFwUbK_4",
  authDomain: "whatsapp-clone-768ae.firebaseapp.com",
  projectId: "whatsapp-clone-768ae",
  storageBucket: "whatsapp-clone-768ae.appspot.com",
  messagingSenderId: "1093255963882",
  appId: "1:1093255963882:web:1434a395342a7bdc69e393",
  measurementId: "G-HV31W846Q3"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);