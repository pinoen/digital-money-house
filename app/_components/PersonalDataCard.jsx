import Image from "next/image"
import PersonalDataItem from "./PersonalDataItem"

const PersonalDataCard = ({ email, fullname, cuit, phone, password }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg w-[350px] h-fit m-4 p-4">
      <h1 className="text-A1 font-bold text-xl mb-4">Tus datos</h1>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <div className="flex justify-between items-center">
        <PersonalDataItem title='Email' item={email} /><Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer" />
      </div>
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <div className="flex justify-between items-center">
        <PersonalDataItem title='Nombre y apellido' item={fullname} /><Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer" />
      </div>
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <div className="flex justify-between items-center">
        <PersonalDataItem title='CUIT' item={cuit} /><Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer" />
      </div>
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <div className="flex justify-between items-center">
        <PersonalDataItem title='Teléfono' item={phone} /><Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer" />
      </div>
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <div className="flex justify-between items-center">
        <PersonalDataItem title='Contraseña' item={password || '******'} /><Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default PersonalDataCard