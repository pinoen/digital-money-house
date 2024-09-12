'use client'
import AddCardBox from "../_components/AddCardBox";
import ArrowBtn from "../_components/ArrowBtn";
import CardsDataTable from "../_components/CardsDataTable";


export default function Page() {

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+115px)]">
      <ArrowBtn page='Tarjetas' />
      <AddCardBox cards={cardsData} />
      <CardsDataTable cards={cardsData} />
    </main>
  );
}