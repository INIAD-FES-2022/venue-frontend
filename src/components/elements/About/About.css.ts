import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1000px',
  height: '100%',
  margin: '30px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FEF5EA',
  gap: '20px',
  padding: '30px',
});

export const siteTtl = style({
  background: '#811C1F',
  padding: '5px',
  color: '#FFF',
  fontFamily: 'bold',
  letterSpacing: '0.05em',
});
export const title = style({
  color: '#811C1F',
  textAlign: 'left',
  fontSize: '21px',
});

export const caption = style({
  width: '100%',
  textAlign: 'left',
});

export const univ = style({});

export const FES = style({});

export const theme = style({});

export const img = style({
  width: '50px',
  textAlign: 'center',
  minHeight: '0%',
  display: 'inline-block',
});
