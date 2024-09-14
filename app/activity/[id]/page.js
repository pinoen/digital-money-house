'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import BigBtn from "../../_components/BigBtn";
import { formatDateToLongFormat } from "../../_utils/dateFormatter";
import { useGetUserTransaction } from "../../_hooks/useGetUserTransaction";
import { useUserAccount } from "../../_hooks/useUserAccount";
import { useEffect, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }) {
  const [isMounted, setIsMounted] = useState(false)
  const session = useSession()
  const jwt = session.data?.user.token
  const { id: accountId } = useUserAccount(jwt)
  const transaction = useGetUserTransaction(accountId, params.id, jwt)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const printTicket = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:ml-96 lg:w-[750px] h-auto m-4 p-4">
      <div className="flex justify-start gap-2 items-center">
        <Image width={28} height={28} src="/checkGreen.svg" alt="success" />
        <h2 className="text-A3 text-xl font-bold">Aprobada</h2>
      </div>
      <hr />
      <small className="text-white">Creada el {formatDateToLongFormat(transaction?.dated)}</small>
      <div className="flex justify-start items-center gap-2">
        <p className="text-white">Transferencia de dinero</p><Image width={30} height={30} src="/edit.svg" alt="check" />
      </div>
      <p className={`font-bold ${params === '/deposits/card/money/check' ? 'text-white text-xl' : 'text-A3 text-2xl'}`}>$ {transaction?.amount}</p>
      <small className="text-white">Le transferiste a</small>
      <p className={`font-bold ${params === '/deposits/card/money/check' ? 'text-white text-xl' : 'text-A3 text-2xl'}`}>{transaction?.description}</p>
      <p className="text-white">Numero de operacion</p>
      <small className="text-white">000000000{transaction?.id}</small>
      {isMounted && (
        <>
          <BigBtn text='Descargar comprobante' handleClick={printTicket} goto={`/activity/${params.id}`} />
          <BigBtn text='Ir al inicio' goto={'/home'} />
        </>
      )}
    </div>
  );
}