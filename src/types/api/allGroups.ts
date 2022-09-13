import { Empty, Uuid, Url } from './common';

export type QueryParams = Empty;

export type Group = {
  uuid: Uuid;
  name: string;
  logo: Url;
};

export type Response = Group[];
