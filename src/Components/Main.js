import React, { Component } from "react";
import { FormControl, Container, Button, Col, Row} from "react-bootstrap";
import {createUseStyles} from 'react-jss'
import pic1 from './Pics/kama.jpg';
import palm from './Pics/palm.png';
import cap from './Pics/cap.png';

export default class Main extends Component {
    render() {
        return (
            <div className="proj1">
            <Container className = "col-lg-11" >
                <Row className = "justify-content-md-center">
                    <Col  lg="5">
                    
                        <h2 className="helloh2" >
                            <div className="piccc">
                                <img
                                    src={palm}
                                    className='img-fluid rounded-circle'
                                    height="54"
                                    width="54"
                                    alt = ""
                                />
                            </div>
                            Hi, I’m Kamil!
                        </h2>
                        <p className="blog">I’m a second-year student at Moscow Technical University of Communications and Informatics. At the moment I'm passing a summer internship, namely creating a one-page with JS-React, CSS, HTML. Along with this during my studies performed work on python, C++, Java and other programming languages b and get acquainted with different development environments such as Multisim, Logisim, MathLab, AutoCAD, etc.</p>
                        <Button className="btnA" href = "https://github.com/ogkama/" variant="outline-secondary" size="lg">Telegram</Button>{' '}
                        <Button className="btnA" href = "https://github.com/ogkama/" variant="outline-secondary" size="lg">GitHub</Button>{' '}
                        <Button className="btnA" href = "https://github.com/ogkama/" variant="outline-secondary" size="lg">Discord</Button>{' '}
                    </Col>
                    <Col  sm={3}>
                        
                        <img
                            src={pic1}
                            className='img-fluid rounded-circle'
                            background = "rgba(0, 0, 0, .5)"
                            height="300"
                            width="300"
                            alt = ""
                        />
                    </Col>
                </Row>
                <Row className = "justify-content-md-center">
                    <Col  lg="8">
                        <h2 className="texth2" >
                            <div className="piccc">
                                <img
                                    src={cap}
                                    className='img-fluid rounded-circle'
                                    height="54"
                                    width="54"
                                    alt = ""
                                />
                            </div>
                            Project examples
                        </h2>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}