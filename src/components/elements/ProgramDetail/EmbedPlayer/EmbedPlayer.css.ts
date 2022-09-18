import { style } from '@vanilla-extract/css';

export const EmbedPlayer = style({
  width: '100%',
});

export const caption = style({
  fontSize: '1.5rem',
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
