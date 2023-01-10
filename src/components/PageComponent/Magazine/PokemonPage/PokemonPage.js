import React from "react";
import { Link } from "react-router-dom";
import { useTable } from 'react-table'
import PokemonTable from "./PokemonTable/PokemonTable";
import "./PokemonPage.css";


export default function PokemonPage(){
    return(
        <article className="PokemonPageContainer">
            <PokemonTable />
        </article>
    )
}