'use client'
import ArrowBtn from "@/app/_components/ArrowBtn";
import CbuCard from "@/app/_components/CbuCard";
import { useUser } from "@/app/_contexts/userProvider";

export default function Page() {
  const { account } = useUser()
  const { cvu, alias } = account
  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <CbuCard cvu={cvu} alias={alias} />
    </main>
  )
}