import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.css";

export default function Home(props) {
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [bgColor, setBgColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${value}`);
    };

    const colorHandle = (e) => {
        e.preventDefault();
        navigate(`/${message}/${messageColor}/${bgColor}`);
    };

    return (
        <div className={style.mainContainer}>
            <h2>Welcome</h2>
            <p>Please input information below for your message</p>
            <form onSubmit={submitHandler} className={style.form}>
                <label>your input : </label>
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className={`form-control ${style.input}`}
                />
                <button className="btn btn-primary">Submit</button>
            </form>
            <br />
            <p>Or</p>
            <p>Input information here for fancier message</p>
            <form onSubmit={colorHandle} className={style.form}>
                <label>message : </label>
                <input
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`form-control ${style.input}`}
                />
                <label>message color : </label>
                <input
                    type="text"
                    onChange={(e) => setMessageColor(e.target.value)}
                    value={messageColor}
                    className={`form-control ${style.input}`}
                />
                <label>background color : </label>
                <input
                    type="text"
                    onChange={(e) => setBgColor(e.target.value)}
                    value={bgColor}
                    className={`form-control ${style.input}`}
                />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
