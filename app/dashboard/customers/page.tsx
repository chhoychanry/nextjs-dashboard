import { Metadata } from 'next';
import TableCustomer from '@/app/ui/customers/table';

import {fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};
export default async function page(props:{searchParams?:Promise<{
    query?: string;
  }>;}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div>
      <TableCustomer query={query}/>
     
    </div>
  )
}

