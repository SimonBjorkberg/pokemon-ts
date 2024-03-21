import MovesContainer from "./MovesContainer"
import StatContainer from "./StatContainer"

export default function SelectedContainer({ selectedPokemon }: any) {

    return (
        <>
            <div className={`border-2 rounded-tl-xl rounded-br-xl h-fit w-[90%] mx-auto mansalva-regular text-center flex-col p-4 bg-neutral-900 border-orange-300 ${selectedPokemon.name ? "flex" : "hidden"}`}>
                <section className="flex border-b w-full border-orange-300 justify-between">
                    <div className="flex">
                        <img className="w-32" src={selectedPokemon.sprites?.front_default} alt="" />
                    </div>
                    <h1 className="text-5xl my-auto">{selectedPokemon?.name?.slice(0, 1).toUpperCase() + selectedPokemon?.name?.slice(1)}</h1>
                    <div className="flex gap-5">
                        {selectedPokemon.types?.map((type: { type: { name: string } }, index: number) => {
                            return <p key={index} className="text-orange-300 my-auto text-xl">{type.type.name}</p>
                        })}
                    </div>
                </section>
                <section className="flex mx-auto w-full">
                    <div className="flex justify-between w-[70%] mx-auto">
                        {selectedPokemon?.stats?.map((stat: { stat: { name: string }, base_stat: string, }, index: number) => {
                            return <StatContainer key={index} stat={stat} />
                        })}
                    </div>
                </section>
                <section className="flex">
                    <div className="w-full h-40 overflow-y-auto grid gap-1 grid-cols-5 border border-neutral-800 bg-black p-2 rounded-md">
                        {selectedPokemon.moves?.map((move: { move: { url: string } }, index: number) => {
                            return <MovesContainer key={index} move={move} />
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}