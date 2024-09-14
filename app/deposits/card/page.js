'use client'
import { useSession } from "next-auth/react";
import AddCardBox from "../../_components/AddCardBox";
import ArrowBtn from "../../_components/ArrowBtn";
import BigBtn from "../../_components/BigBtn";
import CardsDataTable from "../../_components/CardsDataTable";
import { useUserAccount } from "../../_hooks/useUserAccount";
import { useUserCards } from "../../_hooks/useUserCards";
import { useLoginData } from "../../_context/LoginContext";

export default function Page() {
  const { selectedCard } = useLoginData()
  const session = useSession()
  const jwt = session.data?.user.token
  const { id: accountId } = useUserAccount(jwt)
  const cards = useUserCards(accountId, jwt)

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+450px)]">
      <ArrowBtn page='Cargar dinero' />
      <CardsDataTable cards={cards} />
      <AddCardBox cards={cards} />
      <BigBtn text='Continuar' goto={'/deposits/card/money'} disabled={!selectedCard} />
    </main>
  )
}