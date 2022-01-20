import Button from '@mui/material/Button';
import Image from 'next/image';
import st from '/styles/partnerProducts.module.scss';

export default function ProductCard(props){

    return (
    
    <div className={st.prodCard}>

        <div className={st.spread}>

            <div className={st.prodImgDiv}>
                <Image
                src={props.prodArray.image}
                height={118} width={159} 
                alt=''
                />
            </div>

            <div>
                <div>
                <p className={st.prodName} style={{ marginBottom: '5px' }}>
                    {props.prodArray.titre}
                </p>
                <p className={st.prodDescr} style={{ marginBottom: '5px', marginTop: '5px', marginLeft: '10px' }}>
                    {props.prodArray.description}
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
                <p className={st.prodPrice}>{props.prodArray.prix} DH</p>
            </div>

        </div>

  </div>)
}