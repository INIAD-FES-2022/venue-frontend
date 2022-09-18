import { style } from '@vanilla-extract/css';

export const description = style({
  width: '100%',
  marginBottom: '10px',
});

export const info = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
});

export const logo = style({
  borderRadius: '50%',
});

export const name = style({
  fontSize: '1.5rem',
});
