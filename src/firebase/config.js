// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-1vg9_WPS9DKpyw2K3jy6MvlCIGgCRPQ",
  authDomain: "bdcbburguer.firebaseapp.com",
  projectId: "bdcbburguer",
  storageBucket: "bdcbburguer.appspot.com",
  messagingSenderId: "895848232799",
  appId: "1:895848232799:web:52cd2293e14ce256b928ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
  return app;
}

