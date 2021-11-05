import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import { Grid, Container,  } from '@material-ui/core';
import axios from 'axios';

import useStyles from './PokeCardsStyles'
import LoadingPokemonCard from '../UI/Loading/LoadingPokemonCard/LoadingPokemonCard';
import Auxilary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from './PokemonCard/PokemonCard';




const PokemonCards = () => {
    const classes = useStyles();
    const [ nextUrl, setNextUrl] = useState(null)
    const [ allPokemon, setAllPokemon] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        searchPokedex(url)
    }, [])

    const fetchPokemonDetails = async url => {
        const response = await axios.get(url);
        const {name, id, types} = response.data;
        return{id, name, types}
    }

    const searchPokedex = async url => {
        setIsLoading(true);
        try{
            const response = await axios.get(url);
            const results = response.data.results;
            const {next} = response.data;
            if(next){setNextUrl(next)};
            const detailRequest = results.map(async pokemon => await fetchPokemonDetails(pokemon.url));

            await Promise.all(detailRequest).then(detailResults => {
            setAllPokemon( [...allPokemon, ...detailResults]);
            })
        }catch(e){
            console.error(e)
        }finally{
            setIsLoading(false)
        }
    }

    const setupWaypoint = () => {
        if(allPokemon.length <= 900) {
            return (
                <Waypoint onEnter={() => {
                    searchPokedex(nextUrl)
                }} />
            )
        }
        else{
        }
    }

    let renderPokemon = () => allPokemon.map((p, i) => {
        if(i < 807) {
            return (
                <Auxilary>
                    <PokemonCard key={p.id} pokemon={p} />
                    {i === allPokemon.length - 1 && setupWaypoint()}
                </Auxilary>
            )
        }
        else{
            return null;
            //Do nothing for pokemon over #807
        }
    });

    let arr = [1,2,3,4]
    let renderPokemonCardLoading = () => arr.map((p,i) => {
        return (<LoadingPokemonCard key={p} />)
    })

    return ( 
        <Auxilary>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    <Auxilary>
                        {renderPokemon()}
                        {isLoading && renderPokemonCardLoading()}
                    </Auxilary>
                </Grid>
            </Container>
        </Auxilary>
    );

}

    



export default PokemonCards;