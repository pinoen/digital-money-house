'use client'
import { useState } from "react";
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import AvailableMoneyCard from "../_components/AvailableMoneyCard";
import BigBtn from "../_components/BigBtn";
import SearchActivity from "../_components/SearchActivity";
import useWindowWidth from "../_hooks/useWindowWidth";
import { useUserAccount } from "../_hooks/useUserAccount";
import { useSession } from "next-auth/react";
import { useUserActivity } from "../_hooks/useUserActivity";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const windowWidth = useWindowWidth()
  const session = useSession()
  const jwt = session.data?.user.token
  const account = useUserAccount(jwt)
  const money = parseFloat(account?.available_amount).toFixed(2)
  const activityData = useUserActivity(account?.id, jwt)

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page='Inicio' />
      <AvailableMoneyCard money={money} />

      {windowWidth > 1024 ? <div className="flex gap-1 mr-16">
        <BigBtn text='Ingresar dinero' goto={'/deposits'} />
        <BigBtn text='Pago de servicios' goto={'/services'} />
      </div> : null}
      {windowWidth > 1024 ? null : <BigBtn text='Ingresar dinero' goto={'/deposits'} />}
      {windowWidth > 1024 ? null : <BigBtn text='Pago de servicios' goto={'/services'} />}
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      <ActivityTable activity={activityData} searchQuery={searchQuery} />
    </main>
  );
}