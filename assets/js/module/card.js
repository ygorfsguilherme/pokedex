import { capitalize } from "./capitalize.js";
import { PokemonModel } from "./pokemonModel.js";


const pokemonContainer = document.querySelector("[data-pokemon]");

const Card = (pokemon) => {

    let pokemonCard = `
    <section class="pokemon__card ${pokemon.type}">
        <div class="pokemon__info">
            <h3 class="pokemon__title">${capitalize(pokemon.name)}</h3>
            ${pokemon.types.map(type => `<span class="pokemon__skill">${type}</span>`).join('')}
        </div>

        <div class="pokemon__body">
            <span class="pokemon__id">#${pokemon.id}</span>
            <img class="pokemon__image" src="${pokemon.image}" alt="${pokemon.name}">
        </div>
    </section>`;

    pokemonContainer.insertAdjacentHTML('beforeend', pokemonCard);
}

export const CriarCard = (pokemon)=>{
    const modelo = new PokemonModel(pokemon);
    
    Card(modelo)
}