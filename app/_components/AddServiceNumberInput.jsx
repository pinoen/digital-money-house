const AddServiceNumberInput = ({ setServiceNumber }) => {
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[800px] h-[150px] m-4 p-4">
      <h2 className="text-A3 text-xl w-3/4 font-bold">
        Número de cuenta sin el primer 2
      </h2>
      <input
        type="number"
        className="border-2 border-A1 rounded-lg p-2"
        onChange={e => setServiceNumber(e.target.value)}
      />
    </div>
  );
};

export default AddServiceNumberInput;
