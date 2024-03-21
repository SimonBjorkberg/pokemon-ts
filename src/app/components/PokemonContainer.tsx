'use client'
import { useEffect, useState } from "react"
import PokemonStatsContainer from "./PokemonStatsContainer"
import pokemonService from "../utils/services/pokemonService"

export default function PokemonContainer({ pokemon }: any) {

    const [onePokemon, setOnePokemon] = useState<any>({})

    const getOnePokemon = async () => {
        const foundPokemon = await pokemonService.getOnePokemon(pokemon.name)
        setOnePokemon(foundPokemon.data)
    }

    useEffect(() => {
        getOnePokemon()
    }, [])

    return (
        <main className="text-white border border-neutral-700 w-52 h-fit flex flex-col relative p-5 pb-10 rounded-md mt-10 hover:cursor-pointer hover:bg-neutral-950">
            <img src={onePokemon?.sprites?.front_default} alt="" className="h-20 w-20 absolute self-center top-[-50px]" />
            <div className="flex justify-center">
                <p className="text-xl font-light mb-4">{onePokemon?.name?.slice(0, 1).toUpperCase() + onePokemon?.name?.slice(1)}</p>
            </div>
            <div className="grid grid-cols-3 mx-auto gap-2 font-light text-sm">
                {onePokemon?.stats?.map((stat: {}, index: number) => {
                    return <PokemonStatsContainer key={index} stat={stat} />
                })}
            </div>
        </main>
    )
}
