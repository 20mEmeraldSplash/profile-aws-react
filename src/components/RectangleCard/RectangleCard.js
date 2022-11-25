import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./RectangleCard.css";


export default class RectangleCard extends Component{
    render(){
        const rows = [];
        if(this.props.cardStyle === "linkedCard"){
            rows.push(
                <div 
                    style={{
                        backgroundImage: `url(${this.props.backgroundImage})`,
                        height: "100%", 
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className="LinkedCard-Container"
                >
                    <Link to={this.props.linkedPage} style={{ textDecoration: 'none' }} className="LinkedCard-Text">
                        <div className="LinkedCard-Text">
                            {this.props.titleContent}
                        </div>
                    </Link>  
            </div>
            );
        }
        else if(this.props.cardStyle === "solidCard"){
            if(this.props.linkedAddress !== ""){
                rows.push(
                    <a href={this.props.linkedAddress}  
                        className='SolidCard-Container' 
                        style={{
                            backgroundColor: this.props.backgroundColor,
                            color: this.props.textColor,
                            fontSize: this.props.fontSize
                        }}
                    >
                        {this.props.titleContent}
                        
                    </a>
                )
            }else{
                rows.push(
                    <div 
                        className='SolidCard-Container' 
                        style={{
                            backgroundColor: this.props.backgroundColor,
                            color: this.props.textColor,
                            fontSize: this.props.fontSize
                        }}
                    >
                        {this.props.titleContent}
                    </div>
                );
            }
        }
        else{
            rows.push(<div></div>);
        }
        return(rows);
        
    }
}