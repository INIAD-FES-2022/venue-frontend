import { style } from '@vanilla-extract/css';

export const attention = style({
  borderStyle: 'solid',
  borderColor: '#811C1F',
  borderWidth: '10px',
  width: '100%',
  fontSize: '1rem',
  backgroundColor: '#FEF5EA',
});

export const title = style({
  fontSize: '2em',
  color: '#fff',
  backgroundColor: '#811C1F',
  width: '100%',
  padding: '20px',
  textAlign: 'left',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 50px 10px 50px',
});
export const caption = style({
  display: 'flex',
  margin: '5% 0',
});

export const img = style({
  padding: '20px',
});

export const txt = style({
  display: 'flex',
  listStyle: 'none',
  textIndent: '2em',
  padding: '30px',
});
