import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Menu = ({ setShowMenu }) => {
  const { firstname, lastname } = user
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {

  }

  const handleClick = () => {
    router.push('/home')
    setShowMenu(false)
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <div className="z-50 absolute top-0 right-0 w-[400px] md:w-[221px] lg:w-[276px] md:top-16 md:left-0">
      <div className="bg-A1 flex justify-center md:hidden">
        <Image src="/closeBtn.svg" alt="close btn" width={14} height={14} className="z-10 absolute top-8 right-8 cursor-pointer" onClick={() => setShowMenu(false)} />
        <h1 className="text-A3 font-semibold text-2xl p-4 z-10 cursor-pointer" onClick={handleClick}>Hola, <br />{firstname} {lastname}</h1>
      </div>
      <div className="flex flex-col items-center gap-4 p-4 bg-A3 h-[calc(100vh+115px)]">
        <Link href={'/home'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/home') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Inicio</Link>
        <Link href={'/activity'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/activity') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Actividad</Link>
        <Link href={'/profile'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/profile') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Tu perfil</Link>
        <Link href={'/deposits'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/deposits') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Cargar dinero</Link>
        <Link href={'/services'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/payments') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Pagar servicios</Link>
        <Link href={'/cards'} className={`w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center ${isActive('/cards') && 'bg-green-400'}`} onClick={() => setShowMenu(false)}>Tarjetas</Link>
        <button className="w-32 h-10 bg-A3 text-slate-700 font-bold rounded text-center content-center" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default Menu