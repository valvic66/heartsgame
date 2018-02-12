import React from 'react';
import './index.css';

const Button = (props) => {
    let button;
    switch (props.isAnswerCorrect) {
        case true: 
            button = 
            <button className="btn btn-success" onClick={props.onAnswerTrue}><div><i className="fa fa-check-circle"></i></div>
            </button>
            break;
        case false: 
            button = 
            <button className="btn btn-danger" ><div><i className="fa fa-exclamation-triangle"></i></div></button>
            break;
        default: 
            button = 
            <button onClick={props.analyseAnswer} disabled={props.selectedNumbers.length === 0}>=</button>
    }


    return (
        <div className="button">
            {/* <button className={props.isAnswerCorrect ? "green": "red"} >=</button> */}
            {button}
        </div>    
    );
}

export default Button