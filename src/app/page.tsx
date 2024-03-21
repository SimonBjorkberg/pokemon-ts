'use client'

import { useEffect, useState } from "react";
import pokemonService from "./utils/services/pokemonService";
import PokemonContainer from "./components/PokemonContainer";

export default function Home() {

  const [pokemon, setPokemon] = useState({})
  const [twentyPokemon, setTwentyPokemon] = useState([])

  const getPokemon = async () => {
    const foundPokemon = await pokemonService.getOnePokemon("charmander")
    setPokemon(foundPokemon.data)
  }

  const getTwentyPokemon = async () => {
    const foundTwentyPokemon = await pokemonService.getTwenty()
    setTwentyPokemon(foundTwentyPokemon.data.results)
  }

  useEffect(() => {
    getTwentyPokemon()
    getPokemon()
  }, [])

  console.log("twenty", twentyPokemon)

  return (
    <main className="h-screen">
      {twentyPokemon && <div className="grid grid-cols-4 gap-4 w-fit overflow-y-scroll h-[90%] px-4">
        {twentyPokemon.map((pokemon) => {
          return <PokemonContainer pokemon={pokemon} />
        })}
      </div>
      }
    </main>
  );
}
