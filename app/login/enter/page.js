'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const email = localStorage.getItem('email')
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://digitalmoney.digitalhouse.com/api/login', {
        email,
        password
      });

      console.log(response.data);
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', response.data.token)
      }
      router.push('/home')
    } catch (error) {
      setError(true)
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col justify-center items-center gap-4 bg-black h-screen" onSubmit={handleSubmit}>
      <h1 className="text-white font-semibold text-2xl">Ingresá tu contraseña</h1>
      <input className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center" type="submit">Ingresar</button>
      {error && <p className="text-red-500 text-sm">Credenciales incorrectas</p>}
    </form>
  );
}