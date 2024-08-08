'use client'
import AddMoneyInput from "@/app/_components/AddMoneyInput";
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import { setAmount } from "@/app/_redux/features/userSlice";
import { useDispatch } from "react-redux";

export default function Page({ params }) {
  const dispatch = useDispatch()

  const handleSetAmount = (amount) => {
    dispatch(setAmount(amount))
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-screen">
      <ArrowBtn page='Pagar servicios' />
      <AddMoneyInput setAmount={handleSetAmount} />
      <BigBtn text='Continuar' goto={`${params.service}/payment`} />
    </main>
  )
}