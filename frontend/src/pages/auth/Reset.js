import React, { useState } from 'react';
import './styles.css'
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  
  const [user, setUser] = useState({'password':''})

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams)
  const navigate = useNavigate();

  const handleSubmit = () => {

    const verificationObj = {
        email: searchParams.get("email"),
        new_password: user.password,
        otp: searchParams.get("otp"),
    };
  
    const url = "http://127.0.0.1:8000/reset"

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(verificationObj),
    })
    .then(response=>{
      if(response.status!==200) {
        alert("Password Reset failed! Please try again")
      }
      else {
        alert("Password Reset Successfully");
      }
      return response.json()
    })
    .then((data) => {
      navigate('/');
    });
  }

  return (
    <div className="login-form">
      <h2>Enter New Password</h2>
      <form>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(event) => setUser({...user,"password":event.target.value})}
          />
        </div>

        <button type="button" className="auth-submit" onClick={()=>handleSubmit()}>Submit</button>
      </form>
    </div>
  );
};

export default Reset;
