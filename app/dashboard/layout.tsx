import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen pl-[256px] sm:flex-col sm:p-0">
      <div className="fixed w-[256px] left-0 top-0 h-screen sm:w-full sm:static sm:h-auto">
        <SideNav />
      </div>
      <div className="p-[48px] flex-grow sm:p-6 overflow-auto sm:overflow-hidden">
        {children}
      </div>
    </div>
  );
}
