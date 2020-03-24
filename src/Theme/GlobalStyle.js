const boxShadowColor = '#3ACEB2';
const mainColor = '#3ACEB2';
const mainTextColor = 'white';
const mainHoverColor= '#107461';

const BORDER_RADIUS_VALUE = 10;
const MAIN_SPACING_VALUE = 14;

const GLOBAL_STYLES = {
  borders: {
    borderRadius: {
      base: `${BORDER_RADIUS_VALUE}px`
    }
  },
  boxShadow: {
    base: `0px 0px 5px 1px ${boxShadowColor}`
  },
  color: {
    mainColor,
    boxShadowColor
  },
  hoverColor: mainHoverColor,
  spacing: {
    small: `${MAIN_SPACING_VALUE * 0.5}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`
  },
  textColor: mainTextColor,
  typography: {
    size: {},
    fontFamily: {
      base: 'sans-serif'
    }
  }
};

export { GLOBAL_STYLES as default };

