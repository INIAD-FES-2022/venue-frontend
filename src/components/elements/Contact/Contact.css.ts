import { style } from '@vanilla-extract/css';
import { colors, globalVars } from '../../../styles/themes.css';

export const contactStyle = {
  sectionTitle: style({
    fontSize: '1.8rem',
    padding: '50px',
    color: colors.accent_red_5,
  }),

  contact: style({
    display: 'flex',
    justifyContent: 'center',
  }),

  element: style({
    margin: '30px',
    color: colors.accent_blue_1,
  }),

  contents: style({
    padding: '50px',
  }),
};
