import React, { Component } from 'react';

import './create.css';

function QuimgPreview(props) {
    
    const quoteStyles = {
        color: `${props.fontColor}`,
        fontFamily: `${props.fontName}`,
        fontSize: `${props.fontSize + 'pt'}`,
        padding: '50px'
    }

    return (
        <div className="outer-outer">
        <div className="quimg-preview-outer">
            <div style={{backgroundImage: `url("${props.image}")`}} className={`quimg-preview-wrapper ${props.textPosition}`}>
                <h2 style={quoteStyles}>
                    {props.quote}
                </h2>
            </div>
        </div>
        </div>
    )
}


export default QuimgPreview;