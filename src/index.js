import ReactDOM from "react-dom";
import Content from "./components/Content";
import MobileFooter from "./components/MobileFooter";
import Navbar from "./components/Navbar"


function App() {
    return (
        <div>
            <Navbar />
            <Content />
            <MobileFooter />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));