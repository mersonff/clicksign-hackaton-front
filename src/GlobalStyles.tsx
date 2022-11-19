import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 2,
      },
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      a: {
        textDecoration: 'none',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    }}
  />
);

export default GlobalStyles;
