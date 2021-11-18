export async function getAllPokemon(url) {
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}


export async function getPokemon(url) {
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

export async function getSinglePokemonData(id) {
    let allData;
    return new Promise((resolve,reject) => {
        fetch('http://pokeapi.co/api/v2/pokemon-species/' + id + '/')
        .then(res => res.json())
        .then(data => { return fetch(data.evolution_chain.url)})
        .then(newData => newData.json())
            .then(finalData => {
                allData = finalData;
                return Promise.all([
                    fetch('https://pokeapi.co/api/v2/pokemon/' + id),
                    fetch('https://pokeapi.co/api/v2/pokemon-species/' + id + '/')
                ]).then(function (responses) {
                    // Get a JSON object from each of the responses
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                }).then(function (data) {
                    // Log the data to the console
                    // You would do something with both sets of data here
                    let newData = data.concat(allData)
                    resolve(newData);
                }).catch(function (error) {
                    // if there's an error, log it
                    console.log(error);
                })
            })
            .catch(err => {
            console.log(err)
        });
    })
}



export const getPokemonsList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemonDetailedList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const {name, id, types} = data;
      return {name, id, types};
    } catch (err) {}
  };
  