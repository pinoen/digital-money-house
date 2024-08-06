'use client'
import AddCardBox from "@/app/_components/AddCardBox";
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CardsDataTable from "@/app/_components/CardsDataTable";
import { useUser } from "@/app/_contexts/userProvider";

export default function Page() {
  const { cards } = useUser()
  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+250px)]">
      <ArrowBtn page='Cargar dinero' />
      <CardsDataTable cards={cards} />
      <AddCardBox />
      <BigBtn text='Continuar' goto={'/deposits/card/money'} />
    </main>
  )
}