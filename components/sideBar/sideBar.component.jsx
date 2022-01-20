import st from '/styles/partnerProducts.module.scss';
import logo from '@assets/images/LOGO.png';
import logout from '@assets/images/logout.png';
import Image from 'next/image';

export default function SideBar(){


    return (
    <div className={st.sideBar}>

        <a href='/' className={st.pagesButtons}>
            <Image src={logo}/>
        </a>

        <div style={{paddingTop:"10%"}}>

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
                <a href='#' className={st.pagesButtons}>
                    Shop
                </a>
                <a href='#' className={st.pagesButtons}>
                    Aide
                </a>
                <a href='#' className={st.signOutBtn}>
                    
         
                    <Image  width={"18px"} height={"18px"} src={logout}/>
                   <p style={{display:"inline"}}>  Se déconnecter </p>
                
                </a>
                
            </div>
        </div>

    </div>
    )
}