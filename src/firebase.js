import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaH-tq0zCUnXd0UIH1FQ-oMb0ojzYZIlA",
  authDomain: "connect-pro-bfdaf.firebaseapp.com",
  projectId: "connect-pro-bfdaf",
  storageBucket: "connect-pro-bfdaf.appspot.com",
  messagingSenderId: "1021923329233",
  appId: "1:1021923329233:web:0f050b00e7405b6991b1f0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
