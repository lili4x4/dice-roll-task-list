import React, { useState } from 'react';
import './App.css';
import { DiceRoll } from './components/DiceRoll';
import { Modal } from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const showModalFunc = () => {
    setShowModal(true);
  };

  const hideModalFunc = () => {
    setShowModal(false);
  };

  const modal = () => {
    if (showModal) {
      return  (<Modal show={showModal} handleClose={hideModalFunc} header="Instructions"/>)
    }
  }

  return (
    <div className="App">
      <h1 className="header">Dice Roll Task List</h1>
      <p>Use chance to determine which task to do</p>
      <button type="button" className="marginBottom bold button buttonPrimary"onClick={showModalFunc}>
        Instructions
      </button>
      <div>
        {modal()}
      </div>
      <DiceRoll />
    </div>
  );
}

export default App;
