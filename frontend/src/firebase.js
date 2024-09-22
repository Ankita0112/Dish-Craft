import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dishcraft-59327.firebaseapp.com",
  projectId: "dishcraft-59327",
  storageBucket: "dishcraft-59327.appspot.com",
  messagingSenderId: "989481721319",
  appId: "1:989481721319:web:8140f5034161caaffc7142"
};

export const app = initializeApp(firebaseConfig);
