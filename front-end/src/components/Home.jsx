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
        src="https://cdn.shopify.com/s/files/1/1324/9125/files/wishlist-banner.jpg?10898251441926500954"
        width="400" height="700"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{ color: 'grey' }}>The Best WishList Ever</h3>
        <p style={{ color: 'black' }}>Add gifts from any website. Share with anyone.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.qeretail.com/blog/wp-content/uploads/2017/08/wishlist.png"
        width="400" height="700"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3 style={{ color: 'black' }}>Build.Add.Share.</h3>
        <p style={{ color: 'black' }}>Create as many wish list as you like. Easy add gifts from websites. Share your wishlist with others.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.justinmind.com/wp-content/uploads/2017/12/wishlist-app-best-wishlist-app-for-ios-header-768x245.png"
        width="400" height="700"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3 style={{ color: 'black' }}>Easy to Add, Easy to Manage</h3>
        <p style={{ color: 'black' }}>With our wishlist you can keep everything you want in one place from any device.</p>
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
            <p className="headingSub">
            <b>When it comes to gift giving, forget trying to read minds! </b> <br></br>
            Make "hard to buy for" easy by always buying a meaningful and appreciated gift. 
            No more bad gifts, useless and unwanted gifts, bum everyone out.
            A thoughtful surprise by getting the perfect present is better for you, them, and the environment.
            Easy to ask by sharing wish lists is super simple. Great for any occasion:  
            <i> Birthdays, Holidays, Wedding registry, Baby registry, Graduation, Donations, Anniversary and much more! </i>
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
              <img src="https://media.discordapp.net/attachments/753091235111108608/895718166171381760/self2.jpg?width=677&height=676" className="w-100 border-bottom" alt="Testing1" />
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
              <img src="https://cdn.discordapp.com/attachments/753091235111108608/897988576623591435/screen_shot_2020-03-13_at_1.png" className="w-100 border-bottom" alt="Testing1" />
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
  );
}
export default Home;