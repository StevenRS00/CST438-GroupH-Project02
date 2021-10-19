import '../../static/css/Register.css';
import React from 'react'
function Register() {
  return (
    <div>
      <form method="POST" action="/register">
        <section class="registerFormPage">

          <p class="heading text-dark" align="center">Register</p>
          <input type="username" class="form-control un" id="usernameInput" name="username" placeholder="Enter username"/>
          
          <input type="password" class="form-control pass" id="passwordInput" name="password" placeholder="Enter password"/>

          <input type="text" class="form-control un" id="firstNameInput" name="firstName" placeholder="Enter your first name"/>

          <article class="text-center p-4">
            <button class="btn btn-dark">Register</button>
          </article>

          <article class="text-center">
            <a href="/login" class='p-3'>Login?</a>

            <br/>
            
            <a href="/" class='p-2'>Home</a>
          </article>
        </section>
      </form>
    </div>
  );
}

export default Register;