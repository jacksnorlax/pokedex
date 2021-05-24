import React, { useState, UseRef, useEffect } from 'react';
import axios from 'axios';
import Details from './Details'
import Team from './Team'

export default function Search() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonData, setpokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [addTeam, setTeam] = useState(false);

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


    const myTeam = (e) => {

        setTeam(true);
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
        console.log("125125135wfsef")
    }




    return (
        <div>
            {showModal && <Details pokeinfo={pokemonData} hideModal={hideDetails} />}
            {addTeam && <Team pokeinfo={pokemonData} />}
            <form onSubmit={submit}>
                <label>
                    <input type="text"
                        onChange={changeCase}
                        placeholder="Enter Pokemon"
                    />
                </label>
            </form>
            {pokemonData.map((data) => {
                return (
                    <div>
                        <img src={data.sprites["front_default"]} />
                        <div>
                            <div> </div>
                            <div>
                                <div>Type</div>
                                <div>{pokemonType}</div>
                            </div>
                            <div>
                                <div>Height</div>
                                <div>{" "}{Math.round(data.height * 3.9)}</div>
                            </div>
                            <div>
                                <div>Weight</div>
                                <div>{" "}{Math.round(data.weight / 4.3)} lbs</div>
                            </div>
                            <div>
                                <div>konstig</div>
                                <div>{data.abilities.length}</div>
                            </div>




                        </div>
                        <button type="button" className="btn btn-primary" onClick={myTeam}>Add to team</button>
                        <button type="button" className="btn btn-primary" onClick={showDetails}>Details</button>
                        <button type="button" className="btn btn-primary" onClick={getPokemon}>Show team</button>

                    </div>
                )
            })}
        </div>
    )
}
