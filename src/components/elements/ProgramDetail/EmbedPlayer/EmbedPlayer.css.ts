import { style } from '@vanilla-extract/css';

export const container = style({
  width: '90%',
  margin: '0 auto',
  padding: '30px 0 30px 0',
});

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
