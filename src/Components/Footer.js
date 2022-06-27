import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <Container className = "col-lg-7">
                <footer className="page-footer pt-4">
                    <hr/>
                    <div className="text-center py-3">© 2022 Kamil</div>
                </footer>
            </Container>
        )
    }
}