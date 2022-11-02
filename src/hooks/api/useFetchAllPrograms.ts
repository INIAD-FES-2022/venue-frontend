import { useVenueApi } from './useVenueApi';
import { QueryParams, Response, Select } from '../../types/api/allPrograms';

export const useFetchAllPrograms = (
  params: QueryParams = {},
  select: Select = {},
) => {
  const path = 'program/';
  const key = 'allPrograms';

  const selector = (d: Response): Response => {
    const { place, startTime, endTime } = select;

    const placeFilter = (programs: Response): Response => {
      if (place === 'all' || !place) {
        return programs;
      }

      if (place === 'online') {
        return programs.filter((program) => program.isOnline);
      }

      if (place === 'offline') {
        return programs.filter((program) => program.isFace2face);
      }

      if (place === 'hybrid') {
        return programs.filter(
          (program) => program.isOnline && program.isFace2face,
        );
      }

      return programs;
    };

    const timeFilter = (programs: Response): Response => {
      if (!startTime || !endTime) {
        return programs;
      }

      return programs.filter((program) => {
        const startAt = new Date(program.startAt);
        const endAt = new Date(program.endAt);
        const start = new Date(startTime);
        const end = new Date(endTime);

        const lMax = Math.max(startAt.getTime(), start.getTime());
        const rMin = Math.min(endAt.getTime(), end.getTime());

        return rMin - lMax > 0;
      });
    };

    return timeFilter(placeFilter(d));
  };

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
  } = useVenueApi<QueryParams, Response>(key, path, params, selector);

  return { data, isLoading, isError, error };
};
