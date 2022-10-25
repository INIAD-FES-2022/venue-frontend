import { style } from '@vanilla-extract/css';

const smartPhone = 'screen and (max-width: 52rem)';

export const container = style({
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

export const main = style({
  minHeight: '95vh',
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

export const footer = style({});

export const mainVisual = style({});

export const programIntroduction = style({});

export const announcement = style({});

export const sponsored = style({});
