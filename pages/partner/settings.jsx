import React, { useState } from 'react';
import st from '/styles/partnerSettings.module.scss';
import SideBar from '@components/sideBar/sideBar.component';
import { Container, Box, Grid, Button, Select, OutlinedInput, Chip, MenuItem, InputLabel, FormControl } from '@mui/material';
import InputA from '@components/input/inputA.component';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  { id: 0, name: 'Salés' },
  { id: 1, name: 'Sucrés' },
  { id: 2, name: 'Mixte' },
];

export default function PartnerSettings() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onCategoriesChange = event => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <body>
      <div className={st.spread}>
        <SideBar activePage={4} />

        <Container className={st.parentDiv}>
          <h1 style={style.heading}>Informations personnelles : </h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <label style={style.label}>Email *</label>
                <InputA type='email' value={email} onChange={event => setEmail(event.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <label style={style.label}>Numéro tel *</label>
                <InputA type='tel' value={phone} onChange={event => setPhone(event.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <label style={style.label}>Mot de passe *</label>
                <InputA type='password' value={password} onChange={event => setPassword(event.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <label style={style.label}>Nouveau mot de passe</label>
                <InputA type='password' value={newPassword} onChange={event => setNewPassword(event.target.value)} />
              </Grid>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button variant='contained' size='large' style={style.button}>
                  Sauvegarder
                </Button>
              </Grid>
            </Grid>
          </Box>
          <h1 style={style.heading}>Informations shop : </h1>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xs={9}>
                <span style={style.requestSpan}>Demande de changement du nom du shop : </span>
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' size='large' style={style.button}>
                  ENVOYER DEMANDE
                </Button>
              </Grid>
              <Grid item xs={9}>
                <FormControl sx={{ width: '100%' }}>
                  <InputLabel id='demo-multiple-chip-label'>Catégories</InputLabel>
                  <Select
                    labelId='demo-multiple-chip-label'
                    id='demo-multiple-chip'
                    multiple
                    value={selectedCategories}
                    style={style.categoriesDropdown}
                    onChange={onCategoriesChange}
                    input={<OutlinedInput id='select-multiple-chip' label='Catégories' />}
                    renderValue={selected => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map(value => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {categories.map(c => (
                      <MenuItem key={c.id} value={c.name}>
                        {c.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' size='large' style={style.button}>
                  APPROUVER
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </body>
  );
}

const style = {
  heading: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '42px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#00643C',
  },
  label: {
    display: 'inline-block',
    width: '100%',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0.2px',
    color: '#000000',
    marginBottom: '10px',
  },
  button: {
    borderRadius: '7px',
    height: '55px',
    width: '200px',
    backgroundColor: '#00643C',
    float: 'right',
  },
  requestSpan: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '60px',
    color: '#000000',
  },
  categoriesDropdown: {
    outline: 'none',
    borderRadius: '17px',
  },
};
