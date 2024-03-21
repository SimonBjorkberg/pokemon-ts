import axios from 'axios';

class PokemonService {
    api: any;
    constructor() {
        this.api = axios.create({
            baseURL: "https://pokeapi.co/api/v2"
        })
    }

    getOnePokemon = (pokemonName: string) => {
        return this.api.get(`/pokemon/${pokemonName}`)
    }
    getTwenty = () => {
        return this.api.get('/pokemon?offset=0&limit=40')
    }
}

const pokemonService = new PokemonService();

export default pokemonService;