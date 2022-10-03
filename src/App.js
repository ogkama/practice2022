import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Lenta from "./Components/Lenta";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProjectCard from "./Components/ProjectCard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import pic1 from './Components/Pics/calc.png';
import pic2 from './Components/Pics/exp.png';
import pic3 from './Components/Pics/elevator.png';
import pic4 from './Components/Pics/stop.jpg';

import beach from './Components/Pics/beach2.mp4';

function App() {
    const arrayCplus = [
        { pImg: {pic1}, pTitle: "Calculator", pText: "AAAAAAAAAA", pLink: "https://github.com/ogkama/"},
        { pImg: {pic2}, pTitle: "Exponent", pText: "AAAAAAAAAA", pLink: "https://github.com/ogkama/"},
        { pImg: {pic3}, pTitle: "Elevator", pText: "AAAAAAAAAA", pLink: "https://github.com/ogkama/"},
        { pImg: {pic4}, pTitle: "None", pText: "AAAAAAAAAA", pLink: "https://github.com/ogkama/"},
      ];
    return (
        <div className="main">
        <div className="overlay"></div>
        <video src={beach} autoPlay loop muted playsinline webkit-playinginline/>
        <div className="content">
            <Header/>
            <div className="cont">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plusplus' element={[ 
                        <Container className = "col-lg-7" >
                            <div className="d-flex justify-content-around">
                                <ProjectCard pImg = {pic1} pTitle = "Calculator" pText = "C++, C++, C++, C++"/>, 
                                <ProjectCard pImg = {pic2} pTitle = "Exponent" pText = "C++, C++, C++, C++"/>, 
                                <ProjectCard pImg = {pic3} pTitle = "Elevator" pText = "C++, C++, C++, C++"/>, 
                                <ProjectCard />, 
                            </div>
                        </Container>
                    ]}/>
                    <Route path='/python' element={[ 
                        <Container className = "col-lg-7" >
                            <div className="d-flex justify-content-around">
                                <ProjectCard />, 
                                <ProjectCard />, 
                                <ProjectCard />, 
                                <ProjectCard />, 
                            </div>
                        </Container>
                    ]}/>
                    <Route path='/java' element={[ 
                        <Container className = "col-lg-7" >
                            <div className="d-flex justify-content-around">
                                <ProjectCard />, 
                                <ProjectCard />, 
                                <ProjectCard />, 
                                <ProjectCard />, 
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
