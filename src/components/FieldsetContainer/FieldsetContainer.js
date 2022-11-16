import React from "react";
import './FieldsetContainer.css';


/** 
 * This component can add icons around the legend, 
 * and display Content row by row, 
 * adding a bullet at the first line.
 */
export default function FieldsetContainer(props) {
    const rows = [];
    for (let i=0; i<props.contentData.length; i++){
        rows.push(
            <div className="Customize-Content">
                {props.contentData[i].content}
            </div>
        );
    }
    return (
        <div> 
            <fieldset className="Customize-Fieldset">
                <legend className="Customize-Legend"> 
                    <img src={props.legendIcon} alt="happy" height="100%"/>
                    <div className="Customize-Legend-Divider"></div>
                    { props.legendTitle } 
                    <div className="Customize-Legend-Divider"></div>
                    <img src={props.legendIcon} alt="happy" height="100%"/>
                </legend>
                {rows}
            </fieldset>
        </div>
    );
};