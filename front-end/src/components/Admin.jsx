import React from "react";
import '../css/Admin.css';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Admin() {
    return (
        <div className="Admin">
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

            <div className="AdminMsg">
                <h1> <strong>Welcome Admin! </strong></h1> <br/>
            </div>

            <div className="AdminCreateUser">
              <Card>
                <Card.Header> <strong>Create User:</strong></Card.Header>
                <Card.Body>
                  <Card.Text>
                        <Form.Floating className="mb-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="name"
                            placeholder="JaneDoe"
                          />
                          <label htmlFor="floatingInputCustom">Fist Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="userName"
                            placeholder="UserNameExample"
                          />
                          <label htmlFor="floatingPasswordCustom">User Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="password"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                  </Card.Text>
                  <Button variant="primary">Create User</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            </div>

            <br/> <br/>
            <div className="AdminMsg">
                <p> <strong>View all users: </strong></p> <br/>
            </div>

            <Accordion defaultActiveKey="0" className="UserList">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>User 1</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src="https://cdn1.iconfinder.com/data/icons/interface-linear-white-with-black-background/2048/User-512.png" width="150" height="150" roundedCircle />
                            </Col>
                            <br/>
                        </div>
                        SOME USER DESCRIPTION HERE: Username, password and full name.
                    <div className="AdminUserBtns">
                        <Card.Link href="/AdminEditUserProfile">Edit User</Card.Link>
                        <Card.Link variant="danger" href="https://www.google.com/">Delete User</Card.Link>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>User 2</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src="https://cdn1.iconfinder.com/data/icons/interface-linear-white-with-black-background/2048/User-512.png" width="150" height="150" roundedCircle />
                            </Col>
                            <br/>
                        </div>
                        SOME USER DESCRIPTION HERE: Username, password and full name.
                    <div className="AdminUserBtns">
                        <Card.Link href="/AdminEditUserProfile">Edit User</Card.Link>
                        <Card.Link variant="danger" href="https://www.google.com/">Delete User</Card.Link>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>User 3</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src="https://cdn1.iconfinder.com/data/icons/interface-linear-white-with-black-background/2048/User-512.png" width="150" height="150" roundedCircle />
                            </Col>
                            <br/>
                        </div>
                        SOME USER DESCRIPTION HERE: Username, password and full name.
                    <div className="AdminUserBtns">
                        <Card.Link href="/AdminEditUserProfile">Edit User</Card.Link>
                        <Card.Link variant="danger" href="https://www.google.com/">Delete User</Card.Link>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>User 4</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <Col xs={6} md={4}>
                                <Image src="https://cdn1.iconfinder.com/data/icons/interface-linear-white-with-black-background/2048/User-512.png" width="150" height="150" roundedCircle />
                            </Col>
                            <br/>
                        </div>
                        SOME USER DESCRIPTION HERE: Username, password and full name.
                    <div className="AdminUserBtns">
                        <Card.Link href="/AdminEditUserProfile">Edit User</Card.Link>
                        <Card.Link variant="danger" href="https://www.google.com/">Delete User</Card.Link>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            <br/> <br/>
        </div>
    );
}
export default Admin;