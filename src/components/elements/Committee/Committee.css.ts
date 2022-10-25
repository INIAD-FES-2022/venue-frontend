import { style } from '@vanilla-extract/css';

export const committee = style({
  backgroundColor: 'fff1cf',
});

export const title = style({});
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
