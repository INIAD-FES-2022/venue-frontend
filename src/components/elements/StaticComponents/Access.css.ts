import { style } from '@vanilla-extract/css';

export const accessStyle = {
  wrapper: style({
    margin: 'auto',
    marginTop: '50px',
    width: '800px',
    fontSize: '1rem',
    textAlign: 'left',
  }),

  sectionTitle: style({
    fontSize: '1.5rem',
    width: '100%',
    padding: '20px',
  }),

  contents: style({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000',
    padding: '50px',
  }),

  img: style({
    height: '800px',
    width: '800px',
    padding: '20px',
  }),
};

/*  */
