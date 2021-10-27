import React, { useState, useEffect } from 'react'
import { Grid, Container,  } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';

import useStyles from './PokeCardsStyles'
import { getAllPokemon, getPokemon } from '../../services/services';
import Auxilary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from './PokemonCard/PokemonCard';

const PokemonCards = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const intialUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=811';
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(intialUrl);
            await loadingPokemon(response.results)
            setLoading(false);
        }
        fetchData();
    }, [])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonInfo = await getPokemon(pokemon.url);
                return pokemonInfo;
        }))
        setPokemonData(_pokemonData);
    }

    const changePage = (event, value) => {
        setPageNumber(value);
    }

    const classes = useStyles();

    const pokemonPerPage = 100;
    const pagesVisited = pageNumber * pokemonPerPage;
    const pageCount = Math.round(pokemonData.length / pokemonPerPage )
    return ( 
        <Auxilary>
            <Pagination count={pageCount} size="large" variant="outlined" color="primary" onChange={changePage}/>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    { loading ? <h1>Loading...</h1> : (
                        <Auxilary>
                            {pokemonData.slice(pagesVisited, pagesVisited + pokemonPerPage).map((pokemon, i) => {
                                return <PokemonCard key={pokemon.id} pokemon={pokemon} />
                            })}
                        </Auxilary>
                    )}
                </Grid>
            </Container>
        </Auxilary>
    );

}

    



export default PokemonCards;