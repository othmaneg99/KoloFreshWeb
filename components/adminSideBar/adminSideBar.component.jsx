import st from '/styles/partnerProducts.module.scss';
import Image from 'next/image';
import logo from '@assets/images/logo.svg';
import logout from '@assets/images/logout.png';
export default function AdminSideBar() {
  return (
    <div className={st.sideBar}>
      <a href='/' className={st.pagesButtons}>
        <Image src={logo} alt='logo' width='170' />
      </a>
      <div style={{ paddingTop: '10%', height: '50%' }}>
        <div className={st.pagesButtonsDiv}>
          <a href='#' className={st.pageButtonActive}>
            SHOPS
          </a>
          <a href='#' className={st.pagesButtons}>
            CLIENTS
          </a>
          <a href='#' className={st.pagesButtons}>
            DEMANDES
          </a>
          <a href='#' className={st.pagesButtons}>
            STATISTIQUES
          </a>
          <a href='#' className={st.pagesButtons}>
            PARAMETRES
          </a>
          <a href='#' className={st.signOutBtn}>
            <Image width={'18px'} height={'25px'} src={logout} alt='' />
            <span style={{ display: 'inline', marginTop: '50px' }}> Se déconnecter </span>
          </a>
        </div>
      </div>
    </div>
  );
}
