
const ActivityItem = ({ name, money }) => {
  const operation = money > 0 ? 'Te transfirieron dinero' : 'Transferiste dinero'
  return (
    <div className="flex justify-between my-2">
      <div className="bg-A3 w-6 h-6 rounded-full"></div><span>{operation} ({name})</span><span>$ {money}</span>
    </div>
  )
}

export default ActivityItem