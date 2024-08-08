import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA8ozNnnB_zTCKK-yTF-jXHobvbfDheMTs",
  authDomain: "bookngo-bdd1b.firebaseapp.com",
  databaseURL: "https://bookngo-bdd1b-default-rtdb.firebaseio.com",
  projectId: "bookngo-bdd1b",
  storageBucket: "bookngo-bdd1b.appspot.com",
  messagingSenderId: "137592640830",
  appId: "1:137592640830:web:70ce7fcc0a22e7021c086f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
