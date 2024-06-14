import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-black h-screen">
      <h1 className="text-white font-semibold text-2xl">Registro Exitoso</h1>
      <Image width={101} height={104} src="/check.svg" alt="success" />
      <p className="text-white px-14 text-center">Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión.</p>
      <Link className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center" href={"/login"}>Continuar</Link>
    </div>
  )
}
