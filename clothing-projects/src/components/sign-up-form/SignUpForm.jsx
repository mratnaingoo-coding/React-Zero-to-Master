import React, { useState } from 'react'

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
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={() => { }}>
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
            </form>
        </div>
    )
}

export default SignUpForm;