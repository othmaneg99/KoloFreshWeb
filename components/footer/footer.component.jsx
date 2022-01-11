import Image from 'next/image';
import playstore from '@assets/images/playstore.svg';
import applestore from '@assets/images/applestore.svg';
import curve from '@assets/images/curve.svg';

const Footer = () => {
  const footerContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  const footer = {
    position: 'relative',
  };
  const curve1 = {};
  const footerSection = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <footer className='footer'>
      <Image src={curve} width={''} alt='curve' className='curve' sizes='(max-width: 100%)' />
      <div className='footerContainer'>
        <div style={footerSection}>
          <p className='title'>KOLO FRESH</p>
          <p style={{ maxWidth: '25ch' }}>It is a new Moroccan concept that allows you to order meals, especially homemade dishes.</p>
        </div>

        <div style={footerSection}>
          <p className='title'>Quick links</p>
          <a href=''>Home</a>
          <a href=''>Shops</a>
          <a href=''>Nous contacter</a>
        </div>

        <div style={footerSection}>
          <p className='title'>Nous suivre</p>
          <a href=''>Facebook</a>
          <a href=''>Instagram</a>
          <a href=''>Twitter</a>
          <a href=''>Linkedin</a>
        </div>

        <div style={footerSection}>
          <a href=''>
            <Image src={playstore} alt='playstore' />
          </a>
          <a href=''>
            <Image src={applestore} alt='applestore' />
          </a>
          <a href=''>
            CONDITIONS <br />
            D&quot;UTILISATION
          </a>
          <a href=''>
            POLITIQUE DE <br />
            CONFIDENTIALITE
          </a>
        </div>
      </div>
      <div className='copywrite'>
        <div style={{ borderTop: '2px solid #8F9698 ', width: '80%', margin: '0 auto', paddingBottom: '20px' }}></div>
        <span style={{ display: 'table', margin: '0 auto', paddingBottom: '20px' }}>Copyright 2021 ©CodeCreators All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
