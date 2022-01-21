import Button from '@mui/material/Button';
import Image from 'next/image';
import st from '/styles/partnerProducts.module.scss';
import Request from '../../Request/request';
import { API_URL } from 'config';
let request = new Request({});
async function Desactivate(id) {
  const response = await request.update(API_URL + '/prod/update', {
    filters: { _id: id },
    data: { isActivated: false },
  });
}
async function Activate(id) {
  const response = await request.update(API_URL + '/prod/update', {
    filters: { _id: id },
    data: { isActivated: true },
  });
}
async function Delete(id) {
  const response = await request.update(API_URL + '/prod/update', {
    filters: { _id: id },
    data: { isRemoved: true },
  });
  console.log(response);
}
export default function ProductCard(props) {
  return (
    <div className={st.prodCard}>
      <div className={st.spread}>
        <div className={st.prodImgDiv}>
          <Image className={st.prodImg} src={props.product.imageProd.src} height={138} width={179} alt='' />
        </div>

        <div>
          <div>
            <p className={st.prodName}>{props.product.name}</p>
            <p className={st.prodDescr}>{props.product.description}</p>
          </div>

          <div className={st.actionButtons}>
            <Button
              className={st.btnDesac}
              variant='contained'
              onClick={() => {
                props.product.isActivated ? Desactivate(props.product._id) : Activate(props.product._id);
              }}
            >
              {props.product.isActivated ? 'Désactiver' : 'Activer'}
            </Button>
            <Button
              className={st.btnDelete}
              variant='contained'
              onClick={() => {
                if (window.confirm('Are you sure?')) {
                  Delete();
                }
              }}
            >
              Supprimer
            </Button>
          </div>
        </div>

        <div>
          <p className={st.prodPrice}>{props.product.price} DH</p>
        </div>
      </div>
    </div>
  );
}
