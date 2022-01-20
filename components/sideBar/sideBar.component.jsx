import st from '/styles/partnerProducts.module.scss';
import logo from '@assets/images/LOGO.png';
import logout from '@assets/images/logout.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SideBar(props) {
  const router = useRouter();

  const changePage = pageId => {
    if (pageId != props.activePage) {
      switch (pageId) {
        case 1:
          router.push('/partner/products');
          break;
        case 2:
          // router.push('/partner/orders');
          break;
        case 3:
          // router.push('/partner/statistics');
          break;
        case 4:
          router.push('/partner/settings');
          break;
        case 6:
          // router.push('/partner/help');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={st.sideBar}>
      <a href='/' className={st.pagesButtons}>
        <Image src={logo} alt='logo' />
      </a>

      <div style={{ paddingTop: '10%' }}>
        <div className={st.pagesButtonsDiv}>
          <a
            href='#'
            onClick={() => {
              changePage(1);
            }}
            className={props.activePage == 1 ? st.pageButtonActive : st.pagesButtons}
          >
            Produits
          </a>
          <a
            href='#'
            onClick={() => {
              changePage(2);
            }}
            className={props.activePage == 2 ? st.pageButtonActive : st.pagesButtons}
          >
            Commandes
          </a>
          <a
            href='#'
            onClick={() => {
              changePage(3);
            }}
            className={props.activePage == 3 ? st.pageButtonActive : st.pagesButtons}
          >
            Statistiques
          </a>
          <a
            href='#'
            onClick={() => {
              changePage(4);
            }}
            className={props.activePage == 4 ? st.pageButtonActive : st.pagesButtons}
          >
            Paramètres
          </a>
          <a href='#' className={st.pagesButtons}>
            Shop
          </a>
          <a
            href='#'
            onClick={() => {
              changePage(6);
            }}
            className={props.activePage == 6 ? st.pageButtonActive : st.pagesButtons}
          >
            Aide
          </a>
          <a href='#' className={st.signOutBtn}>
            <Image width={'18px'} height={'18px'} src={logout} alt='signOut' />
            <p style={{ display: 'inline', marginTop: '50px' }}> Se déconnecter </p>
          </a>
        </div>
      </div>
    </div>
  );
}
