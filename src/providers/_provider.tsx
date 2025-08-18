'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import GNB from '@/components/organisms/gnb';
import Footer from '@/components/organisms/footer';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  const pathname = usePathname();

  const isAuthPage = pathname?.startsWith('/auth');

  return (
    <QueryClientProvider client={queryClient}>
      {isAuthPage ? (
        children
      ) : (
        <>
          <GNB />
          {children}
          <Footer />
        </>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
