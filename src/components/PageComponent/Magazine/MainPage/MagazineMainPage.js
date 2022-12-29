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
            
        </article>
    )
}
