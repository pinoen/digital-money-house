import Image from 'next/image';
import { useState } from 'react';

const SearchActivity = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="relative m-4 w-[300px] md:w-[511px] lg:w-[1006px] lg:mr-16 md:mr-6">
      <input
        className="h-16 p-4 w-full bg-white text-black border-2 border-blue-300 rounded-2xl shadow-xl pl-12"
        type="text"
        placeholder="Buscar en tu actividad"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Image src="/magnifier.svg" alt="Buscar" width={20} height={20} />
      </div>
    </div>
  );
}

export default SearchActivity;
