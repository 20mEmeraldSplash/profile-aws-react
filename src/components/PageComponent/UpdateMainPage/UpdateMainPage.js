import React from "react";
import "./UpdateMainPage.css";

import RectangleCard from "../../RectangleCard/RectangleCard";
import dio from "../../../img/backgroundImages/dio.png";
import download_icon from "../../../img/icon/ButtonIcons/download.png";
import yichen_resume from "../../../data/yichen-resume.pdf";

export default function UpdateMainPage(){
    return(
        <div className="MainPageContainer">
            <div className="MainPageContainer-Left">
                <div className="WebTitleContainer">
                    <RectangleCard 
                        cardStyle = "solidCard"
                        titleContent = "SECRET BASE ~ YICHEN"
                        backgroundColor = "#1D7E8F"
                        textColor = "#F0A274"
                        fontSize = "100px"
                        linkedAddress = ""
                    />
                </div>
                <div className="Left-Row2">
                    <div className="Left-Row2-Col1"></div>
                    <div className="Left-Row2-Col2"></div>
                    <div className="Who-Am-I-Card">
                        <RectangleCard 
                            cardStyle = "actionCard"
                            linkedPage = "/profile"
                            backgroundImage = {dio}
                            titleContent = "WHO AM I?"
                            backgroundImageSize = "100%"
                        />
                    </div>
                </div>
                <div className="Left-Row3">
                    <div className="Left-Row3-Col1"></div>
                    <div className="Left-Row3-Col2">
                        <div className="Left-Row3-Col2-Row1">
                            <div className="DownloadButton">
                                <a href={yichen_resume} download="YichenResume">
                                    <RectangleCard 
                                    cardStyle = "actionCard"
                                    backgroundImage = {download_icon}
                                    backgroundImageSize = "80%"
                                    />
                                </a>
                                
                            </div>
                            <div className="Left-Row3-Col2-Row1-Col2">
                                <RectangleCard 
                                cardStyle = "solidCard"
                                titleContent = "MY CV"
                                textColor = "#FAE69F"
                                fontSize = "80px"
                                linkedAddress = ""
                                />
                            </div>
                        </div>
                        <div className="GitHubLinkContainer">
                            <RectangleCard 
                                cardStyle = "solidCard"
                                titleContent = "MY GITHUB LINK: https://github.com/20mEmeraldSplash"
                                textColor = "#FAE69F"
                                fontSize = "25px"
                                linkedAddress = "https://github.com/20mEmeraldSplash"
                            />
                        </div>
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