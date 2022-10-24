import { style, globalStyle } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '50px',
  padding: '50px',
  backgroundColor: '#FFF',
  overflowWrap: 'anywhere',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
  color: '#000',
});

globalStyle(`${container} > *`, {
  maxWidth: '1000px',
});
