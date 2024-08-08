'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CardsDataTable from "@/app/_components/CardsDataTable";
import ServiceToPay from "@/app/_components/ServiceToPay";
import { addActivity, updateAccountBalance } from "@/app/_redux/features/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Page({ params }) {
  const account = useSelector((state) => state.user.account)
  const cards = useSelector((state) => state.user.cards)
  const router = useRouter()
  const dispatch = useDispatch()

  const handlePayment = async () => {
    try {
      const response = await axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${account?.id}/transactions`, {
        dated: new Date(),
        amount: -1000,
        description: 'Pago de servicio',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
        }
      })
      dispatch(addActivity(response.data))
      const newBalance = parseInt(account.available_amount) - 1000
      dispatch(updateAccountBalance(newBalance))

    } catch (error) {
      router.push(`/services/${params.service}/payment/fail`)
      console.log(error)
    }
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-[calc(100vh+250px)]">
      <ArrowBtn page='Pagar servicios' />
      <ServiceToPay service={params.service.toUpperCase()} amount={1000} />
      <CardsDataTable cards={cards} />
      <BigBtn text='Pagar' goto={`/services/${params.service}/payment/confirmation`} handleClick={handlePayment} />
    </main>
  )
}