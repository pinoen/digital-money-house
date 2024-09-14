'use client';
import { useSession } from 'next-auth/react';
import ArrowBtn from '../_components/ArrowBtn';
import BigBtn from '../_components/BigBtn';
import CbuCard from '../_components/CbuCard';
import PersonalDataCard from '../_components/PersonalDataCard';
import { useUserData } from '../_hooks/useUserData';
import { useUserAccount } from '../_hooks/useUserAccount';

export default function Page() {
  const session = useSession();
  const jwt = session.data?.user.token;
  const { user_id, cvu, alias } = useUserAccount(jwt);
  const { id, email, firstname, lastname, dni, phone } = useUserData(
    user_id,
    jwt
  );

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100 h-[calc(100vh+415px)]">
      <ArrowBtn page="Perfil" />
      <PersonalDataCard
        email={email}
        fullname={`${firstname} ${lastname}`}
        cuit={dni}
        phone={phone}
        password="******"
        userId={id}
      />
      <div className="flex justify-center lg:w-[1006px] lg:mr-16">
        <BigBtn
          text="Gestionar medios de pago"
          goto={'/cards'}
          specificWidth={true}
        />
      </div>
      <CbuCard cvu={cvu} alias={alias} />
    </main>
  );
}
