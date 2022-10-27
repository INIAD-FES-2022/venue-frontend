import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const caption = style({
  fontSize: '1.8rem',
  marginBottom: '10px',
});

export const headline3 = style({
  fontSize: '1.5rem',
  paddingLeft: '10px',
  marginBottom: '10px',
  borderLeft: '5px solid #861b1f',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const frame = style({
  padding: '20px',
  backgroundImage:
    "url('/program_detail/background_accent.svg'), url('/program_detail/background.svg')",
  backgroundRepeat: 'no-repeat, repeat',
  backgroundPosition: 'top right',
});
