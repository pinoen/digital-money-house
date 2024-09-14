'use client';
import AddMoneyBlock from '../_components/AddMoneyBlock';
import ArrowBtn from '../_components/ArrowBtn';

export default function Page() {
  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center bg-slate-100 h-[calc(100vh+115px)]">
      <ArrowBtn page="Cargar dinero" />
      <AddMoneyBlock
        method="Transferencia bancaria"
        icon="profile"
        goto={'/deposits/transfer'}
      />
      <AddMoneyBlock
        method="Seleccionar tarjeta"
        icon="Card"
        goto={'/deposits/card'}
      />
    </main>
  );
}
