import { useState } from "react"
import CardItem from "./CardItem"
import { usePathname } from "next/navigation"
import { useUser } from "../_contexts/userProvider"

const CardsDataTable = ({ cards: initialCards }) => {
  const [cards, setCards] = useState(initialCards)
  const { selectedCard, setSelectedCard } = useUser()
  const isCardsArray = Array.isArray(cards)
  const params = usePathname()

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  return (
    <div className="flex flex-col bg-white rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-fit m-4 p-4">
      <h1 className="text-A1 font-bold text-xl mb-4">{params === '/cards' ? 'Tus tarjetas' : 'Seleccionar tarjeta'}</h1>
      <hr className="h-[2px] bg-gray-300 border-gray-300 mb-6" />
      {isCardsArray && cards.map(card => <CardItem key={card.id} id={card.id} card={card.number_id} onDelete={handleDelete} selectedCard={selectedCard} onSelect={setSelectedCard} />)}

    </div>
  )
}

export default CardsDataTable