import AdminSideBar from '@components/adminSideBar/adminSideBar.component.jsx';
import styles from '/styles/admin.module.scss';
import cupcake from '@assets/images/cupcake.svg';
import sale from '@assets/images/sale.svg';
import mixte from '@assets/images/mixte.svg';
import Image from 'next/image';
export default function AdminShops() {
  return (
    <div className={styles.container}>
      <AdminSideBar />
      <div className={styles.child2}>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
