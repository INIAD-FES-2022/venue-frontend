import { style } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const footer = style({
  display: 'grid',
  gridTemplateColumns: '18rem 1fr',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
  fontSize: '1.5rem',
  gap: '0.5rem',
  padding: '1rem',
});

export const title = style({
  gridRow: '1 / 2',
  gridColumn: '1 / 3',
  fontSize: '2rem',
  marginBottom: '1rem',
});

export const headline3 = style({
  display: 'flex',
  justifyContent: 'center',
});

export const sns = style({
  gridColumn: '1 / 3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '5rem',
  rowGap: '1rem',
  marginTop: '1rem',
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
