import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import './Loginnew.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../auth/actions";


function Loginnew() {
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
            <MDBContainer fluid className='my-5' style={{ maxWidth: "80rem" }}>

                <MDBRow className='g-0 align-items-center'>
                    <MDBCol col='6' >

                        <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                            <MDBCardBody className='p-5 shadow-5 text-center'
                            >

                                <h2 className="fw-bold mb-5">Sign up now</h2>

                                <MDBRow>
                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                                    </MDBCol>

                                    <MDBCol col='6'>
                                        <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' name='email' value={user.email}
                                    onChange={(event) =>
                                        setUser({ ...user, email: event.target.value })
                                    }
                                />
                                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name="password"
                                    value={user.password}
                                    onChange={(event) =>
                                        setUser({ ...user, password: event.target.value })
                                    } />

                                <div className="login-links">
                                    <div className="forgot-password">
                                        <a href="/forgot" onClick={() => handleForgotPasswordClick()}>
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>


                                    <MDBBtn className='w-100 mb-4' size='md'
                                        style={{ boxShadow: "1px 1px 10px 0 rgba(108, 108, 108, 1)" }}
                                    >sign up</MDBBtn>
                                    <br />
                                    <MDBBtn className='w-100 mb-4' size='md'
                                        style={{ boxShadow: "1px 1px 10px 0 rgba(108, 108, 108, 1)" }}
                                    >register</MDBBtn>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol col='6' className='d-none d-md-block'>
                        <img src="https://images.unsplash.com/photo-1642621668575-93550304b614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80" class="w-100 rounded-4 shadow-4"
                            alt="loda lelo" width="2rem" height="auto" />
                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </div>
    );
}

export default Loginnew;