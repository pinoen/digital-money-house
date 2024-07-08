import Image from 'next/image'
import React from 'react'

const ConfirmationBlock = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-A3 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-auto m-4 p-4">
      <Image width={45} height={47} src="/CheckBlack.svg" alt="success" />
      <h3 className="text-A1 text-lg font-bold">Ya cargamos el dinero en tu cuenta</h3>
    </div>
  )
}

export default ConfirmationBlock