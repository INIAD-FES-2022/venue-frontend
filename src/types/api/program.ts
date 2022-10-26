import { Empty, Category, OmittedGroup, ISO8601, Url } from './common';

export type QueryParams = Empty;

export type Response = {
  group: OmittedGroup;
  title: string;
  description: string;
  startAt: ISO8601;
  endAt: ISO8601;
  streamingUrl: Url;
  relatedUrl: Url[];
  thumbnail: Url;
  logo: string;
  category: Category[];
  place: string;
  images: Url[];
  isOnline: boolean;
  isFace2face: boolean;
};
