import BigBtn from "./BigBtn"

const AddNewCardForm = ({ handleInputChange, handleInputFocus }) => {

  return (
    <form className="m-4 p-4 flex flex-col items-center  gap-4 shadow-xl rounded-xl w-[350px] md:w-[530px]">
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] bg-white text-black rounded shadow-md"
        type="number"
        placeholder="Número de la tarjeta*"
        name="number_id"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Nombre y apellido*"
        name="first_last_name"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Fecha de vencimiento*"
        name="expiration_date"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        className="fullwidth h-12 p-4 w-[300px] md:w-[480px] bg-white text-black rounded shadow-md"
        type="text"
        placeholder="Código de seguridad*"
        name="cod"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />

      <BigBtn text='Continuar' goto='/cards' />
    </form>
  )
}

export default AddNewCardForm