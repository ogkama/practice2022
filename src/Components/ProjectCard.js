import React, { Component } from "react";
import { FormControl, Container, Button, Col, Row, Card, Placeholder} from "react-bootstrap";
import pic4 from './Pics/stop.jpg';

export default class ProjectCard extends Component {
    render() {
        return (
                
                    <Card xs sm={8}style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={this.props.pImg} width="25" height="240"/>
                        <Card.Body>
                            <Card.Title >{this.props.pTitle}</Card.Title>
                            <Card.Text>
                                {this.props.pText}
                            </Card.Text>
                            <Button variant="primary" href = "https://github.com/ogkama/">Visit project</Button>
                        </Card.Body>
                    </Card>
               
        )
    }
}
ProjectCard.defaultProps = {pImg: pic4, pTitle: "None", pText: "None None None None"}