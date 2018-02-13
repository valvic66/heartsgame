import React from 'react';
import _ from 'lodash';
import './index.css';

const Hearts = ({ randomNoStars, showText }) => {
    const style = {
        // backgroundColor: 'yellow'
    }
    return (
        <div style={style} className="heartscontainer col-12 col-sm-12">
            <div className="heartscontainer__hearts">
                {_.range(randomNoStars).map((star, i) => <div key={i}><i className="fa fa-heart"></i></div>)}
            </div>    
            <div className="heartscontainer__text">
                {randomNoStars !== 1 ? `Love you ${randomNoStars} times` : `Love me ${randomNoStars} time !`}
                {/* {showText && <div>True</div>} */}
            </div>    
        </div>
    );
}

export default Hearts