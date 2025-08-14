import { initializeApp } from "firebase/app";
import {  getAuth, 
          signInWithPopup, 
          signInWithRedirect, 
          GoogleAuthProvider, 
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword
        } from "firebase/auth";
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3tdu5yP0HqBtLjrrf2vIl9_LgNcqqZfk",
  authDomain: "clothing-projects-1a08b.firebaseapp.com",
  projectId: "clothing-projects-1a08b",
  storageBucket: "clothing-projects-1a08b.firebasestorage.app",
  messagingSenderId: "736891542695",
  appId: "1:736891542695:web:ccce436407aa055920cf82"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//You can use not only the google provider but also other providers like Facebook, Twitter, etc.
//For more information, refer to the Firebase documentation.

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();
export const createUserDocFromAuth = async(
  userAuth, 
  additionalInformation = {}
) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  //console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  //console.log(userSnapShot);
  //console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const { displayName , email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef,
        {
          displayName,
          email,
          createAt,
          ...additionalInformation,
        }
      );
    } catch (error) {
      console.log("Following error: ", error.message);
    }
  };
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password);
}