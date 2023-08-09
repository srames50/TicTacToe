import React, { useState } from "react";
import "./Modal.css"

export default function Modal({ winner, onPlayAgain }) {

    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handlePlayAgain = () => {
        toggleModal();
        onPlayAgain();
    }

    return(
    <div> 

    {modal && (
        <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
              <div className="modal-content">
                <h1>{winner === "It's a Tie!" ? winner : `The winner is '${winner}' !!!`}</h1>
                <button className='play-again' onClick={handlePlayAgain}>Play Again?</button>
              </div>
          
        </div>
    )}
       
     </div>
    );
}