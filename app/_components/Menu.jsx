import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUser } from "../_contexts/userProvider"

const Menu = ({ setShowMenu }) => {
  const { user } = useUser()
  const { firstname, lastname } = user
  const router = useRouter()
  const handleLogout = () => {
    fetch('https://digitalmoney.digitalhouse.com/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    setShowMenu(false)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('account')
    localStorage.removeItem('activity')
    localStorage.removeItem('user')
    router.push('/landing')
  }

  const handleClick = () => {
    router.push('/home')
    setShowMenu(false)
  }

  return (
    <div className="z-50 absolute top-0 right-0 w-[400px]">
      <div className="bg-A1">
        <Image src="/closeBtn.svg" alt="logo" width={14} height={14} className="z-10 absolute top-8 right-8 cursor-pointer" onClick={() => setShowMenu(false)} />
        <h1 className="text-A3 font-semibold text-2xl p-4 z-10 cursor-pointer" onClick={handleClick}>Hola, <br />{firstname} {lastname}</h1>
      </div>
      <div className="flex flex-col items-start gap-4 p-4 bg-A3 h-screen">
        <Link href={'/home'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Inicio</Link>
        <Link href={'/activity'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Actividad</Link>
        <Link href={'/profile'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Tu perfil</Link>
        <Link href={'/deposits'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Cargar dinero</Link>
        <Link href={'/payments'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Pagar servicios</Link>
        <Link href={'/cards'} className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={() => setShowMenu(false)}>Tarjetas</Link>
        <button className="w-32 h-10 bg-A3 text-black font-bold rounded text-center content-center" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default Menu