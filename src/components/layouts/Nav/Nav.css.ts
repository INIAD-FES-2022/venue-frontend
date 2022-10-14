import { style } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const nav = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
  padding: '0.5rem',
  fontSize: '1.5rem',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
});
