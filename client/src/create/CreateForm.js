import React, { Component } from 'react'

import './create.css'

function CreateForm(props) {
        return (
            <div className="create-form-wrapper">
                <form className="create-form" action="">
                    <h4>Quote</h4>
                    <textarea  onChange={props.handleQuote} name="quote" rows="3" placeholder="Enter Quote" type="text"/>
                    <h4>Title</h4>
                    <input onChange={props.handleTitle} name="title" placeholder="Enter Title" type="text"/>
                    <h4>Tags</h4>
                    <input onChange={props.handleTags} name="tags" placeholder="Enter Tags" type="text"/>
                    <h4>Color</h4>
                    <input onChange={props.handleColor} name="color" placeholder="Enter Color" type="text"/>
                    <h4>Alignment</h4>
                    <select onChange={props.handlePosition} name="textPosition">
                        <option value="middle">Middle</option>
                        <option value="topLeft">Top Left</option>
                        <option value="topRight">Top Right</option>
                        <option value="bottomRight">Bottom Right</option>
                        <option value="bottomLeft">Bottom Left</option>
                    </select>
                    <h4>Font Style</h4>
                    <select onChange={props.handleFont} name="fontName">
                        <option value="Playfair Display">Playfair Display</option>
                        <option value="Kirang Haerang">Kirang Haerang</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Roboto Mono">Roboto Mono</option>
                        <option value="Oswald">Oswald</option>
                        <option value="Bitter">Bitter</option>
                    </select>
                    <h4>Select Font Size</h4>
                    <input className="style-slider" onChange={props.handleFontSize} type="range" min="18" max="144" />
                    <button onClick={props.handleCreate}>Create</button>
                </form>
                
            </div>
        )
    }

export default CreateForm;
