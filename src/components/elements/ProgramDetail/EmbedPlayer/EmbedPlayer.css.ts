import { style } from '@vanilla-extract/css';

export const iframeWrapper = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
});

export const iframe = style({
  width: '100%',
  height: '100%',
});
