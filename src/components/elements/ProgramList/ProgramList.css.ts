import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFF5EA',
  padding: '50px 0',
  gap: '50px',
});

globalStyle(`${container} > *`, {
  maxWidth: '1200px',
  padding: '0 20px 0 20px',
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
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
});

globalStyle(`${querySelector} > *`, {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const selector = style({
  width: '6rem',
  height: '2rem',
  backgroundColor: '#FFF',
  border: '1px solid #999',
});
