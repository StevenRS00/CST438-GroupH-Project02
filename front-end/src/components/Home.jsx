import '../css/Home.css';
import { Link, withRouter } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="App">

      {/* Home Page Nav Bar */}
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Wishlist
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li>
                <Link to="/login" className="btn btn-primary">Login</Link>
              </li>
              <li> -
              </li>
              <li>
              <Link to="/register" className="btn btn-primary">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    {/* Home Page Carousel */}
    <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1444159759392-aeeb3d5851c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvY2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        width="300" height="800"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>The Best WishList Ever</h3>
        <p>Add gifts from any website. Share with anyone.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/vectors/underwater-seascape-seafloor-undersea-with-seaweed-dark-saltwater-vector-id1085925138?k=20&m=1085925138&s=170667a&w=0&h=G5NsqfbFd4wARLXrrtLZ-Z1cNWWKO_BIA7cTbGuomDo="
        // Use: https://cdn.shopify.com/s/files/1/1324/9125/files/wishlist-banner.jpg?10898251441926500954
        width="400" height="800"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Build.Add.Share</h3>
        <p>Create as many wish list as you like. Easy add gifts from websites. Share your wishlist with others</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60"
        width="400" height="800"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 >Easy to Add, Easy to Manage</h3>
        <p>With our wishlist you can keep everything you want in one place from any device.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
    
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="main-heading"> Our Goal </h3>
            <div className="underline mx-auto"></div>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Home Page - Who We Are */}
    <section className="section border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading"> Who We Are </h3>
            <div className="underline mx-auto"></div>
          </div>

          {/* Steven */}
          <div className="col-md-3">
            <div className="card shadow">
              <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFI9M-AN1Hx1g/profile-displayphoto-shrink_800_800/0/1575409503824?e=1634774400&v=beta&t=pUKoPdqi4_wrcWGQBBHDG9QwuCWrjQ6fjSo9jpx8EFY" className="w-100 border-bottom" alt="Testing1" />
              <div className="card-body">
                <h6>Steven </h6>
                <div className="underline"></div>
                <p>Back-End Developer</p>
              </div>
            </div>
          </div>


          {/* Alexis */}
          <div className="col-md-3">
            <div className="card shadow">
              <img src="https://media-exp1.licdn.com/dms/image/C5603AQFHYiNqFoPItg/profile-displayphoto-shrink_800_800/0/1612123763871?e=1634774400&amp;v=beta&amp;t=-wErQfPwqcfDyE7CQ7jCXp4MeXJjMlgRPTjA4XjOzGQ" className="w-100 border-bottom" alt="Testing1" />
              <div className="card-body">
                <h6>Alexis </h6>
                <div className="underline"></div>
                <p>Front-End Developer</p>
              </div>
            </div>
          </div>

          {/* Ashley */}
          <div className="col-md-3">
            <div className="card shadow">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7KLEHmb40s22t3maxVxYE9c1xSvBYfqdbg&usqp=CAU" className="w-100 border-bottom" alt="Testing1" />
              <div className="card-body">
                <h6>Ashley</h6>
                <div className="underline"></div>
                <p>Front-End Developer</p>
              </div>
            </div>
          </div>

          {/* Michael */}
          <div className="col-md-3">
            <div className="card shadow">
              <img src="https://media.discordapp.net/attachments/813170874047135775/839399734334586880/screen_shot_2020-03-13_at_1.png" className="w-100 border-bottom" alt="Testing1" />
              <div className="card-body">
                <h6>Michael</h6>
                <div className="underline"></div>
                <p>Back-End Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>






    </div>

    //   <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <ReactBootStrap.Navbar.Brand >

    //     <Link1 class="navbar-brand" to="/">
    //         Wishlist
    //       </Link1>
    //       {/* <div>
    //       <Link1 activeClass="active" to="/" spy={true} smooth={true} offset={-70} duration={500}>WishList2</Link1>
    //       </div> */}
    //     </ReactBootStrap.Navbar.Brand>

    //   <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    //     <ReactBootStrap.Nav className="me-auto">
    //       <ReactBootStrap.Nav.Link>
    //         {/* <Link1 to="/description" class="nav-link active">About us:(?pls</Link1> */}
    //         {/* <div>
    //           <Link1 activeClass="active" to="aboutUs" spy={true} smooth={true} offset={-70} duration={500}>?About Us!!!</Link1>
    //         </div> */}
    //       </ReactBootStrap.Nav.Link>
    //       <ReactBootStrap.Nav.Link>
    //       {/* <Link1 activeClass="active" to="description" spy={true} smooth={true} offset={-70} duration={500}>OtherTabDes?</Link1> */}
    //       </ReactBootStrap.Nav.Link>

    //     </ReactBootStrap.Nav>
    //     <ReactBootStrap.Nav>
    //       <ReactBootStrap.Nav.Link><Link1 to="/login" className="btn btn-primary">Login</Link1></ReactBootStrap.Nav.Link>
    //       <ReactBootStrap.Nav.Link><Link1 to="/register" className="btn btn-primary">Register</Link1></ReactBootStrap.Nav.Link>
    //       {/* <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link> */}
    //     </ReactBootStrap.Nav>
    //   </ReactBootStrap.Navbar.Collapse>
    // </ReactBootStrap.Navbar>

    // <div className="landingPage text-center" style = {{height:"100vh"}}>
    //   <section className="text-light">
    //       <h1> Wishlist </h1>
    //       <h3 className="p-2"> Add gifts from any website. <br/> Share with anyone. </h3>
    //       <p className="text-muted"> Available now!!! </p> 
          
    //       <Link to="/login" className="btn btn-primary">Login</Link>
          
    //       <h4 className="text-muted largeFont">or</h4>
          
    //       <Link to="/register" className="btn btn-primary">Register</Link>
    //   </section>
    // </div>
  );
}

export default Home;