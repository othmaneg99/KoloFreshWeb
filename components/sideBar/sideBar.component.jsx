import st from '/styles/partnerProducts.module.scss';
import logo from '@assets/images/LOGO.png';
import logout from '@assets/images/logout.png';
import Image from 'next/image';

export default function SideBar(props) {
  return (
    <div className={st.sideBar}>
      <a href='/' className={st.pagesButtons}>
        <Image src={logo} />
      </a>

      <div style={{ paddingTop: '10%' }}>
        <div className={st.pagesButtonsDiv}>
          <a href='#' className={props.activePage == 1 ? st.pageButtonActive : st.pagesButtons}>
            Produits
          </a>
          <a href='#' className={props.activePage == 2 ? st.pageButtonActive : st.pagesButtons}>
            Commandes
          </a>
          <a href='#' className={props.activePage == 3 ? st.pageButtonActive : st.pagesButtons}>
            Statistiques
          </a>
          <a href='#' className={props.activePage == 4 ? st.pageButtonActive : st.pagesButtons}>
            Paramètres
          </a>
          <a href='#' className={props.activePage == 5 ? st.pageButtonActive : st.pagesButtons}>
            Shop
          </a>
          <a href='#' className={props.activePage == 6 ? st.pageButtonActive : st.pagesButtons}>
            Aide
          </a>
          <a href='#' className={st.signOutBtn}>
            <Image width={'18px'} height={'18px'} src={logout} />
            <p style={{ display: 'inline', marginTop: '50px' }}> Se déconnecter </p>
          </a>
        </div>
      </div>
    </div>
  );
}
