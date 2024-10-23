import { useState } from 'react';
import BigBtn from './BigBtn';

const AddNewCardForm = ({
  handleInputChange,
  handleInputFocus,
  handleAddCard,
  disabled,
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [expirationDateError, setExpirationDateError] = useState('');

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 16) {
      const formatted = input.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      setCardNumber(formatted);
      handleInputChange({
        target: {
          name: 'number_id',
          value: input,
        },
      });
    }
  };

  const handleSecurityCodeChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 3) {
      setSecurityCode(input);
      handleInputChange({
        target: {
          name: 'cod',
          value: input,
        },
      });
    }
  };

  const handleExpirationDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 4) {
      const formatted = input.replace(/(\d{2})(?=\d)/, '$1/');
      setExpirationDate(formatted);
      setExpirationDateError('');

      if (input.length === 4) {
        const month = parseInt(input.slice(0, 2), 10);
        const year = parseInt(input.slice(2), 10);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (
          month >= 1 &&
          month <= 12 &&
          (year > currentYear || (year === currentYear && month >= currentMonth))
        ) {
          handleInputChange({
            target: {
              name: 'expiration_date',
              value: formatted,
            },
          });
        } else {
          setExpirationDateError('Fecha de vencimiento inválida');
        }
      }
    }
  };

  return (
    <form className="m-4 p-6 flex flex-col items-center  gap-4 shadow-xl rounded-xl w-[350px] md:w-[530px] lg:w-[973px] lg:grid lg:grid-cols-2 lg:gap-4">
      <hr className="h-[2px] bg-gray-300 border-gray-300 lg:hidden" />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Número de la tarjeta*"
        name="number_id"
        value={cardNumber}
        onChange={handleCardNumberChange}
        onFocus={handleInputFocus}
        maxLength={19}
      />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Nombre y apellido*"
        name="first_last_name"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <div className="w-full">
        <input
          className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
          type="text"
          placeholder="Fecha de vencimiento (MM/YY)*"
          name="expiration_date"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          onFocus={handleInputFocus}
          maxLength={5}
        />
        {expirationDateError && (
          <p className="text-red-500 text-sm mt-1">{expirationDateError}</p>
        )}
      </div>
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Código de seguridad*"
        name="cod"
        value={securityCode}
        onChange={handleSecurityCodeChange}
        onFocus={handleInputFocus}
        maxLength={3}
      />

      <BigBtn
        text="Continuar"
        goto="/home"
        handleClick={handleAddCard}
        disabled={disabled}
      />
    </form>
  );
};

export default AddNewCardForm;