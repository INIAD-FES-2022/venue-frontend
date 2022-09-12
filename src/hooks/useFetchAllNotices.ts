import { useVenueApi } from './useVenueApi';

type QueryParams = {
  'category'?: string;
  'sort-by'?: 'category' | 'title' | 'date' | '-category' | '-title' | '-date';
};

type Notice = {
  uuid: string;
  title: string;
  date: string; // ISO8601
  category: string[];
};

type Response = Notice[];

export const useFetchAllNotices = (params: QueryParams = {}) => {
  const path = 'notice/';
  const key = 'allNotices';

  const {
    data,
    isLoading,
    isError,
  }: {
    data: Response | undefined;
    isLoading: boolean;
    isError: boolean;
  } = useVenueApi<QueryParams, Response>(key, path, params);

  return { data, isLoading, isError };
};
