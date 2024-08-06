import Image from "next/image"

const PaymentError = () => {
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-auto m-4 p-4">
      <Image width={41} height={41} src="/error.svg" alt="error" />
      <p className='text-white font-bold text-2xl'>Hubo un problema con tu pago</p>
      <hr />
      <p className="text-white">Puede deberse a fondos insuficientes</p>
      <p className="text-white"> Comunicate con la entidad emisora de la tarjeta</p>
    </div>
  )
}

export default PaymentError