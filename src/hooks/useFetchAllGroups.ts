import { useVenueApi } from './useVenueApi';

type QueryParams = Record<string, never>;

type Group = {
  uuid: string;
  name: string;
  logo: string;
};

type Response = Group[];

export const useFetchAllGroups = () => {
  const path = 'group/';
  const key = `allGroups`;

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
