import React from "react";
import logo from '../../../img/icon/sos_icon.png';
import RotateImage from '../../RotateImage/RotateImage';
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
        <h1>Hello from V2</h1>
        
      </header>
    </div>
  );
}
