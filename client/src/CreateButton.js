import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
// import './components.css';

function CreateButton() {
    return (
        <Link to="/create">
            <div className="create-button-wrapper">
                <div className="create-button">
                    <h1>New Quimg +</h1>
                </div>
            </div>
        </Link>
    )
}

export default CreateButton;
