import { Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 10,
        padding: 0,
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
      '.leaflet-container': {
        width: '100%',
        height: '100vh',
      },
    }}
  />
);

export default GlobalStyles;
