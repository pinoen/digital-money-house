'use client'
import AddCardBox from "@/app/_components/AddCardBox";
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CardsDataTable from "@/app/_components/CardsDataTable";
import { useSelector } from "react-redux";

export default function Page() {
  const cards = useSelector((state) => state.user.cards)

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+250px)]">
      <ArrowBtn page='Cargar dinero' />
      <CardsDataTable cards={cards} />
      <AddCardBox cards={cards} />
      <BigBtn text='Continuar' goto={'/deposits/card/money'} />
    </main>
  )
}