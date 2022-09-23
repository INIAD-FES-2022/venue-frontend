import { createTheme } from '@vanilla-extract/css';
import { colors, fonts } from '../../../styles/themes.css';

export const [terminalThemeClass, terminalVars] = createTheme({
  colors: {
    ...colors,
    terminal_background_brown: '#240A0A',
    terminal_text_white: '#fafafa',
    terminal_white: '#fafafa',

    // terminalTop
    terminalTop_background_lightBrown: '#5f4c4c',
    terminalTop_text_white: '#fafafa',
    terminalTop_black_lighter: '#32373D',
    terminalTop_black: '#24292f',
    terminalTop_black_darker: '#191B1E',
    terminalTop_red: '#e81123',
    terminalTop_red_darker: '#AC1C25',
  },
  fonts: { ...fonts },
});
