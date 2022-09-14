import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../../types/api/allGroups';

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
