import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, orderBy, query, getDocs,  } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCR43It7KWiHFGKScNziDJoSO8JwCe-C5o",
  authDomain: "bykea-6f9a3.firebaseapp.com",
  projectId: "bykea-6f9a3",
  storageBucket: "bykea-6f9a3.appspot.com",
  messagingSenderId: "929739881771",
  appId: "1:929739881771:web:d73a8a10f982d4c102596e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);

export async function register(userInfo) {
  const { name, number, email, password } = userInfo
  // console.log("User Infor",userInfo)
  await createUserWithEmailAndPassword(auth, email, password)
  await addDoc(collection(db, "users"), {
    name,
    number,
    email
  });
  alert("Successfully Register!")
}

export async function signIn(userInfo) {
  const { email, password } = userInfo
  await signInWithEmailAndPassword(auth, email, password)
  alert("Logged in Successfully")
}


export async function rideRequest(rideInfo) {
  // console.log("User Infor",userInfo)
  await addDoc(collection(db, "rideRequest"), rideInfo);
}

export async function getRideHistory() {
  const querySnapshot = await getDocs(collection(db, "rideRequest"));
  const rideHistory = [];
  querySnapshot.forEach((doc) => {
    const ride = doc.data()
    ride.id = doc.id
    rideHistory.push(ride)
  });

  return rideHistory
}

export {           
  db, 
  collection,
  query,
  onSnapshot,
  orderBy
}


