'use client';
import { useSession } from 'next-auth/react';
import ArrowBtn from '../../../../_components/ArrowBtn';
import BigBtn from '../../../../_components/BigBtn';
import CheckAmount from '../../../../_components/CheckAmount';
import { useUserAccount } from '../../../../_hooks/useUserAccount';
import { useLoginData } from '../../../../_context/LoginContext';
import { useCreateDeposit } from '../../../../_hooks/useCreateDeposit';

export default function Page() {
  const { amount } = useLoginData();
  const session = useSession();
  const jwt = session.data?.user.token;
  const { cvu, id } = useUserAccount(jwt);

  const data = {
    amount: parseInt(amount),
    date: new Date(),
    destination: 'cuenta propia',
    origin: 'cuenta propia',
  };

  const { mutate, isPending } = useCreateDeposit(id, jwt);

  const handleAddActivity = async () => {
    mutate(data);
  };

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page="Cargar dinero" />
      <CheckAmount amount={amount} cvu={cvu} />
      <BigBtn
        text="Continuar"
        goto={'/deposits/card/money/check/confirmation'}
        handleClick={handleAddActivity}
        disabled={isPending}
      />
    </main>
  );
}
