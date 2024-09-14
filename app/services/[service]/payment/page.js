'use client'
import { useSession } from "next-auth/react";
import ArrowBtn from "../../../_components/ArrowBtn";
import BigBtn from "../../../_components/BigBtn";
import CardsDataTable from "../../../_components/CardsDataTable";
import ServiceToPay from "../../../_components/ServiceToPay";
import { useCreateTransaction } from "../../../_hooks/useCreateTransaction";
import { useUserAccount } from "../../../_hooks/useUserAccount";
import { useUserCards } from "../../../_hooks/useUserCards";
import { useLoginData } from "../../../_context/LoginContext";

export default function Page({ params }) {
  const { selectedCard, setSelectedCard, setServiceNumber } = useLoginData()
  const session = useSession()
  const jwt = session.data?.user.token
  const { id: accountId } = useUserAccount(jwt)
  const cards = useUserCards(accountId, jwt)
  const { mutate, isPending } = useCreateTransaction(accountId, jwt, params)

  const handlePayment = async () => {
    const data = {
      dated: new Date(),
      amount: -1000,
      description: 'Pago de servicio',
    }
    mutate(data)
    setSelectedCard(null)
    setServiceNumber(null)
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-[calc(100vh+450px)]">
      <ArrowBtn page='Pagar servicios' />
      <ServiceToPay service={params.service.toUpperCase()} amount={1000} />
      <CardsDataTable cards={cards} />
      <BigBtn text='Pagar' goto={`/services/${params.service}/payment/confirmation`} handleClick={handlePayment} disabled={isPending || !selectedCard} />
    </main>
  )
}