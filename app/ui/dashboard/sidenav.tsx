import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-[8px] py-[16px]">
      <Link
        className="mb-[8px] flex h-[160px] items-end justify-start rounded-md bg-blue-600 p-[16px] md:h-[160px] sm:h-[80px]"
        href="/"
      >
        <AcmeLogo />
      </Link>
      <div className="flex grow gap-2 flex-col gap-x-0 gap-y-2 sm:flex-row sm:gap-2">
        <NavLinks />
        <div className="h-auto grow rounded-md bg-gray-50 sm:hidden"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 sm:gap-1">
            <PowerIcon className="w-6" />
            <span className="sm:hidden">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
