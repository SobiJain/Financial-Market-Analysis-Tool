import React from "react";
import "./SuccessPage.css"
const SuccessPage = () => {
    return (
        <div className="success-page">
            <div className="checkbox-container">
                <svg className="svg1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        d="M6,12.1l4.1,4.1l8.8,-8.8"
                    />
                </svg>
            </div>
            <h1 className="head">You're Successfully Logged In!</h1>
        </div>
    );
};

export default SuccessPage;
