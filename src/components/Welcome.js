import React from 'react';
import ReactDom from "react-dom";
import "./styles/Welcome.css";
function Welcome(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {props.userName}</h1>
                <p>Vamos a hacer ejercicio.</p>
            </div>
        </div>
    )
}

export default Welcome