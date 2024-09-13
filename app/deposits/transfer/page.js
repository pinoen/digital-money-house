'use client'
import { useSession } from "next-auth/react";
import ArrowBtn from "../../_components/ArrowBtn";
import CbuCard from "../../_components/CbuCard";
import { useUserAccount } from "../../_hooks/useUserAccount";

export default function Page() {
  const session = useSession()
  const jwt = session.data?.user.token
  const account = useUserAccount(jwt)
  const { cvu, alias } = account

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-screen">
      <ArrowBtn page='Cargar dinero' />
      <CbuCard cvu={cvu} alias={alias} />
    </main>
  )
}