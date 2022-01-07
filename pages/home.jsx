import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/home.module.scss';
import { Grid } from '@mui/material';
import mintSvg from '@assets/images/mint.svg';
import ellipse from '@assets/images/ellipse.svg';
import tajine from '@assets/images/tajine.svg';
import Header from '@components/header/header.component';
import Footer from '@components/footer/footer.component';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Kolo Fresh</title>
        <meta name='description' content='Kolo Fresh' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <main className='mainContent'>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Image src={mintSvg} height={50} width={156} alt='Mint' className={styles.mintImage} />
            <p className='mainText'>
              commander des plats <span className='greenColor'>100%</span> fait maison
            </p>
            <p className='secondaryText'>
              Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!
            </p>
          </Grid>
          <Grid item xs={6}>
            <Image src={tajine} width={400} alt='Tajine' className={styles.tajineImage} />
            <Image src={ellipse} width={400} alt='Ellipse' className={styles.ellipseImage} />
          </Grid>
        </Grid>
      </main>

      <Footer />
    </div>
  );
}
