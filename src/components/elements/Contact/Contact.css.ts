import { style } from '@vanilla-extract/css';

export const contactStyle = {
  wrapper: style({
    margin: 'auto',
    maxWidth: '800px',
    fontSize: '1rem',
    textAlign: 'left',
    padding: '40px',
  }),

  sectionTitle: style({
    fontSize: '1.5rem',
  }),

  listElements: style({
    textIndent: '40px',
  }),
};
