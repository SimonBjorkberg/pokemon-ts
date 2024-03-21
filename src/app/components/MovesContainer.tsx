import { useEffect, useState } from "react"
import pokemonService from "../utils/services/pokemonService"
import MovesModal from "./MovesModal"

interface Props {
    move: {
        move: {
            url: string
        }
    }
}

interface Move {
    name: string,
}

export default function MovesContainer({ move }: Props) {
    const [foundMove, setFoundMove] = useState<Move | null>(null)
    const [showModal, setShowModal] = useState(false)
    const getOneMove = async () => {
        const response = await pokemonService.getOneMove(move.move.url)
        setFoundMove(response.data)
    }

    useEffect(() => {
        getOneMove()
    }, [move])

    return (
        <>
            <div className="border hover:bg-neutral-900 hover:text-orange-300 hover:cursor-pointer h-fit" onClick={() => setShowModal(true)}>
                {foundMove &&
                    <p>{foundMove?.name}</p>
                }
            </div>
            <MovesModal showModal={showModal} setShowModal={setShowModal} move={foundMove} />
        </>
    )
}