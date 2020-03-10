import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';


// COMPONENTS
import HeaderCreate from './HeaderCreate';
import UnsplashCreate from './unsplash/UnsplashCreate';
import CreateStyle from './CreateStyle';

import './create.css';

class Create extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            quote: '',
            textPosition: 'middle',
            fontName: 'Playfair Display',
            fontColor: '',
            backgroundImg: '',
            fontSize: '',
            tags: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleQuote = this.handleQuote.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handlePosition = this.handlePosition.bind(this);
        this.handleFont = this.handleFont.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleFontSize = this.handleFontSize.bind(this);
    }

    //handle backgroundChange
    handleClick(url) {
        this.setState({ backgroundImg: url });
        //var unsplashList = document.getElementById("unsplash-list")
        var unsplashImages = document.getElementsByClassName("unsplash-img")
        for (var i = 0; i < unsplashImages.length; i++) {
            unsplashImages[i].addEventListener("click", function() {
              this.className += " active";
            });
          }
    }

    handleQuote(input) {
        this.setState({quote: input.target.value});
    }

    handleTitle(input) {
        this.setState({title: input.target.value});
    }

    handleTags(input) {
        this.setState({tags: input.target.value});
        // function for splitting by , and pushing to array
    }
    handleColor(input) {
        this.setState({fontColor: input.target.value});
    }
    handlePosition(option) {
        this.setState({textPosition: option.target.value});
    }
    handleFont(option) {
        this.setState({fontName: option.target.value});
    }
    handleFontSize(input) {
        this.setState({fontSize: input.target.value})
    }

    handleCreate(e) {
        e.preventDefault();
        axios.post('/quimges', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .then(()=> this.props.history.push("/"))
            .catch(err => {
                console.log('Error happened during fetching!', err);
            })
            
    }

    render() {
        return (
            <div className="create-wrapper">
                <HeaderCreate className="header-create" />
                <Switch>
                    <Route exact path="/create" render={(props) => {
                        return <UnsplashCreate handleClick={this.handleClick}{...props} />
                    }} />
                    <Route path="/create/style" render={(props) => {
                        return <CreateStyle handleCreate={this.handleCreate} handleFontSize={this.handleFontSize} handleQuote={this.handleQuote} handleTitle={this.handleTitle} handleTags={this.handleTags} handlePosition={this.handlePosition} handleFont={this.handleFont} handleColor={this.handleColor}{...this.state}{...props} />
                    }} />
                   
                </Switch>
            </div>
        )
    }
}

export default Create;