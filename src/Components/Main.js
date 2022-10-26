import React, { Component } from "react";
import { Container, Button, Col, Row} from "react-bootstrap";
import pic1 from './Pics/kama.jpg';
import palm from './Pics/palm.png';
import cap from './Pics/cap.png';

export default class Main extends Component {
    render() {
        return (
            <div className="proj1">
            <Container className = "col-lg-11" >
                <Row className = "justify-content-md-center">
                    <Col xl="5" lg="5" md = "13" sm = "10" xs="12">
                    
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
                        <p className="blog">I’m a second-year student at Moscow Technical University of Communications and Informatics. At the moment I'm passing a summer internship, namely creating a one-page with JS-React, CSS, HTML. Along with this during my studies performed work on Python, C++, Java and other programming languages and get acquainted with different development environments such as Multisim, Logisim, MathLab, AutoCAD, etc.</p>
                        <Button className="btnA" href = "https://t.me/etokomel" variant="outline-secondary" size="md">Telegram</Button>{' '}
                        <Button className="btnA" href = "https://github.com/ogkama/" variant="outline-secondary" size="md">GitHub</Button>{' '}
                        <Button className="btnA" href = "https://discord.gg/b4Zz5WyGnP" variant="outline-secondary" size="md">Discord</Button>{' '}
                    </Col>
                    <Col  sm={3}>
                        <div className="imgMe">
                        <img
                            src={pic1}
                            className='img-fluid rounded-circle'
                            background = "rgba(0, 0, 0, .5)"
                            height="300"
                            width="300"
                            alt = ""
                        />
                        </div>
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