import React from "react";
import { Link } from "react-router-dom";
import "./MagazineMenuPage.css";

import PokemonPage from "../PokemonPage/PokemonPage";

export default function MagazineMenuPage(){
    return(
        <article className="MenuPageContainer">
            <section className="BriefSection">

            </section>
            <section className="MenuSection">
                <h5 className="titleContent">CONTENTS</h5>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <section className="menuLine">
                    <div>Chapter I</div>
                    <div>Chapter I</div>
                </section>
                <section className="menuLine">
                    <div>Chapter II</div>
                    <Link to='/pokemon' >Pokemon Menu</Link>
                </section>
            </section>
        </article>
    )
}