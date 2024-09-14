'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useLoginData } from '../../_context/LoginContext';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Page() {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { loginData, setLoginData } = useLoginData();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        'https://digitalmoney.digitalhouse.com/api/login',
        {
          email: loginData.email,
          password: loginData.password,
        }
      );

      console.log(res.data);
      toast.success('Sesión iniciada');

      await signIn('credentials', {
        email: loginData.email,
        password: loginData.password,
        callbackUrl: '/home',
      });

      router.push('/home');
    } catch (error) {
      console.log(error);
      toast.error('Credenciales incorrectas');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-4 bg-black h-screen"
      onSubmit={handleSubmit}
    >
      <h1 className="text-white font-semibold text-2xl">
        Ingresá tu contraseña
      </h1>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="password"
        placeholder="Contraseña"
        value={loginData.password}
        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button
        className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center"
        type="submit"
        disabled={isLoading}
      >
        Ingresar
      </button>
      {isError && (
        <p className="text-red-500 text-sm">Credenciales incorrectas</p>
      )}
    </form>
  );
}
