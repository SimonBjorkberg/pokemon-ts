'use client'

import { useEffect, useState } from "react";
import pokemonService from "./utils/services/pokemonService";
import PokemonContainer from "./components/PokemonContainer";
import SelectedPokemon from "./components/SelectedPokemon";

export default function Home() {
  const [twentyPokemon, setTwentyPokemon] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(undefined)

  const getTwentyPokemon = async () => {
    const foundTwentyPokemon = await pokemonService.getTwenty()
    setTwentyPokemon(foundTwentyPokemon.data.results)
  }

  useEffect(() => {
    getTwentyPokemon()
  }, [])

  return (
    <main className="h-screen flex flex-row">
      {twentyPokemon && <div className="grid grid-cols-4 gap-4 w-fit overflow-y-scroll h-[90%] mx-auto px-4 my-auto transition-all duration-200">
        {twentyPokemon.map((pokemon: any, index: number) => {
          return <PokemonContainer key={index} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} />
        })}
      </div>
      }
      {selectedPokemon && <SelectedPokemon pokemon={selectedPokemon} />}
    </main>
  );
}
