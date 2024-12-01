'use client';
import { useEffect, useState } from 'react';
import ActivityTable from '../_components/ActivityTable';
import ArrowBtn from '../_components/ArrowBtn';
import AvailableMoneyCard from '../_components/AvailableMoneyCard';
import BigBtn from '../_components/BigBtn';
import SearchActivity from '../_components/SearchActivity';
import useWindowWidth from '../_hooks/useWindowWidth';
import { useUserAccount } from '../_hooks/useUserAccount';
import { useSession } from 'next-auth/react';
import { useUserActivity } from '../_hooks/useUserActivity';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const windowWidth = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);
  const session = useSession();
  const jwt = session.data?.user.token;
  const { available_amount, id: accountId } = useUserAccount(jwt);
  const money = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(available_amount);
  const activityData = useUserActivity(accountId, jwt);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="flex flex-col justify-start items-center lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page="Inicio" />
      <AvailableMoneyCard money={money || '0,00'} />

      {windowWidth > 1024 ? (
        <div className="flex gap-1">
          <BigBtn text="Ingresar dinero" goto={'/deposits'} />
          <BigBtn text="Pago de servicios" goto={'/services'} />
        </div>
      ) : null}
      {isMounted && windowWidth > 1024 ? null : (
        <BigBtn text="Ingresar dinero" goto={'/deposits'} />
      )}
      {isMounted && windowWidth > 1024 ? null : (
        <BigBtn text="Pago de servicios" goto={'/services'} />
      )}
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      <ActivityTable activity={activityData} searchQuery={searchQuery} />
    </main>
  );
}
