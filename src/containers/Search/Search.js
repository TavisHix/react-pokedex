import React , {useState, useEffect} from 'react'

const Search = () => {

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?llimit807';
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
    return (
        <div>
            This page is for searching pokemon
        </div>
    )
    
}


export default Search;