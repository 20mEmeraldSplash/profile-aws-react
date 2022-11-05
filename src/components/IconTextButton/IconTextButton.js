import React, { Component } from 'react';

export default class IconTextButton extends Component {

    render() {
        return(
            <div className='Icon-Text-Button'>
                <img 
                src={this.props.imageSource} 
                className="Rotate-img"  
                alt="logo" 
                width={this.props.imageWidth} 
                height={this.props.imageHeight}
                />

            </div>
            
            
        )
    }
}