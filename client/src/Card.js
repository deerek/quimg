import React from 'react'


// import Quimg from './Quimg';

import './app.css';
var ReactFitText = require('react-fittext');
// import { TextFit } from 'react-textfit';

function Card(props) {

    const quimgStyle = {
        backgroundImage: `url("${props.backgroundImg}")`,
        fontFamily: `${props.fontName}`,
        color: `${props.fontColor}`,
        fontSize: `${props.fontSize + 'pt'}`,
        lineHeight: '1.15',
       // width: 'auto',
        //height: {quimgAspect},
        textShadow: '0px 10px 20px #0d001849'
    }

    return (
        <li className="card-wrap">
            <div className="quimg-aspect-container">
                <ReactFitText>
                    <h2 style={quimgStyle} className={`quimg-card ${props.textPosition}`}>{props.quote}</h2>
                </ReactFitText>
            </div>
            <div className="card-info">
                <h2>{props.title}</h2>
            </div>
        </li>
    )
};
  
export default Card;

{/* <ReactFitText style={quimgStyle} className={`quimg-card ${props.textPosition}`}>
                    {props.quote}
                </ReactFitText> */}