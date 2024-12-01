import Image from 'next/image';

const PaymentError = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-A1 rounded-lg w-[335px] md:w-[511px] lg:w-[800px] h-auto m-4 p-4">
      <Image width={41} height={41} src="/error.svg" alt="error" />
      <p className="text-white font-bold text-2xl px-10 text-center">
        Hubo un problema con tu pago
      </p>
      <hr className="h-[2px]  border-white" />
      <small className="text-white text-sm">
        Puede deberse a fondos insuficientes
      </small>
      <small className="text-white text-sm">
        {' '}
        Comunicate con la entidad emisora de la tarjeta
      </small>
    </div>
  );
};

export default PaymentError;
