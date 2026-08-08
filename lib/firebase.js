import { getApp, getApps, initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-YN63g8zTyL-lcmeq0qQWvGCaoEBcO6I",
  authDomain: "teamup-59c62.firebaseapp.com",
  projectId: "teamup-59c62",
  storageBucket: "teamup-59c62.firebasestorage.app",
  messagingSenderId: "281281164579",
  appId: "1:281281164579:web:a4f3436c21fbe2178e0896",
  measurementId: "G-3EFJN5K7MH"
};

// prevent re-initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

async function saveNewUser(userId, userName, email) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userId: userId,
      userName: userName,
      email: email
    })
    console.log("Saved User with ID:", docRef.id)

  } catch (e) {
    console.log("Error saving user: ", e)
  }
}

export function signUpNewUser(userName, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const userId = userCredential.user.uid

    saveNewUser(userId, userName, email);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}