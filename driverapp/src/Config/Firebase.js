import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import  { getFirestore, collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR43It7KWiHFGKScNziDJoSO8JwCe-C5o",
    authDomain: "bykea-6f9a3.firebaseapp.com",
    projectId: "bykea-6f9a3",
    storageBucket: "bykea-6f9a3.appspot.com",
    messagingSenderId: "929739881771",
    appId: "1:929739881771:web:d73a8a10f982d4c102596e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

 async function register(driverInfo) {
    const { name, number, email, password } = driverInfo
    // console.log("User Infor",userInfo)
    await createUserWithEmailAndPassword(auth, email, password)
    await addDoc(collection(db, "derivers"), {
        name,
        number,
        email
    });
    alert("Successfully Register!")
}

 async function signIn(driverInfo) {
    const { email, password } = driverInfo
    await signInWithEmailAndPassword(auth, email, password)
    alert("Logged in Successfully")
}


async function acceptReject(driver){
    
        await addDoc(collection(db, "acceptRide"),{
            accept: driver,
            status: "completed"
        });
}

export {
    register,
    signIn, 
    collection, 
    onSnapshot,
    orderBy, 
    query,
    db,
    acceptReject
    // driverLocation
}
// export async function acceptRejectRequest() {

//     const q = query(collection(db, 'rideRequest'), orderBy("timestamp"))
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const rides = [];
//         querySnapshot.forEach((doc) => {
//             rides.push(doc.data());
//         });
//         console.log("Current ride ", rides);
//     });
//     return rides
// }

// export  async function rideRequest(rideInfo){
//   const {pickupLocation, destinationLocation, vehicle, fare} = rideInfo
//   await addDoc(collection(db, "rideRequest"), rideInfo);
// }

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);

