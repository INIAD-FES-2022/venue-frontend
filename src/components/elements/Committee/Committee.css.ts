import { style } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const sitTle = style({
  fontSize: '2em',
  color: '#fff',
  width: '100%',
  padding: '20px',
  textAlign: 'left',
});

export const title = style({
  fontFamily: fonts.normal_1,
  color: '#811C1F',
  textAlign: 'left',
  fontSize: '2rem',
});

export const containers = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  margin: '50px auto 0 auto',
  maxWidth: '1000px',
});

export const captions = style({
  padding: '30px',
  textAlign: 'left',
});

export const caption = style({
  paddingTop: '1.5rem' /* 24px */,
  paddingBottom: '1.5rem' /* 24px */,
});
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
