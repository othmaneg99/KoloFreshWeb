import st from '/styles/partnerProducts.module.scss';

export default function SideBar(){

    return (
    <div className={st.sideBar}>

        <div style={{paddingTop:"50%",
		height:"50%"}}>
            <div className={st.pagesButtonsDiv}>
            <a href='#' className={st.pageButtonActive}>
                Produits
            </a>
            <a href='#' className={st.pagesButtons}>
                Commandes
            </a>
            <a href='#' className={st.pagesButtons}>
                Statistiques
            </a>
            <a href='#' className={st.pagesButtons}>
                Paramètres
            </a>
            <a href='#' className={st.signOutBtn}>
                Se déconnecter
            </a>
            </div>
        </div>

    </div>
    )
}