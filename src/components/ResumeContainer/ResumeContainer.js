import React from "react";
import chesspattern from "../../img/boarderImages/chess-pattern.png";
import heart from "../../img/boarderImages/heart.png";
import chimitan from "../../img/icon/chimitan.jpeg";
import './ResumeContainer.css';

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
            <img src={chimitan} alt="profile" height="100%" />
            <img src={chimitan} alt="profile" height="100%" />
        </div>
            
      </div>
    </div>
  );
}
