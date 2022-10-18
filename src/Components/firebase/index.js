import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAYJOi1B9JJhPva9s0UvFyoDZvbC9KkwsY",
  authDomain: "coderhourse-ecommerce.firebaseapp.com",
  projectId: "coderhourse-ecommerce",
  storageBucket: "coderhourse-ecommerce.appspot.com",
  messagingSenderId: "90621892618",
  appId: "1:90621892618:web:6fb3609950d58bb1c727f3"
};
export const db = getFirestore();

const app = initializeApp(firebaseConfig);