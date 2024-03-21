import { useEffect, useState } from "react"

export default function PokemonStatsContainer({ stat }: any) {
    const [color, setColor] = useState("")

    const getColor = (statName: string) => {
        switch (statName) {
            case "hp":
                setColor("bg-red-500")
                break;
            case "attack":
                setColor("bg-blue-500")
                break;
            case "defense":
                setColor("bg-green-500")
                break;
            case "special-attack":
                setColor("bg-purple-500")
                break;
            case "special-defense":
                setColor("bg-pink-500")
                break;
            case "speed":
                setColor("bg-cyan-500")
                break;
            default:
                setColor("bg-black-500")
                break;
        }
    }

    useEffect(() => {
        getColor(stat.stat.name)
    }, [])

    return (
        <div className={`${color} p-2 rounded-md`}>
            <p className="text-center">{stat.base_stat}</p>
        </div>
    )
}