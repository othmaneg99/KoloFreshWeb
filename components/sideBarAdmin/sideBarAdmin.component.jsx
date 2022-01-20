import st from '/styles/partnerProducts.module.scss';
import logo from '@assets/images/LOGO.png';
import logout from '@assets/images/logout.png';
import Image from 'next/image';

export default function SideBarAdmin(){

    return (
    <div className={st.sideBar}>

        <a href='/' className={st.pagesButtons}>
            <Image  src={logo}/>
        </a>

        <div style={{paddingTop:"10%"}}>

            <div className={st.pagesButtonsDiv}>

                <a href='#' className={st.pageButtonActive}>
                    Shops
                </a>
                <a href='#' className={st.pagesButtons}>
                    Clients
                </a>
                <a href='#' className={st.pagesButtons}>
                    Commandes
                </a>
                <a href='#' className={st.pagesButtons}>
                    Demandes
                </a>
                <a href='#' className={st.pagesButtons}>
                    Statistiques
                </a>
                <a href='#' className={st.pagesButtons}>
                    Parametres
                </a>
                <a href='#' className={st.signOutBtn}>
                    
         
                    <Image  width={"18px"} height={"18px"} src={logout}/>
                   <p style={{display:"inline", marginTop:"50px"}}>  Se déconnecter </p>
                
                </a>
                
            </div>
        </div>

    </div>
    )
}