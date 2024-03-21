import axios from 'axios';

class PokemonService {
    api: any;
    constructor() {
        this.api = axios.create({
            baseURL: "https://pokeapi.co/api/v2"
        })
    }

    getOnePokemon = (url: string) => {
        return this.api.get(url)
    }
    getTwenty = (offset: number) => {
        return this.api.get(`/pokemon?offset=${offset}&limit=20`)
    }
    getAll = () => {
        return this.api.get('/pokemon?offset=0&limit=1302')
    }
}

const pokemonService = new PokemonService();

export default pokemonService;