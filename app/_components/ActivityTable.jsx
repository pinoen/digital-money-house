import ActivityItem from "./ActivityItem"

const ActivityTable = ({ activity }) => {
  return (
    <div className="m-4 p-4 flex flex-col gap-4 shadow-xl rounded-xl w-[350px]">
      <h2 className="text-xl font-bold">Tu actividad</h2>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <div className="flex flex-col gap-4">
        {activity.map((item) => <ActivityItem key={item.id} name={item.origin} money={item.amount} />)}
      </div>
    </div>
  )
}

export default ActivityTable