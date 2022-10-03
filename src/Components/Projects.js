import React, { Component } from "react";
import { Container, Col, Row, Carousel} from "react-bootstrap";
import pic1 from './Pics/my1.png';
import pic2 from './Pics/my2.png';
import pic3 from './Pics/my3.png';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <Row className = "justify-content-md-center">
                <Col lg = "8">
                <Carousel variant = "dark" className="projtext">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                            //width={300} 
                            //height={400}
                        />
                        <Carousel.Caption>
                            <h1>C++</h1>
                            <h5>Object-oriented model of work and interaction of the house residents with the elevator</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1>Python</h1>
                            <h5>Drawing fractals</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1>Logisim</h1>
                            <h5>Processor model</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
                </Row>
            </Container>
        )
    }
}