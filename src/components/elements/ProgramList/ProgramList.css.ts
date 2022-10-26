import { style, globalStyle } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 0',
  gap: '50px',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
});

globalStyle(`${container} > *`, {
  maxWidth: '1200px',
  padding: '0 20px 0 20px',
});

export const gridWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const gridContainer = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 18rem)',
  gridGap: '50px',
  justifyContent: 'center',
});

export const querySelectors = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '100px',
  rowGap: '50px',
  flexWrap: 'wrap',
});

export const querySelector = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
});

export const selector = style({
  width: '11rem',
  height: '2rem',
  fontSize: '1.2rem',
  textAlign: 'center',
  borderBottom: '1px solid #999',
  backgroundColor: 'rgba(0, 0, 0, 0)',
});
