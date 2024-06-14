'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const LandingHeader = () => {
  const params = usePathname()

  return (
    <header className="flex justify-between px-5 items-center gap-4 h-16 bg-A1">
      <Image width={63} height={20} src="/logo.svg" alt="digital money house log" />
      <div className="flex gap-4">
        {params === '/login' || params === '/login/enter' || params === '/signup' ? null : <Link href={"/login"} className="w-24 h-10 bg-A1 text-A3 font-bold rounded text-center content-center">Ingresar</Link>}
        {params === '/login' || params === '/login/enter' || params === '/signup' ? null : <Link href={"/signup"} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center">Crear cuenta</Link>}
      </div>
      {params === '/signup' ? <Link href={"/login"} className="w-32 h-10 bg-A2 text-white font-bold rounded text-center content-center">Iniciar sesión</Link> : null}
    </header>
  )
}
