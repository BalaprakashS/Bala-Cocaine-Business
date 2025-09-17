import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyfwy64OUJsJUL7KVYun_2598q2cUaiy8",
  authDomain: "bala-canteen.firebaseapp.com",
  databaseURL: "https://bala-canteen-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bala-canteen",
  storageBucket: "bala-canteen.firebasestorage.app",
  messagingSenderId: "984341725710",
  appId: "1:984341725710:web:5ce9249d942af1d468f25f",
  measurementId: "G-GHYYL4LB78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
