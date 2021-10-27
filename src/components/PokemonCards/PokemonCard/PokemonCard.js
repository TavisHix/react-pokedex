import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, CardActionArea, MuiThemeProvider, createTheme, responsiveFontSizes, Tooltip} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useHistory } from 'react-router-dom';
import useStyles from './PokemonCardSyles';

import water from '../../../images/icons/water.webp';
import bug from '../../../images/icons/bug.webp';
import dark from '../../../images/icons/dark.webp';
import dragon from '../../../images/icons/dragon.webp';
import electric from '../../../images/icons/electric.webp';
import fairy from '../../../images/icons/fairy.webp';
import fighting from '../../../images/icons/fighting.webp';
import fire from '../../../images/icons/fire.webp';
import flying from '../../../images/icons/flying.webp';
import ghost from '../../../images/icons/ghost.webp';
import grass from '../../../images/icons/grass.webp';
import ground from '../../../images/icons/ground.webp';
import ice from '../../../images/icons/ice.webp';
import normal from '../../../images/icons/normal.webp';
import poison from '../../../images/icons/poison.webp';
import psychic from '../../../images/icons/psychic.webp';
import rock from '../../../images/icons/rock.webp';
import steel from '../../../images/icons/steel.webp';

const PokemonCard = ( pokemon ) => {
    const classes = useStyles();
    const history = useHistory();
    let  theme = createTheme();
    theme = responsiveFontSizes(theme);

    const pad = (number, length) => {
        let str = '' + number;
        while (str.length < length) {
          str = '0' + str;
        }
        return str;
      }

    // TODO: Funtion is used in pokemon Card. REdcue repetitive functions by creatign a single location for this funtion and importing it instead
    const getBgColor = ( type ) => {
        switch ( type ) {
            case type = 'normal':
                return "#A8A77A";
            case type = 'fire':
                return "#EE8130";
            case type = 'water':
                return "#6390F0";
            case type = 'electric':
                return "#F7D02C";
            case type = 'grass':
                return "#7AC74C";
            case type = 'ice':
                return  "#96D9D6";
            case type = 'fighting':
                return "#C22E28";
            case type = 'poison':
                return "#A33EA1";
            case type = 'ground':
                return "#E2BF65";
            case type = 'rock':
                return "#E2BF65";
            case type = 'flying':
                return "#A98FF3";
            case type = 'psychic':
                return "#F95587";
            case type = 'bug':
                return "#A6B91A";
            case type = 'rock ':
                return "#B6A136";
            case type = 'ghost':
                return "#735797";
            case type = 'dragon':
                return "#6F35FC";
            case type = 'dark':
                return "#705746";
            case type = 'steel':
                return "#B7B7CE";
            case type = 'fairy':
                return "#D685AD";
            default:
                return 0;
        }
    }

    // TODO: Funtion is used in pokemon Card. REdcue repetitive functions by creatign a single location for this funtion and importing it instead
    const getIcon = ( type ) => {
        switch ( type ) {
            case type = 'normal':
                return normal;
            case type = 'fire':
                return fire;
            case type = 'water':
                return water;
            case type = 'electric':
                return electric;
            case type = 'grass':
                return grass;
            case type = 'ice':
                return  ice;
            case type = 'fighting':
                return fighting;
            case type = 'poison':
                return poison;
            case type = 'ground':
                return ground;
            case type = 'rock':
                return rock;
            case type = 'flying':
                return flying;
            case type = 'psychic':
                return psychic;
            case type = 'bug':
                return bug;
            case type = 'rock ':
                return rock;
            case type = 'ghost':
                return ghost;
            case type = 'dragon':
                return dragon;
            case type = 'dark':
                return dark;
            case type = 'steel':
                return steel;
            case type = 'fairy':
                return fairy;
            default:
                return 0;
        }
    }
    
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const pokemonSelectedHandler = (id) => {
        history.push('/pokemon/' + id) ;
    }
    let bgColor = getBgColor(pokemon.pokemon.types[0].type.name);
    let typeLogo = '';

    return(
        <Grid item xs={6} sm={3} md={3}>
            <MuiThemeProvider theme={theme}>
                <Card className={classes.card} style={{backgroundColor: bgColor}}>
                    <CardActionArea onClick={() => pokemonSelectedHandler(pokemon.pokemon.id)}>
                        <CardMedia 
                            className={classes.cardMedia}
                            component="img"
                            image={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(pokemon.pokemon.id, 3) + '.png'}
                            title={pokemon.pokemon.name}
                        />
                        <CardContent className={classes.cardInfo} align="center">
                            <Typography gutterBottom variant="h4">
                                {capitalize(pokemon.pokemon.name)}
                            </Typography>
                            <Stack direction="row" spacing={2} justifyContent="center">
                                {pokemon.pokemon.types.map((type , i) => {
                                    typeLogo = getIcon(type.type.name);
                                    return <Tooltip disableFocusListener disableTouchListener title={type.type.name} key={pokemon.pokemon.id + i}>
                                            <Avatar  alt={"" + type.type.name} src={typeLogo} sx={{ width: 56, height: 56 }}/>
                                            </Tooltip> 
                                })}
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>    
             </MuiThemeProvider>
        </Grid>
    );
    
}


export default PokemonCard;
