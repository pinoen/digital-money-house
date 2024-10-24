'use client';
import { useState } from 'react';
import ArrowBtn from '../_components/ArrowBtn';
import SearchActivity from '../_components/SearchActivity';
import ServiceItem from '../_components/ServiceItem';
import { services } from '../_utils/services';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service =>
    service.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col justify-start md:items-end lg:items-center items-center bg-slate-100">
      <ArrowBtn page="Pagar servicios" />
      <SearchActivity onSearch={setSearchQuery} />
      <div className="flex flex-col justify-center bg-white rounded-lg w-[350px] md:w-[511px] lg:w-[800px] m-4 p-4">
        <h1 className="text-A1 font-bold text-xl mb-4">Mas recientes</h1>
        <hr className="h-[2px] bg-gray-300 border-gray-300 mb-4" />
        {filteredServices.map(service => (
          <div key={service.service}>
            <ServiceItem service={service.service} logo={service.logo} />
            <hr className="h-[2px] bg-gray-300 border-gray-300 my-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
