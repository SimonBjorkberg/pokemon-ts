export default function SelectedContainer({ selectedPokemon }: any) {

    console.log(selectedPokemon)
    return (
        <main className="border h-fit w-1/2">
            {selectedPokemon.name}
        </main>
    )
}