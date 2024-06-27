'use client'
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import AvailableMoneyCard from "../_components/AvailableMoneyCard";
import BigBtn from "../_components/BigBtn";
import SearchActivity from "../_components/SearchActivity";
import { useUser } from "../_contexts/userProvider";

export default function Page() {
  const { user, account, activity } = useUser()
  const money = parseFloat(account.available_amount).toFixed(2)

  return (
    <main className="flex flex-col justify-start items-center md:items-end bg-slate-100 h-screen  md:h-[1100px]">
      <ArrowBtn page='Inicio' />
      <AvailableMoneyCard money={money} />
      <BigBtn text='Ingresar dinero' goto={'/deposits'} />
      <BigBtn text='Pago de servicios' goto={'/services'} />
      <SearchActivity />
      <ActivityTable activity={activity} />
    </main>
  );
}