import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../types/api/group';

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
