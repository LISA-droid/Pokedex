export function getPokemon(url = "https://pokeapi.co/api/v2/pokemon") {
    
    return fetch(url)
    .then((response) =>{
        if (response && response.status === 200) {
            return response.json()
        } else {
            return null
        }
    })
    .catch((error) => console.log('error', error));
}