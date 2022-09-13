import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../types/api/notice';

export const useFetchNotice = (uuid: string) => {
  const path = `notice/${uuid}/`;
  const key = `notice/${uuid}/`;

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
