import React, { useState, UseRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Search from './Search'


export default function Team(props) {

  // Använd useState();
  const [pokemons, setPokemons] = useState(props.poke());


  function deleteFromTeam(index) {
    pokemons.splice(index, 1);
    setPokemons([...pokemons]);

    var updatedList = pokemons;
    localStorage.setItem("myTeam", JSON.stringify(updatedList));


  }

  return (

    <div>
      < Modal show={true} >
        <Modal.Header> <h2>Your team:</h2></Modal.Header>
        <Modal.Body>

          <div>
            {pokemons.map((data, index) => <p> <h4> {data[0].name} </h4>
              <img src={data[0].sprites["front_default"]} />
              <button onClick={() => deleteFromTeam(index)} className="btn btn-sm btn-danger float-end">x</button> </p>)
            }



          </div>

          <div>


          </div>
          <div>

          </div>

          <div>

          </div>



        </Modal.Body>
        <Modal.Footer><button onClick={props.hideModal}> Close</button></Modal.Footer>

      </Modal >


    </div>

  )
}
