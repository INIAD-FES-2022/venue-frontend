import { style } from '@vanilla-extract/css';

const smartPhone = 'screen and (max-width: 52rem)';

export const main = style({
  'display': 'grid',
  'alignItems': 'start',
  'gridTemplateColumns': '1fr minmax(18%, 16rem)',
  'gap': '1.5rem',
  'padding': '1.5rem',

  '@media': {
    [smartPhone]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const nav = style({
  'gridColumn': '-2 / -1',
  'gridRow': '1 / 3',
  'position': 'sticky',
  'top': '1.5rem',

  '@media': {
    [smartPhone]: {
      margin: '0 auto',
      width: '80%',
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },
  },
});

export const content = style({
  minHeight: '95vh',
});
