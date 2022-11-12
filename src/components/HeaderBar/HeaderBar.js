import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBar.css";

import home from '../../img/icon/HeaderBarIcons/home.png';
import happy from '../../img/icon/HeaderBarIcons/happy.png';

export default function HeaderBar(){

  return(
        <div className="header-bar">
            <ul className="header-bar-links">
                <Link to='/'>
                    <img 
                        src={home}
                        width = '25px'
                        height = '25px'
                        alt="home-icon"
                        className="header-bar-icons"
                    />
                </Link>
                <Link to='/profile'>
                    <img 
                        src={happy}
                        width = '25px'
                        height = '25px'
                        alt="happy-icon"
                    />
                </Link>
            </ul>
        </div>
  );

}