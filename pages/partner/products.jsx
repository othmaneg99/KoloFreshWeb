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
import ProductCard from '@components/productCard/productCard.component';
const baseURL = 'http://localhost:3005';
import Request from '../../Request/request';
import React, { Component } from 'react';
let request = new Request({});
export default function PartnerProducts() {
  var [prodArray, setArr] = React.useState([]);
  var [shop, SetShop] = React.useState([]);
  async function onSearch(name) {
    const response = await request
      .get(baseURL + '/prod', { filters: { isRemoved: false, name: name } })
      .then(response => {
        //setArr(response);
        console.log(response);
      })
      .catch(error => {
        //return error.message;
      });
  }
  React.useEffect(() => {
    async function getProduct() {
      const response = await request
        .get(baseURL + '/prod', { filters: { isRemoved: false, idShop: '61dcd805a325bf490d036a0d' } })
        .then(response => {
          setArr(response);
          return response;
        })
        .catch(error => {
          return error.message;
        });
    }
    async function getShop() {
      const response = await request
        .get(baseURL + '/shop', { filters: { _id: '61dcd805a325bf490d036a0d' } })
        .then(response => {
          SetShop(response);
          console.log(response);
          return response;
        })
        .catch(error => {
          return error.message;
        });
    }
    getProduct();
    getShop();
  }, []);

  console.log(prodArray);
  console.log(shop);

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
      <div className={st.container}>
        <div className={st.spread}>
          <SideBar />

          <div className={st.parentDiv} style={{ position: 'relative' }}>
            <div className={st.planteDiv} style={{ right: '0', position: 'absolute', top: '-15px' }}>
              <Image className={st.plante} src={plante} height={131} width={109} alt='' />
            </div>

            <div className={st.spread}>
              <p className={st.welcomeText}>Bienvenu</p>
              <p className={st.userName}>{shop.name}</p>
            </div>

            <div className={st.spread}>
              <input
                className={st.searchInput}
                placeholder='Chercher un produit'
                onChange={event => {
                  onSearch(event.target.value);
                }}
              />

              <Box component='span' sx={{ ml: 20 }}>
                <ButtonRed style={style.btnAddProd}>Ajouter un produit</ButtonRed>
              </Box>
            </div>

            <div className={st.allProducts}>
              {prodArray.map(e => {
                return <ProductCard obj={e} key={e._id} />;
              })}
            </div>

            <Stack alignItems='center' spacing={2}>
              <Pagination style={{ margin: '35px', marginTop: '80px' }} count={10} shape='rounded' />
            </Stack>
          </div>
        </div>
      </div>
    </body>
  );
}
