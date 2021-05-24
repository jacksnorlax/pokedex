import React, { useState, UseRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function Details(props, p) {
  const allInfo = props.pokeinfo[0];
  const abilities = allInfo.abilities;
  const stats = allInfo.stats;
  const moves = allInfo.moves;
  const [showModal, setShowModal] = useState(true);
  console.log(stats);
  console.log(allInfo);
  console.log(abilities);



  abilities.forEach(function (abi) {
    console.log(abi.ability.name)

  });

  stats.forEach(function (sta) {
    console.log(sta.stat.name + " " + sta.base_stat);


  });

  moves.forEach(function (moves) {


  });

  return (

    < Modal show={true} >
      <Modal.Header> Tjena</Modal.Header>
      <Modal.Body>

<<<<<<< HEAD
    return (
=======
        <div>
          {props.pokeinfo[0].name}
        </div>
        <div>
          Pokedex number {props.pokeinfo[0].id}
        </div>
        <div>

        </div>



      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary" onClick={props.hideModal}>  Close</button>
      </Modal.Footer>
>>>>>>> 5e6ba3e729a030da0fe33b88bbfb24e72941e694

    </Modal >

<<<<<<< HEAD
            <div>
              {allInfo.name}
            </div>
            <div>
              Pokedex number {allInfo.id}

            </div>
            <div>
              {abilities.map((data) => <p> {data.ability.name} </p>)}
            </div>
=======

>>>>>>> 5e6ba3e729a030da0fe33b88bbfb24e72941e694



  )
}
