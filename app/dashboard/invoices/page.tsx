import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import Pagination from '@/app/ui/invoices/pagination';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

// 이해를 돕기위해 type을 외부 변수처리
type Props = {
  searchParams?: Promise<{ query?: string; page?: string }>;
};

export default async function InvoicePage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;

  // 검색된 데이터 갯수기준 페이지수
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div>
      <h2 className={`${lusitana.className} text-[24px]`}>Invoices</h2>
      <div className="flex items-center gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
