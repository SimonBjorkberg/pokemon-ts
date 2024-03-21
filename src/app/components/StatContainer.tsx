'use client'

import { useEffect, useState } from "react"

interface Props {
    stat: {
        stat: {
            name: string
        }
        base_stat: string
    }
}
export default function StatContainer({ stat }: Props) {
    const [statColor, setStatColor] = useState("")
    const [borderColor, setBorderColor] = useState("")

    const setColor = () => {
        switch (stat.stat.name) {
            case 'hp':
                setStatColor('text-red-500')
                setBorderColor('border-red-500')
                break;
            case 'attack':
                setStatColor('text-blue-500')
                setBorderColor('border-blue-500')
                break;
            case 'defense':
                setStatColor('text-green-500')
                setBorderColor('border-green-500')
                break;
            case 'special-attack':
                setStatColor('text-purple-500')
                setBorderColor('border-purple-500')
                break;
            case 'special-defense':
                setStatColor('text-teal-500')
                setBorderColor('border-teal-500')
                break;
            case 'speed':
                setStatColor('text-pink-500')
                setBorderColor('border-pink-500')
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        setColor()
    }, [])


    return (
        <div className={`${statColor} my-4 text-lg`}>
            <p className={`${borderColor} border-b p-1`}>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
        </div>

    )
}