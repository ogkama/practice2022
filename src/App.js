import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ProjectCard from "./Components/ProjectCard";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container} from "react-bootstrap";
import pic1 from './Components/Pics/calc.png';
import pic2 from './Components/Pics/exp.png';
import pic3 from './Components/Pics/elevator.png';

import beach from './Components/Pics/beach2.mp4';

function App() {
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
                </Routes>
            </Router>
            </div>
            <Footer/>
        </div>
    </div>
    );
}

export default App;
