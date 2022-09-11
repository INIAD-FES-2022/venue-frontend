import { createTheme } from '@vanilla-extract/css';

export const colors = {
  c_red_100: '#FDEFF2',
  c_red_200: '#F6BFBC',
  c_red_300: '#F09199',
  c_red_400: '#E95464',

  c_yellow_300: '#FFDB4F',
  c_yellow_350: '#FBCA4D',
  c_yellow_400: '#FCC800',

  text: '#111212',
  background: '#fff',
  primary: '#005CDD',
  secondary: '#6D59F0',
  muted: '#f6f6f9',
  gray: '#D3D7DA',
  highlight: 'hsla(205, 100%, 40%, 0.125)',
  white: '#FFF',
  black: '#111212',
  success: 'green',
  message: 'blue',
  warning: 'yellow',
  danger: 'red',
};

export const [themeClass, vars] = createTheme({
  color: {
    c_red_100: '#F6BFBC',
  },
  font: {
    body: 'arial',
  },
});

// HERE

// export const colors = {
//   text: '#111212',
//   background: '#fff',
//   primary: '#005CDD',
//   secondary: '#6D59F0',
//   muted: '#f6f6f9',
//   gray: '#D3D7DA',
//   highlight: 'hsla(205, 100%, 40%, 0.125)',
//   white: '#FFF',
//   black: '#111212',
//   success: 'green',
//   message: 'blue',
//   warning: 'yellow',
//   danger: 'red',
// }
export const gradients = {
  subtle: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  purple: `linear-gradient(180deg, ${colors.primary} 0%, #A000C4 100%)`,
  blue: `linear-gradient(180deg, #00D2FF 0%, ${colors.secondary} 100%)`,
};
// export const [themeClass, vars] = createTheme({
//   colors,
//   gradients,
// })
