import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEdxUJV_PX4lqAg6qNWiwjCaKeJVD_VOQ",
  authDomain: "appfinal-cc318.firebaseapp.com",
  projectId: "appfinal-cc318",
  storageBucket: "appfinal-cc318.appspot.com",
  messagingSenderId: "449431904892",
  appId: "1:449431904892:web:3b7699394c386699615ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
