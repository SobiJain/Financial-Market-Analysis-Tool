import React from "react";
import "./welcome.css"
import SuccessPage from "../components/UI/SuccessPage";
const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h1>Welcome to Stock Screener</h1>
            {/* <h3>Hello!</h3>
            <h3>You're successfully logged in.</h3> */}
            <SuccessPage />
            <nav>
                <ul>
                    <li>
                        <button>Sign In</button>
                    </li>
                    <li>
                        <button>Sign Up</button>
                    </li>
                    <li>
                        <button>Sign Out</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default WelcomePage;
