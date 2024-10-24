import CbuItem from './CbuItem';

const CbuCard = ({ cvu, alias }) => {
  return (
    <div className="flex flex-col gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[800px] h-[180px] md:h-[230px] m-4 p-4">
      <small className="text-white">
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </small>
      <CbuItem item={cvu} title="CVU" />
      <CbuItem item={alias} title="ALIAS" />
    </div>
  );
};

export default CbuCard;
