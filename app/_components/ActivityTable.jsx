import Image from "next/image"
import ActivityItem from "./ActivityItem"
import { usePathname, useRouter } from "next/navigation"
import FilterOptions from "./FilterOptions"
import { useState } from "react"
import Pagination from "./Pagination"

const ActivityTable = ({ activity }) => {
  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const router = useRouter()
  const params = usePathname()
  const isActivityArray = Array.isArray(activity)

  const totalPages = isActivityArray ? Math.ceil(activity.length / itemsPerPage) : 1
  const currentItems = isActivityArray ? activity.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : []

  return (
    <div className="m-4 p-4 flex flex-col gap-4 shadow-xl rounded-xl w-[350px] md:w-[511px] lg:w-[1006px] lg:mr-16">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Tu actividad</h2>
        {params === '/activity' && <div className="flex gap-3 cursor-pointer" onClick={() => setShowFilter(!showFilter)}>
          <h3 className="underline text-xl">Filtrar</h3>
          <Image src="/filter.svg" alt="filter" width={20} height={20} />
        </div>}
      </div>
      {showFilter && <FilterOptions />}
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <div className="flex flex-col gap-4">
        {isActivityArray && currentItems.map((item) => <ActivityItem key={item.id} name={item.origin} money={item.amount} date={item.dated} />)}
      </div>
      {params === '/activity' && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      <div className="flex justify-between mt-2 cursor-pointer" onClick={() => router.push('/activity')}>
        <p className="font-semibold text-sm">Ver toda tu actividad</p>
        <Image src="/arrowBtn.svg" alt="arrow" width={20} height={20} />
      </div>
    </div>
  )
}

export default ActivityTable