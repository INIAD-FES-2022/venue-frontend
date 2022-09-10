import { useVenueApi } from './useVenueApi';

type QueryParams = {
  'category'?: string;
  'place'?: string;
  'start-at'?: string; // ISO8601
  'end-at'?: string; // ISO8601
  'group'?: string;
  'sort-by'?:
    | 'category'
    | 'startAt'
    | 'endAt'
    | 'title'
    | 'group'
    | '-category'
    | '-startAt'
    | '-endAt'
    | '-title'
    | '-group';
};

type Program = {
  uuid: number;
  title: string;
  startAt: string; // ISO8601
  endAt: string; // ISO8601
  place: string;
  logo: string;
  thumbnail: string;
};

type Response = Program[];

export const useFetchAllPrograms = (params: QueryParams = {}) => {
  const path = 'program/';
  const key = 'allPrograms';

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
