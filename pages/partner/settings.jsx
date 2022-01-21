import React, { useState } from 'react';
import st from '/styles/partnerSettings.module.scss';
import SideBar from '@components/sideBar/sideBar.component';
import { Container, Box, Grid, Button, Select, OutlinedInput, Chip, MenuItem, InputLabel, FormControl } from '@mui/material';
import InputA from '@components/input/inputA.component';
import { useRouter } from 'next/router';
import { API_URL } from 'config';
import Request from '../../Request/request';

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
let request = new Request({});

export default function PartnerSettings() {
  const [email, setEmail] = useState('nesrinebhk41@gmail.com');
  const [phone, setPhone] = useState('+212629282716');
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [user, setUser] = useState({ user: {} });
  const [error, setError] = useState('');
  console.log({ email: email, phone: phone, password: password, newPassword: newPassword, selectedCategories: selectedCategories });
  const onCategoriesChange = event => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  async function envoiDemandeNom() {
    const response = await request
      .post(API_URL + '/shop/partner/update', {
        idShop: '61dcd818a325bf490d036a0e',
        type: 'nom',
      })
      .then(response => {
        //if (response.status !== 200) throw Error(response.message);
        return response;
      })
      .catch(error => {
        return error.message;
      });
    console.log(response);
  }

  async function envoiDemandeCat() {
    const response = await request
      .post(API_URL + '/shop/partner/update', {
        idShop: '61dcd818a325bf490d036a0e',
        type: 'categorie',
        categorie: selectedCategories[0],
      })
      .then(response => {
        //if (response.status !== 200) throw Error(response.message);
        return response;
      })
      .catch(error => {
        return error.message;
      });
    console.log(response);
  }
  async function submit(e) {
    e.preventDefault();
    const response = await request
      .post(API_URL + '/auth/user/updateUser', {
        email: email,
        phone: phone,
        password: password,
        newPassword: newPassword,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5ZjcxYWVhMjU1ZjBkZTNjMzM3YjgiLCJlbWFpbCI6Im5lc3JpbmViaGs0MUBnbWFpbC5jb20iLCJwaG9uZSI6IisyMTI2MjkyMzI5NDkiLCJmaXJzdE5hbWUiOiJuZXNyaW5lIiwibGFzdE5hbWUiOiJiaGsiLCJpc0FjdGl2ZSI6dHJ1ZSwiaXNWZXJpZmllZCI6ZmFsc2UsImlzUmVtb3ZlZCI6ZmFsc2UsImlzUmVzZXRlZCI6ZmFsc2UsIl9jcmVhdGVkQXQiOiIyMDIyLTAxLTIxIDAwOjU4OjE0IiwicGFzc3dvcmQiOiIkMmIkMDQkdXFaNTZTSm40blF0MEsxUmdjVXQxLi5nLnByWExlRUk3TjVvQjFMakx3bFVVMHdYWklLRTYiLCJpYXQiOjE2NDI3MjM0MjcsImV4cCI6MTY0Mjc1OTQyN30.s5OgRRYIypJ1D9m0sBYCKu8TDdWuyReqLFPDLZXwEg4',
      })
      .then(response => {
        //if (response.status !== 200) throw Error(response.message);
        return response;
      })
      .catch(error => {
        return error.message;
      });
    if (
      response == 'TOKEN INVALID' ||
      response == "L'ANCIEN MOT DE PASSE EST OBLIGATOIRE" ||
      response == "CE UTILISATEUR N'EXISTE PAS" ||
      response == 'VOUS AVEZ PAS LE DROIT DE CHANGER CES DONNEES (AUTHENTIFICATION PAR GOOGLE)' ||
      response == "L'ANCIEN MOT DE PASSE EST INCORRECT" ||
      response == "L'ADRESSE MAIL N'EST PAS VALIDE" ||
      response == 'CE UTILISATEUR EXISTE DEJA' ||
      response == 'LA TAILLE DU MOT DE PASSE DOIT ETRE SUPERIEUR A 8'
    ) {
      setError(response);
      console.log(error);
    } else {
      setUser({ user: response });
      console.log(user);
    }
    console.log(user.user._id);
  }

  return (
    <body>
      <div className={st.spread}>
        <SideBar activePage={4} />

        <Container className={st.parentDiv}>
          <h1 style={style.heading}>Informations personnelles : </h1>
          <span style={{ color: '#c32630' }}>{error}</span>
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
                <Button variant='contained' size='large' onClick={e => submit(e)} style={style.button}>
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
                <Button variant='contained' onClick={envoiDemandeNom} size='large' style={style.button}>
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
                <Button onClick={envoiDemandeCat} variant='contained' size='large' style={style.button}>
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
