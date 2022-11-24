import React from "react";
import "./UpdateMainPage.css";

export default function UpdateMainPage(){
    return(
        <div className="MainPageContainer">
            <div className="MainPageContainer-Left">
                <div className="Left-Row1">
                </div>
                <div className="Left-Row2">
                    <div className="Left-Row2-Col1"></div>
                    <div className="Left-Row2-Col2"></div>
                    <div className="Left-Row2-Col3"></div>
                </div>
                <div className="Left-Row3">
                    <div className="Left-Row3-Col1"></div>
                    <div className="Left-Row3-Col2">
                        <div className="Left-Row3-Col2-Row1">
                            <div className="Left-Row3-Col2-Row1-Col1"></div>
                            <div className="Left-Row3-Col2-Row1-Col2"></div>
                        </div>
                        <div className="Left-Row3-Col2-Row2"></div>
                    </div>

                </div>
            </div>

            <div className="MainPageContainer-Right">
                <div className="Right-Row1">
                    <div className="Right-Row1-Col"></div>
                    <div className="Right-Row1-Col"></div>
                    <div className="Right-Row1-Col"></div>
                </div>
                <div className="Right-Row2">
                    <div className="Right-Row2-Col1">
                        <div className="Right-Row2-Col1-Row13"></div>
                        <div className="Right-Row2-Col1-Row2">
                            <div className="Right-Row2-Col1-Row2-Col1"></div>
                            <div className="Right-Row2-Col1-Row2-Col2"></div>
                        </div>
                        <div className="Right-Row2-Col1-Row13"></div>
                    </div>
                    <div className="Right-Row2-Col2"></div>
                </div>
            </div>
        </div>
    );
}