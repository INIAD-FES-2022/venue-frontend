import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  padding: '20px',
  paddingTop: '10px',
});

export const caption = style({
  fontSize: '2rem',
  width: '100%',
});

export const list = style({
  width: '100%',
});

export const content = style({
  width: 'calc(100% - 40px)',
  padding: '16px 0 8px 0',
  margin: '0 20px 0 20px',
  borderBottom: '1px solid rgba(53,25,22,0.5)',
  textAlign: 'left',
});

export const title = style({
  marginTop: '-0.4rem',
  fontSize: '1.5rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const date = style({
  fontSize: '1rem',
});

export const browseMore = style({
  marginTop: '0.5rem',
  marginBottom: '0rem',
  fontSize: '1.8rem',
});
