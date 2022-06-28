import React, { Component } from "react";
import { FormControl, Container, Button, Col, Row} from "react-bootstrap";
import {createUseStyles} from 'react-jss'
import pic1 from './Pics/fresko1.gif';

export default class Main extends Component {
    render() {
        return (
            <Container className = "col-lg-11" >
                <Row className = "justify-content-md-center">
                    <Col  lg="5">
                        <h2>Hi, I’m Kamil!</h2>
                        <p>I’m a second-year student at Moscow Technical University of Communications and Informatics. At the moment I'm passing a summer internship, namely creating a one-page with JS-React, CSS, HTML. Along with this during my studies performed work on python, C++, Java and other programming languages b and get acquainted with different development environments such as Multisim, Logisim, MathLab, AutoCAD, etc.</p>
                        <Button href = "https://github.com/ogkama/" variant="outline-info" size="lg">Telegram</Button>{' '}
                        <Button href = "https://github.com/ogkama/" variant="outline-info" size="lg">GitHub</Button>{' '}
                        <Button href = "https://github.com/ogkama/" variant="outline-info" size="lg">Discord</Button>{' '}
                    </Col>
                    <Col  sm={3}>
                        <img
                            src={pic1}
                            className='img-fluid rounded-circle'
                            height="300"
                            width="300"
                            alt = ""
                        />
                    </Col>
                </Row>
                <Row className = "justify-content-md-center">
                    <Col  lg="8">
                        <h2>Project examples</h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}