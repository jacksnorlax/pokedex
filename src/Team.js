import React from 'react';
import { Modal } from 'react-bootstrap';
import Search from './Search'


export default function Team(props) {

  var myTeam = localStorage.getItem("myTeam");
  var pokeList = props.poke()
  console.log(pokeList)
  for (var i = 0; i < pokeList.length; i++) {
    console.log(pokeList[i][0].name);
  }

  return (

    <div>
      < Modal show={true} >
        <Modal.Header> Tjena</Modal.Header>
        <Modal.Body>

          <div>


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
