import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA26n3soNoJLwz-ppbQKHMU4snP0LkpJ0g",

  authDomain: "netflix-clone-bd7cd.firebaseapp.com",

  projectId: "netflix-clone-bd7cd",

  storageBucket: "netflix-clone-bd7cd.appspot.com",

  messagingSenderId: "815314401956",

  appId: "1:815314401956:web:0e633574212c1318434431",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
