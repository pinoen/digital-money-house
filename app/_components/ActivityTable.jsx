import Image from "next/image"
import ActivityItem from "./ActivityItem"
import { useRouter } from "next/navigation"

const ActivityTable = ({ activity }) => {
  const router = useRouter()
  const isActivityArray = Array.isArray(activity)
  return (
    <div className="m-4 p-4 flex flex-col gap-4 shadow-xl rounded-xl w-[350px] md:w-[511px]">
      <h2 className="text-xl font-bold">Tu actividad</h2>
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <div className="flex flex-col gap-4">
        {isActivityArray && activity.map((item) => <ActivityItem key={item.id} name={item.origin} money={item.amount} />)}
      </div>
      <div className="flex justify-between mt-2 cursor-pointer" onClick={() => router.push('/activity')}>
        <p className="font-semibold text-sm">Ver toda tu actividad</p>
        <Image src="/arrowBtn.svg" alt="arrow" width={20} height={20} />
      </div>
    </div>
  )
}

export default ActivityTable