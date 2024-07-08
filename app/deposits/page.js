'use client'
import { useRouter } from "next/navigation";
import AddMoneyBlock from "../_components/AddMoneyBlock";
import ArrowBtn from "../_components/ArrowBtn";

export default function Page() {
  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <AddMoneyBlock method='Transferencia bancaria' icon='profile' goto={'/deposits/transfer'} />
      <AddMoneyBlock method='Seleccionar tarjeta' icon='Card' goto={'/deposits/card'} />
    </main>
  )
}