import { style } from '@vanilla-extract/css';

export const contactStyle = {
  wrapper: style({
    margin: 'auto',
    marginTop: '50px',
    maxWidth: '800px',
    fontSize: '1rem',
    textAlign: 'left',
  }),

  sectionTitle: style({
    fontSize: '1.5rem',
    color: '#fff',
    backgroundColor: '#F00',
    width: '100%',
    padding: '20px',
  }),

  elements: style({
    marginLeft: '40px',
  }),

  contents: style({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000',
    padding: '50px',
  }),
};
