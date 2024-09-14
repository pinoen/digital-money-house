import Link from 'next/link';

export default function Page() {
  return (
    <form className="flex flex-col justify-center items-center gap-4 bg-black h-screen">
      <h1 className="text-white font-semibold text-xl">
        Ingresá el código de verificación
      </h1>
      <input
        className="fullwidth h-12 p-4 w-[300px] bg-white text-black rounded"
        type="password"
        placeholder="Código"
      />
      {/* <button className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center" type="submit">Ingresar</button> */}
      <Link
        className="fullwidth h-12 w-[300px] bg-A3 text-black font-bold rounded text-center content-center"
        href={'/dashboard'}
      >
        Ingresar
      </Link>
    </form>
  );
}
