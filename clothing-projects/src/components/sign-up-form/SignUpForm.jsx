import React, { useState, useContext } from 'react'
import FormInputField from '../form-input/FormInputField';

import { 
    createAuthUserWithEmailAndPassword
    , createUserDocFromAuth
 } from '../../utils/firebase/firebase.utils';
import './SignUpFormStyle.scss';
import ButtonComponent from '../button/ButtonComponent';
import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formData, setFormData] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formData;
    
    const { setCurrentUser } = useContext(UserContext);

    const resetSubmit = () => {
        setFormData(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, password
            );
            
            setCurrentUser(user);
            // You can add additional logic here, like creating a user document in Firestore
            await createUserDocFromAuth(user, { displayName });
            resetSubmit(); 
            alert("User created successfully!");

        } catch (error) {
            console.error("Error creating user with email and password:", error);   
            if (error.code === 'auth/email-already-in-use') {
                alert("Email already in use. Please use a different email.");
            } else {
                alert("Error creating user: " + error.message);
            }
        }
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className='sign-up-container'>
            <h2>Don't you have an account?</h2>
            <span>Sign up with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInputField
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    value={displayName}
                    name="displayName"
                />
                <br />
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
                <br />
                <FormInputField
                    label="Confirm Password"
                    type="password"                    
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword"
                />
                <ButtonComponent type='submit'>
                    Sign Up
                </ButtonComponent>
            </form>
        </div>
    )
}

export default SignUpForm;