import { useVenueApi } from './useVenueApi';

type QueryParams = Record<string, never>;

type Group = {
  uuid: string;
  name: string;
};

type Category = {
  uuid: string;
  name: string;
};

type Response = {
  group: Group;
  title: string;
  description: string;
  startAt: string; // ISO8601
  endAt: string; // ISO8601
  streamingUrl: string;
  relatedUrl: string[];
  logo: string;
  category: Category[];
  place: string;
  images: string[];
};

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
