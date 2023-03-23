import React, { useState } from "react";
import "./auth.css"

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);

    };

    return (
        <div className="signin-page">
            <h1>Sign into your account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />



                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />




                <button type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Signin;
