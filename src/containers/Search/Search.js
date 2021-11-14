import React , {useState, useEffect} from 'react';
import axios from 'axios';

import { Grid, Container, TextField } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from '../../components/PokemonCards/PokemonCard/PokemonCard';


const Search = () => {
    const [ allPokemon, setAllPokemon] = useState([]);
    const [ listOfNames, setListOfNames] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ choosenPoke, setChoosenPoke ] = useState();


    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=807';
        searchPokedex(url)
    }, [])

    const searchPokedex = async url => {
        try{
            const response = await axios.get(url);
            const results = response.data.results;
            setAllPokemon(results);
            setListOfNames(results.map(pokemon => pokemon.name));
        }catch(e){
            console.error(e)
        }finally{
            setIsLoading(false)
        }
    }

    const sendGetRequest = async (value) => {
       if(value === null){
            console.log('reading null')
            return;
        } else { 
                setIsLoading(true)
                try {
                    let i = allPokemon[allPokemon.findIndex(pokemon => pokemon.name === value)];
                    const resp = await axios.get(i.url);
                    const { id, name, types} = resp.data;
                    setChoosenPoke({ id, name ,types});
                } catch (err) {
                    // Handle Error Here
                    console.error(err);
                } finally {
                    setIsLoading(false)
                }
        }    
    }

    let renderPokemon = () => {
        if(isLoading) {
            return (<div>Loading</div>)
        } else {
            if(!isLoading && choosenPoke != null) {
                console.log(choosenPoke)
                return ( 
                    <Auxiliary>
                        <PokemonCard pokemon={choosenPoke} /> 
                    </Auxiliary>
                )
            }
        }  
    };

   
    
    return (
        <Container maxWidth="lg" style={{paddingTop: 45}}>
            <Grid container direction='column' alignItems="center" justifyContent="center">
                <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={listOfNames}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search Pokemon" fullWidth style={{ marginBottom: "2em"}} />}
                        onChange={(event, newValue) => sendGetRequest(newValue)}
                />
                {renderPokemon()}
                <img src='https://ik.imagekit.io/bcchhipdvlp/tr:w-300,h-300/PokeImg/001.png'/>
            </Grid>
               
        </Container>
    )
    
}


export default Search;