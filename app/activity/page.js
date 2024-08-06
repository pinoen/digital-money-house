'use client'
import { useState } from "react";
import ActivityTable from "../_components/ActivityTable";
import ArrowBtn from "../_components/ArrowBtn";
import SearchActivity from "../_components/SearchActivity";
import { useUser } from "../_contexts/userProvider";

export default function Page() {
  const { activity } = useUser()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="flex flex-col justify-start lg:items-center md:items-end  bg-slate-100 h-full">
      <ArrowBtn page='Tu actividad' />
      <SearchActivity onSearch={setSearchQuery} initialSeach={searchQuery} />
      <ActivityTable activity={activity} searchQuery={searchQuery} />
    </main>
  )
}