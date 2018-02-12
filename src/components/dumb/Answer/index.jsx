import React from 'react';
import './index.css';

const Answer = ({ selectedNumbers, unselectNumbers }) => {
    const style = {
        // backgroundColor: 'blue'
    }
    return (
        <div style={style} className="col-3">
            {selectedNumbers.map((number, index) => 
                <span key={index} onClick={() => unselectNumbers(number)}>{number}</span>
            )}
        </div>
    );
}

export default Answer