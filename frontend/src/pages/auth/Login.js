import React, { useState } from "react";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../auth/actions";

const Login = () => {
  
  const [user, setUser] = useState({password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = () => {
    const url = "http://127.0.0.1:8000/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status !== 200) {
          if(response.status === 400) {
            alert("Invalid credentials");
          }
          else if(response.status === 401) {
            alert("Please verify email");
          }
        }
        else {
          alert("Successful login")
        }
        return response.json();
      })
      .then((data) => {
        if(data['success'] === true) {
            dispatch(login(data.token))
        }
        setUser({ email:"", password: "" })
        navigate('/');
      });
  };

  const handleForgotPasswordClick = () =>{
    navigate("/forgot")
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
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

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </div>

        <div className="login-links">
          <div className="forgot-password">
              <a href="/register">
                  Register
              </a>
          </div>

          <div className="forgot-password">
              <a href="/forgot" onClick={()=>handleForgotPasswordClick()}>
                  Forgot password?
              </a>
          </div>
        </div>

        

        <button type="button" className="auth-submit" onClick={()=>handleSubmit()}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
