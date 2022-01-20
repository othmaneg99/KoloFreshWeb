import React, { useState, useEffect } from 'react';
import st from '/styles/partnerProducts.module.scss';
import ButtonRed from '@components/button/buttonRed.component';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { Pagination } from '@mui/material';
import Image from 'next/image';
import plante from '@assets/images/plante.svg';
import SideBar from '@components/sideBar/sideBar.component';
import ProductCard from '@components/productCard/productCard.component';
import Request from '../../Request/request';
import { API_URL } from 'config';

let request = new Request({});

export default function PartnerProducts() {
  var [searchName, setSearchName] = useState('');
  var [products, setProducts] = useState([]);
  var [shop, setShop] = useState({});

  async function getProducts(name) {
    const response = await request.get(API_URL + '/prod', {
      idShop: '61dcd805a325bf490d036a0d',
      filters: { isRemoved: false, ...(name && { name }) },
    });

    console.log(response);

    if (Array.isArray(response)) {
      setProducts(response);
    } else {
      setProducts([response]);
    }
  }

  async function getShop() {
    const response = await request.get(API_URL + '/shop', { filters: { _id: '61dcd805a325bf490d036a0d' } });
    setShop(response);
  }

  useEffect(() => {
    getShop();
    getProducts();
  }, []);

  const style = {
    btnAddProd: {
      height: '78px',
    },
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
                value={searchName}
                onChange={event => {
                  setSearchName(event.target.value);
                  getProducts(event.target.value);
                }}
              />

              <Box component='span' style={{ marginLeft: 'auto' }}>
                <ButtonRed style={style.btnAddProd}>Ajouter un produit</ButtonRed>
              </Box>
            </div>

            <div className={st.allProducts}>
              {products.map(p => {
                return <ProductCard product={p} key={p._id} />;
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
