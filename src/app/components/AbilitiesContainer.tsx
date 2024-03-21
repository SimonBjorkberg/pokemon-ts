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
}

export default function AbilitiesContainer({ ability }: Props) {
    const [foundAbility, setFoundAbility] = useState<Ability | null>(null)

    const getOneAbility = async () => {
        const response = await pokemonService.getOneAbility(ability.ability.url)
        setFoundAbility(response.data)
    }

    useEffect(() => {
        getOneAbility()
    }, [ability])

    console.log(foundAbility)

    return (
        <>
            {foundAbility && <div className="w-1/2 border">
                <h1 className="text-xl">{foundAbility.name}</h1>
                <div>

                </div>
            </div>}
        </>
    )
}