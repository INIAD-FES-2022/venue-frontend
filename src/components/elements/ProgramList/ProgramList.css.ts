import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

globalStyle(`${container} > *`, {
  maxWidth: '1200px',
  padding: '0 20px 0 20px',
  marginTop: '50px',
});

export const headline = style({
  fontSize: '2.5rem',
  width: '100%',
});

export const gridWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const gridContainer = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 18rem)',
  gridGap: '50px',
  justifyContent: 'center',
});

export const querySelector = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
});

globalStyle(`${querySelector} > *`, {
  display: 'flex',
  gap: '10px',
});
