'use client'
import { useSession } from "next-auth/react";
import ArrowBtn from "../../../../_components/ArrowBtn";
import BigBtn from "../../../../_components/BigBtn";
import ConfirmationBlock from "../../../../_components/ConfirmationBlock";
import ConfirmationPayment from "../../../../_components/ConfirmationPayment";
import { useUserAccount } from "../../../../_hooks/useUserAccount";
import { useLoginData } from "../../../../_context/LoginContext";
import { useCardData } from "../../../../_hooks/useCardData";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [isMounted, setIsMounted] = useState(false)
  const session = useSession()
  const jwt = session.data?.user.token
  const { selectedCard } = useLoginData()
  const account = useUserAccount(jwt)
  const cardData = useCardData(account?.id, selectedCard, jwt)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-[calc(100vh+100px)]">
      <ArrowBtn page='Pagar servicios' />
      <ConfirmationBlock />
      <ConfirmationPayment card={cardData?.number_id} amount={1000} />
      {
        isMounted && (
          <>
            <BigBtn text='Descargar comprobante' goto={`/services/${params.service}/payment/confirmation`} handleClick={handlePrint} />
            <BigBtn text='Ir al inicio' goto={`/home`} />
          </>
        )
      }
    </main>
  )
}