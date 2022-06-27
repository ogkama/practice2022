import React, { Component } from "react";
import { FormControl, Container, Form, Button, Image, Accordion, Row, Col} from "react-bootstrap";
import pic1 from './Pics/cplus.png';
import pic2 from './Pics/python.png';
import pic3 from './Pics/java.png';
import pic4 from './Pics/logisim.png';

export default class Projects extends Component {
    render() {
        return (
            <Container className = "align-self-center pt-4">
                <Row className = "justify-content-md-center">
                    <Col xs sm={8}>
                        <h2>Blog</h2>
                    </Col>
                </Row>
                <Row xs className = "justify-content-md-center">
                <Accordion className = "col-lg-8">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>C++ projects</Accordion.Header>
                            <Accordion.Body >
                                    <Row className = "justify-content-md-center">
                                        <Col>
                                            <img
                                                src={pic1}
                                                height="128"
                                                width="116"
                                                className=""
                                                 alt=""
                                             />
                                        </Col>
                                        <Col  lg="9">
                                            <h4>С++ projects list</h4>
                                            <p>Lab1 <br/>Lab2 <br/>Lab3<br/>Lab4</p>
                                        </Col>
                                    </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Python projects</Accordion.Header>
                            <Accordion.Body>
                            <Row className = "justify-content-md-center">
                                        <Col>
                                            <img
                                                src={pic2}
                                                height="122"
                                                width="122"
                                                className=""
                                                 alt=""
                                             />
                                        </Col>
                                        <Col  lg="9">
                                            <h4>Python projects list</h4>
                                            <p>Lab1 <br/>Lab2 <br/>Lab3<br/>Lab4</p>
                                        </Col>
                                    </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Java projects</Accordion.Header>
                            <Accordion.Body>
                            <Row className = "justify-content-md-center">
                                        <Col>
                                            <img
                                                src={pic3}
                                                height="143"
                                                width="95"
                                                className=""
                                                 alt=""
                                             />
                                        </Col>
                                        <Col  lg="9">
                                            <h4>Java projects list</h4>
                                            <p>Lab1 <br/>Lab2 <br/>Lab3<br/>Lab4</p>
                                        </Col>
                                    </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Logisim</Accordion.Header>
                            <Accordion.Body>
                            <Row className = "justify-content-md-center">
                                        <Col>
                                            <img
                                                src={pic4}
                                                height="122"
                                                width="122"
                                                className=""
                                                 alt=""
                                             />
                                        </Col>
                                        <Col  lg="9">
                                            <h4>Logisim projects list</h4>
                                            <p>Lab1 <br/>Lab2 <br/>Lab3<br/>Lab4</p>
                                        </Col>
                                    </Row>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Row>
            </Container>
        )
    }
}