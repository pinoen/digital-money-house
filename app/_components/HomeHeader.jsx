import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'
import useWindowWidth from '../_hooks/useWindowWidth'

const HomeHeader = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false)
  const windowWidth = useWindowWidth()
  const firstnameInitial = user?.firstname?.[0] ?? 'E'
  const lastnameInitial = user?.lastname?.[0] ?? 'P'
  const initialUser = firstnameInitial + lastnameInitial
  const fullname = user?.firstname + ' ' + user?.lastname

  return (
    <div className="flex gap-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-A3 text-black font-bold rounded text-center content-center">{initialUser}</div>
        <h1 className="text-A3 font-semibold text-2xl p-4 z-10 cursor-pointer hidden md:block md:text-white md:text-xl">Hola, {fullname}</h1>
      </div>
      <Image onClick={() => { setShowMenu(!showMenu) }} width={35} height={35} src="/hamburger.svg" alt="menu" className={`md:hidden cursor-pointer w-auto ${showMenu ? 'hidden' : 'block'}`} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
      {windowWidth > 768 && <Menu setShowMenu={setShowMenu} />}
    </div>
  )
}

export default HomeHeader