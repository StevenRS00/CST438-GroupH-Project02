import { Link, withRouter } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Site Information</h6>
            <hr/>
            <p className="site_info text-white">
            This site is part of a course project. The team will have designed and implemented a web-based wish list application that is deployed on Heroku using modern web frameworks. 
            REST, (API), CICD pipeline, and a persistence Database layer. 
            </p>
          </div>
          <div className="site_info col-md-4">
            <h6>Quick Links</h6>
            <hr/>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/register">Sign Up</Link></div>
            <div><Link to="/login">Login</Link></div>
          </div>
          <div className=" site_info col-md-4">
            <h6>Contact Information</h6>
            <hr/>
            <div><p className="site_info text-white mb-1"> BestWishList@gmail.com </p></div>
            <div><p className="site_info text-white mb-1"> (831) 123 - 0258 </p></div>
            <div><p className="site_info text-white mb-1"> @2021 Group H </p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;