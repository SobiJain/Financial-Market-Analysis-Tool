import React, { useState } from "react";
import "./auth.css"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [con_password, setCon_Password] = useState("");
    const [email, setEmail] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCon_PasswordChange = (e) => {
        setCon_Password(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Email:", email);
    };

    return (
        <div className="signup-page">
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />

                <label htmlFor="con_password">Confirm Password:</label>
                <input type="password" id="con_password" value={con_password} onChange={handleCon_PasswordChange} />



                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;
