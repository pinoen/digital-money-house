import Image from "next/image"
import { LandingBlock } from "./LandingBlock"

export const LandingMain = () => {
  return (
    <main className="bg-[url('/user.svg')] md:bg-[url('/userMd.png')] lg:bg-[url('/userLg.png')] bg-center bg-cover bg-no-repeat h-screen w-full">
      <h1 className="text-white font-semibold md:font-normal text-4xl md:text-[48px] w-[250px] md:w-[458px] p-5 md:pl-12 md:pt-20">De ahora en adelante, hacés más con tu dinero</h1>
      <hr className="h-[4px] w-6 bg-A3 border-A3 my-4 ml-5 md:hidden" />
      <h2 className="text-A3 text-3xl w-[228px] md:w-full p-5 md:pl-12">Tu nueva <span className="font-bold">billetera virtual</span></h2>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 mt-20 mb-5 p-5 z-10 absolute lg:relative">
        <LandingBlock service={'Transferí dinero '} description={'Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.'} />
        <LandingBlock service={'Pago de servicios'} description={'Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel.'} />
      </div>
      {/* <Image className="absolute bottom-0" src="/bgLanding.svg" alt="bg landing" width={390} height={512} /> */}
      <div className="absolute bottom-0 bg-A3 h-[329px] md:h-[418px] lg:h-[148px] w-full rounded-t-xl" src="/bgLanding.svg" alt="bg landing" />
    </main>
  )
}
