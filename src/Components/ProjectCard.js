import React, { Component } from "react";
import { Button, Card} from "react-bootstrap";
import pic4 from './Pics/stop.jpg';

export default class ProjectCard extends Component {
    render() {
        return (
                
                    <Card xs sm={8} className = "plholder" style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={this.props.pImg} width="25" height="240" className="projc"/>
                        <Card.Body>
                            <Card.Title className="pltext">{this.props.pTitle}</Card.Title>
                            <Card.Text className = "pltext">
                                {this.props.pText}
                            </Card.Text>
                            <Button variant="outline-secondary"  href = "https://github.com/ogkama/">Visit project</Button>
                        </Card.Body>
                    </Card>
               
        )
    }
}
ProjectCard.defaultProps = {pImg: pic4, pTitle: "None", pText: "None None None None"}