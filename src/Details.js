import React, { useState, UseRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';


export default function Details(props) {
    const allInfo = props.pokeinfo[0];
    const abilities = allInfo.abilities;
    const stats = allInfo.stats;
    const moves = allInfo.moves;

    
    return (

        < Modal show={true} >
            <Modal.Header> <h2 class="modal-title w-100">{allInfo.name}</h2></Modal.Header>
            <Modal.Body>

            <div>

            </div>
            <div>


            </div>
            <div className="ModalDetailText">
              <h4>Abilities:</h4> 
              {abilities.map((data) => <p> {data.ability.name} </p>)}
            </div>

            <div className="ModalDetailText">
              <h4>Base stats:</h4> 
              {stats.map((data) => <p>{data.stat.name} {data.base_stat} </p>)}
            </div>



            </Modal.Body>
            <Modal.Footer><button className="btn btn-primary" onClick={props.hideModal}> Close</button></Modal.Footer>

        </Modal >





    )
}
