import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function SignIn({ open, close }) {
  return (
    <div>
      <Modal open={open} onClose={close} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <form action='' className='signUpForm'>
            <h2 className='connect'>SE CONNECTER</h2>
            <input className='input' type='email' name='' id='' placeholder='exemple@exemple.ma' />
            <div className='password'>
              <input className='input' type='password' name='' id='' placeholder='Mot de passe' />
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
