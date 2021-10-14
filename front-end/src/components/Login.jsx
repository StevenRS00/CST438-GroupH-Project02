import React from "react";
import '../css/Login.css';
import { Redirect, useHistory} from 'react-router-dom';

function Login() {
  let history = useHistory();
  function loginUser() {
    alert("user clicked button");
    // let userN = document.getElementById("#username").value;
    // let passW = document.getElementById("#password").value;
    // console.log(document.getElementById("#password").value);
    // if(userN === "admin" && passW === "admin") {
    //     alert("this is working");
    //     return <Redirect to='/editUser' />
    //     // alert("this is working");
    //     // history.push('/editUser');
    // }
  }
  return (
    <div className="loginFormPage">   
    
      <p className="heading text-dark" align="center">Log in</p>
      
      <input type="username" id="username" name="username" placeholder="Enter username"/>
      
      <input type="password" id="password" name="password" placeholder="Enter password"/>
      
      <strong>
        <p className="text-center text-danger" id="errorMsg"></p>
      </strong>
      
      <article className="text-center">
        <button className="btn btn-primary" id="loginBtn" onClick={loginUser}>Login</button>
      </article>
      
      <article className="text-center p-4">
        <a href="/register" className='p-3'>Register?</a>
        <br/>
        <a href="/" className='p-2'>Home</a>
      </article>
    </div>
  );
}

export default Login;