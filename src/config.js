import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAGKvR_KvpNF1cs8AKEcHkg72TXbpAykjc",
    authDomain: "my-blog-b6d58.firebaseapp.com",
    projectId: "my-blog-b6d58",
    storageBucket: "my-blog-b6d58.appspot.com",
    messagingSenderId: "33353763970",
    appId: "1:33353763970:web:3733bff88be1518193789b"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
