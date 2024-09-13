'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import useWindowWidth from '../_hooks/useWindowWidth'
import { useSession } from 'next-auth/react'
import { useUserAccount } from '../_hooks/useUserAccount'
import { useUserData } from '../_hooks/useUserData'

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  const windowWidth = useWindowWidth()
  const [isMounted, setIsMounted] = useState(false)
  const session = useSession()
  const jwt = session.data?.user.token
  const { user_id } = useUserAccount(jwt)
  const { firstname, lastname } = useUserData(user_id, jwt)

  const firstnameInitial = firstname?.[0] ?? 'X'
  const lastnameInitial = lastname?.[0] ?? 'X'
  const initialUser = firstnameInitial + lastnameInitial
  const fullname = firstname + ' ' + lastname

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-A3 text-black font-bold rounded text-center content-center flex items-center justify-center">
          {initialUser}
        </div>
        <h1 className="text-A3 font-semibold text-2xl p-4 z-10 cursor-pointer hidden md:block md:text-white md:text-xl">
          Hola, {fullname}
        </h1>
      </div>
      <Image
        onClick={() => { setShowMenu(!showMenu) }}
        width={35}
        height={35}
        src="/hamburger.svg"
        alt="menu"
        className={`md:hidden cursor-pointer w-auto ${showMenu ? 'hidden' : 'block'}`}
      />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      {isMounted && windowWidth > 768 && <Menu setShowMenu={setShowMenu} />}
    </div>
  )
}

export default HomeHeader