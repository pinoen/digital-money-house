import axios from "axios"
import { useUser } from "../_contexts/userProvider"

const CardItem = ({ id, card, onDelete }) => {
  const { accountId } = useUser()

  const handleDelete = async () => {
    try {
      await axios.delete(`https://digitalmoney.digitalhouse.com/api/accounts/${accountId}/cards/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
        }
      })
      onDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-start lg:justify-between gap-4 my-8">
      <div className="flex gap-4">
        <div className="bg-A3 w-6 h-6 rounded-full"></div><span>Terminada en {card.toString().slice(-4)}</span>
      </div>
      <button className="font-semibold ml-8" onClick={handleDelete}>Eliminar</button>
      <hr className="h-[2px] bg-gray-300 border-gray-300 z-10 lg:hidden" />
    </div>
  )
}

export default CardItem