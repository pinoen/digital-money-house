import React, { useState } from 'react'
import BigBtn from './BigBtn'

const FilterOptions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('')

  return (
    <div className="z-50 absolute top-72 right-3 w-[340px] h-[500px] md:w-[221px] lg:w-[276px] md:top-16 md:left-0">
      <div className="bg-white flex flex-col gap-2 w-[340px] h-[430px] border-2 border-gray-300">
        <div className='flex justify-between m-3'>
          <h3 className='font-bold text-xl'>Periodo</h3><span className=' text-gray-700 cursor-pointer'>Borrar filtros</span>
        </div>
        <hr className="h-[2px] bg-gray-300 border-gray-300" />
        <div className='flex flex-col gap-3 m-3 w-[340px] pr-8 pl-2'>
          <label className='text-gray-700 flex justify-between'>Hoy
            <input type='radio' name='period' onChange={(e) => setSelectedPeriod(e.target.value)} />
          </label>
          <label className='text-gray-700 flex justify-between'>Ayer
            <input type='radio' name='period' />
          </label>
          <label className='text-gray-700 flex justify-between'>Esta semana
            <input type='radio' name='period' />
          </label>
          <label className='text-gray-700 flex justify-between'>Última semana
            <input type='radio' name='period' />
          </label>
          <label className='text-gray-700 flex justify-between'>Últimos 15 días
            <input type='radio' name='period' />
          </label>
          <label className='text-gray-700 flex justify-between'>Último mes
            <input type='radio' name='period' />
          </label>
          <label className='text-gray-700 flex justify-between'>Último año
            <input type='radio' name='period' />
          </label>
        </div>
        <BigBtn text='Aplicar' goto={'/home'} />
      </div>
    </div>
  )
}

export default FilterOptions