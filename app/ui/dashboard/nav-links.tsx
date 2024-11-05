'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { pages } from 'next/dist/build/templates/app-page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import path from 'path';
import { useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link, i) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-start gap-[8px] bg-[#f9fafb] rounded-md text-sm hover:text-blue-600 hover:bg-sky-100 p-[12px] sm:flex-grow sm:justify-center',
              { 'text-blue-600 bg-sky-100': pathName === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="sm:hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
