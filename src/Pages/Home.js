import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Projects from "../Components/Projects";
import Lenta from "../Components/Lenta";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div>
            <Main /> 
            <Projects />
            <Lenta />
        </div>
    );
}

export default Home;