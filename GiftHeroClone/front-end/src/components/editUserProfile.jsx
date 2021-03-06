import styles from '../css/editUserProfile.module.css';
import React from 'react'
import {Link} from 'react-router-dom';
function editUserProfile() {
  return (
    <div class = {styles.center}>
      <div style = {{float: "right"}}> 
        <Link to="/list">
          <button> List page </button>
        </Link>
        <Link to="/">
          <button> Home </button>
        </Link>
        </div> 
      <h1 class = "text-center"> Edit Profile </h1>
      <div class="container">
          <div class="row align-items-start">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <div class="row align-items-center">
            <div class="col">
                    <form>
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input type="email" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Enter new username"/>
                        <small id="emailHelp" class="form-text text-muted"></small>
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="newPassword" placeholder="New password"/>
                      </div>
                      <div class = "p-1"></div>
                      <button type="submit" class="btn btn-primary">Update</button>
                    </form> 
            </div>
            <div class="col"></div>
            <div class="col">
              <img src="defaultPic.png" alt="Avatar" class = {styles.round}/>
            </div>
          </div>
          <div class="row align-items-end">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
      </div>
    </div>
  );
}

export default editUserProfile;