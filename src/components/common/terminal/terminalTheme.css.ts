import { createTheme } from '@vanilla-extract/css';
import { colors, fonts } from '../../../styles/themes.css';

export const [terminalThemeClass, terminalVars] = createTheme({
  colors: {
    ...colors,
    terminal_background_brown: '#240A0A',
    terminal_text_white: '#fafafa',
    terminal_white: '#fafafa',
    terminalTop_background_lightBrown: '#5f4c4c',
    terminalTop_text_white: '#fafafa',
    terminalTop_text_black: '#24292f',
    terminalTop_red: '#e81123',
  },
  fonts: { ...fonts },
});
