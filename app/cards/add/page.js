"use client"
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
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
    <main className="flex flex-col  items-center justify-start bg-slate-100 h-screen">
      <ArrowBtn page='Tarjetas' />
      <Cards
        number={card.number_id}
        name={card.first_last_name}
        expiry={card.expiration_date}
        cvc={card.cod}
        focused={card.focus}
      />

      <form className="m-4 p-4 flex flex-col  items-center gap-4 shadow-xl rounded-xl w-[350px]">
        <hr className="h-[2px] bg-gray-300 border-gray-300" />
        <input
          className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded shadow-md"
          type="number"
          placeholder="Número de la tarjeta*"
          name="number_id"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded shadow-md"
          type="text"
          placeholder="Nombre y apellido*"
          name="first_last_name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded shadow-md"
          type="text"
          placeholder="Fecha de vencimiento*"
          name="expiration_date"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded shadow-md"
          type="text"
          placeholder="Código de seguridad*"
          name="cod"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <BigBtn text='Continuar' />
      </form>
    </main>
  )
}