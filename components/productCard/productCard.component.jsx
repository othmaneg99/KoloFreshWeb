import Button from '@mui/material/Button';
import Image from 'next/image';
import st from '/styles/partnerProducts.module.scss';
import bastilla from '@assets/images/bastilla.svg';

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
            <Button className={st.btnDesac} variant='contained'>
              {props.product.isActivated ? 'Désactiver' : 'Activer'}
            </Button>
            <Button className={st.btnDelete} variant='contained'>
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
