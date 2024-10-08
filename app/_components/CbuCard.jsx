import CbuItem from './CbuItem';

const CbuCard = ({ cvu, alias }) => {
  return (
    <div className="flex flex-col gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[1003px] lg:mr-16 mt-4 mb-28 ml-3 p-4">
      <small className="text-white">
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </small>
      <CbuItem item={cvu} title="CVU" />
      <CbuItem item={alias} title="ALIAS" />
    </div>
  );
};

export default CbuCard;
