'use client';
import ArrowBtn from '../../_components/ArrowBtn';
import BigBtn from '../../_components/BigBtn';
import { useLoginData } from '../../_context/LoginContext';
import AddServiceNumberInput from '../../_components/AddServiceNumberInput';

export default function Page({ params }) {
  const { serviceNumber, setServiceNumber } = useLoginData();

  const handleServiceNumber = service => {
    setServiceNumber(service);
  };

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-screen">
      <ArrowBtn page="Pagar servicios" />
      <AddServiceNumberInput setServiceNumber={handleServiceNumber} />
      <BigBtn
        text="Continuar"
        goto={`${params.service}/payment`}
        disabled={!serviceNumber}
      />
    </main>
  );
}
