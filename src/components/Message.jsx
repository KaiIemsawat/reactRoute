import React from "react";
import { useParams } from "react-router-dom";

export default function Message(props) {
    const { value } = useParams();

    return (
        <div>
            {isNaN(value) ? (
                <p>The word is : {value}</p>
            ) : (
                <p>The number is : {value}</p>
            )}
        </div>
    );
}
