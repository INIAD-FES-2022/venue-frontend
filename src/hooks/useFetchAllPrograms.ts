import { useVenueApi } from './useVenueApi';

type QueryParams = {
  'category'?: string; // uuid
  'place'?: string;
  'start-at'?: string; // ISO8601
  'end-at'?: string; // ISO8601
  'group'?: string; // uuid
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

type Group = {
  uuid: string;
  name: string;
};

type Category = {
  uuid: string;
  name: string;
};

type Program = {
  uuid: string;
  title: string;
  startAt: string; // ISO8601
  endAt: string; // ISO8601
  place: string;
  group: Group;
  thumbnail: string;
  category: Category[];
};

type Response = Program[];

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
