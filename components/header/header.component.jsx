import { Grid } from '@mui/material';
import logoSvg from '@assets/images/logo.svg';
import ButtonRed from '@components/button/buttonRed.component';
import Image from 'next/image';

const Header = props => {
  const style = {
    header: {
      padding: '2.5rem 2.5rem',
      // position: 'sticky',
      // top: 0,
      backgroundColor: '#fff',
      zIndex: 1,
    },
    btnSignIn: {
      width: '183px',
      height: '47px',
      margin: '20px',
    },
  };

  return (
    <header style={style.header}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Image src={logoSvg} width='160px' alt='Kolo Fresh' />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <ButtonRed style={style.btnSignIn}>Sign In</ButtonRed>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
