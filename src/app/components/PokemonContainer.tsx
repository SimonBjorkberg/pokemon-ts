'use client'

import { useEffect, useState } from "react"
import PokemonStatsContainer from "./PokemonStatsContainer"
import pokemonService from "../utils/services/pokemonService"

interface Pokemon {
    name: string,
    sprites: {
        front_default: string
    },
    stats: [{
        base_stat: number,
        stat: {
            name: string,
        }
    }]
}

interface Props {
    setSelectedPokemon: any,
    pokemon : {
        name: string,
        sprites: {
            front_default: string
        },
        stats: [{
            base_stat: number,
            stat: {
                name: string,
            }
        }]
    }
}

interface Stat {
    stat: {
        name: string
    },
    base_stat: number
}

export default function PokemonContainer({ pokemon, setSelectedPokemon }: Props) {
    const [onePokemon, setOnePokemon] = useState<Pokemon | undefined>(undefined)

    const getOnePokemon = async () => {
        const foundPokemon = await pokemonService.getOnePokemon(pokemon.name)
        setOnePokemon(foundPokemon.data)
    }

    useEffect(() => {
        getOnePokemon()
    }, [])

    return (
        <>
            {onePokemon && <main className="text-white border border-neutral-700 bg-neutral-900 w-52 flex flex-col relative p-5 pb-10 rounded-md mt-10 hover:cursor-pointer hover:bg-neutral-950 hover:scale-105 transition-all duration-200" onClick={() => setSelectedPokemon(onePokemon)}>
                <img src={onePokemon?.sprites?.front_default} alt="" className="h-20 w-20 absolute self-center top-[-50px]" />
                <div className="flex justify-center">
                    <p className="text-xl font-extralight mb-4">{onePokemon?.name?.slice(0, 1).toUpperCase() + onePokemon?.name?.slice(1)}</p>
                </div>
                <div className="grid grid-cols-3 mx-auto gap-2 font-light text-sm">
                    {onePokemon?.stats?.map((stat: Stat, index: number) => {
                        return <PokemonStatsContainer key={index} stat={stat} />
                    })}
                </div>
            </main>}
        </>
    )
}
