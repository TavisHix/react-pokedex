import React from 'react';
import { Card, CardContent, Grid, MuiThemeProvider, createTheme, responsiveFontSizes} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './LoadingPokemonCardStyles';

const LoadingPokemonCard = ( ) => {
    const classes = useStyles();
    let  theme = createTheme();
    theme = responsiveFontSizes(theme);
    
    return(
        <Grid item xs={6} sm={3} md={3}>
            <MuiThemeProvider theme={theme}>
                <Card className={classes.card}>
                    <Skeleton variant="rect" width={'100%'} height={160} />
                    <CardContent className={classes.cardInfo} align="center">
                        <Skeleton variant="text" />
                        <div style={{ display: "flex" , flexDirection: "row", justifyContent: "center"}}>
                            <Skeleton variant="circle" width={40} height={40} />
                            <Skeleton variant="circle" width={40} height={40} />
                        </div>
                    </CardContent>
                </Card>    
             </MuiThemeProvider>
        </Grid>
    );
};

export default LoadingPokemonCard;