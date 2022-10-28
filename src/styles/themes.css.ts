import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const colors = {
  // text colors
  text_purple_1: '#5C2D36',
  text_purple_2: '#6C2C2F',
  text_brown: '#4D1A06',
  text_brown_2: '#351916',
  text_blue_1: '#17184B',
  text_gray_1: '#432F2F',
  text_gray_2: '#302833',
  text_gray_3: '#1F3134',
  text_purple_3: '#351916',
  text_green: '#0D270D',
  text_brown_3: '2E0922',

  // sub color
  sub_green: '#e0ebaf',
  sub_pink: '#fdeff2',
  sub_yellow_1: '#fff1cf',
  sub_yellow_2: '#fde8d0',
  sub_blue_1: '#def3de',
  sub_blue_2: '#ebf3dc',
  sub_blue_3: '#eaf4fc',

  // main color
  main: 'rgba(254,245,234,0.9)',

  // main_pink
  main_pink_1: '#F6BFBC',
  main_pink_2: '#F5B1AA',
  main_pink_3: '#F2A0A1',
  main_pink_4: '#F09199',
  main_pink_5: '#EF9683',
  main_pink_6: '#F3BF88',

  // main_yellow
  main_yellow_1: '#FBCA4D',
  main_yellow_2: '#FFC06A',
  main_yellow_3: '#FBD26B',
  main_yellow_4: '#FDDEA5',
  main_yellow_5: '#FFDB4F',
  main_yellow_6: '#FFD900',
  main_yellow_7: '#FCC800',

  // main_green
  main_green: '#C3D825',
  main_green_1: '#D5C752',
  main_green_2: '#C5C56A',
  main_green_3: '#B0CA71',
  main_green_4: '#B9D08B',
  main_green_5: '#A8C97F',
  main_green_6: '#93CA76',
  main_green_7: '#88CB7F',
  main_green_8: '#AACF53',
  main_green_9: '#69B076',
  main_green_10: '#68BE8D',
  main_green_11: '#38B48B',
  main_green_12: '#7BC496',
  main_green_13: '#7EBEA5',
  main_green_14: '#7EBEAB',

  // main_blue
  main_blue_1: '#83CCD2',
  main_blue_2: '#72C1C8',
  main_blue_3: '#84B9CB',
  main_blue_4: '#59B9C6',
  main_blue_5: '#69C2C7',
  main_blue_6: '#84A2D4',
  main_blue_7: '#9093E0',

  // main_purple
  main_purple_1: '#A59ACA',
  main_purple_2: '#C0A2C7',
  main_purple_3: '#E597B2',
  main_purple_4: '#EB6EA5',
  main_purple_5: '#CC7EB1',
  main_purple_6: '#E198B4',

  // accent
  accent_red_1: '#E95464',
  accent_red_2: '#EC6D51',
  accent_red_3: '#EB6238',
  accent_red_4: '#B94047',
  accent_red_5: '#AC2424',
  accent_brown_1: '#B14329',
  accent_red_6: '#A61017',
  accent_green_1: '#715C23',
  accent_brown_2: '#C44303',
  accent_brown_3: '#ED6D3D',
  accent_brown_4: '#E17B34',
  accent_yellow_1: '#FFB02A',
  accent_yellow_2: '#F08300',
  accent_yellow_3: '#F39800',
  accent_brown_5: '#EE7948',
  accent_yellow_4: '#FABF14',
  accent_green_2: '#928C36',
  accent_green_3: '#839B5C',
  accent_blue_1: '#478384',
  accent_blue_2: '#9079AD',
  accent_purple_1: '#F73B70',
  accent_red: '#861b1f',
};

export const fonts = {
  japanese_1: 'Yuji Syuku',
  japanese_2: 'Hannari',
  japanese_3: 'Kokoro',
  normal_1: 'Noto Serif JP',
  normal_2: 'Sawarabi Mincho',
  dot_1: 'DotGothic16',
  dot_2: 'Silkscreen',
  design_en_1: 'Cairo Play',
  design_en_2: 'Coda',
  design_en_3: 'Oxanium',
  design_en_4: 'Turret Road',
};

export const globalVars = createGlobalTheme(':root', {
  colors,
  fonts,
});

globalStyle('body', {
  color: globalVars.colors.text_brown_2,
  backgroundColor: '#1a1418',
  fontFamily: globalVars.fonts.normal_2,
});
