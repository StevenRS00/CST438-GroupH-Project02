import React from "react";
import '../css/Home.css';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="landingPage text-center" style = {{height:"100vh"}}>
            <section className="text-light">
                <h1> Wishlist </h1>
                <h3 className="p-2"> Add gifts from any website. <br/> Share with anyone. </h3>
                <p className="text-muted"> Available now </p> 
                
                <Link to="/login" className="btn btn-primary">Login</Link>
                
                <h4 className="text-muted largeFont">or</h4>
                
                <Link to="/register" className="btn btn-primary">Register</Link>
            </section>
        </div>
  );
}

export default Home;