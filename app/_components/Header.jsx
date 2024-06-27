'use client'
import Image from "next/image"
import LandingHeader from "./LandingHeader"
import HomeHeader from "./HomeHeader"
import { usePathname } from "next/navigation"
import { useUser } from "../_contexts/userProvider"

export const Header = () => {
  const params = usePathname()
  const { user } = useUser()



  return (
    <header className="flex justify-between px-5 items-center gap-4 h-16 bg-A1">
      <Image width={63} height={20} src="/logo.svg" alt="digital money house log" className="w-auto" priority />
      {params === '/home' || params === '/profile' || params === '/cards' || params === '/cards/add' || params === '/activity' || params === '/payments' || params === '/deposits' || params === '/services' ? <HomeHeader user={user} /> : <LandingHeader />}
    </header>
  )
}
