'use client';
import { useState } from 'react';
import ActivityTable from '../_components/ActivityTable';
import ArrowBtn from '../_components/ArrowBtn';
import SearchActivity from '../_components/SearchActivity';
import { useSession } from 'next-auth/react';
import { useUserAccount } from '../_hooks/useUserAccount';
import { useUserActivity } from '../_hooks/useUserActivity';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const session = useSession();
  const jwt = session.data?.user.token;
  const { id: accountId } = useUserAccount(jwt);
  const activityData = useUserActivity(accountId, jwt);

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page="Tu actividad" />
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      <ActivityTable activity={activityData} searchQuery={searchQuery} />
    </main>
  );
}
