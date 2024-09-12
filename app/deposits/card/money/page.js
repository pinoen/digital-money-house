'use client'
import AddMoneyInput from "@/app/_components/AddMoneyInput";
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";

export default function Page() {

  const handleSetAmount = (amount) => {
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <AddMoneyInput setAmount={handleSetAmount} />
      <BigBtn text='Continuar' goto={'/deposits/card/money/check'} />
    </main>
  )
}