export class PokemonModel {
    name;
    id;
    image;
    types;
    type;

    constructor (data){
        this.name = data.name;
        this.id = data.id;
        this.image = data.sprites.other.dream_world.front_default;
        this.types = data.types.map(type => type.type.name)
        this.type = data.types[0].type.name
    }
}