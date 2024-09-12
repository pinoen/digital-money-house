'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [password, setPassword] = useState('')
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const data = useSelector(state => state.user.loginData)





  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)


    // try {
    //   const response = await axios.post('https://digitalmoney.digitalhouse.com/api/login', {
    //     email,
    //     password
    //   });
    // } catch (error) {
    //   setError(true)
    //   console.error(error);
    // }
  }

  return (
    <form className="flex flex-col justify-center items-center gap-4 bg-black h-screen" onSubmit={handleSubmit}>
      <h1 className="text-white font-semibold text-2xl">Ingresá tu contraseña</h1>
      <input className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded" type="password" placeholder="Contraseña" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
      <button className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center" type="submit">Ingresar</button>
      {/* {error && <p className="text-red-500 text-sm">Credenciales incorrectas</p>} */}
    </form>
  );
}
