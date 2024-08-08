'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CheckAmount from "@/app/_components/CheckAmount";
import ConfirmationBlock from "@/app/_components/ConfirmationBlock";
import { useSelector } from "react-redux";

export default function Page() {
  const amount = useSelector(state => state.user.amount)
  const account = useSelector(state => state.user.account)
  const { cvu } = account

  const printTicket = () => {
    window.print()
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+200px)]">
      <ArrowBtn page='Cargar dinero' />
      <ConfirmationBlock />
      <CheckAmount amount={amount} cvu={cvu} />
      <BigBtn text='Descargar comprobante' handleClick={printTicket} goto={'/deposits/card/money/check/confirmation'} />
      <BigBtn text='Ir al inicio' goto={'/home'} />
    </main>
  )
}