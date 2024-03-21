import PokemonStatsContainer from "./PokemonStatsContainer"

export default function SelectedPokemon({ pokemon }: any) {

    return (
        <>
            <main className="w-1/2 flex">
                <main className="text-white border border-neutral-700 bg-neutral-900 w-fit flex flex-col relative p-5 pb-10 rounded-md my-auto transition-all duration-200 mx-auto">
                    <img src={pokemon?.sprites?.front_default} alt="" className="h-40 w-40 absolute self-center top-[-100px]" />
                    <div className="flex justify-center">
                        <p className="text-xl font-extralight mb-4">{pokemon?.name?.slice(0, 1).toUpperCase() + pokemon?.name?.slice(1)}</p>
                    </div>
                    <div className="grid grid-cols-3 mx-auto gap-2 font-light text-sm">
                        {pokemon?.stats?.map((stat: any, index: number) => {
                            return <PokemonStatsContainer key={index} stat={stat} />
                        })}
                    </div>
                </main>
            </main>
        </>
    )
}