"use client"
import AddNewCardForm from "@/app/_components/AddNewCardForm";
import ArrowBtn from "@/app/_components/ArrowBtn";
import { useUser } from "@/app/_contexts/userProvider";
import axios from "axios";
import { useState } from "react";
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function Page() {
  const { accountId, addCard } = useUser()
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

  const handleAddCard = async () => {
    const newCard = {
      ...card,
      cod: parseInt(card.cod),
      number_id: parseInt(card.number_id),
      expiration_date: card.expiration_date.slice(0, 2) + '/20' + card.expiration_date.slice(2)
    }

    try {
      const response = await axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards`, newCard, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
        }
      })
      addCard(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex flex-col items-center lg:items-center lg:ml-52 lg:pt-8 md:items-end justify-start bg-slate-100 h-screen">
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