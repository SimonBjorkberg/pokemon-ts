'use client'

import ScrollContainer from "./components/ScrollContainer";
import { useState } from "react";
import SelectedContainer from "./components/SelectedContainer";

interface Selected {
  name: string
}

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState<Selected | undefined>(undefined)

  return (
    <main className={`h-screen flex`}>
      <div className="h-full flex flex-row justify-between w-full">
        <div className="h-screen flex mx-auto">
          <ScrollContainer setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
        </div>
        <div className="w-1/2 h-[90%] my-auto flex">
          {selectedPokemon && <SelectedContainer selectedPokemon={selectedPokemon} />}
        </div>
      </div>
    </main>
  );
}
