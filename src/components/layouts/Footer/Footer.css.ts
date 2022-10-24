import { style, globalStyle } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

const smartPhone = 'screen and (max-width: 52rem)';

export const footer = style({
  'display': 'grid',
  'gridTemplateColumns': '18rem 1fr',
  'fontFamily': `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
  'fontSize': '1.5rem',
  'gap': '0.5rem',
  'padding': '1rem',

  '@media': {
    [smartPhone]: {
      gridTemplateColumns: '1fr',
      fontSize: '1rem',
    },
  },
});

export const title = style({
  'gridRow': '1 / 2',
  'gridColumn': '1 / 3',
  'fontSize': '2rem',
  'marginBottom': '1rem',

  '@media': {
    [smartPhone]: {
      fontSize: '1.5rem',
      gridColumn: '1 / 2',
      marginBottom: '0rem',
      marginLeft: '1rem',
    },
  },
});

export const headline3 = style({
  'display': 'flex',
  'justifyContent': 'center',

  '@media': {
    [smartPhone]: {
      margin: '1rem',
    },
  },
});

export const gridItemList = style({
  'display': 'flex',
  'flexDirection': 'column',
  'gap': '0.5rem',

  '@media': {
    [smartPhone]: {
      margin: '0 auto',
    },
  },
});

globalStyle(`${gridItemList} > li > span`, {
  'display': 'inline',

  '@media': {
    [smartPhone]: {
      display: 'none',
    },
  },
});

export const sns = style({
  'gridColumn': '1 / 3',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'flexWrap': 'wrap',
  'gap': '5rem',
  'rowGap': '1rem',
  'marginTop': '1rem',

  '@media': {
    [smartPhone]: {
      gridColumn: '1 / 2',
    },
  },
});

export const snsLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
});

export const snsText = style({
  fontSize: '1.5rem',
  paddingBottom: '0.2rem',
});
