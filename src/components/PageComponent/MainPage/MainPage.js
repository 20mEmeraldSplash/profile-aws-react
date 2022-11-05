import React from "react";
import logo from '../../../img/icon/sos_icon.png';
import smile_icon from '../../../img/icon/HeaderBarIcons/smile.png';

import RotateImage from '../../RotateImage/RotateImage';
import IconTextButton from "../../IconTextButton/IconTextButton";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage">
      <header className="App-header">
        <RotateImage 
          imageSource = {logo}
          imageWidth = "150px"
          imageHeight = "150px"
        />
      </header>
      <IconTextButton 
          buttonIcon = {smile_icon}
          buttonText = "WHO AM I?"
          linkedPage = "/profile"
      />
    </div>
  );
}
