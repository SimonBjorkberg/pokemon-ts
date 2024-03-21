'use client'

import PokemonContainer from "./PokemonContainer"

export default function SearchContainer({ setSelectedPokemon, selectedPokemon, data }: any) {

    console.log("data", data)

    return (
        <>
            {data && <div className={`grid grid-cols-4 gap-4 mx-auto overflow-y-scroll h-[90%] px-4 py-4 my-auto transition-all duration-200`}>
                {data.map((pokemon: any, index: number) => {
                    return <PokemonContainer key={index} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
                })}
            </div>}
        </>
    )
}