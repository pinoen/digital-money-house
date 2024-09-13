'use client'
import { useSession } from "next-auth/react";
import ArrowBtn from "../../../../../_components/ArrowBtn";
import BigBtn from "../../../../../_components/BigBtn";
import CheckAmount from "../../../../../_components/CheckAmount";
import ConfirmationBlock from "../../../../../_components/ConfirmationBlock";
import { useLoginData } from "../../../../../_context/LoginContext";
import { useUserAccount } from "../../../../../_hooks/useUserAccount";

export default function Page() {
  const { amount } = useLoginData()
  const session = useSession()
  const jwt = session.data?.user.token
  const account = useUserAccount(jwt)
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