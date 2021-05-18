import React, { useState, UseRef, useEffect} from 'react';
import axios from 'axios';
export default function Search() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setpokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
        const pokemonList = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url);
            pokemonList.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setpokemonData(pokemonList);
            console.log(res);
        } catch (e) {
          console.log(e); 
        }
    };

    const changeCase = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const submit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    

    return (
        <div>
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
                            
                        </div>
                <button type="button" class="btn btn-primary">Add to team</button>
                <button type="button" class="btn btn-primary">Details</button>



                        
                    </div>
                )
            })}
        </div>
    )
}