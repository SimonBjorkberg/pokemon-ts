'use client'

import { useEffect, useState } from "react"
import pokemonService from "../utils/services/pokemonService"

interface Pokemon {
    name: string,
    id: number,
    sprites: {
        front_default: string
    },
    stats: [{
        base_stat: number,
        stat: {
            name: string,
        }
    }]
    types: [
        {
            type: {
                name: string
            }
        }
    ]
}
interface Props {
    setSelectedPokemon: any,
    selectedPokemon: any,
    pokemon: {
        name: string,
        url: string,
    }
}

export default function PokemonContainer({ pokemon, setSelectedPokemon, selectedPokemon }: Props) {
    const [onePokemon, setOnePokemon] = useState<Pokemon | undefined>(undefined)

    const getOnePokemon = async () => {
        const foundPokemon = await pokemonService.getOnePokemon(pokemon.url)
        setOnePokemon(foundPokemon.data)
    }

    useEffect(() => {
        getOnePokemon()
    }, [])

    return (
        <>
            {onePokemon && <main className={`border bg-neutral-950 border-neutral-700 border-y-orange-300 bg-gradient-to-t w-40 flex flex-col rounded-xl hover:cursor-pointer transition-all duration-200 mansalva-regular h-fit max-h-fit ${selectedPokemon.name === onePokemon.name ? "from-neutral-800 to-neutral-700 border-orange-300" : "hover:scale-105"}`} onClick={() => setSelectedPokemon(onePokemon)}>
                <div className="flex flex-col">
                    <div className="w-fit rounded-tl-xl px-4 rounded-br-xl bg-orange-300 text-black">#{onePokemon.id}</div>
                    <img src={onePokemon?.sprites?.front_default} alt="" className="h-32 w-32 self-center my-3" />
                    <p className="font-extralight text-2xl self-center">{onePokemon?.name?.slice(0, 1).toUpperCase() + onePokemon?.name?.slice(1)}</p>
                    <div className={`flex ${onePokemon.types.length > 1 ? "justify-between" : "justify-center"} w-3/4 mx-auto my-5`}>
                        {onePokemon.types.map((type, index) => {
                            return <p key={index} className="text-orange-300">{type.type.name}</p>
                        })}
                    </div>
                </div>
            </main>}
        </>
    )
}