import { useVenueApi } from './useVenueApi';

type QueryParams = Record<string, never>;

type Response = {
  name: string;
  description: string;
  homepage: string;
  logo: string;
};

export const useFetchGroup = (uuid: string) => {
  const path = `group/${uuid}/`;
  const key = `group/${uuid}/`;

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
  } = useVenueApi<QueryParams, Response>(key, path, {});

  return { data, isLoading, isError, error };
};
