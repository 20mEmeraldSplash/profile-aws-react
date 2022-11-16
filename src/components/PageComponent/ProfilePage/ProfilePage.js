import React from "react";
import chesspattern from "../../../img/boarderImages/chess-pattern.png";
import heart from "../../../img/boarderImages/heart.png";
import happy_icon from '../../../img/icon/HeaderBarIcons/smile.png';

import ResumeContainer from "../../ResumeContainer/ResumeContainer";
import FieldsetContainer from "../../FieldsetContainer/FieldsetContainer";
import './ProfilePage.css';

export default function ProfilePage() {
  const ResumeData = require('../../../data/resume.json');
  console.log(ResumeData.Briefs[1].content);
  return (
    <div className="ProfilePage">
      <div className="ResumeCol">
        <ResumeContainer />
        <FieldsetContainer 
          legendTitle = {"BRIEF"}
          contentData = {ResumeData.Briefs}
          legendIcon = {happy_icon}
        />
        
      </div>
      
    </div>
  );
}
