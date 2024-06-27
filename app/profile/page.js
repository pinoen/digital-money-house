'use client'
import ArrowBtn from "../_components/ArrowBtn";
import BigBtn from "../_components/BigBtn";
import CbuCard from "../_components/CbuCard";
import PersonalDataCard from "../_components/PersonalDataCard";
import { useUser } from "../_contexts/userProvider";

export default function Page() {
  const { user, account } = useUser()
  const { email, firstname, lastname, dni, phone } = user
  const { cvu, alias } = account

  return (
    <main className="flex flex-col justify-start items-center bg-slate-100 h-screen">
      <ArrowBtn page='Perfil' />
      <PersonalDataCard email={email} fullname={`${firstname} ${lastname}`} cuit={dni} phone={phone} />
      <BigBtn text='Gestionar medios de pago' goto={'/payments'} />
      <CbuCard cvu={cvu} alias={alias} />
    </main>
  )
}