import React from "react";
import { useParams } from "react-router-dom";

export default function ColorMessage(props) {
    const { message, messageColor, bgColor } = useParams();
    const st = {
        color: `${messageColor}`,
        backgroundColor: `${bgColor}`,
    };
    return (
        <div>
            <h2 style={st}>The colorful word is : {message}</h2>
        </div>
    );
}
