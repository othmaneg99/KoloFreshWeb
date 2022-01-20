import st from '/styles/partnerProducts.module.scss';
import Button from '@mui/material/Button';
import ButtonRed from '@components/button/buttonRed.component';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import Image from 'next/image';
import plante from '@assets/images/plante.svg';
import bastilla from '@assets/images/bastilla.svg';
import tl from '@assets/images/tl.webp';
import tp from '@assets/images/tp.jpg';
import cl from '@assets/images/cl.jpg';
import SideBar from '@components/sideBar/sideBar.component';
import ProductCard from '@components/productCard/productCard.component';


export default function OrderDetail(){

    const style = {
        btnAddProd: {
          height: '78px',
        },
      };

    var prodArray = [
    {"titre":"BASTILLA AUX POISSONS", "description":"Description du produit", "prix":150, "image":bastilla},
    {"titre":"TAJINE AUX LÉGUMES", "description":"Description du produit", "prix":50, "image":tl},
    {"titre":"TAJINE AU POULET", "description":"Description du produit", "prix":90, "image":tp},
    {"titre":"COUSCOUS MAROCAIN", "description":"Description du produit", "prix":45, "image":cl} 
    ]

    return (
    
          <div className={st.container} >
    
              <div className={st.spread}>
    
                <SideBar activePage={2}/>
    
                <div className={st.parentDiv} style={{position:'relative'}}>
                  
                    <div className={st.planteDiv} style={{right:'0', position:'absolute', top: "-15px"}}>
                        <Image
                          className={st.plante}
                          src={plante} height={131} width={109} 
                          alt=''
                        />
                    </div>
    
                    <div className={st.spread}>
                      {/* <p className={st.welcomeText}>Bienvenu</p>
                      <p className={st.userName}>Cuisine SAMIA</p> */}
                    </div>
    
                    <div className={st.spread}>

{/*                         <input className={st.searchInput} placeholder='Chercher un produit' />
        
                        <Box component='span' sx={{ ml: 20 }}>
                            <ButtonRed style={st.btnAddProd}>Ajouter un produit</ButtonRed>
                        </Box> */}

                    </div>
    
                    <div className={st.allProducts}>
    
                        <ProductCard prodArray={prodArray[0]}/>
                        <ProductCard prodArray={prodArray[1]}/>
                        <ProductCard prodArray={prodArray[2]}/>
                        <ProductCard prodArray={prodArray[3]}/>
                      
                    </div>
                
                </div>
            </div>
        </div>
    )


}