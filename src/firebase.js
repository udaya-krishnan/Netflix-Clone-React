
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyArQOjmRwfuyVT3fh043ONTwjyuuysTHJg",
  authDomain: "netflix-clone-674d6.firebaseapp.com",
  projectId: "netflix-clone-674d6",
  storageBucket: "netflix-clone-674d6.appspot.com",
  messagingSenderId: "266935296057",
  appId: "1:266935296057:web:50b3e8ff8588fd7e25ade8"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
const db=getFirestore(app)

const signup=async (name,email,password)=>{
    try {
       const res= await createUserWithEmailAndPassword(auth,email,password)
       const user=res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
        console.log(error.message)
    }
}

const login=async(email,password)=>{
    try {
        signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(' '))
        console.log(error.message)
    }
}

const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}