"use client";

import { usePathname } from 'next/navigation';
import { DockDemo } from '@/components/magicui/dock';

export function ConditionalDock() {
  const pathname = usePathname();
  
  // Don't show dock on homepage
  if (pathname === '/') {
    return null;
  }
  
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <DockDemo />
    </div>
  );
} 