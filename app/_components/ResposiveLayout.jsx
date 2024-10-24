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

  const isPublicPage = params === '/' ||
    params.startsWith('/login') ||
    params.startsWith('/signup');

  return (
    <div className="min-h-full bg-slate-100">
      <div className="flex flex-col md:flex-row relative">
        {/* Left space for menu in tablet/desktop */}
        {!isPublicPage && (
          <div className="hidden md:block md:w-[221px] lg:w-[276px] flex-shrink-0">
            {/* This div reserves space for the fixed menu */}
          </div>
        )}

        {/* Main content area */}
        <div className="flex-grow min-h-[calc(100vh-80px)]"> {/* Subtract header height + any additional spacing */}
          {children}
        </div>
      </div>
    </div>
  );
};