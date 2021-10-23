import '../css/Login.css';
import { Redirect, useHistory, Link} from 'react-router-dom';
import React from 'react'
export default class login extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: ''};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(e) {
     this.setState({value: e.target.value});
   }
   handleSubmit(e) {
     if(this.state.value === 'admin') {
      this.redirectFunc();
      //  history.push('/editUser')
      // props.history.push('/')
     }
     e.preventDefault();
   }
    render() {
        // let history = useHistory();
        return (
          <div className="loginFormPage">   
          
            <p className="heading text-dark" align="center">Log in</p>
            
            <input type="username" id="username" name="username" placeholder="Enter username" onChange={this.handleChange}/>
            
            <input type="password" id="password" name="password" placeholder="Enter password" onChange={this.handleChange}/>
            
            <strong>
              <p className="text-center text-danger" id="errorMsg"></p>
            </strong>
            
            <article className="text-center">
              <Link to="/list">
              <button className="btn btn-primary" id="loginBtn">Login</button>
              </Link>
            </article>
            
            <article className="text-center p-4">
              <a href="/register" className='p-3'>Register?</a>
              <br/>
              <a href="/" className='p-2'>Home</a>
            </article>
          </div>
        );
    }
}