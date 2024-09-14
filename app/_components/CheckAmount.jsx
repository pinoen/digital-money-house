import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const CheckAmount = ({ amount, cvu }) => {
  const params = usePathname();

  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-auto m-4 p-4">
      <h2 className="text-A3 text-xl font-bold">Revisá que está todo bien</h2>
      <hr />
      <div className="flex justify-start items-center gap-2">
        <p className="text-white">Vas a transferir</p>
        <Image width={30} height={30} src="/edit.svg" alt="check" />
      </div>
      <p
        className={`font-bold ${params === '/deposits/card/money/check' ? 'text-white text-xl' : 'text-A3 text-2xl'}`}
      >
        $ {amount}
      </p>
      <small className="text-white">Para</small>
      <p
        className={`font-bold ${params === '/deposits/card/money/check' ? 'text-white text-xl' : 'text-A3 text-2xl'}`}
      >
        Cuenta propia
      </p>
      <p className="text-white">Brubank</p>
      <small className="text-white">CVU {cvu}</small>
    </div>
  );
};

export default CheckAmount;
