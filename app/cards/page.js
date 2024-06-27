'use client'
import AddCardBox from "../_components/AddCardBox";
import ArrowBtn from "../_components/ArrowBtn";
import CardsDataTable from "../_components/CardsDataTable";
import { useUser } from "../_contexts/userProvider";

export default function Page() {
  const { cards } = useUser()

  return (
    <main className="flex flex-col justify-start md:items-end bg-slate-100 h-screen">
      <ArrowBtn page='Tarjetas' />
      <AddCardBox />
      <CardsDataTable cards={cards} />
    </main>
  );
}