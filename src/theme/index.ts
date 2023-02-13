/**
 * Theme file for the application with all the colors, fonts, etc.
 *
 * Ideally would be broken down into smaller files for each section
 * as a full size application requires a lot of themeing.
 * Also would incorporate a theme provider to allow for
 * dynamic themeing i.e. dark / light mode.
 *
 * https://emotion.sh/docs/theming
 */

const Theme = {
  colors: {
    green: '#67DB7C',
    blueLight: '#437CF8',
    blueDark: '#090CBD',
    white: '#FFFFFF',
    primaryColor: '#1B1D3D',
    secondaryColor: '#323456',
    valueColor: '#707070',
    softColor: '#7C7C7C',
    highlightColor: '#45EEE9',
  },
  fonts: {
    family: 'Poppins',
    weight: {
      regular: 200,
      bold: 400,
      extraBold: 700,
    },
    size: {
      small: '12px',
      medium: '14px',
      large: '16px',
      xLarge: '18px',
      xxLarge: '20px',
    },
  },
  boxShadow: {
    primary: '0px 4px 4px rgba(0, 0, 0, 0.25);',
  },
  border: {
    radius: {
      medium: '8px',
      large: '20px',
    },
  },
}

export default Theme
