import React from 'react';
import { Card, CardContent, Grid, MuiThemeProvider, createTheme, responsiveFontSizes} from '@material-ui/core';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import useStyles from './LoadingPokemonCardStyles';

const LoadingPokemonCard = ( ) => {
    const classes = useStyles();
    let  theme = createTheme();
    theme = responsiveFontSizes(theme);
    
    return(
        <Grid item xs={6} sm={3} md={3}>
            <MuiThemeProvider theme={theme}>
                <Card className={classes.card}>
                    <Skeleton variant="rectangular" width={'100%'} height={160} />
                    <CardContent className={classes.cardInfo} align="center">
                        <Skeleton variant="text" />
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="circular" width={40} height={40} />
                        </Stack>
                    </CardContent>
                </Card>    
             </MuiThemeProvider>
        </Grid>
    );
};

export default LoadingPokemonCard;