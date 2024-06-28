import CbuItem from "./CbuItem"

const CbuCard = ({ cvu, alias }) => {
  return (
    <div className="flex flex-col gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1003px] lg:mr-16 h-fit m-4 p-4">
      <small className="text-white">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</small>
      <CbuItem item={cvu} />
      <CbuItem item={alias} />
    </div>
  )
}

export default CbuCard