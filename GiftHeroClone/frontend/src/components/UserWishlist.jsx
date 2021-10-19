import React from "react";
import '../css/UserWishlist.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

function UserWishlist() {
    return (
        <div className="UserWishlist">
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

            {/* User Image */}
            <Container>
                <Row>
                    <Col>
                    <Image className="userImage" src="https://cdn1.iconfinder.com/data/icons/interface-linear-white-with-black-background/2048/User-512.png" width="300" height="300" roundedCircle  />
                    </Col>
                </Row>
            </Container>

            <br></br>
            {/* User Wish list cards - Need to link pages*/}
            <div className="d-grid gap-4">
                <Button variant="outline-secondary" size="lg">
                    Wish List 1
                </Button>
                <Button variant="outline-secondary" size="lg">
                Wish List 2
                </Button>
                <Button variant="outline-secondary" size="lg">
                Wish List 3
                </Button>
                <Button variant="outline-secondary" size="lg">
                Wish List 4
                </Button>
            </div>

            <br/>

        </div>
    );
}
export default UserWishlist;