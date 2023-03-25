import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [user, setUser] = useState({email: "" });

  const navigate = useNavigate();

  const handleSubmit = () => {
    
    const url = "http://127.0.0.1:8000/forgot";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Make sure you're  registered first");
        } else {
          alert("Password Reset mail has been sent to your registered email");
          navigate("/")
        }
        return response.json();
      })
      .then((data) => {
        setUser({email: "" })
      });
  };

  return (
    <div className="login-form">
      <h2>Forgot Password</h2>
      <form>

        <div className="form-group">
          <label htmlFor="password">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />
        </div>

        <button
          type="button"
          className="auth-submit"
          onClick={() => handleSubmit()}
        >
          Send Password Reset Email
        </button>
      </form>
    </div>
  );
};

export default Forgot;
