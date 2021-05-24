import React, { useState, UseRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function Details(props) {
    const allInfo = props.pokeinfo[0];
    const abilities = allInfo.abilities;
    const stats = allInfo.stats;
    const moves = allInfo.moves;
    console.log(stats);
    console.log(allInfo);
    console.log(abilities);



    abilities.forEach(function(abi) {
    console.log(abi.ability.name)

  });

    stats.forEach(function(sta) {
      console.log(sta.stat.name + " " + sta.base_stat);


  });

    moves.forEach(function(moves) {


  });



    return (

        < Modal show={true} >
            <Modal.Header> Tjena</Modal.Header>
            <Modal.Body>

            <div>
              {allInfo.name}
            </div>
            <div>
              Pokedex number {allInfo.id}

            </div>
            <div>
              {abilities.map((data) => <p> {data.ability.name} </p>)}
            </div>



            </Modal.Body>
            <Modal.Footer><button onClick={props.hideModal}> Close</button></Modal.Footer>

        </Modal >





    )
}
