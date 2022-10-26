import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const caption = style({
  fontSize: '2rem',
});

export const sliderWrapper = style({
  'marginTop': '0.5rem',
  'width': '90%',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '80%',
    },
  },
});

export const slider = style({
  width: '100%',
});

export const sliderItem = style({
  margin: '20px',
  cursor: 'pointer',
});

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
});

export const dummyImage = style({
  width: '100%',
  height: '100%',
  aspectRatio: '16/9',
  backgroundColor: '#CCCCCC',
});

export const title = style({
  marginTop: '-0.1rem',
  marginLeft: '0.4rem',
  wordBreak: 'keep-all',
  fontSize: '1.5rem',
  flexWrap: 'wrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const groupName = style({
  marginTop: '-0.3rem',
  marginLeft: '0.4rem',
  fontSize: '0.7rem',
  flexWrap: 'wrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const dummyTitle = style({
  width: '100%',
  height: '2rem',
  backgroundColor: '#CCCCCC',
  transform: 'scale(0.6, 0.6)',
  transformOrigin: 'center',
});

export const browseMore = style({
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontSize: '1.8rem',
});
