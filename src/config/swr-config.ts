import { SWRConfiguration } from 'swr';
import { useAuthenticatedFetch } from '@/hooks/use-authenticated-fetch.ts';

export function createSWRConfig(): SWRConfiguration {
  const authenticatedFetch = useAuthenticatedFetch();

  return {
    fetcher: (url: string) => authenticatedFetch(url),
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    shouldRetryOnError: false,
  };
}