import { Category, Uuid, ISO8601 } from './common';

export type QueryParams = {
  'category'?: Uuid;
  'sort-by'?: 'category' | 'title' | 'date' | '-category' | '-title' | '-date';
};

export type OmittedNotice = {
  uuid: Uuid;
  title: string;
  date: ISO8601;
  category: Category[];
};

export type Response = OmittedNotice[];
