'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import ConfirmationBlock from "@/app/_components/ConfirmationBlock";
import ConfirmationPayment from "@/app/_components/ConfirmationPayment";
import { useUser } from "@/app/_contexts/userProvider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const { selectedCard, accountId } = useUser()
  const [cardData, setCardData] = useState({})

  useEffect(() => {
    axios.get(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards/${selectedCard}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
      }
    }).then(res => {
      setCardData(res.data)
    })
  }, [accountId, selectedCard])

  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-[calc(100vh+100px)]">
      <ArrowBtn page='Pagar servicios' />
      <ConfirmationBlock />
      <ConfirmationPayment card={cardData.number_id} amount={1000} />
      <BigBtn text='Descargar comprobante' goto={`/home`} handleClick={handlePrint} />
      <BigBtn text='Ir al inicio' goto={`/home`} />
    </main>
  )
}