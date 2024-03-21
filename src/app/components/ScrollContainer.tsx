'use client'
import { useEffect, useRef, useState } from "react";
import pokemonService from "../utils/services/pokemonService";
import PokemonContainer from "./PokemonContainer";

interface Pokemon {
    name: string
    url: string
  }

export default function ScrollContainer({ setSelectedPokemon, selectedPokemon }: any) {
    const scrollContainer = useRef(null)
    const [page, setPage] = useState(0)
    const [data, setData] = useState<Pokemon[] | []>([])

    const getTwentyPokemon = async (pageNumber: number) => {
        const foundTwentyPokemon = await pokemonService.getTwenty(pageNumber);
        setData((prevData: Pokemon[]) => [...prevData, ...foundTwentyPokemon.data.results]);
      }

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight }: any = scrollContainer.current;
            if (scrollTop + clientHeight >= scrollHeight) {
                setPage((prevPage: number) => prevPage + 20);
            }
        };

        const container: any = scrollContainer.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        getTwentyPokemon(page)
      }, [page])

    return (
        <>
            {data && <div ref={scrollContainer} className={`grid grid-cols-4 my-auto gap-4 overflow-y-scroll h-[90%] px-4 py-4 transition-all duration-200`}>
                {data.map((pokemon: any, index: number) => {
                    return <PokemonContainer key={index} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
                })}
            </div>}
        </>
    )
}