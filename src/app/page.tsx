'use client'

import ScrollContainer from "./components/ScrollContainer";
import { useEffect, useState } from "react";
import Searchbar from "./components/SearchBar";
import pokemonService from "./utils/services/pokemonService";
import SearchContainer from "./components/SearchContainer";

interface Selected {
  name: string
}
interface Pokemon {
  name: string
}

export default function Home() {
  const [data, setData] = useState<Pokemon[] | []>([])
  const [searchData, setSearchData] = useState<Pokemon[] | []>([])
  const [searchResults, setSearchResults] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState<Selected | {}>({})

  const getAllPokemon = async () => {
    const allPokemon = await pokemonService.getAll()
    setSearchData(allPokemon.data.results)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  console.log(searchResults)

  return (
    <main className={`h-screen flex`}>
      <div className="h-full flex flex-col w-fit mx-auto">
        <ScrollContainer data={data} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} setData={setData} />
      </div>
    </main>
  );
}
