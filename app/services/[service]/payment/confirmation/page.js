'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import ConfirmationBlock from "@/app/_components/ConfirmationBlock";
import ConfirmationPayment from "@/app/_components/ConfirmationPayment";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page({ params }) {
  const account = useSelector(state => state.user.account)
  const accountId = account?.id
  const selectedCard = useSelector(state => state.user.selectedCard)
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
      <BigBtn text='Descargar comprobante' goto={`/services/${params.service}/payment/confirmation`} handleClick={handlePrint} />
      <BigBtn text='Ir al inicio' goto={`/home`} />
    </main>
  )
}