import React from 'react';

const ButtonStars = (props) => {
    // working also () => props.generateStars()
    return (
        <div className="buttonStars">
            <button 
                className="btn btn-primary btn-sm" 
                disabled={props.refreshLimit === 0} 
                onClick={props.generateStars}>
                    <div><i className="fa fa-sync"></i>{` ${props.refreshLimit}`}</div>
            </button>
        </div>
    );    
}

export default ButtonStars