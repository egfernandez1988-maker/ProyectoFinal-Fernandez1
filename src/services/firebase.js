import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT3pyN5xq0EI_g9NON5Db60jBL8iBWbis",
  authDomain: "acustic-0.firebaseapp.com",
  projectId: "acustic-0",
  storageBucket: "acustic-0.firebasestorage.app",
  messagingSenderId: "416324737314",
  appId: "1:416324737314:web:643ec441530b6f1c7aed7b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);