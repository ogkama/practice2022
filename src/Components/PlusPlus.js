import React, { Component } from "react";
import { FormControl, Container, Button, Col, Row, Card, Placeholder} from "react-bootstrap";
import pic1 from './Pics/calc.png';
import pic2 from './Pics/exp.png';
import pic3 from './Pics/elevator.png';
import pic4 from './Pics/stop.jpg';

export default class PlusPlus extends Component {
    render() {
        return (
            <Container className = "col-lg-7" >
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pic1} width="25" height="300"/>
                        <Card.Body>
                            <Card.Title >Calculator</Card.Title>
                            <Card.Text>
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAA.
                            </Card.Text>
                            <Button variant="primary" href = "https://github.com/ogkama/">Visit project</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pic2} width="25" height="300"/>
                        <Card.Body>
                            <Card.Title >Exponent</Card.Title>
                            <Card.Text>
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAA.
                            </Card.Text>
                            <Button variant="primary">Visit project</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pic3} width="25" height="300"/>
                        <Card.Body>
                            <Card.Title >Elevator</Card.Title>
                            <Card.Text>
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAA.
                            </Card.Text>
                            <Button variant="primary" href = "https://github.com/ogkama/">Visit project</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={pic4} width="25" height="300"/>
                        <Card.Body>
                            <Card.Title >Empty project</Card.Title>
                            <Card.Text>
                                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                                AAAAAAAAAAAAAAAAAAAAA.
                            </Card.Text>
                            <Button variant="primary" href = "https://github.com/ogkama/">Visit project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        )
    }
}