
import CustomersTable from "@/app/ui/customers/table"
import { fetchFilteredCustomers  } from "@/app/lib/data"

export default async function Page({
  searchParams,
  }: {
    searchParams?: {
     query?: string;
   };
  }) {
    
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);

    return <div>
      <CustomersTable customers={customers} />
    </div>
  }