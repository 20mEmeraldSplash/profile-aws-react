import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./IconTextButton.css";

export default class IconTextButton extends Component {

    render() {
        return(
            <div className='IconTextButtonContainer'>
                <img 
                src={this.props.buttonIcon} 
                alt="btn-icon" 
                width="25px" 
                height="25px"
                />
                <div className='IconTextButtonDivider' />
                <Link to={this.props.linkedPage} style={{ textDecoration: 'none' }}>
                    <div className='IconTextButton-Text'> {this.props.buttonText} </div>
                </Link>
                
            </div>
            
            
        )
    }
}