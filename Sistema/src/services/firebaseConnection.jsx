import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0POTZs9BIZsTT7NPZleeQTYriVqXN69M",
  authDomain: "tickets-1c034.firebaseapp.com",
  projectId: "tickets-1c034",
  storageBucket: "tickets-1c034.appspot.com",
  messagingSenderId: "982400156995",
  appId: "1:982400156995:web:49d80248873d6c836edbf6",
  measurementId: "G-E00VDTHK6P",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
