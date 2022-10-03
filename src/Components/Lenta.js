import React, { Component } from "react";
import { FormControl, Container, Form, Button, Image, Accordion, Row, Col, Table} from "react-bootstrap";
import pic1 from './Pics/cplus.png';
import pic2 from './Pics/python.png';
import pic3 from './Pics/java.png';
import pic4 from './Pics/logisim.png';
import boot from './Pics/boot.png';

export default class Projects extends Component {
    render() {
        return (
            <div>
            <Container className = "align-self-center pt-4">
                <Row className = "justify-content-md-center">
                    <Col xs sm={8}>
                        <h2 className="texth2" >
                            <div className="piccc">
                                <img
                                    src={boot}
                                    className='img-fluid rounded-circle'
                                    height="54"
                                    width="54"
                                    alt = ""
                                />
                            </div>
                            Blog
                        </h2>
                    </Col>
                </Row>
            </Container>
                
                <Table className="table table-borderless">
                    <thead>
                        <tr className="helloh2">
                            <th><h4 className="textAdaptive">#</h4></th>
                            <th><h4 className="textAdaptive">Language</h4></th>
                            <th><h4 className="textAdaptive">Project name</h4></th>
                            <th><h4 className="textAdaptive">Date</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">1</h5></td>
                            <td><h5 className="textAdaptive">Python</h5></td>
                            <td><h5 className="textAdaptive">Lab1</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">2</h5></td>
                            <td><h5 className="textAdaptive">Python</h5></td>
                            <td><h5 className="textAdaptive">Lab2</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">3</h5></td>
                            <td><h5 className="textAdaptive">C++</h5></td>
                            <td><h5 className="textAdaptive">Lab1</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">4</h5></td>
                            <td><h5 className="textAdaptive">C++</h5></td>
                            <td><h5 className="textAdaptive">Lab2</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">5</h5></td>
                            <td><h5 className="textAdaptive">Java</h5></td>
                            <td><h5 className="textAdaptive">Lab1</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                        <tr className="helloh2">
                            <td><h5 className="textAdaptive">6</h5></td>
                            <td><h5 className="textAdaptive">Java</h5></td>
                            <td><h5 className="textAdaptive">Lab2</h5></td>
                            <td><h5 className="textAdaptive">01.01.2001</h5></td>
                        </tr>
                    </tbody>
                </Table>
                </div> 
            
        )
    }
}