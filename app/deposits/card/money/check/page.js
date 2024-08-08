'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CheckAmount from "@/app/_components/CheckAmount";
import { addActivity, updateAccountBalance } from "@/app/_redux/features/userSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const amount = useSelector(state => state.user.amount)
  const account = useSelector(state => state.user.account)
  const dispatch = useDispatch()
  const { cvu, id: accountId } = account
  const data = {
    amount: parseInt(amount),
    date: new Date(),
    destination: 'cuenta propia',
    origin: 'cuenta propia',
  }

  const handleAddActivity = async () => {
    try {
      const response = await axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/deposits`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
        }
      })
      dispatch(addActivity(response.data))
      const newBalance = parseInt(account.available_amount) + parseInt(amount)
      dispatch(updateAccountBalance(newBalance))
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <CheckAmount amount={amount} cvu={cvu} />
      <BigBtn text='Continuar' goto={'/deposits/card/money/check/confirmation'} handleClick={handleAddActivity} />
    </main>
  )
}