import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Request from '../../tools/Request';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from 'config';

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

let request = new Request({});

export default function SignIn({ open, close }) {
  const [error, setError] = useState('');
  const [data, setData] = useState({
    userName: '',
    password: '',
    role: '',
  });

  const [user, setUser] = useState({
    token: '',
    user: {},
    isLoggedIn: false,
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  async function submit(e) {
    e.preventDefault();
    console.log('check this', data.userName, data.password);
    const response = await request.post(API_URL + 'auth/login', {
      userName: data.userName,
      password: data.password,
      role: 'admin',
      remmemberMe: false,
    });

    if (response) {
      console.log('login success');
      const session = { user: response.user, token: response.token, isLoggedIn: true };
      sessionStorage.setItem('user', JSON.stringify(session));
      setUser(session);
      router.push('/partner/products');
    } else {
      setUser({ isLoggedIn: false });
      setError('Login ou mot de passe incorrect');
    }
  }

  const router = useRouter();

  return (
    <div>
      <Modal
        isLoggedIn={user.isLoggedIn}
        open={open}
        onClose={close}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <form action='' onSubmit={e => submit(e)} className='signUpForm'>
            <h2 className='connect'>SE CONNECTER</h2>
            <span> </span>
            {error}
            <input
              className='input'
              type='email'
              value={data.userName}
              name=''
              onChange={e => handle(e)}
              id='userName'
              placeholder='exemple@exemple.ma'
            />
            <div className='password'>
              <input
                className='input'
                value={data.password}
                type='password'
                onChange={e => handle(e)}
                name=''
                id='password'
                placeholder='Mot de passe'
              />
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
