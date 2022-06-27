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
import PlusPlus from "./Components/PlusPlus";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/plusplus' element={<PlusPlus/>}/>

                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
