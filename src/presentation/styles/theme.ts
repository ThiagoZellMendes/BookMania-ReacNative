import { PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const FONT_FAMILY = {
  black: 900,
  bold: 700,
  extraBold: 600,
  light: 300,
  extraLight: 100,
  medium: 500,
  regular: 400,
  semiBold: 600,
  thin: 100,
};

export default {
  colors: {
    background: '#FFFFFF',
    gray1: '#828282',

    primary: '#0047ab',
    secundary: '#4682b4',

    CBiografia: '#F2994A',
    CTecnologia: '#219653',
    CFiccao: '#9B51E0',
    CTPolitica: '#4F4F4F',
    CAutoAjuda: '#56CCF2',
    Border: '#BDBDBD',
  },
  
  typography: {
    fontSize: {
      xxl: RFValue(PixelRatio.getFontScale() * 36),
      xl: RFValue(PixelRatio.getFontScale() * 28),
      lg: RFValue(PixelRatio.getFontScale() * 24),
      xxm: RFValue(PixelRatio.getFontScale() * 18),
      xm: RFValue(PixelRatio.getFontScale() * 16),
      md: RFValue(PixelRatio.getFontScale() * 14),
      sm: RFValue(PixelRatio.getFontScale() * 12),
      xs: RFValue(PixelRatio.getFontScale() * 10),
      xxs: RFValue(PixelRatio.getFontScale() * 8),
    },
    lineHeight: {
      xxl: RFValue(PixelRatio.getFontScale() * 46),
      xl: RFValue(PixelRatio.getFontScale() * 38),
      lg: RFValue(PixelRatio.getFontScale() * 34),
      xxm: RFValue(PixelRatio.getFontScale() * 28),
      xm: RFValue(PixelRatio.getFontScale() * 26),
      md: RFValue(PixelRatio.getFontScale() * 24),
      sm: RFValue(PixelRatio.getFontScale() * 22),
      xs: RFValue(PixelRatio.getFontScale() * 20),
      xxs: RFValue(PixelRatio.getFontScale() * 18),
    },
    fontFamily: {
      black: FONT_FAMILY.black,
      bold: FONT_FAMILY.bold,
      extraBold: FONT_FAMILY.extraBold,
      light: FONT_FAMILY.light,
      extraLight: FONT_FAMILY.extraLight,
      medium: FONT_FAMILY.medium,
      regular: FONT_FAMILY.regular,
      semiBold: FONT_FAMILY.semiBold,
      thin: FONT_FAMILY.thin,
    },
    spacing: {
      xxl: RFValue(36),
      xl: RFValue(32),
      lg: RFValue(24),
      xxm: RFValue(18),
      xm: RFValue(16),
      md: RFValue(8),
      sm: RFValue(4),
      xs: RFValue(2),
      xxs: RFValue(1),
    },
  },
};
