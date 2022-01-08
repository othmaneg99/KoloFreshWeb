<<<<<<< HEAD
import Head from 'next/head';
import Footer from '@components/footer/footer.component';
import st from '/styles/products.module.css';
import Button from '@mui/material/Button';
import ButtonRed from '@components/button/buttonRed.component'
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';

export default function PartnerProducts() {

  const style = {
    btnAddProd: {
      height: '78px',
    },
  };

  const theme = {
    spacing: 10,
  }

  return (

    <body > 
      

          <div style={{marginLeft:"320px"}} className='container'>

              <Head>
                <title>Kolo Fresh</title>
                <meta name='description' content='Kolo Fresh' />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'></meta>
                <link rel='icon' href='/favicon.ico' />
              </Head>

                    

            <div className={st.spread}>

                  
                    <div className={st.sideBar}>

                        <div className={st.pagesButtonsDiv}>
                          
                          <a href="#" className={st.pageButtonActive} >Produits</a>
                          <a href="#" className={st.pagesButtons} >Commandes</a>
                          <a href="#" className={st.pagesButtons} >Statistiques</a>
                          <a href="#" className={st.pagesButtons} >Paramètres</a>
                          <a href="#" className={st.signOutBtn}  >Se déconnecter</a>

                        </div>
                    
                    </div>

                    <div className={st.planteDiv}>
                    
                        <img className={st.plante} src="https://s3-alpha-sig.figma.com/img/6a68/3b7b/142952fa931c9c25b391be86756b9539?Expires=1642377600&Signature=G5ypXP-V3-Yjj4nT0Gv79s0KJviJDqXKgM-lHKJ3wUM-gEaRnZ42cVZOSrZe--YuwpXTBCIwYbItxZYDx8Z90fjRXO5wEQU9~zmIoGAkGzsZSNXS5mVhD-EsOFCZwoM9sxkTryVTImej88cons9agfxrHwBWT~MaJXC3QG0PDvRd0eJE1XjD136-jE3L~P4qsLAf7qT5pD9M8hZUKobq-JuVqDG5ZKritpWk3RS04pQM9LtcG~3rxMHDWJdh~RVopvcQrepeM7PP9TzX04NKni0KAH9rn57vPqyCGQ9b-XXIQRJtOUImRc48HEL0rvnttdy4R55KyLdH~6HnkEorvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />

                    </div>       

                    <div className={st.parentDiv}>

                        <div className={st.spread}>

                            <p className={st.welcomeText}>Bienvenu</p>
                            <p className={st.userName}>Cuisine SAMIA</p>


                        </div>
                          
                        
                        <div className={st.spread}>

                          <input className={st.searchInput}  placeholder="Chercher un produit"  />
                          
                          <Box component="span" sx={{ ml: 20 }}>
                            <ButtonRed style={style.btnAddProd}>Ajouter un produit</ButtonRed>
                          </Box>

                        </div>
                        
                          <div className={st.allProducts}>

                              <div className={st.prodCard}>

                                <div className={st.spread}>

                                    <div className={st.prodImgDiv}>

                                      <img className={st.prodImg} src="https://s3-alpha-sig.figma.com/img/8b9f/a36a/115e26a150658c69c3e4db6d86d440d2?Expires=1642377600&Signature=Wa86CcOkTgYoJvGOUSSZgrXjgffvNIMJ~upbN77JdKl9oS8MqC~oaTpwljzWZzaQq4diZ-kjaCu3Iu4N9GQ-33E7ZNSmFeMXEyNTUYG~15kQt3LIQ73BB5e8WqbF9yHBms72GQRh5Tl6e6NS-jhQy9LdxM6Wrzs5UuvRzoFGCwAVcm9HipNkqxnxswxVcbhKVIP1EjjnMzaFkMhZAGrgsBUTZrqo2JRfXIpr9F~QesHux8PpDRBA9dcyWzaSr42rdXPMvJMhZUgdoUVfTjxYdK2ho5TSMNwOKxCUWzSSwwegKwUVTlloODEnyZCORuh6q4925JJnhFdA6swEBmBZ1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                                      
                                    </div>
                                    
                                    <div>

                                      <div>

                                        <p className={st.prodName} style={{marginBottom: '10px'}}>BASTILLA AUX POISSONS</p>
                                        <p className={st.prodDescr} style={{marginBottom: '10px',marginTop: '5px', marginLeft: '10px'}}>Description du produit</p>

                                      </div>


                                      <div className={st.actionButtons}>

                                        <Button className={st.btnDesac} variant="contained">Désactiver</Button>
                                        <Button className={st.btnDelete} variant="contained">Supprimer</Button>

                                      </div>
                                
                                      
                                    </div>
                                    
                                    <div>

                                      <p className={st.prodPrice}>150 DH</p>

                                    </div>

                                </div>
                              
                            

                              <div className={st.prodCard}>

                                <div className={st.spread}>

                                  <div className={st.prodImgDiv}>

                                    <img className={st.prodImg} src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/62031/open-uri20130617-2-194qwmc" alt="" />
                                    
                                  </div>
                                  
                                  <div>

                                    <div>

                                      <p className={st.prodName} style={{marginBottom: '10px'}}>TAJINE AUX LÉGUMES</p>
                                      <p className={st.prodDescr} style={{marginBottom: '10px',marginTop: '5px', marginLeft: '10px'}}>Description du produit</p>

                                    </div>


                                    <div className={st.actionButtons}>

                                      <Button className={st.btnDesac} variant="contained">Désactiver</Button>
                                      <Button className={st.btnDelete} variant="contained">Supprimer</Button>

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

                                      <img className={st.prodImg} src="https://www.la-cuisine-marocaine.com/photos-recettes/02-tajine-de-poulet-aux-legumes.jpg" alt="" />
                                      
                                    </div>
                                    
                                    <div>

                                      <div>

                                        <p className={st.prodName} style={{marginBottom: '10px'}}>TAJINE AU POULET</p>
                                        <p className={st.prodDescr} style={{marginBottom: '10px',marginTop: '5px', marginLeft: '10px'}}>Description du produit</p>

                                      </div>


                                      <div className={st.actionButtons}>

                                        <Button className={st.btnDesac} variant="contained">Désactiver</Button>
                                        <Button className={st.btnDelete} variant="contained">Supprimer</Button>

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

                                      <img className={st.prodImg} src="https://mcbi-conseil.ma/wp-content/uploads/2020/09/couscous-7-legumes.jpg" alt="" />
                                      
                                    </div>
                                    
                                    <div>

                                      <div>

                                        <p className={st.prodName} style={{marginBottom: '10px'}}>COUSCOUS MAROCAIN</p>
                                        <p className={st.prodDescr} style={{marginBottom: '10px',marginTop: '5px', marginLeft: '10px'}}>Description du produit</p>

                                      </div>


                                      <div className={st.actionButtons}>

                                        <Button className={st.btnDesac} variant="contained">Désactiver</Button>
                                        <Button className={st.btnDelete} variant="contained">Supprimer</Button>

                                      </div>
                                
                                      
                                    </div>
                                    
                                    <div>

                                      <p className={st.prodPrice}>45 DH</p>

                                    </div>
                                  
                                </div>
                                  
                                  <Stack  alignItems = "center" spacing={2}>
                                    <Pagination style={{margin:"35px"}} count={10} shape="rounded" />
                                  </Stack>
                                    
                              </div>

                      </div>
                              

                        </div>

                    </div>

            </div>
        
      {/* <Footer />
 */}

 
    </div>

    </body>
=======
import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styles from '/styles/partnerProducts.module.scss';

export default function PartnerProducts() {
  return (
    <div className={styles.container}>
      <h1>Partner products</h1>
    </div>
>>>>>>> 87207374c153eecc967ec3b0f9f5fcb8ffc72dd9
  );
}
