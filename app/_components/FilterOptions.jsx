import React, { useState } from 'react';
import BigBtn from './BigBtn';
import { applyDateFilter } from '../_utils/dateFilter';

const FilterOptions = ({ activity, applyFilter, setShowFilter }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('');

  const handlePeriod = e => {
    setSelectedPeriod(e.target.value);
  };

  const handleApplyFilter = () => {
    const filteredData = applyDateFilter(selectedPeriod, activity);
    applyFilter(filteredData);
  };

  const handleOnClick = () => {
    handleApplyFilter();
    setShowFilter(false);
  };

  const handleDeleteFilters = () => {
    applyFilter(activity);
    setSelectedPeriod('');
    setShowFilter(false);
  };

  return (
    <div className="z-50 absolute top-72 right-3 w-[340px] h-[500px] md:top-56 md:w-[511px] lg:w-[800px] ">
      <div className="bg-white flex flex-col gap-2 w-full h-[430px] border-2 border-gray-300">
        <div className="flex justify-between m-3">
          <h3 className="font-bold text-xl">Periodo</h3>
          <span
            onClick={handleDeleteFilters}
            className=" text-gray-700 cursor-pointer"
          >
            Borrar filtros
          </span>
        </div>
        <hr className="h-[2px] bg-gray-300 border-gray-300" />
        <div className="flex flex-col gap-3 m-3 w-full pr-8 pl-2 md:pr-20 md:pl-10">
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Hoy' ? 'font-bold' : ''}`}
          >
            Hoy
            <input
              type="radio"
              name="period"
              value="Hoy"
              checked={selectedPeriod === 'Hoy'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Ayer' ? 'font-bold' : ''}`}
          >
            Ayer
            <input
              type="radio"
              name="period"
              value="Ayer"
              checked={selectedPeriod === 'Ayer'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Esta semana' ? 'font-bold' : ''}`}
          >
            Esta semana
            <input
              type="radio"
              name="period"
              value="Esta semana"
              checked={selectedPeriod === 'Esta semana'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Ultima semana' ? 'font-bold' : ''}`}
          >
            Última semana
            <input
              type="radio"
              name="period"
              value="Ultima semana"
              checked={selectedPeriod === 'Ultima semana'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Ultimos 15 días' ? 'font-bold' : ''}`}
          >
            Últimos 15 días
            <input
              type="radio"
              name="period"
              value="Ultimos 15 días"
              checked={selectedPeriod === 'Ultimos 15 días'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Ultimo mes' ? 'font-bold' : ''}`}
          >
            Último mes
            <input
              type="radio"
              name="period"
              value="Ultimo mes"
              checked={selectedPeriod === 'Ultimo mes'}
              onChange={handlePeriod}
            />
          </label>
          <label
            className={`text-gray-700 flex justify-between ${selectedPeriod === 'Ultimo año' ? 'font-bold' : ''}`}
          >
            Último año
            <input
              type="radio"
              name="period"
              value="Ultimo año"
              checked={selectedPeriod === 'Ultimo año'}
              onChange={handlePeriod}
            />
          </label>
        </div>
        <BigBtn text="Aplicar" goto={'/activity'} handleClick={handleOnClick} />
      </div>
    </div>
  );
};

export default FilterOptions;
