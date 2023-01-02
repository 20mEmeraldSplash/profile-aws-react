import React from "react";
import { Link } from "react-router-dom";
import "./MagazineMainPage.css";
import Logo from "../../../../img/MainPage/logo.png";

export default function MagazineMainPage(){
    return(
        <article className="MainPageContainer">
            <section className="nameSection">
                <Link to='/profile'>
                    <div className="nameText">汪辰辰</div> 
                </Link>
                <div> &nbsp;/&nbsp; </div>
                <Link to='/profile' >
                    <div className="nameText">CHENCHEN WANG</div> 
                </Link>
            </section>
            <section>
                <img
                    src={Logo}
                    className="logoSection"
                    alt="logo"
                ></img>
            </section>
            <section className="menuSection">
                <Link to='/menu'>
                    <div className="menuEnglish">目&nbsp; &nbsp; 录</div> 
                </Link>
                <Link to='/menu'>
                    <div className="menuChinese">MENU</div> 
                </Link>
            </section>
        </article>
    )
}
