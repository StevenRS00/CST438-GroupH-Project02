import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Site Information</h6>
            <hr/>
            <p className="text-white">
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. 
            Duis leo. Sed fringilla mauris sit amet nibh. 
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr/>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/register">Sign Up</Link></div>
            <div><Link to="/login">Login</Link></div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr/>
            <div><p className="text-white mb-2"> 123 Main Street Salinas CA </p></div>
            <div><p className="text-white mb-1"> Some Text 1 </p></div>
            <div><p className="text-white mb-1"> Some Text 2 </p></div>
            <div><p className="text-white mb-1"> Some Text 3 </p></div>
          </div>
        </div>
      </div>
    </section>










    // <div className="footer">
    //   <footer class="py-1 bg-dark fixed-bottom">
    //     <div class="container">
    //       <p class="m-0 text-center text-white">
    //         Copyright &copy; Alexis, Steven, Michael, Ashley
    //       </p>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default Footer;