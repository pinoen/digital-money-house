import Link from 'next/link';

const AvailableMoneyCard = ({ money }) => {
  return (
    <div className="flex flex-col gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-[180px] md:h-[230px] m-4 p-4">
      <div className="flex justify-end gap-4">
        <Link
          href={'/cards'}
          className="text-white underline font-semibold text-sm"
        >
          Ver tarjetas
        </Link>
        <Link
          href={'/profile'}
          className="text-white underline font-semibold text-sm"
        >
          Ver CVU
        </Link>
      </div>
      <h1 className="text-white">Dinero disponible</h1>
      <p className="text-white border-A3 font-bold text-2xl border-2  rounded-3xl p-4 w-[250px]">
        $ {money}
      </p>
    </div>
  );
};

export default AvailableMoneyCard;
