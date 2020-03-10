import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// STYLES
import './create.css';

// const createHeaderStyles = {
//     height: '5vh',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '0 50px'
// }

class HeaderCreate extends Component {
    render() {
        return (
            <div className="header-create-wrapper" >
                <Link to="/">
                    <h4>Cancel</h4>
                </Link>
                <h3>New Quimg</h3>
                <Link to="/create/style">
                    <h4>Next</h4>
                </Link>
            </div>
        )
    }
}

export default HeaderCreate;

