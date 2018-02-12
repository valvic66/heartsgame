import React from 'react';
import _ from 'lodash';
import './index.css';

const Numbers = ({ numbers, selectNumbers }) => {
    const style = {
        // backgroundColor: 'red'
    }
    return (
        <div style={style} className="col-3">
            {numbers.map((number, index) => 
                <span key={index} onClick={() => selectNumbers(number)}>{number}</span>
            )}
        </div>
    );    
}

export default Numbers