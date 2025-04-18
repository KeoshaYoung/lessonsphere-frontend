import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdjgcOTpbvHRYd6tQFVR2CBoTBRR1gkRU",
  authDomain: "lessonsphere-ec69b.firebaseapp.com",
  projectId: "lessonsphere-ec69b",
  storageBucket: "lessonsphere-ec69b.firebasestorage.app",
  messagingSenderId: "385554397965",
  appId: "1:385554397965:web:312fbef6d00538cfd20e44"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
