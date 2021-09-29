import React from "react";
import '../css/Home.css';
function Home() {
  return (
    <div className="landingPage text-center" style = {{height:"100vh"}}>
            <section className="text-light">
                <h1> Wishlist </h1>
                <h3 className="p-2"> Add gifts from any website. <br/> Share with anyone. </h3>
                <p className="text-muted"> Available now </p> 
                
                <form action="/login">
                    <button className="btn btn-primary">Log in</button>
                </form>
                
                <span className="text-muted largeFont">or</span>
                
                <form action="/register">
                    <button className="btn btn-primary">Register</button>
                </form>
            </section>
        </div>
  );
}

export default Home;