import React from "react";
import styles from '../css/editUserProfile.module.css';
function editUserProfile() {
  return (
    <div class = {styles.center}> 
        <div class="container">
  <div class="row align-items-start">
    <div class="col">
      
    </div>
    <div class="col">
      
    </div>
    <div class="col">
      
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="email" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Enter new name"/>
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="newPassword" placeholder="Password"/>
              </div>
              <div class="form-check"></div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
    </div>
    <div class="col">
      
    </div>
    <div class="col">
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFHYiNqFoPItg/profile-displayphoto-shrink_800_800/0/1612123763871?e=1639008000&v=beta&t=_ZYEdTa-b7iEASl16tiBr0yCjkRk5vIIW3BxP4D9dqc" alt="Avatar" class = {styles.round}/>
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col">
      This is a test image btw
    </div>
  </div>
</div>
    </div>
  );
}

export default editUserProfile;