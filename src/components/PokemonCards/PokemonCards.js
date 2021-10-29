import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import { Grid, Container,  } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

import useStyles from './PokeCardsStyles'
import LoadingPokemonCard from '../UI/Loading/LoadingPokemonCard/LoadingPokemonCard';
import { getAllPokemon, getPokemon } from '../../services/services';
import Auxilary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from './PokemonCard/PokemonCard';




const PokemonCards = () => {
    const d = new Date();
    let start, stop;
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
            console.log('starting fetch')
            const response = await axios.get(url);
            const results = response.data.results;
            const {next} = response.data;
            if(next){setNextUrl(next)};
            const detailRequest = results.map(async pokemon => await fetchPokemonDetails(pokemon.url));

            await Promise.all(detailRequest).then(detailResults => {
            setAllPokemon( [...allPokemon, ...detailResults]);
            })
            console.log('fetch finished')
        }catch(e){
        console.error(e)
        }finally{
        setIsLoading(false)
        }
    }

    const setupWaypoint = () => {
        if(allPokemon.length <= 900) {
            console.log('if for waypoint')
        return (
            <Waypoint onEnter={() => {
                console.log('entering waypoint')
                searchPokedex(nextUrl)
            }} />
        )
        }
        else{
        setAllPokemon(allPokemon.splice(0, 898));
        }
    }

    let renderPokemon = () => allPokemon.map((p, i) => {
        return (
            <Auxilary>
                <PokemonCard key={p.id} pokemon={p} />
                {i == allPokemon.length - 1 && setupWaypoint()}
            </Auxilary>
        )
        // i === allPokemon.length - 6 ? <div key={p.id} ref={lastElementRef}>{p.name}</div> :   <div key={p.id}>{p.name}</div>
    });

    let arr = [1,2,3,4]
    let renderPokemonCardLoading = () => arr.map((p) => {
        return (<LoadingPokemonCard/>)
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