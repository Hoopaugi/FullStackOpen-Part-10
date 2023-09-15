import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    secondary: '#24292e',
    background: '#e1e4e8'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === 'android' ? 'sans-serif' : Platform.OS === 'ios' ? 'Arial' : 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
