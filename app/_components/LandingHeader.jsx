import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LandingHeader = () => {
  const params = usePathname()

  return (
    <div className="flex gap-4">
      {params === '/login' || params === '/login/enter' || params === '/signup' ? null : <Link href={"/login"} className="w-24 h-10 bg-A1 text-A3 font-bold rounded text-center content-center">Ingresar</Link>}
      {params === '/login' || params === '/login/enter' || params === '/signup' ? null : <Link href={"/signup"} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center">Crear cuenta</Link>}
      {params === '/signup' ? <Link href={"/login"} className="w-32 h-10 bg-A2 text-white font-bold rounded text-center content-center">Iniciar sesión</Link> : null}
    </div>
  )
}

export default LandingHeader