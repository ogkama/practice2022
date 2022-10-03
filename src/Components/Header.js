import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button, Row, NavDropdown} from "react-bootstrap";
import logo from './Pics/audio.png';

export default class Header extends Component {
    render() {
        return (
            <div className="aboba">
                <Navbar collapseOnSelect fixed="top" variant="dark" bg = "dark">
                    <Container className = "col-lg-7">
                        <Navbar.Brand href ="/" >
                            <img
                                src={logo}
                                height="40"
                                width="40"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Navbar.Brand>     
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <Nav.Link href="/" > Home</Nav.Link>
                                <NavDropdown title="Projects" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/plusplus">C++ projects</NavDropdown.Item>
                                    <NavDropdown.Item href="/python">Python projects</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://github.com/ogkama/">
                                       GitHub
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link href="https://mtuci.ru/">MTUCI</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> 
                    </Container> 
                </Navbar> 
            </div>
        )
    }
}