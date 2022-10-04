import { style } from '@vanilla-extract/css';

export const description = style({
  width: '100%',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
});

export const info = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '16px',
});

export const logo = style({
  borderRadius: '20%',
});

export const name = style({
  fontSize: '1.5rem',
});
