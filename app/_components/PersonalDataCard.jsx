import PersonalDataItem from "./PersonalDataItem"

const PersonalDataCard = ({ email, fullname, cuit, phone, password }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg w-[350px] h-fit m-4 p-4">
      <h1 className="text-A1 font-bold text-xl mb-4">Tus datos</h1>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <PersonalDataItem title='Email' item={email} />
      <PersonalDataItem title='Nombre y apellido' item={fullname} />
      <PersonalDataItem title='CUIT' item={cuit} />
      <PersonalDataItem title='Teléfono' item={phone} />
      <PersonalDataItem title='Contraseña' item={password || '******'} />
    </div>
  )
}

export default PersonalDataCard