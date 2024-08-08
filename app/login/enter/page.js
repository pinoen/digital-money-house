'use client'
import { useGetAccountQuery, useGetActivityQuery, useGetCardsQuery, useGetUserQuery } from "@/app/_redux/api/userApi";
import { setAccount, setActivity, setCards, setUser } from "@/app/_redux/features/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Page() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [token, setToken] = useState(null) // Local state to track when the token is set
  const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null
  const router = useRouter();
  const dispatch = useDispatch()

  // Fetch account data only if the token is available
  const { data: account, isSuccess: isAccount } = useGetAccountQuery(undefined, { skip: !token })
  const { data: activity, isSuccess: isActivity } = useGetActivityQuery(account?.id, { skip: !account?.id })
  const { data: cards, isSuccess: isCards } = useGetCardsQuery(account?.id, { skip: !account?.id })
  const { data: user, isSuccess: isUser } = useGetUserQuery(account?.user_id, { skip: !account?.user_id })

  useEffect(() => {
    if (isAccount && isActivity && isCards && isUser) {
      dispatch(setAccount(account))
      dispatch(setActivity(activity))
      dispatch(setCards(cards))
      dispatch(setUser(user))

      router.push('/home')
      router.refresh()
    }
  }, [isAccount, isActivity, isCards, isUser, account, activity, cards, user, router, dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://digitalmoney.digitalhouse.com/api/login', {
        email,
        password
      });

      if (typeof window !== 'undefined') {
        const receivedToken = response.data.token;
        localStorage.setItem('token', receivedToken);
        setToken(receivedToken); // Set the token in state to trigger the queries
      }
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
