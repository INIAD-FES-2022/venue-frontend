import { Empty, Category, Url, ISO8601, Uuid } from './common';

export type QueryParams = Empty;

export type Response = {
  uuid: Uuid;
  title: string;
  date: ISO8601;
  category: Category[];
  content: string;
  relatedUrl: Url[];
};
