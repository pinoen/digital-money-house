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
  const { data: session } = useSession()
  const jwt = session?.user?.token
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
      {Object.entries(fieldMap).map(([title, field]) => (
        <div key={field}>
          <PersonalDataItem
            title={title}
            item={userData[field]}
            onEdit={handleEdit}
            isEditable={field !== 'email' && field !== 'cuit'}
          />
          <hr className="h-[2px] bg-gray-300 border-gray-300 my-2" />
        </div>
      ))}
    </div>
  );
};

export default PersonalDataCard;