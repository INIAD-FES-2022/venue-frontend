import { OmittedGroup, Category, Uuid, Url, ISO8601 } from './common';

export type QueryParams = {
  'category'?: Uuid;
  'place'?: string;
  'start-at'?: ISO8601;
  'end-at'?: ISO8601;
  'group'?: Uuid;
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

export type OmittedProgram = {
  uuid: Uuid;
  title: string;
  startAt: ISO8601;
  endAt: ISO8601;
  place: string;
  group: OmittedGroup;
  thumbnail: Url;
  category: Category[];
  isOnline: boolean;
  isFace2Face: boolean;
};

export type Response = OmittedProgram[];

export type Select = {
  place?: 'all' | 'online' | 'offline' | 'hybrid';
  startTime?: string;
  endTime?: string;
};
