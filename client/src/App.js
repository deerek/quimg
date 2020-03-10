import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import Create from './create/Create';
import CreateStyle from './create/CreateStyle';

import './app.css';

class App extends Component {
    
    render() {
        return (
            <div className="app-wrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/create/style" component={CreateStyle} />
                </Switch>
            </div>
        )
    }
}

export default App;