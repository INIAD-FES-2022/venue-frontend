import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

globalStyle(`${container} > *`, {
  maxWidth: '1000px',
  padding: '0 20px 0 20px',
  marginTop: '50px',
});
