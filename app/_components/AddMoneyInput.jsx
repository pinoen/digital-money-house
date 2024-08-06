import { usePathname } from "next/navigation"

const AddMoneyInput = ({ setAmount }) => {
  const params = usePathname()
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16 h-[150px] m-4 p-4">
      <h2 className="text-A3 text-xl w-3/4 font-bold">{params === '/deposits/card/money' ? '¿Cuánto querés ingresar a la cuenta?' : 'Número de cuenta sin el primer 2'}</h2>
      <input type="number" className="border-2 border-A1 rounded-lg p-2" onChange={(e) => setAmount(e.target.value)} />
    </div>
  )
}

export default AddMoneyInput