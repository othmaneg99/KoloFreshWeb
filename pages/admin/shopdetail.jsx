import AdminSideBar from '@components/sideBarAdmin/sideBarAdmin.component.jsx';
import style from '/styles/shopDetail.module.scss';
import st from '/styles/partnerProducts.module.scss';
import * as React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function AdminShops() {

  return (
    <div className={st.container}>
        <div className={st.spread}>

          <AdminSideBar />

          <div className={st.parentDiv}>


            <div className={st.spread}>

              <p className={style.titles} >Informations partenaire :</p>
              
            </div>

            <div className={st.spread} style={{marginLeft:"20px"}}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <div >
                      <label >Nom</label>
                      <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div >
                      <label>Prenom</label>
                      <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div >
                      <label>Email</label>
                      <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div >
                      <label>Numéro de tel</label>
                      <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                    </div>
                  </Grid>
                </Grid>

            </div>

            <div className={st.spread}>

              <p className={style.titles} >Informations du shop :</p>
              
            </div>
            
            <div style={{marginLeft:"20px"}}>


              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <div >
                    <label>Nom Shop*</label>
                    <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div >
                    <label>Description</label>
                    <input className={style.inputStyle} style={{display:"block"}} type="text" name='nom' />
                  </div>
                </Grid>
              </Grid>

              <div className={st.spread}>

                <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                  <Select
                    displayEmpty
                   
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                      <MenuItem>
                        Sucré
                      </MenuItem>
                      <MenuItem>
                        Salé
                      </MenuItem>
                      <MenuItem>
                        Mixte
                      </MenuItem>
                    ))
                  </Select>
                </FormControl>

              </div>

                  
                    <Button className={style.btnSave} variant='contained'>
                        Sauvegarder
                    </Button>

              

            </div>

          </div>
        </div>
      </div>
  );
}
