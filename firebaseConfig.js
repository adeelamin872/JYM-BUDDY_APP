// Import the functions you need from the SDKs you need
import "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVi7KlYN_ffeYUtic1vMRFpVpP_FaqMRQ",
  authDomain: "jym-buddy-app.firebaseapp.com",
  projectId: "jym-buddy-app",
  storageBucket: "jym-buddy-app.appspot.app",
  messagingSenderId: "963516733087",
  appId: "1:963516733087:web:095f6450db344e50fef4aa",
  measurementId: "G-5694SWMGSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const db = getFirestore(app);
export const storage = getStorage(app);