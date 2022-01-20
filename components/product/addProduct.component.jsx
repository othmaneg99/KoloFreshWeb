import React, { useState, useEffect } from 'react';
import { Grid, Modal, Box } from '@mui/material';

export default function AddProduct(props) {
  const { open, onClose } = props;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 410,
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 20px',
    p: 4,
    outline: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '30px',
  };

  return (
    <div>
      <Modal open={open} onClose={onClose} aria-labelledby='modal-app-product' aria-describedby='modal-app-product'>
        <Box sx={style}>
          <form action='' className='signUpForm'>
            <h2 className='connect'>SE CONNECTER</h2>
            <input className='input' type='email' name='' id='' placeholder='exemple@exemple.ma' />
            <div className='password'>
              <input className='input' type='password' name='' id='' placeholder='Mot de passe' />
              <a href=''>
                <p className='motDePasse'>Mot de passe oublié ?</p>
              </a>
            </div>
            <div className='checkboxContainer'>
              <input type='checkbox' id='' name='conditions' value='Bike' />
              <label htmlFor='conditions'>
                En utilisant ce formulaire, vous acceptez le stockage et le traitement de vos données par ce site Web.
              </label>
            </div>

            <button className='btn btnConnect'>SE CONNECTER</button>
            <button className='btn btnCreateAccount'>CREER UN COMPTE</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
