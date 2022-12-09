import React from "react";
import "./UpdateMainPage.css";

import MainPageTitle from "./MainPageTitle/MainPageTitle";
import RectangleCard from "../../RectangleCard/RectangleCard";
import dio from "../../../img/backgroundImages/dio.png";
import download_icon from "../../../img/icon/ButtonIcons/download.png";
import yichen_resume from "../../../data/yichen-resume.pdf";

export default function UpdateMainPage(){
    return(
        <div className="MainPageContainer">
            <div className="MainPageContainer-Left">
                <div className="LeftTop">
                    <MainPageTitle />
                </div>
                <div className="LeftMid">
                    <div className="LeftMid-Left"></div>
                    <div className="LeftMid-Mid"></div>
                    <div className="LeftMid-Right">
                        <RectangleCard 
                            cardStyle = "actionCard"
                            linkedPage = "/profile"
                            backgroundImage = {dio}
                            titleContent = "WHO AM I?"
                            backgroundImageSize = "100%"
                        />
                    </div>
                </div>
                <div className="LeftBottom">
                    <div className="LeftBottom-Left"></div>
                    <div className="LeftBottom-Right">
                        <div className="LeftBottom-Right-Top">
                            <div className="LeftBottom-Right-Top-Left">
                                <a href={yichen_resume} download="YichenResume">
                                    <RectangleCard 
                                    cardStyle = "actionCard"
                                    backgroundImage = {download_icon}
                                    backgroundImageSize = "80%"
                                    />
                                </a>
                                
                            </div>
                            <div className="LeftBottom-Right-Top-Right">
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
                <div className="RightTop">
                    <div className="RightTop-Col"></div>
                    <div className="RightTop-Col"></div>
                    <div className="RightTop-Col"></div>
                </div>
                <div className="RightBottom">
                    <div className="RightBottom-Left">
                        <div className="RightBottom-Left-Top"></div>
                        <div className="RightBottom-Left-Middle">
                            <div className="RightBottom-Left-Middle-Left"></div>
                            <div className="RightBottom-Left-Middle-Right"></div>
                        </div>
                        <div className="RightBottom-Left-Bottom"></div>
                    </div>
                    <div className="RightBottom-Right"></div>
                </div>
            </div>
        </div>
    );
}