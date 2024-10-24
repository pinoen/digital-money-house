'use client'
import { useState, useEffect } from 'react';
import useWindowWidth from '../_hooks/useWindowWidth';
import { usePathname } from 'next/navigation';

export const ResponsiveLayout = ({ children }) => {
  const windowWidth = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);
  const params = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row">
        {/* Left space for menu in tablet/desktop */}
        {params === '/' || params.startsWith('/login') || params.startsWith('/signup') ? <div>
          {/* This div reserves space for the pages that don't need the menu */}
        </div> :
          <div className="hidden md:block md:w-[221px] lg:w-[276px] flex-shrink-0">
            {/* This div reserves space for the fixed menu */}
          </div>}

        {/* Main content area */}
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};