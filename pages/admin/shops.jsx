import AdminSideBar from '@components/adminSideBar/adminSideBar.component.jsx';
import styles from '/styles/admin.module.scss';
import cupcake from '@assets/images/cupcake.svg';
import sale from '@assets/images/sale.svg';
import mixte from '@assets/images/mixte.svg';
import Image from 'next/image';
import Pagination from '@mui/material/Pagination';
export default function AdminShops() {
  return (
    <div className={styles.container}>
      <AdminSideBar />
      <div className={styles.child2}>
        <div className={styles.search}>
          <form action=''>
            <input type='search' name='search' className={styles.searchInput} placeholder='rechercher shop' id='' />
          </form>
        </div>

        <div className={styles.buttonsContainer}>
          <a href=''>
            <Image src={cupcake} alt='cupcake' />
            <span>SUCRE</span>
          </a>

          <a href=''>
            <Image src={sale} alt='cupcake' />
            <span>SALE</span>
          </a>

          <a href=''>
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

            <tr>
              <td>Cuisine Samia</td>
              <td className={styles.light}>SUCRES</td>
              <td className={styles.light}>20/1/2022</td>
              <td>
                <a href=''>Voir</a>
              </td>
            </tr>
            <tr>
              <td>Cuisine Samia</td>
              <td className={styles.light}>SUCRES</td>
              <td className={styles.light}>20/1/2022</td>
              <td>
                <a href=''>Voir</a>
              </td>
            </tr>
            <tr>
              <td>Cuisine Samia</td>
              <td className={styles.light}>SUCRES</td>
              <td className={styles.light}>20/1/2022</td>
              <td>
                <a href=''>Voir</a>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}
