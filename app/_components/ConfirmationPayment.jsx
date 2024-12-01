const ConfirmationPayment = ({ amount, card, date }) => {
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[335px] md:w-[511px] lg:w-[800px] h-auto m-4 p-4">
      {/* <small className="text-white font-bold">{formatDateToLongFormat(date)}</small> */}
      <p className="text-A3 text-2xl">$ {amount.toFixed(2)}</p>
      <small className="text-white">Para</small>
      <p className="text-A3 text-2xl">Cuenta propia</p>
      <p className="text-white">Tarjeta</p>
      <small className="text-white">
        VISA **********{card?.toString().slice(-4)}
      </small>
    </div>
  );
};

export default ConfirmationPayment;
