import BigBtn from './BigBtn';
import { useState } from 'react';

const AddNewCardForm = ({
  handleInputChange,
  handleInputFocus,
  handleAddCard,
  disabled,
}) => {
  const [cardNumber, setCardNumber] = useState('');

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

  return (
    <form className="m-4 p-4 flex flex-col items-center  gap-4 shadow-xl rounded-xl w-[350px] md:w-[530px] lg:w-[973px] lg:grid lg:grid-cols-2 lg:gap-4">
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
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Fecha de vencimiento*"
        name="expiration_date"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] lg:w-[360px] lg:h-16 bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Código de seguridad*"
        name="cod"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
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