import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Lenta from "./Components/Lenta";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Projects />
            <Lenta />
            <Footer />
        </div>
    );
}

export default App;
