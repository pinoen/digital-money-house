'use client';
import { useSession } from 'next-auth/react';
import AddCardBox from '../_components/AddCardBox';
import ArrowBtn from '../_components/ArrowBtn';
import CardsDataTable from '../_components/CardsDataTable';
import { useUserAccount } from '../_hooks/useUserAccount';
import { useUserCards } from '../_hooks/useUserCards';

export default function Page() {
  const session = useSession();
  const jwt = session.data?.user.token;
  const { id: accountId } = useUserAccount(jwt);
  const cards = useUserCards(accountId, jwt);

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100">
      <ArrowBtn page="Tarjetas" />
      <AddCardBox cards={cards} />
      <CardsDataTable cards={cards} />
    </main>
  );
}
