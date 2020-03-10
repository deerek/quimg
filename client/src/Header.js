import React from 'react';

// COMPONENTS
import CreateButton from './CreateButton';

// STYLES
import './app.css';

function Header() {
    return (
        <div className="header-container">
            <img src={require('./images/quimg-logo.png')} />
            <CreateButton className="create-button"/>
        </div>
    )
}

export default Header;
