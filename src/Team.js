import React from 'react';
import { Modal } from 'react-bootstrap';
import Search from './Search'


export default function Team(props) {


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
