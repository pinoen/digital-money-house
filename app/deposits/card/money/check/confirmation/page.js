'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ArrowBtn from '../../../../../_components/ArrowBtn';
import BigBtn from '../../../../../_components/BigBtn';
import CheckAmount from '../../../../../_components/CheckAmount';
import ConfirmationBlock from '../../../../../_components/ConfirmationBlock';
import { useLoginData } from '../../../../../_context/LoginContext';
import { useUserAccount } from '../../../../../_hooks/useUserAccount';

export default function Page() {
  const { amount } = useLoginData();
  const session = useSession();
  const jwt = session.data?.user.token;
  const { cvu } = useUserAccount(jwt);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const printTicket = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100">
      <ArrowBtn page="Cargar dinero" />
      <ConfirmationBlock />
      <CheckAmount amount={amount} cvu={cvu} />
      {isMounted && (
        <>
          <BigBtn
            text="Descargar comprobante"
            handleClick={printTicket}
            goto={'/deposits/card/money/check/confirmation'}
          />
          <BigBtn text="Ir al inicio" goto={'/home'} />
        </>
      )}
    </main>
  );
}
