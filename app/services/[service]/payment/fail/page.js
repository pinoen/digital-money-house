'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import BigBtn from "@/app/_components/BigBtn";
import PaymentError from "@/app/_components/PaymentError";

export default function Page({ params }) {
  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-screen">
      <ArrowBtn page='Pagar servicios' />
      <PaymentError />
      <BigBtn text='Volver a intentarlo' goto={`/services/${params.service}/payment`} />
    </main>
  )
}