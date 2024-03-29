import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../auth/actions";
import ButtonC from "../../components/UI/ButtonC";

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
            console.log(data)
            dispatch(login(data.token, user.email))
        }
        setUser({ email:"", password: "" })
        navigate('/');
      });
  };

  const handleForgotPasswordClick = () =>{
    navigate("/forgot")
  }

  return (

    <div className="lsession" >
        <div className="lleft">
          {/*?xml version="1.0" encoding="UTF-8"?*/}
          <svg enableBackground="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n          .st01 {\n            fill: #fff;\n          }\n        " }} />
            <path className="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
          </svg>
        </div>
        <form action className="log-in" autoComplete="off">
          <h4>We are <span>FIN ANALYTICA</span></h4>
          <p>Welcome back! Log in to your account to view today's stats:</p>
          <div className="lfloating-label">
            <input placeholder="Email" type="email" name="email" id="email" value={user.email} onChange={(event) => setUser({ email: event.target.value })} autoComplete="on" />
            <label htmlFor="email">Email:</label>
            <div className="icon">
              {/*?xml version="1.0" encoding="UTF-8"?*/}
              <svg enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n              .st0 {\n                fill: none;\n              }\n            " }} />
                <g transform="translate(0 -952.36)">
                  <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                </g>
                <rect className="st0" width={100} height={100} />
              </svg>
            </div>
          </div>
          <div className="lfloating-label">
            <input placeholder="Password" type="password" name="password" id="password" value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            } autoComplete="off" />
            <label htmlFor="password">Password:</label>
            <div className="icon">
              {/*?xml version="1.0" encoding="UTF-8"?*/}
              <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n              .st0 {\n                fill: none;\n              }\n\n              .st1 {\n                fill: #010101;\n              }\n            " }} />
                <rect className="st0" width={24} height={24} />
                <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                <path className="st1" d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
                <path className="st1" d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
              </svg>
            </div>
          </div>
          <a href="#" onClick={()=>handleForgotPasswordClick()} className="discrete" >Forgot password?</a>
          <ButtonC type="button" onClick={()=>handleSubmit()}>Log in</ButtonC>
        </form>
      </div>
  );
};

export default Login;
