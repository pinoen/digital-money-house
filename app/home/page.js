'use client'
import { useState } from "react";
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import AvailableMoneyCard from "../_components/AvailableMoneyCard";
import BigBtn from "../_components/BigBtn";
import SearchActivity from "../_components/SearchActivity";
import useWindowWidth from "../_hooks/useWindowWidth";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const windowWidth = useWindowWidth()
  // const money = parseFloat(accountData?.available_amount).toFixed(2)

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page='Inicio' />
      <AvailableMoneyCard money={100} />

      {windowWidth > 1024 ? <div className="flex gap-1 mr-16">
        <BigBtn text='Ingresar dinero' goto={'/deposits'} />
        <BigBtn text='Pago de servicios' goto={'/services'} />
      </div> : null}
      {windowWidth > 1024 ? null : <BigBtn text='Ingresar dinero' goto={'/deposits'} />}
      {windowWidth > 1024 ? null : <BigBtn text='Pago de servicios' goto={'/services'} />}
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      {/* <ActivityTable activity={activityData} searchQuery={searchQuery} /> */}
    </main>
  );
}