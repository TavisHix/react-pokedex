import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import { Grid, Container, InputLabel,  } from '@material-ui/core';
import axios from 'axios';

import useStyles from './PokeCardsStyles'
import LoadingPokemonCard from '../UI/Loading/LoadingPokemonCard/LoadingPokemonCard';
import Auxilary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from './PokemonCard/PokemonCard';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const PokemonCards = React.memo(() => {
    const classes = useStyles();
    const [ nextUrl, setNextUrl] = useState(null)
    const [ allPokemon, setAllPokemon] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ limit, setLimit ] = useState(151);
    const [value, setValue] = useState('')


    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        searchPokedex(url)
    }, [])

    const fetchPokemonDetails = async url => {
        const response = await axios.get(url);
        const {name, id, types} = response.data;
        return{id, name, types}
    }

    //Called upon changing generations
    const changeGenerations = async(event) => {
        setValue(event.target.value);
        let offset = getOffset(event.target.value)
        let url = "https://pokeapi.co/api/v2/pokemon/?offset="+ offset + "&limit=20";
        try{
            const response = await axios.get(url);
            const results = response.data.results;
            const {next} = response.data;
            if(next){setNextUrl(next)};
            const detailRequest = results.map(async pokemon => await fetchPokemonDetails(pokemon.url));

            await Promise.all(detailRequest).then(detailResults => {
            setAllPokemon(detailResults);
            })
        }catch(e){
            console.error(e)
        }finally{
            setIsLoading(false)
        }
    }

    //Getting how many pokemon are in each generation
    const getOffset = (gen) => {
        switch(gen) {
            case gen = 'Gen1':
                setLimit(151)
                return 0;
            case gen = 'Gen2':
                setLimit(100)
                return 151;
            case gen = 'Gen3':
                setLimit(135)
                return 251;
            case gen = 'Gen4':
                setLimit(107)
                return 386;
            case gen = 'Gen5':
                setLimit(156)
                return 493;
            case gen = 'Gen6':
                setLimit(72)
                return 649;
            default: 
                setLimit(151)
                return 0;
        }
    }

    //Grabs info from api
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

    //uses react-waypoints to set waypoint and call searchPokemon once its hit
    const setupWaypoint = () => {
        if(allPokemon.length <= limit) {
            return (
                <Waypoint onEnter={() => {
                    searchPokedex(nextUrl)
                }} />
            )
        }
        else{
            setAllPokemon(allPokemon.slice(0,limit));
        }
    }

    let renderPokemon = () => allPokemon.map((p, i) => {
            return (
            <Auxilary key={i}>
                <PokemonCard key={i} pokemon={p} />
                {i === allPokemon.length - 1 && setupWaypoint()}
            </Auxilary>
        )
    });

    //Hanldes loading cards
    let arr = ['a','b','c','d']
    let renderPokemonCardLoading = () => arr.map((p) => {
        return (<LoadingPokemonCard key={p} />)
    })

    return ( 
        <Auxilary>
            <Container className={classes.cardGrid} alignitems="center" justify="center">
            <InputLabel>Select a Generation</InputLabel>
            <Select
                variant="filled"
                value={value}
                label="Generation"
                onChange={changeGenerations}
                style={{minWidth: '200px', height: '60px', marginBottom: '15px'}}
            >
                <MenuItem value={'Gen1'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen1/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen1/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen1/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
                <MenuItem value={'Gen2'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen2/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen2/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen2/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
                <MenuItem value={'Gen3'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen3/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen3/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen3/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
                <MenuItem value={'Gen4'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen4/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen4/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen4/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
                <MenuItem value={'Gen5'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen5/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen5/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen5/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
                <MenuItem value={'Gen6'}>
                    <Grid container > 
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen6/1.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen6/2.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <img src={'https://ik.imagekit.io/bcchhipdvlp/tr:w-350,h-350/Generations/Gen6/3.png'} alt='Gen 1 starter' style={{ height: '40px'}}/>         
                        </Grid>
                    </Grid>   
                </MenuItem>
            </Select>

                <Grid container spacing={3}>
                    <Auxilary>                        
                        {renderPokemon()}
                        {isLoading && renderPokemonCardLoading()}
                    </Auxilary>
                </Grid>
            </Container>
        </Auxilary>
    );
})

    



export default PokemonCards;