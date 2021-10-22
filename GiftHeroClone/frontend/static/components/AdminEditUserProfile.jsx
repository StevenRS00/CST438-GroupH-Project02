import React from "react";
import '../css/AdminEditUserProfile.css';
import { Link } from 'react-router-dom';


function AdminEditUserProfile() {
    return (
        <div className="AdminEditUserProfile">
            {/* ~~~~~ Temp. nav bar ~~~~~ */}
            <div className="tempNavBar">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                <Link class="navbar-brand" to="/">
                    Wishlist
                </Link>
                </div>
            </nav>
            </div>

            <h1>Welcome to the Admin Edit User Profile Page! </h1>
            <br/><br/><br/><br/>
            <h3>You will soon be able to edit a user here . . .</h3>
            <br/><br/><br/>
        </div>
    );
}
export default AdminEditUserProfile;