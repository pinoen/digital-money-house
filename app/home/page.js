'use client'
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import AvailableMoneyCard from "../_components/AvailableMoneyCard";
import BigBtn from "../_components/BigBtn";
import SearchActivity from "../_components/SearchActivity";
import { useUser } from "../_contexts/userProvider";
import useWindowWidth from "../_hooks/useWindowWidth";

export default function Page() {
  const { user, account, activity } = useUser()
  const money = parseFloat(account.available_amount).toFixed(2)
  const windowWidth = useWindowWidth()

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-screen  md:h-[1100px]">
      <ArrowBtn page='Inicio' />
      <AvailableMoneyCard money={money} />

      {windowWidth > 1024 ? <div className="flex gap-1 mr-16">
        <BigBtn text='Ingresar dinero' goto={'/deposits'} />
        <BigBtn text='Pago de servicios' goto={'/services'} />
      </div> : null}
      {windowWidth > 1024 ? null : <BigBtn text='Ingresar dinero' goto={'/deposits'} />}
      {windowWidth > 1024 ? null : <BigBtn text='Pago de servicios' goto={'/services'} />}
      <SearchActivity />
      <ActivityTable activity={activity} />
    </main>
  );
}