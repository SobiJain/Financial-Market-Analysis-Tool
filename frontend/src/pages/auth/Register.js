import React, { useState } from 'react';
import '../../styles.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  
  const [user, setUser] = useState({'email':'','password':''})

  const navigate = useNavigate();

  const handleSubmit = () => {

    const url = "http://127.0.0.1:8000/register"

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    })
    .then(response=>{
      if(response.status!==200) {
        console.log(response.error)
        toast.error("EmailID already exist. Please try again")
      }
      else {
        toast.success("Registraion successful");
      }
      return response.json()
    })
    .then((data) => {
      navigate('/login');
    });
  }

  return (
    <div className="login-form">
      <h2>Register</h2>
      <form>

        <div className="form-group">
          <label htmlFor="password">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(event) => setUser({...user,"email":event.target.value})}
          />
        </div>

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

export default Register;
