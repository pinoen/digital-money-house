import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'

const HomeHeader = ({ initialUser = 'EP' }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-A3 text-black font-bold rounded text-center content-center">{initialUser}</div>
      <Image onClick={() => { setShowMenu(!showMenu) }} width={35} height={35} src="/hamburger.svg" alt="menu" className={`cursor-pointer w-auto ${showMenu ? 'hidden' : 'block'}`} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}
    </div>
  )
}

export default HomeHeader