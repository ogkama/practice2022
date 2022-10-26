import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProjectCard from "./Components/ProjectCard";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container, Col, Row} from "react-bootstrap";
import pic1 from './Components/Pics/calc.png';
import pic2 from './Components/Pics/exp.png';
import pic3 from './Components/Pics/elevator.png';
import pic4 from './Components/Pics/pyth1.png';
import pic5 from './Components/Pics/pyth2.png';
import pic6 from './Components/Pics/cpls.png';
import beach from './Components/Pics/beach2.mp4';

function App() {
    return (
        <div className="main">
        <div className="overlay"></div>
        <video pleload = "auto" autoPlay loop muted playsinline>
            <source src = {beach} type = "video/mp4; codecs = h264"/>
        </video>
        <div className="content">
            <Header/>
            <div className="cont">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plusplus' element={[ 
                        <Container className = "col-lg-7" >
                            <div className="d-flex justify-content-around">
                            <Row className = "justify-content-md-center">
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic1} pTitle = "Calculator" pText = "C++, C++, C++, C++"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic2} pTitle = "Exponent" pText = "C++, C++, C++, C++"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12"> 
                                    <ProjectCard pImg = {pic3} pTitle = "Elevator" pText = "C++, C++, C++, C++"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic6} pTitle = "C plus plus" pText = "C++, C++, C++, C++"/>
                                </Col>
                            </Row>
                            </div>
                        </Container>
                    ]}/>
                    <Route path='/python' element={[ 
                        <Container className = "col-lg-7" >
                            <div className="d-flex justify-content-around">
                            <Row className = "justify-content-md-center">
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic4} pTitle = "vstavkaSort" pText = "python, python, python, python"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic5} pTitle = "viborSort" pText = "python, python, python, python"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic4} pTitle = "bubbleSort" pText = "python, python, python, python"/>
                                </Col>
                                <Col xl="3" sm = "6" xs = "12">
                                    <ProjectCard pImg = {pic5} pTitle = "fastSOrt" pText = "python, python, python, python"/>
                                </Col>
                            </Row>
                            </div>
                        </Container>
                    ]}/>
                </Routes>
            </Router>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default App;
