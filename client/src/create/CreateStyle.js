import React, { Component } from 'react'

////////// COMPONENTS
// import HeaderCreate from './HeaderCreate';
import QuimgPreview from './QuimgPreview';
import CreateForm from './CreateForm';

// STYLES
import './create.css';

class CreateStyle extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="create-style-wrapper">
                    <QuimgPreview image={this.props.backgroundImg} fontSize={this.props.fontSize} quote={this.props.quote} fontName={this.props.fontName} textPosition={this.props.textPosition} fontColor={this.props.fontColor} />
                    <CreateForm handleCreate={this.props.handleCreate} handleFontSize={this.props.handleFontSize} handleColor={this.props.handleColor} handleQuote={this.props.handleQuote} handleTitle={this.props.handleTitle} handleTags={this.props.handleTags} handlePosition={this.props.handlePosition} handleFont={this.props.handleFont} />
                </div>
            </div>
        )
    }
}

export default CreateStyle;