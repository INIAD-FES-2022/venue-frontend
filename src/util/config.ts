/* eslint-disable */

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

if (!publicRuntimeConfig && !publicRuntimeConfig.basePath) {
  throw new Error('basePath is not defined');
}

export const url = (path: string): string =>
  publicRuntimeConfig.basePath + path;
