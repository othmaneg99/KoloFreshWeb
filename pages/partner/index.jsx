import Footer from '@components/footer/footer.component';
import Header from '@components/header/header.component';
import Image from 'next/image';
import step1 from '@assets/images/step1.svg';
import step2 from '@assets/images/step2.svg';
import step3 from '@assets/images/step3.svg';
import done from '@assets/images/done.svg';
import tomato from '@assets/images/tomato.svg';
import plant from '@assets/images/plant.svg';
import ButtonRed from '@components/button/buttonRed.component';
import styles from '/styles/partner.module.scss';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { capitalizeFirstLetter } from '@utils/global';

export default function Partner() {
  const [step, setStep] = useState(1);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');

  function onAddButtonClick(e) {
    const nameRegex = /^[a-zA-Z\-]+$/;
    e.preventDefault();
    if (step === 1) {
      if (nom.trim() === '' || prenom.trim() === '') {
        return;
      } else {
        setStep(2);
      }
    }
    if (step === 2) {
      if (mail.trim() === '' || tel.trim() === '') {
        return;
      } else {
        setStep(3);
      }
    }
    if (step == 3) {
      setStep(4);
    }
  }

  return (
    <div className='container'>
      <Header />
      <Image src={tomato} className={styles.tomatoImage} alt='tomato' />
      <Image src={plant} className={styles.plantImage} alt='plant' />
      {step == 1 && (
        <main id='step1' className='mainContent'>
          <Image src={step1} alt='step 1' />
          <form action='' autoComplete='off'>
            <div className={styles.formRow}>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='nom'>
                  Nom*
                </label>
                <input
                  required
                  className={styles.input}
                  type='text'
                  name='nom'
                  id=''
                  onChange={event => {
                    setNom(event.target.value.toUpperCase());
                  }}
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='prenom'>
                  Prénom*
                </label>
                <input
                  required
                  className={styles.input}
                  type='text'
                  name='prenom'
                  id=''
                  onChange={event => {
                    setPrenom(capitalizeFirstLetter(event.target.value));
                  }}
                />
              </div>
            </div>
            <Box textAlign='center'>
              <ButtonRed onClick={e => onAddButtonClick(e)} className={styles.btn}>
                Suivant
              </ButtonRed>
            </Box>
          </form>
        </main>
      )}

      {step == 2 && (
        <main id='step2' className='mainContent'>
          <Image src={step2} alt='step 2' />
          <form action='' autoComplete='off' noValidate>
            <div className={styles.formRow}>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='mail'>
                  Email*
                </label>
                <input
                  className={styles.input}
                  type='email'
                  name='mail'
                  id=''
                  onChange={event => {
                    setMail(event.target.value);
                  }}
                  required
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='tel'>
                  Numéro de telèphone*
                </label>
                <input
                  className={styles.input}
                  type='text'
                  name='tel'
                  id=''
                  onChange={event => {
                    setTel(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <Box textAlign='center'>
              <ButtonRed onClick={e => onAddButtonClick(e)} className={styles.btn}>
                Suivant
              </ButtonRed>
            </Box>
          </form>
        </main>
      )}
      {step == 3 && (
        <main className='mainContent'>
          <Image src={step3} alt='step 3' />
          <Image src={done} alt='step done' />
          <h1>
            Félicitations {nom} {prenom}!
          </h1>
          <p className={styles.paragraph}>
            Votre inscription a bien été prise en compte. Vous serez contacté par
            <text style={{ color: '#C32530' }}> un agent de notre centre d&quot;appel</text> dans les
            <b style={{ color: '#C32530' }}> 24 heures</b> a venir afin de confirmer vos informations et vous communiquer votre{' '}
            <span style={{ color: '#C32530' }}>mot de passe</span>.
          </p>
        </main>
      )}

      <Footer />
    </div>
  );
}
