import { style } from '@vanilla-extract/css';
import { smartPhone } from '../../../layouts/Layout.css';
import { globalVars } from '../../../../styles/themes.css';

export const sponsoredStyle = {
  banner: style({
    'margin': '2rem',
    'height': '9rem',
    '@media': {
      [smartPhone]: { height: '6rem' },
    },
  }),
  container: style({
    alignContent: 'space-around',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  }),
  logo: style({
    'height': '100%',
    'borderRadius': '3px',
    'boxShadow': '2px 2px 8px #111111',
    ':hover': {
      boxShadow: '1px 1px 4px #111111',
    },
    ':active': {
      boxShadow: '1px 1px 0px #111111',
    },
  }),
};
