import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import { useDeleteCard } from "../_hooks/useDeleteCard"
import { useUserAccount } from "../_hooks/useUserAccount"

const CardItem = ({ id, card, selectedCard, setSelectedCard }) => {
  const params = usePathname()
  const session = useSession()
  const jwt = session.data?.user.token
  const { id: accountId } = useUserAccount(jwt)
  const { mutate, isPending } = useDeleteCard(accountId, id, jwt)

  return (
    <div className="flex justify-start lg:justify-between gap-4 my-8">
      <div className="flex gap-4">
        <div className="bg-A3 w-6 h-6 rounded-full"></div><span>Terminada en {card.toString().slice(-4)}</span>
      </div>
      {params === '/cards' ?
        <button className="font-semibold ml-8" onClick={() => mutate()} disabled={isPending}>Eliminar</button> :
        <input type="radio" className="ml-8 checked:bg-A3" checked={selectedCard === id} onChange={() => setSelectedCard(id)} />}
      <hr className="h-[2px] bg-gray-300 border-gray-300 z-10 lg:hidden" />
    </div>
  )
}

export default CardItem