import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../types/api/allPrograms';

export const useFetchAllPrograms = (params: QueryParams = {}) => {
  const path = 'program/';
  const key = 'allPrograms';

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
  } = useVenueApi<QueryParams, Response>(key, path, params);

  return { data, isLoading, isError, error };
};
