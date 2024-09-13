"use client"
import AddNewCardForm from "../../_components/AddNewCardForm";
import ArrowBtn from "../../_components/ArrowBtn";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useUserAccount } from "../../_hooks/useUserAccount";
import { useCreateCard } from "../../_hooks/useCreateCard";

export default function Page() {
  const session = useSession()
  const jwt = session.data?.user.token
  const account = useUserAccount(jwt)
  const [card, setCard] = useState({
    cod: '',
    expiration_date: '',
    first_last_name: '',
    number_id: '',
    focus: ''
  })

  const handleInputChange = (event) => {
    setCard({
      ...card,
      [event.target.name]: event.target.value
    })
  }

  const handleInputFocus = (event) => {
    setCard({
      ...card,
      focus: event.target.name
    })
  }

  const { mutate } = useCreateCard(account?.id, jwt)

  const handleAddCard = async () => {
    const newCard = {
      ...card,
      cod: parseInt(card.cod),
      number_id: parseInt(card.number_id),
      expiration_date: card.expiration_date.slice(0, 2) + '/20' + card.expiration_date.slice(2)
    }
    mutate(newCard)
  }

  return (
    <main className="flex flex-col items-center lg:items-center lg:ml-52 lg:pt-8 md:items-end justify-start bg-slate-100 h-[calc(100vh+100px)]">
      <ArrowBtn page='Tarjetas' />
      <Cards
        number={card.number_id}
        name={card.first_last_name}
        expiry={card.expiration_date}
        cvc={card.cod}
        focused={card.focus}
      />

      <AddNewCardForm handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} handleAddCard={handleAddCard} />
    </main>
  )
}