"use client"
import AddNewCardForm from "@/app/_components/AddNewCardForm";
import ArrowBtn from "@/app/_components/ArrowBtn";
import { useState } from "react";
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function Page() {
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

  return (
    <main className="flex flex-col items-center md:items-end justify-start bg-slate-100 h-screen">
      <ArrowBtn page='Tarjetas' />
      <Cards
        number={card.number_id}
        name={card.first_last_name}
        expiry={card.expiration_date}
        cvc={card.cod}
        focused={card.focus}
      />

      <AddNewCardForm handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} />
    </main>
  )
}