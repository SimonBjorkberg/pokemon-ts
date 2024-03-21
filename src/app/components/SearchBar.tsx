import { useEffect, useState } from "react"

interface Pokemon {
    name: string
}

export default function Searchbar({ searchData, setSearchResults }: any) {
    const [searchValue, setSearchValue] = useState("")

    const filterData = () => {
        const result = searchData.filter((pokemon: Pokemon) => {
            return pokemon.name.includes(searchValue.toLowerCase())
        })
        setSearchResults(result)
    }

    useEffect(() => {
        if (searchValue === "") {
            setSearchResults([])
        }
        else {
            filterData()
        }
    }, [searchValue])

    return (
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search for a Pokemon!" className="p-3 rounded-xl outline-none border-2 text-orange-300 mansalva-regular border-orange-300 bg-neutral-950" />
    )
}