'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginData } from '../_context/LoginContext'

export default function Page() {
  const { loginData, setLoginData } = useLoginData()
  const [isValidEmail, setIsValidEmail] = useState(false)
  const router = useRouter()

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setLoginData({ ...loginData, email: newEmail })
    setIsValidEmail(validateEmail(newEmail))
  }

  const handleContinue = (e) => {
    e.preventDefault()
    if (isValidEmail) {
      router.push('/login/enter')
    }
  }

  return (
    <form className="flex flex-col justify-center items-center gap-4 bg-black h-screen">
      <h1 className="text-white font-semibold text-2xl">
        ¡Hola! Ingresá tu e-mail
      </h1>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="email"
        placeholder="Correo electrónico"
        value={loginData.email}
        onChange={handleEmailChange}
      />
      <button
        className={`fullwidth h-12 w-[300px] font-bold rounded text-center ${isValidEmail
          ? 'bg-A3 text-black cursor-pointer'
          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          }`}
        onClick={handleContinue}
        disabled={!isValidEmail}
      >
        Continuar
      </button>
      <button
        className="fullwidth h-12 w-[300px] bg-btnGrey text-black font-bold rounded text-center"
        onClick={(e) => {
          e.preventDefault()
          router.push('/signup')
        }}
      >
        Crear cuenta
      </button>
    </form>
  )
}