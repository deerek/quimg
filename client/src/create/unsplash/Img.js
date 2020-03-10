import React from 'react';

// STYLES
import './unsplash.css';


// FIGURE OUT HOW TO CLICK AN IMAGE AND SELECT THE URL FOR THE BG IMAGE
// DOUBLE CLICK SELECTS PHOTO AND ADVANCES TO NEXT SCREEN


const Img = props => (
//
//
////////// Add some sort of onClick event handler that updates state of CREATE container by passing the URL of the selected photo
//
//
  /////// Callback function for onClick so the onClick happens after an event, not on page load
  <li className="img-wrap" onClick={() => props.handleClick(props.urls.regular)}>
    <img className="unsplash-img" src={props.urls.small} alt=""/>
  </li>
);

export default Img;