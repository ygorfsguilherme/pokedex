import { listaPokemon } from "./listaPokemon.js";

const pokemonContainer = document.querySelector("[data-pokemon]");


function Card(pokemon){

    let pokemonCard = `
    <section class="pokemon__card">
        <div class="pokemon__info">
            <h3 class="pokemon__title">${pokemon.nome}</h3>
            ${pokemon.skill.map(skill => `<span class="pokemon__skill">${skill}</span>`)}
        </div>

        <div class="pokemon__body">
            <span class="pokemon__id">${pokemon.id}</span>
            <img class="pokemon__image" src="${pokemon.img}" alt="">
        </div>
    </section>`;

    pokemonContainer.insertAdjacentHTML("beforebegin", pokemonCard);
}

listaPokemon.forEach(pokemon => Card(pokemon))