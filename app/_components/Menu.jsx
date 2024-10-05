import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Menu = ({ setShowMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    signOut({
      callbackUrl: '/',
      redirect: true,
    });
    toast.success('Sesión cerrada correctamente');
  };

  const handleClick = () => {
    router.push('/home');
    setShowMenu(false);
  };

  const isActive = path => {
    return pathname === path;
  };

  return (
    <div className="z-50 absolute top-0 right-0 w-[250px] md:w-[221px] lg:w-[276px] md:top-16 md:left-0">
      <div className="bg-A1 flex justify-between items-center md:hidden p-4">
        <h1
          className="text-A3 font-semibold text-2xl cursor-pointer"
          onClick={handleClick}
        >
          Hola, <br />
          Emilio Pino
        </h1>
        <Image
          src="/closeBtn.svg"
          alt="close btn"
          width={14}
          height={14}
          className="cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="flex flex-col items-start gap-4 p-4 bg-A3 h-[calc(100vh+115px)]">
        <Link
          href={'/home'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/home') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Inicio
        </Link>
        <Link
          href={'/activity'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/activity') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Actividad
        </Link>
        <Link
          href={'/profile'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/profile') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Tu perfil
        </Link>
        <Link
          href={'/deposits'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/deposits') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Cargar dinero
        </Link>
        <Link
          href={'/services'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/payments') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Pagar servicios
        </Link>
        <Link
          href={'/cards'}
          className={`w-full px-4 py-2 bg-A3 text-black font-bold rounded text-left ${isActive('/cards') && 'bg-green-400'}`}
          onClick={() => setShowMenu(false)}
        >
          Tarjetas
        </Link>
        <button
          className="w-full px-4 py-2 bg-A3 text-slate-700 font-bold rounded text-left"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Menu;