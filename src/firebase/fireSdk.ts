import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCL4l5mtMBS1zXc7Fmx9ghpQLGO_UlvVY",
  authDomain: "weaponify.firebaseapp.com",
  projectId: "weaponify",
  storageBucket: "weaponify.firebasestorage.app",
  messagingSenderId: "352013865135",
  appId: "1:352013865135:web:f0dde7f8ce576bc485045a",
  measurementId: "G-LF2Q6HMC2E",
  databaseURL: "https://weaponify-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db,app };
