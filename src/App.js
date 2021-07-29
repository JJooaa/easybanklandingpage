import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Intro from "./Sections/Intro/Intro";
import WhyEasyBank from "./Sections/WhyEasyBank/WhyEasyBank";

const App = () => {
    return (
        <div className="App">
            <NavigationBar />
            <Intro />
            <WhyEasyBank />
        </div>
    );
};

export default App;
