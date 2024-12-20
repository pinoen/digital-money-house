import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchActivity = ({ onSearch, initialSeach = '' }) => {
  const [search, setSearch] = useState(initialSeach);
  const params = usePathname();

  useEffect(() => {
    setSearch(initialSeach);
  }, [initialSeach]);

  const handleSeachChange = e => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="m-4 w-[330px] md:w-[511px] lg:w-[800px]">
      <input
        className="h-16 p-4 w-full bg-white text-black border-2 border-blue-300 rounded-2xl shadow-xl pl-12"
        type="text"
        placeholder={
          params === '/services'
            ? 'Buscá entre más de 5.000 empresas'
            : 'Buscar en tu actividad'
        }
        onChange={handleSeachChange}
        value={search}
      />
      <div className="relative">
        <Image className='absolute inset-y-[-40px] left-4 flex items-center pointer-events-none' src="/magnifier.svg" alt="Buscar" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchActivity;
