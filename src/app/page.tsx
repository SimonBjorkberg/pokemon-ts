'use client'

import ScrollContainer from "./components/ScrollContainer";
import { useState } from "react";

interface Selected {
  name: string
}
interface Pokemon {
  name: string
}

export default function Home() {
  const [data, setData] = useState<Pokemon[] | []>([])
  const [selectedPokemon, setSelectedPokemon] = useState<Selected | {}>({})

  return (
    <main className={`h-screen flex`}>
      <div className="h-full flex flex-col w-fit mx-auto">
        <ScrollContainer data={data} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} setData={setData} />
      </div>
    </main>
  );
}
