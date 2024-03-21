import { useEffect, useState } from "react"
import pokemonService from "../utils/services/pokemonService"

interface Props {
    ability: {
        ability: {
            url: string
        }
    }
}
interface Ability {
    name: string
    flavor_text_entries: [
        {
            flavor_text: string,
            language: {
                name: string;
            }
        }
    ]
}

export default function AbilitiesContainer({ ability }: Props) {
    const [foundAbility, setFoundAbility] = useState<Ability | null>(null)

    const englishText = foundAbility?.flavor_text_entries.filter((textEntries) => {
        return textEntries.language.name === "en"
    })

    const getOneAbility = async () => {
        const response = await pokemonService.getOneAbility(ability.ability.url)
        setFoundAbility(response.data)
    }

    useEffect(() => {
        getOneAbility()
    }, [ability])

    return (
        <>
            {foundAbility && <div className="w-1/2 outline-double outline-orange-300 flex flex-col justify-center">
                <h1 className="text-3xl text-orange-300 mb-2">{foundAbility.name.slice(0, 1).toUpperCase() + foundAbility.name.slice(1)}</h1>
                <div>
                    {englishText && <p>{englishText[0].flavor_text}</p>}
                </div>
            </div>}
        </>
    )
}