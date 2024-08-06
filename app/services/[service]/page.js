'use client'
import AddMoneyInput from "@/app/_components/AddMoneyInput";
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import { useUser } from "@/app/_contexts/userProvider";

export default function Page({ params }) {
  const { setAmount } = useUser()

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-screen">
      <ArrowBtn page='Pagar servicios' />
      <AddMoneyInput setAmount={setAmount} />
      <BigBtn text='Continuar' goto={`${params.service}/payment`} />
    </main>
  )
}