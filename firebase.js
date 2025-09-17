// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);