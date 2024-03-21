'use client'

import { useEffect, useState } from "react";
import pokemonService from "./utils/services/pokemonService";
import PokemonContainer from "./components/PokemonContainer";

interface Selected {
  name: string
}

export default function Home() {
  const [twentyPokemon, setTwentyPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState<Selected>({})

  const getTwentyPokemon = async () => {
    const foundTwentyPokemon = await pokemonService.getTwenty()
    setTwentyPokemon(foundTwentyPokemon.data.results)
  }

  useEffect(() => {
    getTwentyPokemon()
  }, [])

  return (
    <main className={`h-screen flex`}>
      {twentyPokemon && <div className={`grid grid-cols-4 gap-4 mx-auto overflow-y-scroll h-[90%] px-4 py-4 my-auto transition-all duration-200`}>
        {twentyPokemon.map((pokemon: any, index: number) => {
          return <PokemonContainer key={index} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
        })}
      </div>
      }
    </main>
  );
}
