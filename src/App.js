import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Intro from "./Sections/Intro/Intro";
import WhyEasyBank from "./Sections/WhyEasyBank/WhyEasyBank";
import LatestArticles from "./Sections/LatestArticles/LatestArticles";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <NavigationBar />
            <Intro />
            <WhyEasyBank />
            <LatestArticles />
            <Footer />
        </div>
    );
};

export default App;
