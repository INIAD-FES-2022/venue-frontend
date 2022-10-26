import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF5EA',
  gap: '20px',
  padding: '20px',
});

export const caption = style({
  fontSize: '2rem',
  width: '100%',
});

export const list = style({
  width: '100%',
});

export const content = style({
  width: '100%',
  padding: '20px 0 20px 0',
  borderBottom: '1px solid #e0e0e0',
});

export const title = style({
  fontSize: '1.5rem',
});
