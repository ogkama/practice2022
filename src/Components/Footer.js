import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <div className="texth2">
            <Container className = "col-lg-7">
                <footer className="page-footer pt-4 ">
                    <hr/>
                    <div className="text-center py-3 "><h2 className="textAdaptive">© 2022 Kamil</h2></div>
                </footer>
            </Container>
            </div>
        )
    }
}