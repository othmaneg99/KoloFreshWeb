import { Grid } from '@mui/material';
import logoSvg from '@assets/images/logo.svg';
import ButtonRed from '@components/button/buttonRed.component';
import Image from 'next/image';

const Footer = () => {
  const style = {
    footer: {
      width: '100%',
      height: '100px',
      borderTop: '0px solid #eaeaea',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return <footer style={style.footer}>This is the footer</footer>;
};

export default Footer;
