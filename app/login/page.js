'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/login/enter');
  };

  return (
    <form className="flex flex-col justify-center items-center gap-4 bg-black h-screen" onSubmit={handleSubmit}>
      <h1 className="text-white font-semibold text-2xl">¡Hola! Ingresá tu e-mail</h1>
      <input className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded" type="email" placeholder="Correo electrónico" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
      <button className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center" type="submit">Continuar</button>
      <Link className="fullwidth h-12 w-[300px] bg-btnGrey text-black font-bold rounded text-center content-center" href={"/signup"}>Crear cuenta</Link>
    </form>
  );
}