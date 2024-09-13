import { useState } from "react";
import PersonalDataItem from "./PersonalDataItem";
import { useSession } from "next-auth/react";
import { useUpdateUserData } from "../_hooks/useUpdateUserData";

const fieldMap = {
  'Email': 'email',
  'Nombre y apellido': 'fullname',
  'CUIT': 'cuit',
  'Telefono': 'phone',
  'Contrasena': 'password'
};

const PersonalDataCard = ({ email, fullname, cuit, phone, password, userId }) => {
  const [userData, setUserData] = useState({ email, fullname, cuit, phone, password });
  const session = useSession()
  const jwt = session.data?.user.token
  const { mutate } = useUpdateUserData(userId, jwt)

  const handleEdit = async (field, value) => {
    const fieldName = fieldMap[field];
    const newUserData = { ...userData, [fieldName]: value };
    setUserData(newUserData);
    const payload = { [fieldName]: value };

    mutate(payload);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg w-[350px] md:w-[511px] lg:w-[1003px] lg:mr-16 h-fit m-4 p-4">
      <h1 className="text-A1 font-bold text-xl mb-4">Tus datos</h1>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <PersonalDataItem title='Email' item={userData.email} onEdit={handleEdit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Nombre y apellido' item={userData.fullname} onEdit={handleEdit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='CUIT' item={userData.cuit} onEdit={handleEdit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Telefono' item={userData.phone} onEdit={handleEdit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
      <PersonalDataItem title='Contrasena' item={userData.password || '******'} onEdit={handleEdit} />
      <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
    </div>
  );
};

export default PersonalDataCard;
