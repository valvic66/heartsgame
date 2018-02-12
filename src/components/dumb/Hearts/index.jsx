import React from 'react';
import _ from 'lodash';
import './index.css';

const Hearts = ({ randomNoStars, showText }) => {
    const style = {
        // backgroundColor: 'yellow'
    }
    return (
        <div style={style} className="stars col-3">
            {_.range(randomNoStars).map((star, i) => <div key={i}><i className="fa fa-heart"></i></div>)}
            {randomNoStars !== 1 ? `Love you ${randomNoStars} times` : `Love me ${randomNoStars} time !`}
            {/* {showText && <div>True</div>} */}
        </div>
    );
}

export default Hearts