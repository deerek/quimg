import React from 'react';
import TextFit from 'react-textfit';

import './app.css';

function Quimg(props) {
    
    const divStyle = {
        width: "100vw",
        height: "500px",
        backgroundImage: `url(${props.backgroundImg})`,
        backgroundSize: "cover",
        padding: "10%"
    }
    
    return (
        <div className="quimg-container" style={divStyle}>
            <TextFit min="25" max="500" className="quimg-quote">
                {props.quote}
            </TextFit>
        </div>
    )
}

export default Quimg;