import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Message from "./components/Message";
import ColorMessage from "./components/ColorMessage";
import style from "./components/styles.module.css";

export default function App() {
    return (
        <div className={style.mainContainer}>
            <h1>Routing Practice</h1>
            <Link to={"/home"} className="btn btn-secondary">
                Home
            </Link>
            <br />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:value" element={<Message />} />
                <Route
                    path="/:message/:messageColor/:bgColor"
                    element={<ColorMessage />}
                />
            </Routes>
        </div>
    );
}
