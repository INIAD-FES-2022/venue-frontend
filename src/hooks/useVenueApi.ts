import { useQuery } from '@tanstack/react-query';

export const useVenueApi = <
  QueryParams extends Record<never, never>,
  Response extends Record<never, never>,
>(
  key: string,
  path: string,
  params: QueryParams,
) => {
  const {
    data,
    isLoading,
    isError,
  }: {
    data: Response | undefined;
    isLoading: boolean;
    isError: boolean;
  } = useQuery([key, params], async () => {
    const query = new URLSearchParams(params).toString();
    let url: string;

    if (process.env.NEXT_PUBLIC_API_ROOT) {
      url = `${process.env.NEXT_PUBLIC_API_ROOT}${path}${
        query ? `?${query}` : ''
      }`;
    } else {
      throw new Error('API_ROOT is not defined');
    }

    const response = await fetch(url, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }

    return response.json();
  });

  return { data, isLoading, isError };
};
