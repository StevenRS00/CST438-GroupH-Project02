import React from "react";
import '../css/Login.css';
function Login() {
  return (
        <div className="loginFormPage">
        <p className="heading text-dark" align="center">Log in</p>
        
        <input type="username" id="username" name="username" placeholder="Enter username"/>
        
        <input type="password" id="password" name="password" placeholder="Enter password"/>
        
        <strong>
        <p className="text-center text-danger" id="errorMsg"></p>
        </strong>
        
        <article className="text-center">
            <button className="btn btn-primary" id="loginBtn">Login</button>
        </article>
        
        <article className="text-center p-4">
            <a href="/register" className='p-3'>Register?</a>
            <br/>
            <a href="/" className='p-2'>Back</a>
        </article>
    </div>
  );
}

export default Login;