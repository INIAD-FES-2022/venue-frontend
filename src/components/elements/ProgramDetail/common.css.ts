import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const caption = style({
  fontSize: '1.5rem',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});
