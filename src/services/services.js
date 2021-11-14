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

// export async function getSinglePokemonData(id) {
//     return new Promise((resolve,reject) => {
//         fetch("https://pokeapi.co/api/v2/pokemon/" + id)
//         .then(res => res.json())
//         .then(data => {
//             resolve(data);
//         }).catch(err => {
//             console.log(err)
//         });
//     })
// }


// export async function getSinglePokemonData(id) {
//     return Promise.all([
//             fetch('https://pokeapi.co/api/v2/pokemon/' + id),
//             fetch('http://pokeapi.co/api/v2/pokemon-species/' + id + '/')
//     ]).then(function (responses) {
//         // Get a JSON object from each of the responses
//         return Promise.all(responses.map(function (response) {
//             return response.json();
//         }));
//     }).then(function (data) {
//         // Log the data to the console
//         // You would do something with both sets of data here
//         console.log(data);
//         return data;
//     }).catch(function (error) {
//         // if there's an error, log it
//         console.log(error);
//     })
// }

export async function getSinglePokemonData(id) {
    let allData;
    return new Promise((resolve,reject) => {
        fetch('http://pokeapi.co/api/v2/pokemon-species/' + id + '/')
        .then(res => res.json())
        .then(data => { return fetch(data.evolution_chain.url)})
        .then(newData => newData.json())
            .then(finalData => {
                allData = finalData;
                console.log(allData)
                return Promise.all([
                    fetch('https://pokeapi.co/api/v2/pokemon/' + id),
                    fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
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
