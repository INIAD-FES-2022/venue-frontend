import { useVenueApi } from './useVenueApi';

type QueryParams = Record<string, never>;

type Response = {
  uuid: string;
  title: string;
  date: string; // ISO8601
  category: string[];
  content: string;
  relatedUrl: string[];
};

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
