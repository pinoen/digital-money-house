'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import CardsDataTable from "@/app/_components/CardsDataTable";
import ServiceToPay from "@/app/_components/ServiceToPay";
import { useUser } from "@/app/_contexts/userProvider";
import axios from "axios";

export default function Page({ params }) {
  const { cards, accountId } = useUser()

  const handlePayment = async () => {
    try {
      await axios.post(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/transactions`, {
        dated: new Date(),
        amount: -1000,
        description: 'Pago de servicio',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-screen">
      <ArrowBtn page='Pagar servicios' />
      <ServiceToPay service={params.service.toUpperCase()} amount={1000} />
      <CardsDataTable cards={cards} />
      <BigBtn text='Pagar' goto={`/services/${params.service}/payment/confirmation`} handleClick={handlePayment} />
    </main>
  )
}