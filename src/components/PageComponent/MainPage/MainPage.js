import React from "react";
import logo from '../../../img/icon/sos_icon.png';

import chat_icon from '../../../img/icon/ButtonIcons/chat.png';
import cloudy_icon from '../../../img/icon/ButtonIcons/cloudy.png';
import payment_icon from '../../../img/icon/ButtonIcons/payment.png';
import smile_icon from '../../../img/icon/ButtonIcons/smile.png';
import web_icon from '../../../img/icon/ButtonIcons/web.png';

import RotateImage from '../../RotateImage/RotateImage';
import IconTextButton from "../../IconTextButton/IconTextButton";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage">
        <div class="column-left">
          <IconTextButton 
            buttonIcon = {smile_icon}
            buttonText = "WHO AM I?"
            linkedPage = "/profile"
            iconLeftSide = {true}
          />
          <div className="row-right">
            <IconTextButton 
              buttonIcon = {chat_icon}
              buttonText = "CONTACT ME"
              linkedPage = "/"
              iconLeftSide = {true}
            />
          </div>
          
          <IconTextButton 
            buttonIcon = {payment_icon}
            buttonText = "要吃饭不磕碜"
            linkedPage = "/"
            iconLeftSide = {true}
          />
        </div>

        <div class="column-center">
          <RotateImage 
            imageSource = {logo}
            imageWidth = "150px"
            imageHeight = "150px"
          />
        </div>

        <div class="column-right">
          <div className="row-right">
            <IconTextButton 
              buttonIcon = {web_icon}
              buttonText = "MY PROJECTS"
              linkedPage = "/"
              iconLeftSide = {false}
            />
          </div>
          <IconTextButton 
            buttonIcon = {cloudy_icon}
            buttonText = "也没想好"
            linkedPage = "/"
            iconLeftSide = {false}
          />
          <div className="row-right">
            <IconTextButton 
              buttonIcon = {smile_icon}
              buttonText = "我也没想好"
              linkedPage = "/"
              iconLeftSide = {false}
            />
          </div>
        </div>
      
      
    </div>
  );
}
