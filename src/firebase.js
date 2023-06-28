import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAaH-tq0zCUnXd0UIH1FQ-oMb0ojzYZIlA",
  authDomain: "connect-pro-bfdaf.firebaseapp.com",
  projectId: "connect-pro-bfdaf",
  storageBucket: "connect-pro-bfdaf.appspot.com",
  messagingSenderId: "1021923329233",
  appId: "1:1021923329233:web:0f050b00e7405b6991b1f0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getFirestore(firebaseApp); // same as db
// const storage = "Hello";

export { auth, provider, storage, firebaseApp };
export default db;
