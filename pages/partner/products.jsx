import Head from 'next/head';
import Footer from '@components/footer/footer.component';
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



export default function PartnerProducts() {
  const style = {
    btnAddProd: {
      height: '78px',
    },
  };

  const theme = {
    spacing: 10,
  };

  return (

    <body>
    <div className={st.container} >

        <div className={st.spread}>

          <SideBar/>

          <div className={st.parentDiv} style={{position:'relative'}}>
            
          <div className={st.planteDiv} style={{right:'0', position:'absolute', top: "-15px"}}>
            <Image
              className={st.plante}
              src={plante} height={131} width={109} 
              alt=''
            />
          </div>
            <div className={st.spread}>
              <p className={st.welcomeText}>Bienvenu</p>
              <p className={st.userName}>Cuisine SAMIA</p>
            </div>

            <div className={st.spread}>
              <input className={st.searchInput} placeholder='Chercher un produit' />

              <Box component='span' sx={{ ml: 20 }}>
                <ButtonRed style={style.btnAddProd}>Ajouter un produit</ButtonRed>
              </Box>
            </div>

            <div className={st.allProducts}>

              <div className={st.prodCard}>

                <div className={st.spread}>

                  <div className={st.prodImgDiv}>
                    <Image
                      className={st.prodImg}
                      src={bastilla}
                      height={138} width={179} 
                      alt=''
                    />
                  </div>

                  <div>
                    <div>
                      <p className={st.prodName} style={{ marginBottom: '10px' }}>
                        BASTILLA AUX POISSONS
                      </p>
                      <p className={st.prodDescr} style={{ marginBottom: '10px', marginTop: '5px', marginLeft: '10px' }}>
                        Description du produit
                      </p>
                    </div>

                    <div className={st.actionButtons}>
                      <Button className={st.btnDesac} variant='contained'>
                        Désactiver
                      </Button>
                      <Button className={st.btnDelete} variant='contained'>
                        Supprimer
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className={st.prodPrice}>150 DH</p>
                  </div>

                </div>

              </div>

                <div className={st.prodCard}>

                  <div className={st.spread}>
                    <div className={st.prodImgDiv}>
                    <Image
                      className={st.prodImg}
                      src={tl}
                      height={138} width={179} 
                      alt=''
                    />
                    </div>

                    <div>
                      <div>
                        <p className={st.prodName} style={{ marginBottom: '10px' }}>
                          TAJINE AUX LÉGUMES
                        </p>
                        <p className={st.prodDescr} style={{ marginBottom: '10px', marginTop: '5px', marginLeft: '10px' }}>
                          Description du produit
                        </p>
                      </div>

                      <div className={st.actionButtons}>
                        <Button className={st.btnDesac} variant='contained'>
                          Désactiver
                        </Button>
                        <Button className={st.btnDelete} variant='contained'>
                          Supprimer
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className={st.prodPrice}>50 DH</p>
                    </div>
                  </div>
                </div>

                <div className={st.prodCard}>
                  <div className={st.spread}>
                    <div className={st.prodImgDiv}>
                      {<Image
                        className={st.prodImg}
                        src={tp}
                        alt=''
                        height={138} width={179} 
                      />}
                    </div>

                    <div>
                      <div>
                        <p className={st.prodName} style={{ marginBottom: '10px' }}>
                          TAJINE AU POULET
                        </p>
                        <p className={st.prodDescr} style={{ marginBottom: '10px', marginTop: '5px', marginLeft: '10px' }}>
                          Description du produit
                        </p>
                      </div>

                      <div className={st.actionButtons}>
                        <Button className={st.btnDesac} variant='contained'>
                          Désactiver
                        </Button>
                        <Button className={st.btnDelete} variant='contained'>
                          Supprimer
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className={st.prodPrice}>80 DH</p>
                    </div>
                  </div>
                </div>

                <div className={st.prodCard}>
                  <div className={st.spread}>
                    <div className={st.prodImgDiv}>
                      { <Image
                        className={st.prodImg}
                        src={cl}
                        height={138} width={179} 
                        alt=''
                      />}
                    </div>

                    <div>
                      <div>
                        <p className={st.prodName} style={{ marginBottom: '10px' }}>
                          COUSCOUS MAROCAIN
                        </p>
                        <p className={st.prodDescr} style={{ marginBottom: '10px', marginTop: '5px', marginLeft: '10px' }}>
                          Description du produit
                        </p>
                      </div>

                      <div className={st.actionButtons}>
                        <Button className={st.btnDesac} variant='contained'>
                          Désactiver
                        </Button>
                        <Button className={st.btnDelete} variant='contained'>
                          Supprimer
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className={st.prodPrice}>45 DH</p>
                    </div>
                  </div>

                  <Stack alignItems='center' spacing={2}>
                    <Pagination style={{ margin: '35px', marginTop: '80px' }} count={10} shape='rounded' />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
          
        </div>

    </body>
  );
}
