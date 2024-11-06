import { fetchCardData } from '@/app/lib/data';
import { Button } from '@/app/ui/button';
import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';

export default async function DashboardPage() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h2 className={`${lusitana.className} text-[24px] mb-[16px]`}>
        DashBoard
      </h2>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
        <Card title={'Collected'} value={totalPaidInvoices} type={'invoices'} />
        <Card
          title={'Pending'}
          value={totalPendingInvoices}
          type={'invoices'}
        />
        <Card
          title={'Total Invoices'}
          value={numberOfInvoices}
          type={'invoices'}
        />
        <Card
          title={'Total Customers'}
          value={numberOfCustomers}
          type={'invoices'}
        />
      </div>
    </main>
  );
}
