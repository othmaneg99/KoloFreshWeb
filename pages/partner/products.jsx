import Head from 'next/head';
import st from '/styles/partnerProducts.module.scss';
import Button from '@mui/material/Button';
import ButtonRed from '@components/button/buttonRed.component';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import Image from 'next/image';

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
      <div style={{ marginLeft: '320px' }} className='container'>
        <Head>
          <title>Kolo Fresh</title>
          <meta name='description' content='Kolo Fresh' />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'></meta>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className={st.spread}>
          <div className={st.sideBar}>
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

          <div className={st.planteDiv}>
            <Image
              className={st.plante}
              src='/../../assets/images/plante.png'
              layout="fill"
              alt=''
            />
          </div>

          <div className={st.parentDiv}>
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
                      src='/../../assets/images/bastilla.svg'
                      height="138px"
                      width="179px"
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

                <div className={st.prodCard}>
                  <div className={st.spread}>
                    <div className={st.prodImgDiv}>
                      {/* <Image
                        className={st.prodImg}
                        src='https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/62031/open-uri20130617-2-194qwmc'
                        alt=''
                      /> */}
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
                      {/* <Image
                        className={st.prodImg}
                        src='https://www.la-cuisine-marocaine.com/photos-recettes/02-tajine-de-poulet-aux-legumes.jpg'
                        alt=''
                      /> */}
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
                      {/* <Image
                        className={st.prodImg}
                        src='https://mcbi-conseil.ma/wp-content/uploads/2020/09/couscous-7-legumes.jpg'
                        alt=''
                      /> */}
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
                    <Pagination style={{ margin: '35px' }} count={10} shape='rounded' />
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
  );
}
