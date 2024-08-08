'use client'
import { useState } from "react";
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import SearchActivity from "../_components/SearchActivity";
import { useSelector } from "react-redux";

export default function Page() {
  const dataActivity = useSelector(state => state.user.activity)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page='Tu actividad' />
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      <ActivityTable activity={dataActivity} searchQuery={searchQuery} />
    </main>
  )
}