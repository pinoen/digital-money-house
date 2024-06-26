
const AvailableMoneyCard = ({ money }) => {
  return (
    <div className="flex flex-col gap-4 bg-A1 rounded-lg w-[350px] h-[180px] m-4 p-4">
      <div className="flex justify-end gap-4">
        <small className="text-white underline font-semibold">Ver tarjetas</small>
        <small className="text-white underline font-semibold">Ver CVU</small>
      </div>
      <h1 className="text-white">Dinero disponible</h1>
      <p className="text-white border-A3 font-bold text-2xl border-2  rounded-3xl p-4 w-[250px]">$ {money}</p>
    </div>
  )
}

export default AvailableMoneyCard