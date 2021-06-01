import React, { useState, UseRef, useEffect } from 'react';
import axios from 'axios';
import Details from './Details'
import Team from './Team'
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Search() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setpokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showTeam, setShowTeam] = useState(false);


    const getPokemon = async () => {
        const pokemonList = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url);
            pokemonList.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setpokemonData(pokemonList);
        } catch (e) {
            console.log(e);
        }
    };
    const showDetails = (e) => {

        setShowModal(true);
    }
    const show = (e) => {

        setShowTeam(true);
    }

    function loadPokemons() {
        var myTeam = localStorage.getItem("myTeam");


        if (myTeam === null) {

            localStorage.setItem("myTeam", JSON.stringify([]));



            return [];
        } else {

            return JSON.parse(myTeam);
        }
    }


    const myTeam = (e) => {
        const teamPokemons = loadPokemons();
        teamPokemons.push(pokemonData);
        localStorage.setItem("myTeam", JSON.stringify(teamPokemons));
        alert(pokemonData[0].name + " been added to your team")


    }


    const changeCase = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const submit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    const hideDetails = (e) => {

        setShowModal(false);

    }
    const hideTeam = (e) => {

        setShowTeam(false);

    }




    return (
        <div>
            {showModal && <Details pokeinfo={pokemonData} hideModal={hideDetails} />}
            {showTeam && <Team hideModal={hideTeam} poke={loadPokemons} />}



            <form onSubmit={submit}>
                <label>
                    <input type="text"
                        onChange={changeCase}
                        placeholder="Enter Pokemon"
                    />
                </label>
            </form>
            <button type="button" className="btn btn-primary" onClick={show}>Show team</button>
            {pokemonData.map((data) => {
                return (
                    <div>
                        <img src={data.sprites["front_default"]} />
                        <div>
                            <div> </div>
                            <div className="divTableRow">
                                <div className="divTableCell">Type: </div>
                                <div className="divTableCell">{pokemonType}</div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell">Height: </div>
                                <div className="divTableCell">{" "}{Math.round(data.height * 3.9 * 2.54)} Inches</div>
                            </div>
                            <div className="divTableRow">
                                <div className="divTableCell">Weight: </div>
                                <div className="divTableCell">{" "}{Math.round(data.weight / 4.3)} lbs</div>
                            </div>





                        </div>
                        <button type="button" className="btn btn-primary" onClick={myTeam}>Add to team</button>
                        <button type="button" className="btn btn-primary" onClick={showDetails}>Details</button>

                    </div>
                )
            })}
        </div>
    )
}
