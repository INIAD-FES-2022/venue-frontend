import { useVenueApi } from './useVenueApi';

type QueryParams = {
  'category'?: string; // uuid
  'sort-by'?: 'category' | 'title' | 'date' | '-category' | '-title' | '-date';
};

type Category = {
  uuid: string;
  name: string;
};

type Notice = {
  uuid: string;
  title: string;
  date: string; // ISO8601
  category: Category[];
};

type Response = Notice[];

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
