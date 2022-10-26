import { style } from '@vanilla-extract/css';

export const container = style({
  borderStyle: 'solid',
  borderColor: '#811C1F',
  borderWidth: '10px',
  width: '100%',
  fontSize: '1rem',
  backgroundColor: '#FEF5EA',
});

export const siteTtl = style({
  fontSize: '2em',
  color: '#fff',
  backgroundColor: '#811C1F',
  width: '100%',
  padding: '30px',
  textAlign: 'left',
});

export const title = style({
  color: '#811C1F',
  textAlign: 'left',
  fontSize: '32px',
  margin: '20px 50px 20px',
});

export const caption = style({
  padding: '0px 50px 20px',
  textAlign: 'left',
});

export const univ = style({});

export const FES = style({});

export const theme = style({
  display: 'flex',
  flexDirection: 'column',
});

export const img = style({
  width: '250px',
  height: '250px',
  objectFit: 'cover',
  textAlign: 'center',
  minHeight: '0%',
  display: 'inline-block',
});
