import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzRn1Pb84s-oDZYZbkJiP4r11qA4_0IQw",
  authDomain: "to-do-list-d7fcc.firebaseapp.com",
  projectId: "to-do-list-d7fcc",
  storageBucket: "to-do-list-d7fcc.appspot.com",
  messagingSenderId: "769405492251",
  appId: "1:769405492251:web:482e5158a9f263cd7becbe",
  measurementId: "G-XCMND8TLLS"
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
        const response = await addDoc(collection(db, "user"), {
            name,
            email,
        });
        console.log(userCredential.user)
        return userCredential.user;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
    }
};