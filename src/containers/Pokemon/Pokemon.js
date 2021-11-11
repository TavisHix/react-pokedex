import React, { useState, useEffect } from 'react'
import { Grid, Container, Typography, CardMedia, Paper, Avatar, Tooltip, Divider, Button  } from '@material-ui/core';
import Stack from '@mui/material/Stack';

import { getSinglePokemonData } from '../../services/services';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import useStyles from './PokemonStyles';

import water from '../../images/icons/water.webp';
import bug from '../../images/icons/bug.webp';
import dark from '../../images/icons/dark.webp';
import dragon from '../../images/icons/dragon.webp';
import electric from '../../images/icons/electric.webp';
import fairy from '../../images/icons/fairy.webp';
import fighting from '../../images/icons/fighting.webp';
import fire from '../../images/icons/fire.webp';
import flying from '../../images/icons/flying.webp';
import ghost from '../../images/icons/ghost.webp';
import grass from '../../images/icons/grass.webp';
import ground from '../../images/icons/ground.webp';
import ice from '../../images/icons/ice.webp';
import normal from '../../images/icons/normal.webp';
import poison from '../../images/icons/poison.webp';
import psychic from '../../images/icons/psychic.webp';
import rock from '../../images/icons/rock.webp';
import steel from '../../images/icons/steel.webp';

const Pokemon = (props) => {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState("");
    const [loading, setLoading] = useState(true);
    
    let typeLogo = '';

    useEffect(() => {
        async function fetchData() {
            let response = await getSinglePokemonData(props.match.params.id);
            setPokemonData(response);
            setLoading(false);
        }
        fetchData();
    }, [])

    

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

    

    const pad = (number, length) => {
        let str = '' + number;
        while (str.length < length) {
          str = '0' + str;
        }
        return str;
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const getFlavorText = () => {
        let i = pokemonData[1].flavor_text_entries.findIndex(lang => lang.language.name === 'en')
        return(pokemonData[1].flavor_text_entries[i].flavor_text);
    }

    const backButtonSelectedHandler = (id) => {
        props.history.goBack() ;
    }

    let card = (<h1>Loading . . .</h1>)
    if(!loading) {
        card = (        
        <Container maxWidth="lg" style={{paddingTop: 45}}>
            <Paper sx={{ p: 2 }}>
                <Grid container spacing={7} > 
                    <Grid item  xs={12} sm={5} md={5}>
                        {/* <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, maxHeight:, flexGrow: 1 }}>
                            <img src={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(pokemonData.id, 3) + '.png'} />
                        </Paper> */}
                        {/* <ButtonBase sx={{ width: 60, height: 60 }}>
                            <Img alt="complex" src={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(pokemonData.id, 3) + '.png'} />
                        </ButtonBase> */}
                        <CardMedia 
                            className={classes.media}
                            image={'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/' + pad(pokemonData[0].id, 3) + '.png'}
                            // title={}
                            height="140"
                        /> 
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={6} md={6} container>
                        <Grid item container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="div">
                                    {'#' + pad(pokemonData[0].id, 3)}
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    {capitalize(pokemonData[0].name)}
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    About: 
                                </Typography>
                                <Typography> {getFlavorText()} </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Type: 
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    {pokemonData[0].types.map((type) => {
                                        typeLogo = getIcon(type.type.name);
                                        return  <Tooltip disableFocusListener disableTouchListener title={type.type.name} key={type.type.name}>
                                                    <Avatar key={pokemonData.id} alt={type.type.name} src={typeLogo} sx={{ width: 56, height: 56 }}/>
                                                </Tooltip>
                                    })}
                                </Stack>
                                <Typography variant="h5">
                                    Abilities:
                                </Typography>
                                <ul className={classes.list}>
                                    <Stack direction="column" spacing={2}>
                                        {pokemonData[0].abilities.map((abilities) => {
                                            let ability = abilities.ability.name;
                                            return <li key={ability}><Typography>{ability}</Typography></li>
                                        })}
                                    </Stack>
                                </ul>
                                <Typography variant="h5">
                                    Stats:
                                </Typography>
                                {/* <ul className={classes.list}> 
                                    <Stack direction="row" spacing={2}>
                                        {pokemonData[0].stats.map((stats) => {
                                            let statName = stats.stat.name;
                                            let statValue = stats.base_stat;
                                            return  <Typography><li>{statName} <br/> {statValue}</li></Typography>
                                        })}
                                    </Stack>
                                </ul> */}
                                <Grid item container direction="row" spacing={2}>
                                    {pokemonData[0].stats.map((stats) => {
                                        let statName = stats.stat.name;
                                        let statValue = stats.base_stat;
                                        return  <Grid item><Typography>{statName} <br/> {statValue} </Typography></Grid>
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Button variant="contained" onClick = {() => backButtonSelectedHandler()} style={{marginTop: 60}}>Back</Button>  
        </Container>)
    }


    return (
        <Auxiliary>
            {card}
        </Auxiliary>
        
    );
}


export default Pokemon;



