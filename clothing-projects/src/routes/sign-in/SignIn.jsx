import React from 'react'
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import {
  signInWithGooglePopup,
  creatUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';


const SignIn = () => {

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      creatUserDocFromAuth(user);

    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle errors here (e.g., show an error message)
    }
  };

  return (
    <div>
      Sign In Page
      <br />
      Sign in with Google
      <br />
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
      <br />
      <SignUpForm />
    </div>
  )
}

export default SignIn;