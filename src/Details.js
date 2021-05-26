import React, { useState, UseRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function Details(props) {
    const allInfo = props.pokeinfo[0];
    const abilities = allInfo.abilities;
    const stats = allInfo.stats;
    const moves = allInfo.moves;

    
    return (

        < Modal show={true} >
            <Modal.Header> {allInfo.name} Pokedex number {allInfo.id}</Modal.Header>
            <Modal.Body>

            <div>

            </div>
            <div>


            </div>
            <div>
              Abilities
              {abilities.map((data) => <p> {data.ability.name} </p>)}
            </div>

            <div>
              Base stats
              {stats.map((data) => <p>{data.stat.name} {data.base_stat} </p>)}
            </div>



            </Modal.Body>
            <Modal.Footer><button onClick={props.hideModal}> Close</button></Modal.Footer>

        </Modal >





    )
}
