import React, { useState, useEffect } from 'react';
import { Grid, Modal, Box, Button, Input } from '@mui/material';

export default function AddProduct(props) {
  const { open, onClose } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState();

  const onSubmit = () => {
    console.log('from submitted');
  };

  return (
    <div>
      <Modal open={open} onClose={onClose} aria-labelledby='modal-add-product' aria-describedby='modal-add-product'>
        <Box sx={style.box}>
          <form action='' style={style.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h2 style={style.title}>Ajouter un nouveau produit</h2>
              </Grid>
            </Grid>

            <Grid container spacing={2} style={style.row}>
              <Grid item xs={4}>
                <label style={style.label}>Nom produit *</label>
              </Grid>
              <Grid item xs={8}>
                <input type='text' style={style.input} value={name} onChange={event => setName(event.target.value)} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={style.row}>
              <Grid item xs={4}>
                <label style={style.label}>Description</label>
              </Grid>
              <Grid item xs={8}>
                <input type='text' style={style.input} value={description} onChange={event => setDescription(event.target.value)} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={style.row}>
              <Grid item xs={4}>
                <label style={style.label}>Prix unitaire *</label>
              </Grid>
              <Grid item xs={8}>
                <input type='number' style={style.input} value={price} onChange={event => setPrice(event.target.value)} />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={style.row}>
              <Grid item xs={4}>
                <label style={style.label}>Image *</label>
              </Grid>
              <Grid item xs={8}>
                <label htmlFor='contained-button-file'>
                  <Input
                    style={style.fileInput}
                    accept='image/*'
                    id='contained-button-file'
                    multiple
                    type='file'
                    onChange={event => setImages(event.target.value)}
                  />
                  <Button style={style.fileInputBtn} component='span'></Button>
                  <div>
                    <button id='upload_widget'>Upload Files</button>
                  </div>
                  <div>
                    <img id='uploaded' />
                  </div>
                </label>
              </Grid>
            </Grid>

            <Grid container spacing={10} style={style.row}>
              <Grid item xs={6}>
                <Button variant='contained' size='large' style={style.btnDiscard} onClick={onClose}>
                  Annuler
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' size='large' style={style.btnSubmit} onClick={onSubmit}>
                  Valider
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 20px',
    p: 4,
    outline: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'roboto',
  },
  title: {
    marginTop: '70px',
    textAlign: 'center',
    color: '#00643C',
    fontFamily: 'Roboto !important',
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  input: {
    border: '2.5px solid #e4e8ef',
    borderRadius: '30px',
    height: '50px',
    width: '350px',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '18px',
  },
  fileInput: {
    display: 'none',
  },
  fileInputBtn: {
    border: '2.5px solid #e4e8ef',
    borderRadius: '30px',
    height: '50px',
    width: '350px',
    fontSize: '15px',
  },
  label: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '50px',
    letterSpacing: '0.2px',
    color: '#000000',
  },
  btnSubmit: {
    borderRadius: '7px',
    height: '55px',
    width: '170px',
    backgroundColor: '#00643C',
    float: 'right',
  },
  btnDiscard: {
    borderRadius: '7px',
    height: '55px',
    width: '170px',
    backgroundColor: '#C32530',
    float: 'left',
  },
  row: {
    marginTop: '20px',
  },
};
