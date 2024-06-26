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
    <main className="flex flex-col justify-start items-center bg-slate-100 h-screen">
      <ArrowBtn page='Inicio' />
      <AvailableMoneyCard money={money} />
      <BigBtn text='Ingresar dinero' />
      <BigBtn text='Pago de servicios' />
      <SearchActivity />
      <ActivityTable activity={activity} />
    </main>
  );
}