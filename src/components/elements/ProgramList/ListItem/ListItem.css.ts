import { style } from '@vanilla-extract/css';

export const gridItem = style({
  width: '100%',
  height: '21.875rem',
  display: 'flex',
  flexDirection: 'column',
});

export const imageWrapper = style({
  width: '100%',
  aspectRatio: '16 / 9',
  position: 'relative',
});

export const info = style({
  width: '100%',
  flexGrow: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem',
});

export const title = style({
  fontSize: '1.5rem',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});
