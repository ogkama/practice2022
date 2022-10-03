import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <div className="texth2">
            <Container className = "col-lg-7">
                <footer className="page-footer pt-4 " >
                    <hr size = "5"/>
                    <div className="text-center py-3 "><h3 className="textAdaptive">© 2022 Kamil</h3></div>
                </footer>
            </Container>
            </div>
        )
    }
}