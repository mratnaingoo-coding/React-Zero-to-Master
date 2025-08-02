import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const creatUserDocFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const { displayName , email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef,
        {
          displayName,
          email,
          createAt
        }
      );
    } catch (error) {
      console.log("Following error: ", error.message);
    }
  };
  return userDocRef;
};