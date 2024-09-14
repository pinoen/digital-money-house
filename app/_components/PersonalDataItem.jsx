import Image from "next/image";
import { useState } from "react";

const PersonalDataItem = ({ title, item, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(title, newValue);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="mt-1">{title}</h3>
        {isEditing ? (
          <input
            type="text"
            value={newValue}
            onChange={handleChange}
            className="text-gray-500 mb-1 border border-gray-300 rounded p-1"
            disabled={title === 'Email' || title === 'CUIT'}
          />
        ) : (
          <p className="text-gray-500 mb-1">{item}</p>
        )}
      </div>
      {isEditing ? (
        <button onClick={handleSave} className="mx-6 text-orange-500">Guardar</button>
      ) : (
        <Image src="/pen.svg" alt="edit" width={22} height={22} className="cursor-pointer mx-6" onClick={handleEdit} />
      )}
    </div>
  );
};

export default PersonalDataItem;
