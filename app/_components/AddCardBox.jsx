import Image from "next/image"
import { useRouter } from "next/navigation"
import { useUser } from "../_contexts/userProvider"
import { useState } from "react"

const AddCardBox = () => {
  const [error, setError] = useState(false)
  const { cards } = useUser()
  const router = useRouter()
  const handleAddCard = () => {
    if (cards.length <= 10) {
      router.push('/cards/add')
    } else {
      setError(true)
    }
  }
  return (
    <div className="flex flex-col justify-center gap-4 bg-A1 rounded-lg w-[350px] h-[150px] m-4 p-4">
      <p className="text-white text-lg font-semibold">Agregá tu tarjeta de débito o crédito</p>
      <div className="flex justify-between cursor-pointer" onClick={handleAddCard}>
        <Image width={34} height={34} src="/add.svg" alt="add card" />
        <h1 className="text-A3 font-bold text-2xl">Nueva tarjeta</h1>
        <Image width={30} height={30} src="/arrowGreen.svg" alt="add card" />
      </div>
      {error ? <p className="text-red-500">No puedes tener más de 3 tarjetas</p> : null}
    </div>
  )
}

export default AddCardBox