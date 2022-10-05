import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  padding: '50px',
  backgroundColor: '#FFF5EA',
  overflowWrap: 'anywhere',
});

globalStyle(`${container} > *`, {
  maxWidth: '1000px',
});
