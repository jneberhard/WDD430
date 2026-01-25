export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard', // Page Title
description: 'Manage your customers in the Acme Dashboard.', // Page Description
};

export default function Page() {
  return <p>Customers Page</p>;
}
