import { Empty, Url } from './common';

export type QueryParams = Empty;

export type Response = {
  name: string;
  description: string;
  homepage: Url;
  logo: Url;
};
