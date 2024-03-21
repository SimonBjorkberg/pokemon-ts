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
        return this.api.get('/pokemon?offset=20&limit=20')
    }
}

const pokemonService = new PokemonService();

export default pokemonService;