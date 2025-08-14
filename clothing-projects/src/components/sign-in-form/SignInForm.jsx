import React, { useState, useContext } from 'react'
import FormInputField from '../form-input/FormInputField';

import { 
    signInWithGooglePopup, 
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword
 } from '../../utils/firebase/firebase.utils';
import './SignInFormStyle.scss';
import ButtonComponent from '../button/ButtonComponent';
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formData, setFormData] = useState(defaultFormFields);
    const {  email, password } = formData;
    
    const { setCurrentUser } = useContext(UserContext);

    const resetSubmit = () => {
        setFormData(defaultFormFields);
    };

    const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
      

    } catch (error) {
      console.error("Error signing in with Google:", error);
      // Handle errors here (e.g., show an error message)
    }
  };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );
            setCurrentUser(user)
            resetSubmit(); 
            

        } catch (error) {
            if(error.code === 'auth/invalid-credential') {
                alert('Incorrect password for email');
            };
            console.error("Error signing in with email and password:", error);
        }
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInputField
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email}
                    name="email"
                />
                <br />
                <FormInputField
                    label="Password"    
                    type="password"
                    required
                    onChange={handleChange}
                    value={password}
                    name="password"
                />
                <div className='buttons-container'>
                    <ButtonComponent type='submit'>
                        Sign In
                    </ButtonComponent>
                    <ButtonComponent type='button' onClick={signInWithGoogle}
                    buttonType='google'>
                        Google Sign In
                    </ButtonComponent>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;