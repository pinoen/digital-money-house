import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const ConfirmationBlock = () => {
  const params = usePathname()
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-A3 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-auto m-4 p-4">
      <Image width={45} height={47} src="/CheckBlack.svg" alt="success" />
      <h3 className="text-A1 text-lg font-bold">{params === '/deposits/card/money/check/confirmation' ? 'Ya cargamos el dinero en tu cuenta' : 'Ya realizamos tu pago'}</h3>
    </div>
  )
}

export default ConfirmationBlock