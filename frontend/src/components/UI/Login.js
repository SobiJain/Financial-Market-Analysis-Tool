import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './ApiService'
import { toast } from "react-toastify";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    let navigate = useNavigate()
    const [isLogin, setLogin] = useState(true)


    useEffect(()=> {
      var user_token = token['mytoken']
      console.log('Login User token is',user_token)
      console.log('Data type',typeof(token['mytoken']))
        if(String(user_token) !== 'undefined'){
            navigate('/')
        }

    }, [token])

    const loginBtn = () => {
     if(username.trim().length !==0 && password.trim().length){
         console.log('Username And Password Are Set')
         APIService.LoginUser({username,password})
         .then(resp => {
            setToken('mytoken', resp.token)
            if (String(resp.token) !== 'undefined') {
                toast.success('Hi '+username+', you are successfully logged in');
            } else {
                toast.error("Maybe you're not registered or wrong username and password")
            }
            
        })
         .catch(error => {
            console.log("something worng"+error)
        })

     }else{
        console.log('Username And Password Are Not Set')
        navigate('/')
     }
    }

    const loginStyle={
        backgroundImage:`url(${process.env.PUBLIC_URL+ "img/18.jpg"})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                'min-height': '100%',
                height:'77vh',
                backgroundPosition:' center',
                margin:0,
            
                };


    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                <h1 className="alert alert-danger">Learn Python Blog</h1>
                <br />
                <br />

                <div className="col-sm-4">
                    <h3>Please Login Here</h3>   
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                <input type="text" value={username} className="form-control" placeholder="Enter Username" onChange ={e=> setUsername(e.target.value)}/>
            </div>

  
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                <input type="password" value={password} className="form-control" placeholder="Enter Password" onChange ={e=> setPassword(e.target.value)}/>
            </div>
            <br />
            <div>
                <button onClick={loginBtn} className="btn btn-primary">Login</button>
            </div>
            </div>


            <div className="col-sm-8 full-img" style={loginStyle}>

            </div>

                </div>
                </div>
            </div>
    )
}

export default Login