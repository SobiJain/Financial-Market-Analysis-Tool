import React, { useState } from "react";
import {
  Container, Grid, Card, CardContent, TextField, Button, Checkbox, FormControlLabel
} from '@mui/material'
import { styled } from '@mui/material/styles'
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Loginnew.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { login } from "../../auth/actions";


const MyButton = styled(Button)({
  width: '100%',
  marginBottom: '0.5rem',
  boxShadow: '1px 1px 10px 0 rgba(108, 108, 108, 1)',
});



const Login = () => {

  const [user, setUser] = useState({ password: "" });
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
          if (response.status === 400) {
            alert("Invalid credentials");
          }
          else if (response.status === 401) {
            alert("Please verify email");
          }
        }
        else {
          alert("Successful login")
        }
        return response.json();
      })
      .then((data) => {
        if (data['success'] === true) {
          dispatch(login(data.token))
        }
        setUser({ email: "", password: "" })
        navigate('/');
      });
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot")
  }

  return (
    <div className="container">


      {/* <div className="login-form">
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
              <a href="/forgot" onClick={() => handleForgotPasswordClick()}>
                Forgot password?
              </a>
            </div>
          </div>



          <button type="button" className="auth-submit" onClick={() => handleSubmit()}>Submit</button>
          <Button >Ahoy</Button>
        </form>
      </div> */}

      <div className="container">
        <Container maxWidth="lg" sx={{ my: 5 }}>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Card sx={{
                background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'
              }}
                className="my-5 cascading-right"
              >
                <CardContent sx={{ py: 5 }}>
                  {/* Sign up now */}
                  <form>
                    <h2> Login </h2>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                      </Grid>
                    </Grid>
                    <TextField label="Email" fullWidth variant="outlined" sx={{ mb: 4 }}
                      type="email"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={
                        (event) => setUser({ ...user, email: event.target.value })}
                    />
                    <TextField label="Password" fullWidth variant="outlined" type="password" sx={{ mb: 4 }}
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={(event) => setUser({ ...user, password: event.target.value })
                      }
                    />
                    <FormControlLabel control={<Checkbox />} label="Forgot Password?" sx={{ mb: 4 }} />
                  </form>

                  <MyButton size="large" onClick={() => handleSubmit()}>Sign up</MyButton>
                  <MyButton size="large">register</MyButton>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="https://images.unsplash.com/photo-1642621668575-93550304b614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80"
                class="w-100 rounded-4 shadow-4"
                alt="fotu hehe"
                width="2rem" height="auto" />
            </Grid>
          </Grid>
        </Container>
      </div>

    </div>

  );
};

export default Login;

// import React from 'react';
// import {
//   Container,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const MyButton = styled(Button)({
//   width: '100%',
//   marginBottom: '0.5rem',
//   boxShadow: '1px 1px 10px 0 rgba(108, 108, 108, 1)',
// });

// function App() {
//   return (
    // <div className="App">
    //   <Container maxWidth="lg" sx={{ my: 5 }}>
    //     <Grid container alignItems="center">
    //       <Grid item xs={12} md={6}>
    //         <Card sx={{ my: 5, backgroundImage: 'url(https://images.unsplash.com/photo-1642621668575-93550304b614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80)', backgroundSize: 'cover', backdropFilter: 'blur(30px)' }}>
    //           <CardContent sx={{ py: 5 }}>
    //             <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 5 }}>
    //               Sign up now
    //             </Typography>
    //             <Grid container spacing={2}>
    //               <Grid item xs={6}>
    //                 <TextField label="First name" fullWidth variant="outlined" />
    //               </Grid>
    //               <Grid item xs={6}>
    //                 <TextField label="Last name" fullWidth variant="outlined" />
    //               </Grid>
    //             </Grid>
    //             <TextField label="Email" fullWidth variant="outlined" sx={{ mb: 4 }} />
    //             <TextField label="Password" fullWidth variant="outlined" type="password" sx={{ mb: 4 }} />
    //             <FormControlLabel control={<Checkbox />} label="Forgot Password?" sx={{ mb: 4 }} />
    //             <MyButton size="large">sign up</MyButton>
    //             <MyButton size="large">register</MyButton>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </div>
//   );
// }

// export default App;