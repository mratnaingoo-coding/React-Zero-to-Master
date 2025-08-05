import React, { useState } from 'react'
import { 
    createAuthUserWithEmailAndPassword
    , creatUserDocFromAuth
 } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formData, setFormData] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formData;
    console.log(formData);

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
            

            // You can add additional logic here, like creating a user document in Firestore
            await creatUserDocFromAuth(user, { displayName });
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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input
                    type="text"
                    placeholder="Input your name"
                    required
                    onChange={handleChange}
                    value={displayName}
                    name="displayName"
                />
                <br />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Input your email"
                    required
                    onChange={handleChange}
                    value={email}
                    name="email"
                />
                <br />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Input your password"
                    required
                    onChange={handleChange}
                    value={password}
                    name="password"
                />
                <br />
                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Input your confirm password"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword"
                />
                <button type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;