const ServiceToPay = ({ service, amount }) => {
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] md:w-[511px] lg:w-[800px] h-auto m-4 p-4">
      <h2 className="text-A3 text-xl font-bold">{service}</h2>
      <hr />
      <div className="flex justify-between">
        <p className="text-white text-xl font-bold">Total a pagar</p>
        <p className="text-white text-xl font-bold">$ {amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ServiceToPay;
