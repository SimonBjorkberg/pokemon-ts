import { useEffect, useState } from "react"

interface Props {
    searchData: [
        {
            name: string
        }
    ]
    searchResults: any,
    setSearchResults: any
}

export default function Searchbar({ searchData, setSearchResults }: Props) {
    const [searchValue, setSearchValue] = useState("")

    const filterData = () => {
        const result = searchData.filter((pokemon) => {
            return pokemon.name.includes(searchValue.toLowerCase())
        })
        setSearchResults(result)
    }

    useEffect(() => {
        filterData()
    }, [searchValue])

    return (
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search for a Pokemon!" className="p-3 rounded-xl outline-none border-2 text-orange-300 mansalva-regular border-orange-300 bg-neutral-950" />
    )
}