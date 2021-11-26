import React , {useState, useEffect} from 'react';
import axios from 'axios';

import { Grid, Container, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import PokemonCard from '../../components/PokemonCards/PokemonCard/PokemonCard';
import ErrorMSG from '../../components/UI/error/ErrorMSG';

const Search = () => {
    const [ allPokemon, setAllPokemon] = useState([]);
    const [ listOfNames, setListOfNames] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ choosenPoke, setChoosenPoke ] = useState();
    const [error, setError] = useState(false)

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
                    setError(true);
                } finally {
                    setIsLoading(false);
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

    let renderAll=(
        <Grid container direction='column' alignItems="center" justifyContent="center" style={{ minHeight: '70vh' }}>
            <Autocomplete
                    id="combo-box-demo"
                    options={listOfNames}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search by Pokemon Name" fullWidth style={{ marginBottom: "2em"}} />}
                    onChange={(event, newValue) => sendGetRequest(newValue)}
            />
            {renderPokemon()}
        </Grid>
    )

    if(error) {
        renderAll = <div><ErrorMSG/></div>
    }
    
    return (
        <Container maxWidth="lg" style={{paddingTop: 45}}>
            {renderAll}
        </Container>
    )
    
}


export default Search;