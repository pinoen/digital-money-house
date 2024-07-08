'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CheckAmount from "@/app/_components/CheckAmount";
import ConfirmationBlock from "@/app/_components/ConfirmationBlock";
import { useUser } from "@/app/_contexts/userProvider";

export default function Page() {
  const { amount, account } = useUser()
  const { cvu } = account

  const printTicket = () => {
    window.print()
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <ConfirmationBlock />
      <CheckAmount amount={amount} cvu={cvu} />
      <BigBtn text='Descargar comprobante' handleClick={printTicket} goto={'/home'} />
      <BigBtn text='Ir al inicio' goto={'/home'} />
    </main>
  )
}