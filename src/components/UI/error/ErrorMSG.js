import * as React from 'react';
import { Grid, Typography} from '@material-ui/core';
import errorImg from '../../../images/error/error.png';

export default function ErrorMSG() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
      >
        <Grid item xs={12}>
              <img src={errorImg} alt='Suprised Pikachu'/>
              <Typography variant='h2'style={{justifyContent: 'center'}}>Something went wrong</Typography>
        </Grid>   
      </Grid> 
    );
  }