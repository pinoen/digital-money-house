import { LandingBlock } from './LandingBlock';

export const LandingMain = () => {
  return (
    <main className="bg-[url('/user.svg')] md:bg-[url('/userMd.png')] lg:bg-[url('/userLg.png')] bg-center bg-cover bg-no-repeat h-screen">
      <h1 className="text-white font-medium text-3xl md:font-normal md:text-[48px] w-[250px] md:w-[458px] p-5 md:pl-12 md:pt-20 lg:leading-tight">
        De ahora en adelante, hacés más con tu dinero
      </h1>
      <hr className="h-[4px] w-6 bg-A3 border-A3 my-4 ml-5 md:hidden" />
      <h2 className="text-A3 text-2xl w-[228px] md:w-full p-5 md:pl-12 lg:text-3xl">
        Tu nueva <span className="font-bold">billetera virtual</span>
      </h2>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 mt-20 mb-5 p-5 z-10 absolute lg:relative">
        <LandingBlock
          service={'Transferí dinero '}
          description={
            'Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.'
          }
        />
        <LandingBlock
          service={'Pago de servicios'}
          description={
            'Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel.'
          }
        />
      </div>
      <div
        className=" bg-A3 h-[370px] mt-24 md:h-[618px] lg:h-[300px] lg:absolute lg:bottom-0 w-full rounded-t-xl"
        src="/bgLanding.svg"
        alt="bg landing"
      />
    </main>
  );
};
