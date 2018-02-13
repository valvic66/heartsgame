import React from 'react';
import './index.css';

const Button = (props) => {
    let button;
    switch (props.isAnswerCorrect) {
        case true: 
            button = 
            <button className="btn btn-success btn-sm" onClick={props.onAnswerTrue}><div><i className="fa fa-check-circle"></i></div>
            </button>
            break;
        case false: 
            button = 
            <button className="btn btn-danger btn-sm" ><div><i className="fa fa-exclamation-triangle"></i></div></button>
            break;
        default: 
            button = 
            <button className="btn btn-primary btn-sm" onClick={props.analyseAnswer} disabled={props.selectedNumbers.length === 0}>=</button>
    }


    return (
        <div className="answerbutton">
            {/* <button className={props.isAnswerCorrect ? "green": "red"} >=</button> */}
            {button}
        </div>    
    );
}

export default Button