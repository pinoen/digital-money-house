'use client'
import { useState } from "react";
import AddMoneyInput from "../../../_components/AddMoneyInput";
import ArrowBtn from "../../../_components/ArrowBtn";
import BigBtn from "../../../_components/BigBtn";

export default function Page() {
  const [amount, setAmount] = useState(1000)

  const handleSetAmount = (amount) => {
    setAmount(amount)
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <AddMoneyInput setAmount={handleSetAmount} />
      <BigBtn text='Continuar' goto={'/deposits/card/money/check'} />
    </main>
  )
}