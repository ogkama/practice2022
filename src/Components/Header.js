import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button, Row} from "react-bootstrap";
import logo from './Pics/mtuci_2.png';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="md" bg="light">
                    <Container className = "col-9" >
                        <Navbar.Brand href ="/">
                            <img
                                src={logo}
                                height="40"
                                width="40"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>     
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                    <       Nav className="me-auto">
                                <Nav.Link href = "/">Home</Nav.Link>
                                <Nav.Link href = "/about">About</Nav.Link>
                                <Nav.Link href = "/contacts">Cpntacts</Nav.Link>
                                <Nav.Link href = "/blog">Blog</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <div class = "p-2">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                />
                                </div>
                                <div class = "p-2"><Button variant="outline-info">Search</Button></div>
                            </Form>
                    </Navbar.Collapse> 
                    </Container> 
                </Navbar> 
            </Container>
        )
    }
}