import AdminSideBar from '@components/adminSideBar/adminSideBar.component';
import styles from '/styles/admin.module.scss';
import Pagination from '@mui/material/Pagination';

export default function AdminDemandes() {
  return (
    <div className={styles.container}>
      <AdminSideBar />
      <div className={styles.child2}>
        <div className={styles.demandeHeader}>
          <div>
            <a href=''>Shops</a>
            <a href=''>Noveaux</a>
          </div>

          <input type='date' name='' id='' placeholder='filter date' />
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <th>Id demande</th>
            <th>Telephone</th>
            <th>Shop</th>
            <th>Demande</th>
            <th>Status</th>

            <tr></tr>
          </table>
        </div>
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}
