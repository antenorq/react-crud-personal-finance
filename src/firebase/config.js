import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6IdmfZGZWjkx5nShkZFbehYjH49HFg3E",
  authDomain: "personal-finance-e031a.firebaseapp.com",
  projectId: "personal-finance-e031a",
  storageBucket: "personal-finance-e031a.appspot.com",
  messagingSenderId: "408614412567",
  appId: "1:408614412567:web:4f3afa148e174af50bd752",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
