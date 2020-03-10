import React, { Component } from 'react';
import axios from 'axios';

// STYLES
import './unsplash.css';

export default class UnsplashSearch extends Component {
    
    constructor() {
        super();
        this.state = {
            searchText: ''
        };
    }
     
	onSearchChange = e => {
        this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
            <div className="unsplash-search-wrapper">
                {/* <h3>Select an image</h3> */}
                <form className="unsplash-search" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.onSearchChange}
                        ref={input => (this.query = input)}
                        name="search"
                    />
                    <button type="submit" id="submit" className="search-button">Search</button>
                </form>
            </div>
		);
	}
}