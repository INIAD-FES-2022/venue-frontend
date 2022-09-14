import { useVenueApi } from './useVenueApi';
import { QueryParams, Response } from '../../types/api/program';

export const useFetchProgram = (uuid: string) => {
  const path = `program/${uuid}/`;
  const key = `program/${uuid}/`;

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
