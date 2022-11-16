import React from "react";
import chesspattern from "../../img/boarderImages/chess-pattern.png";
import heart from "../../img/boarderImages/heart.png";
import chimitan from "../../img/icon/chimitan.jpeg";
import gyro from "../../img/icon/Gyro.jpg";
import './ResumeContainer.css';

import { Card, CardBody } from 'reactstrap';

export default function ResumeContainer() {
  return (
    <div>
      <div className="ResumeContainer">
        <div className="ChessBoardPattern">
          <img src={chesspattern} alt="chess pattern" height="100%"/>
          <div className="ThreeIconPattern">
            <img src={heart} alt="heart" height="100%"/>
            <img src={heart} alt="heart" height="100%"/>
            <img src={heart} alt="heart" height="100%"/>
          </div>
        </div>

        <div className="ProfileImageRow">
            <img src={gyro} alt="profile" className="ProfileImage"/>
            <Card
                style={
                    {
                        width: '60%',
                        height: '100%',
                        border: '1px solid black'
                    }
                }
                className="ProfileInformationCard"
            >
                <CardBody className="ProfileInformationCardBody">
                    <div className="ProfileInformationCardHeader"></div>
                    <div className="ProfileInformationCardContent">
                        <div>
                        <div className="ProfileInformationCardBodyRow">
                            <div className="ProfileInformationCardBodyRow-Title"> USER NAME</div>
                            <div className="ProfileInformationCardBodyRow-Content"> 
                                <input type="text" placeholder="YICHEN WANG" disabled></input>
                            </div>
                        </div>
                        <div className="ProfileInformationCardBodyRow">
                            <div className="ProfileInformationCardBodyRow-Title"> PASS WORD</div>
                            <div className="ProfileInformationCardBodyRow-Content"> 
                                <input type="text" placeholder="yichenwaa@gmail.com" disabled></input>
                            </div>
                        </div>
                        <div className="ProfileInformationCardBodyRow">
                            <button type="button" class="btn btn-outline-dark ProfileInformationCard-ContactButton">
                                <span>Contact Me</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    
                </CardBody>
            </Card>
        </div>
            
      </div>
    </div>
  );
}
