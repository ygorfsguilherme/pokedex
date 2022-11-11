import { PokemonApi } from './module/request.js';

const more = document.querySelector('button')

var limit = 10;
var offset = 0;

PokemonApi(offset, limit)

more.addEventListener('click', ()=>{
    offset = offset + limit;
    PokemonApi(offset, limit)
})