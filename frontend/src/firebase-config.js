import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrRgWvvfEysKl41qoyt80nK8RobVn_IQk",
  authDomain: "to-do-list-v360.firebaseapp.com",
  projectId: "to-do-list-v360",
  storageBucket: "to-do-list-v360.appspot.com",
  messagingSenderId: "855084215428",
  appId: "1:855084215428:web:67240bb98a149bdbdea6d1",
  measurementId: "G-G0CMSP850N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export const auth = getAuth();
export const signUp = async (name, email, password) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await addDoc(collection(db, "user"), {
            name,
            email,
        });
        return userCredential.user;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      return({error: e.code});
    }
};

export const getUserInfo = async (userEmail) => {
  try {
    const q = query(collection(db, "user"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);
    const doc = querySnapshot.docs[0].data();
    const userDocID = querySnapshot.docs[0].id;
    return {...doc, userDocID};
  } catch (e) {
    console.log(e);
  }
};

export const createTodoList = async (listName, userDocID) => {
  try{
    await setDoc(doc(db, `user/${userDocID}/todosList`, listName),{
      listName,
      todos: []
    }, { merge: true })

  } catch (e){
    console.log(e);
  }
}