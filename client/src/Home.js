import React, { Component } from 'react';
import axios from 'axios';

import Feed from './Feed';
import Header from './Header';

import './app.css'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            quimges: []
        }
    }
  
    ////////// This will be made into a redux ACTION
    componentDidMount() {
        axios
            .get('/quimges')
            .then(data => {
                this.setState({ quimges: data.data });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="feed-wrapper">
                    <Feed data={this.state.quimges} />
                </div>
            </div>
        )
    }
}

export default Home;