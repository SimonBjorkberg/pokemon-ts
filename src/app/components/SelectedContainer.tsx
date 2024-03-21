export default function SelectedContainer({ selectedPokemon }: any) {

    console.log(selectedPokemon)

    return (
        <>
            <main className="w-1/2 h-full flex">
                <div className={`border-2 h-fit mansalva-regular flex flex-col w-fit text-center p-8 bg-neutral-900 border-orange-300 mx-auto my-auto rounded-md ${selectedPokemon.name ? "flex" : "hidden"}`}>
                    <img className="w-52" src={selectedPokemon.sprites?.front_default} alt="" />
                    <h1 className="text-4xl">{selectedPokemon.name}</h1>
                </div>
            </main>
        </>
    )
}