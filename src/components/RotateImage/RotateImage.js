import React, { Component } from 'react';
import './RotateImage.css';

export default class RotateImage extends Component {

    render() {
        return(
            <img 
                src={this.props.imageSource} 
                className="Rotate-img"  
                alt="I can rotate, can you?" 
                width={this.props.imageWidth} 
                height={this.props.imageHeight}
            />
        )
    }
}