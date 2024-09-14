'use client';
import Image from 'next/image';
import LandingHeader from './LandingHeader';
import HomeHeader from './HomeHeader';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const params = usePathname();

  return (
    <header className="flex justify-between px-5 items-center gap-4 h-16 bg-A1">
      <Image
        width={63}
        height={20}
        src="/logo.svg"
        alt="digital money house log"
        className="w-auto"
        priority
      />
      {params === '/home' ||
      params === '/profile' ||
      params.startsWith('/cards') ||
      params.startsWith('/activity') ||
      params === '/deposits' ||
      params === '/deposits/transfer' ||
      params.startsWith('/deposits/') ||
      params.startsWith('/services') ? (
        <HomeHeader />
      ) : (
        <LandingHeader />
      )}
    </header>
  );
};
