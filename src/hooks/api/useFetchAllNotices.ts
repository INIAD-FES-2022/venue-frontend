import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../../types/api/allNotices';

export const useFetchAllNotices = (params: QueryParams = {}) => {
  const path = 'notice/';
  const key = 'allNotices';

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
