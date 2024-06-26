
const CardItem = ({ card }) => {

  return (
    <div className="flex justify-start gap-4 my-8">
      <div className="bg-A3 w-6 h-6 rounded-full"></div><span>Terminada en {card.toString().slice(-4)}</span><button className="font-semibold ml-8">Eliminar</button>
      <hr className="h-[2px] bg-gray-300 border-gray-300 z-10" />
    </div>
  )
}

export default CardItem