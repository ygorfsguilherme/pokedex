import { CriarCard } from './card.js'

const PokemonApiList = (PokemonData) => {
    return PokemonData.map(
        data => fetch(data.url)
                    .then(response => response.json())
    )
}

export const PokemonApi = (offset, limit) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    
    fetch(URL)
        .then(response => response.json())
        .then(data => data.results)
        .then(data => PokemonApiList(data))
        .then(request => Promise.all(request))
        .then(pokemonDetails => pokemonDetails.map(pokemon => CriarCard(pokemon)))
}