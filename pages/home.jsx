import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/home.module.scss';
import { Container, Grid } from '@mui/material';
import mintSvg from '@assets/images/mint.svg';
import tajine from '@assets/images/tajine.svg';
import homeM1 from '@assets/images/homeM1.svg';
import homeM2 from '@assets/images/homeM2.svg';
import homeM3 from '@assets/images/homeM3.svg';
import homeM4 from '@assets/images/homeM4.svg';
import homeM5 from '@assets/images/homeM5.svg';
import homeM6 from '@assets/images/homeM6.svg';
import homeM7 from '@assets/images/homeM7.svg';
import consumerBtn from '@assets/images/consumer.svg';
import partnerBtn from '@assets/images/partner.svg';
import Header from '@components/header/header.component';
import Footer from '@components/footer/footer.component';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const openPartnerPage = () => {
    router.push('partner');
  };

  const openConsumerPage = () => {
    router.push('consumer');
  };

  return (
    <div>
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
            <Container>
              <p className='mainText'>
                commander des plats <span className='greenColor'>100%</span> fait maison
              </p>
              <p className='secondaryText'>
                Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!
              </p>
            </Container>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <Image src={tajine} width={400} alt='Tajine' />
          </Grid>
        </Grid>
        <Grid container style={{ margin: 'auto' }}>
          <Grid item xs={6}>
            <Image src={consumerBtn} width={1100} alt='Consumer Button' onClick={openConsumerPage} className={styles.homeButtons} />
          </Grid>
          <Grid item xs={6}>
            <Image src={partnerBtn} width={1100} alt='Partner Button' onClick={openPartnerPage} className={styles.homeButtons} />
          </Grid>
          <Grid item xs={12} style={{ marginRight: '50px', marginTop: '50px' }}>
            <Image src={homeM1} alt='home' />
          </Grid>
          <Grid item xs={8} style={{ margin: 'auto' }}>
            <Image src={homeM2} alt='home' />
          </Grid>
          <Grid item xs={8} style={{ margin: 'auto' }}>
            <Image src={homeM3} alt='home' />
          </Grid>
          <Grid item xs={8} style={{ margin: 'auto' }}>
            <Image src={homeM4} alt='home' />
          </Grid>
          <Grid item xs={10} style={{ margin: 'auto' }}>
            <Image src={homeM5} alt='home' />
          </Grid>
          <Grid item xs={12} style={{ margin: 'auto' }}>
            <Image src={homeM6} alt='home' />
          </Grid>
          <Grid item xs={9} style={{ margin: 'auto' }}>
            <Image src={homeM7} alt='home' />
          </Grid>
        </Grid>
      </main>

      <Footer />
    </div>
  );
}
