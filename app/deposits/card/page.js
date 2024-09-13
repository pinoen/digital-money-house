'use client'
import { useSession } from "next-auth/react";
import AddCardBox from "../../_components/AddCardBox";
import ArrowBtn from "../../_components/ArrowBtn";
import BigBtn from "../../_components/BigBtn";
import CardsDataTable from "../../_components/CardsDataTable";
import { useUserAccount } from "../../_hooks/useUserAccount";
import { useUserCards } from "../../_hooks/useUserCards";
import { useState } from "react";

export default function Page() {
  const session = useSession()
  const jwt = session.data?.user.token
  const account = useUserAccount(jwt)
  const cards = useUserCards(account?.id, jwt)
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+250px)]">
      <ArrowBtn page='Cargar dinero' />
      <CardsDataTable cards={cards} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
      <AddCardBox cards={cards} />
      <BigBtn text='Continuar' goto={'/deposits/card/money'} />
    </main>
  )
}