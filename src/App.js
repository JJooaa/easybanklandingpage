import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Intro from "./Sections/Intro/Intro";

const App = () => {
    return (
        <div className="App">
            <NavigationBar />
            <Intro />
        </div>
    );
};

export default App;
