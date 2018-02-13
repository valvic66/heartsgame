import React from 'react';
import './index.css';

const Answer = ({ selectedNumbers, unselectNumbers }) => {
    const style = {
        // backgroundColor: 'blue'
    }

    const getCSS = () => {
        if (selectedNumbers.length === 0) {
            return "answerwrapper col-12 col-sm-12 hasHeight"
        } else {
            return "answerwrapper col-12 col-sm-12"
        }
    }

    return (
        <div style={style} className={getCSS()}>
            {selectedNumbers.map((number, index) => 
                <span key={index} onClick={() => unselectNumbers(number)}>{number}</span>
            )}
        </div>
    );
}

export default Answer