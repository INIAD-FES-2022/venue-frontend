import { useQuery } from '@tanstack/react-query';

export const useVenueApi = <
  QueryParams extends Record<never, never>,
  Response extends Record<never, never>,
>(
  key: string,
  path: string,
  params: QueryParams,
) => {
  if (!process.env.NEXT_PUBLIC_API_ROOT) {
    throw new Error('NEXT_PUBLIC_API_ROOT is not defined');
  } else {
    const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;
    const {
      data,
      isLoading,
      isError,
      error,
    }: {
      data: Response | undefined;
      isLoading: boolean;
      isError: boolean;
      error: Error | null;
    } = useQuery([key, params], async () => {
      const query = new URLSearchParams(params).toString();
      const url = `${API_ROOT}${path}${query ? `?${query}` : ''}`;

      const response = await fetch(url, { method: 'GET' });
      if (response.status !== 200) {
        throw new Error(`${response.status}`);
      }

      return response.json();
    });

    return { data, isLoading, isError, error };
  }
};
