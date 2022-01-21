import AdminSideBar from '@components/adminSideBar/adminSideBar.component.jsx';
import styles from '/styles/admin.module.scss';
import cupcake from '@assets/images/cupcake.svg';
import sale from '@assets/images/sale.svg';
import mixte from '@assets/images/mixte.svg';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Request from '../../Request/request';
import { API_URL } from 'config';
let request = new Request({});
export default function AdminShops() {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  var [searchName, setSearchName] = useState('');
  var [category, setCategory] = useState('');
  var [shops, setShops] = useState([]);

  async function getShops(name) {
    const response = await request.get(API_URL + '/shop/search', {
      filters: { isRemoved: false, name: name },
    });

    if (Array.isArray(response)) {
      setShops(await getUpdatedShops(response));
    } else {
      setShops(await getUpdatedShops([response]));
    }
  }

  async function getUpdatedShops(shops) {
    const res = [];
    for (const s of shops) {
      const shop = { ...s };
      shop.cat = await getCateg(s.idCateg);
      res.push(shop);
    }
    return res;
  }

  async function getCateg(id) {
    return 'SUCRES';
    // const response = await request.get(API_URL + '/shop/categ', {
    //   filters: { isRemoved: false, _id: id },
    // });
    // if (response) return response.name;
    // else return ' - ';
  }

  async function getShopByCateg(name) {
    const cat = await request.get(API_URL + '/shop/categ', {
      filters: { isRemoved: false, name: name },
    });
    const id = cat._id;
    const response = await request.get(API_URL + '/shop', {
      filters: { isRemoved: false, idCateg: id },
    });

    if (Array.isArray(response)) {
      setShops(await getUpdatedShops(response));
    } else {
      setShops(await getUpdatedShops([response]));
    }
  }

  useEffect(() => {
    getShops('');
  }, []);

  return (
    <div className={styles.container}>
      <AdminSideBar />
      <div className={styles.child2}>
        <div className={styles.search}>
          <form action=''>
            <input
              type='search'
              name='search'
              className={styles.searchInput}
              placeholder='Chercher shop'
              id=''
              value={searchName}
              onChange={event => {
                setSearchName(event.target.value);
                getShops(event.target.value);
              }}
            />
          </form>
        </div>

        <div className={styles.buttonsContainer}>
          <a
            href=''
            onClick={() => {
              getShopByCateg('Sucrés');
            }}
          >
            <Image src={cupcake} alt='cupcake' />
            <span>SUCRE</span>
          </a>

          <a
            href=''
            onClick={() => {
              getShopByCateg('Salés');
            }}
          >
            <Image src={sale} alt='cupcake' />
            <span>SALE</span>
          </a>

          <a
            href=''
            onClick={() => {
              getShopByCateg('Mixte');
            }}
          >
            <Image src={mixte} alt='cupcake' />
            <span>MIXTE</span>
          </a>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <th>Nom shop</th>
            <th>Catégorie</th>
            <th>Date de Création</th>
            <th></th>
            <tbody>
              {shops.map(s => {
                return (
                  <tr key={s._id}>
                    <td>{s.name}</td>
                    <td className={styles.light}>{s.cat}</td>
                    <td className={styles.light}>{s._createdAt}</td>
                    <td>
                      <a href=''>Voir</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}
