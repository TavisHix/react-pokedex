import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

export default function CircularColor() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
      >
        <Grid item xs={3}>
            <CircularProgress />
        </Grid>   
      </Grid> 
    );
  }