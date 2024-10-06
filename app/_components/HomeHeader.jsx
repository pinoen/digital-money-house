'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import useWindowWidth from '../_hooks/useWindowWidth';
import { useSession } from 'next-auth/react';
import { useUserAccount } from '../_hooks/useUserAccount';
import { useUserData } from '../_hooks/useUserData';
import { useRouter } from 'next/navigation';

const HomeHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);
  const session = useSession();
  const jwt = session.data?.user.token;
  const { user_id } = useUserAccount(jwt);
  const { firstname, lastname } = useUserData(user_id, jwt);
  const router = useRouter();

  const firstnameInitial = firstname[0]?.toUpperCase() ?? 'X';
  const lastnameInitial = lastname[0]?.toUpperCase() ?? 'X';
  const initialUser = firstnameInitial + lastnameInitial;
  const fullname = firstname[0]?.toUpperCase() + firstname.slice(1) + ' ' + lastname[0]?.toUpperCase() + lastname.slice(1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex gap-4">
      <div className="flex items-center" onClick={() => router.push('/home')}>
        <div className="w-10 h-10 bg-A3 text-black font-bold rounded text-center content-center flex items-center justify-center">
          {initialUser}
        </div>
        <h1 className="text-A3 font-semibold text-2xl p-4 z-10 cursor-pointer hidden md:block md:text-white md:text-xl">
          Hola, {fullname}
        </h1>
      </div>
      <Image
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        width={35}
        height={35}
        src="/hamburger.svg"
        alt="menu"
        className={`md:hidden cursor-pointer w-auto ${showMenu ? 'hidden' : 'block'}`}
      />
      {showMenu ? <Menu setShowMenu={setShowMenu} fullname={fullname} /> : null}
      {isMounted && windowWidth > 768 && <Menu setShowMenu={setShowMenu} />}
    </div>
  );
};

export default HomeHeader;
