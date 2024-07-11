import formatDateToDDMMYY from "../_utils/dateFormatter"
const ActivityItem = ({ name, money, date }) => {
  const operation = money > 0 ? 'Te transfirieron dinero' : 'Transferiste dinero'
  return (
    <div className="flex justify-between my-2">
      <div className="flex justify-start gap-2">
        <div className="bg-A3 w-6 h-6 rounded-full"></div><span>{operation} ({name})</span>
      </div>
      <div className="flex flex-col">
        <span>$ {money}</span>
        <small className="text-gray-400">{formatDateToDDMMYY(date)}</small>
      </div>
    </div>
  )
}

export default ActivityItem