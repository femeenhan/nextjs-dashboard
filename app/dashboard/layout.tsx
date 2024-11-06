'use client';

import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <div className="flex h-screen sm:flex-col">
      <div className="w-[256px] sm:w-full">
        <SideNav />
      </div>
      <div className="p-[48px] flex-grow overflow-y-auto sm:p-6">
        {children}
      </div>
    </div>
  );
}
