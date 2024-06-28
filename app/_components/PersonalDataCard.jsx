import PersonalDataItem from "./PersonalDataItem"

const PersonalDataCard = ({ email, fullname, cuit, phone, password }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg w-[350px] md:w-[511px] lg:w-[1003px] lg:mr-16 h-fit m-4 p-4">
      <h1 className="text-A1 font-bold text-xl mb-4">Tus datos</h1>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <PersonalDataItem title='Email' item={email} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Nombre y apellido' item={fullname} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='CUIT' item={cuit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Teléfono' item={phone} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Contraseña' item={password || '******'} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
    </div>
  )
}

export default PersonalDataCard