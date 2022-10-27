import { style } from '@vanilla-extract/css';

export const sitTle = style({
  fontSize: '2em',
  color: '#fff',
  width: '100%',
  padding: '20px',
  textAlign: 'left',
});

export const title = style({
  color: '#811C1F',
  textAlign: 'left',
  fontSize: '21px',
  padding: '20px 0',
});

export const containers = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 50px 10px 50px',
});

export const captions = style({
  textAlign: 'left',
});

export const caption = style({});
export const roster = style({});

export const container = style({
  display: '-webkit-flex',
  WebkitFlexDirection: 'column',
  flexDirection: 'column',
  WebkitFlexWrap: 'wrap',
  flexWrap: 'wrap',
  WebkitAlignSelf: 'center',
  alignSelf: 'center',
  height: '500px',
  gap: '7px',
  alignContent: 'space-between',
});
