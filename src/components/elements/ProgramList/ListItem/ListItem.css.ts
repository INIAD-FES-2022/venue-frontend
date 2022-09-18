import { style } from '@vanilla-extract/css';

export const gridItem = style({
  width: '100%',
  height: '21.875rem',
  backgroundColor: '#000',
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
  backgroundColor: '#FFF',
  border: '1px solid #000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0.5rem',
});

export const title = style({
  fontSize: '1.5rem',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});
