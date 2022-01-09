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
import styles from '/styles/cooker.module.scss';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { capitalizeFirstLetter } from '@utils/global';

export default function Cooker() {
  const [step, setStep] = useState(1);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

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
                  className={styles.input}
                  type='text'
                  name='nom'
                  id=''
                  onChange={event => {
                    setNom(event.target.value.toUpperCase());
                  }}
                  required
                />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='prenom'>
                  Prénom*
                </label>
                <input
                  className={styles.input}
                  type='text'
                  name='prenom'
                  id=''
                  onChange={event => {
                    setPrenom(capitalizeFirstLetter(event.target.value));
                  }}
                  required
                />
              </div>
            </div>
            <Box textAlign='center'>
              <ButtonRed
                onClick={() => {
                  setStep(2);
                }}
                className={styles.btn}
              >
                Suivant
              </ButtonRed>
            </Box>
          </form>
        </main>
      )}

      {step == 2 && (
        <main id='step2' className='mainContent'>
          <Image src={step2} alt='step 2' />
          <form action='' autoComplete='off'>
            <div className={styles.formRow}>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='nom'>
                  Email*
                </label>
                <input className={styles.input} type='email' name='nom' id='' required />
              </div>
              <div className={styles.inputWrap}>
                <label className={styles.label} htmlFor='prenom'>
                  Numéro de telèphone*
                </label>
                <input className={styles.input} type='text' name='prenom' id='' required />
              </div>
            </div>
            <Box textAlign='center'>
              <ButtonRed
                onClick={() => {
                  setStep(3);
                }}
                className={styles.btn}
              >
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
            Félicitations {nom} {prenom} !
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
