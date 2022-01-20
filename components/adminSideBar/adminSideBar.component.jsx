import st from '/styles/partnerProducts.module.scss';

export default function AdminSideBar() {
  return (
    <div className={st.sideBar}>
      <div style={{ paddingTop: '50%', height: '50%' }}>
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
            Se déconnecter
          </a>
        </div>
      </div>
    </div>
  );
}
